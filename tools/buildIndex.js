const fs = require('fs')
const { join } = require('path')
const dataDir = join(__dirname, '../data')
const dirs = fs.readdirSync(dataDir).sort((a, b) => {
  const A = a.replace('1.', '')
  const B = b.replace('1.', '')
  return parseFloat(A) - parseFloat(B)
}).filter(dir => dir.startsWith('1.'))
console.log('Versions', dirs)
function buildIndexForVersion (version) {
  console.log('Building index for', version)
  const blocks = {}
  const items = {}
  const blockStates = {}

  const dir = join(dataDir, '/', version)
  const blockStateDir = join(dir, '/assets/minecraft/blockstates')
  for (const blockStateFile of fs.readdirSync(blockStateDir)) {
    const name = blockStateFile.split('.')[0]
    blockStates[name] = 'blockstates/' + blockStateFile
  }
  const oldBlockDir = join(dir, '/assets/minecraft/textures/blocks')
  const newBlockDir = join(dir, '/assets/minecraft/textures/block')
  const oldItemDir = join(dir, '/assets/minecraft/textures/items')
  const newItemDir = join(dir, '/assets/minecraft/textures/item')
  if (fs.existsSync(oldBlockDir)) {
    for (const blockFile of fs.readdirSync(oldBlockDir)) {
      const name = blockFile.split('.')[0]
      // Store the relative path to the file
      blocks[name] = 'textures/blocks/' + blockFile
    }
  } else if (fs.existsSync(newBlockDir)) {
    for (const blockFile of fs.readdirSync(newBlockDir)) {
      const name = blockFile.split('.')[0]
      blocks[name] = 'textures/block/' + blockFile
    }
  }
  if (fs.existsSync(oldItemDir)) {
    for (const itemFile of fs.readdirSync(oldItemDir)) {
      const name = itemFile.split('.')[0]
      items[name] = 'textures/items/' + itemFile
    }
  } else if (fs.existsSync(newItemDir)) {
    for (const itemFile of fs.readdirSync(newItemDir)) {
      const name = itemFile.split('.')[0]
      items[name] = 'textures/item/' + itemFile
    }
  }
  fs.writeFileSync(join(dir, 'overrides.json'), JSON.stringify({
    blocks,
    items,
    blockStates
  }, null, 2))
}

const index = require(join(dataDir, 'index.json'))
for (const dir of dirs) {
  buildIndexForVersion(dir)
  index[dir] ??= {}
  Object.assign(index[dir], {
    index: dir + '/overrides.json',
    root: dir + '/assets/minecraft'
  })
  if (!index[dir].overrides) {
    console.warn('* Please add "overrides" key for', dir, 'in data/index.json -- You must do this manually!')
    console.warn('* Set this to the minecraft-assets version this texture pack overrides, it will be one of the keys in the node-minecraft-assets/index.js data.pc object.')
  }
}
fs.writeFileSync(join(dataDir, 'index.json'), JSON.stringify(index, null, 2))
