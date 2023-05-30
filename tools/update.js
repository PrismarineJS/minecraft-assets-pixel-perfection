#!/usr/bin/env node
const fs = require('fs')
const { Readable } = require('stream')
const cp = require('child_process')

// console.log(process.argv)
// 53603 -- old project id
// 498697 -- new project id
const packName = 'Pixel Perfection'
let projectId = '498697'

const args = require('basic-args')({
  name: 'Texture Pack Downloader for ' + packName,
  version: '1.0.0',
  description: `CLI tool to download the latest version of ${packName}
Example:
  Get information about the latest version of ${packName}:
    ./update-tool --latest
  Download a specific version of the pack:
    ./update-tool --id 2270313 --downloadToPath 1.19.4`,
  errorOnUnknown: true,
  options: {
    projectId: { type: Number, description: 'ID of the project on CurseForge', default: projectId, alias: 'j' },
    latest: { type: Boolean, description: 'Lists latest downloads avaliable for the project' },
    id: { type: Number, description: 'ID of file to download', default: null },
    downloadToPath: { type: String, description: 'Path to save the download to', default: null, alias: 'o' }
  },
  validate(args) {
    if (!args.latest && !args.id) {
      return 'You must specify either --latest or --id'
    } else if (args.id && !args.downloadToPath) {
      return 'You must specify --downloadToPath when using --id'
    }
    return true
  }
})
projectId = args.projectId

// const links = `
// 1.8-f1 https://www.curseforge.com/minecraft/texture-packs/pixel-perfection-freshly-updated/download/2270313
// 1.9.2-f2 https://www.curseforge.com/minecraft/texture-packs/pixel-perfection-freshly-updated/download/2298219
// 1.11-f3 https://www.curseforge.com/minecraft/texture-packs/pixel-perfection-freshly-updated/download/2353175
// 1.14-f4 ??
// 1.15-f5 ??
// 1.17-f7 https://www.curseforge.com/minecraft/texture-packs/pixel-perfection-legacy/download/3367607
// 1.19 https://www.curseforge.com/minecraft/texture-packs/pixel-perfection-legacy/download/4401203
// `.split('\n').filter(l => l.trim()).map(l => l.split(' '))


const getDownloadURL = (downloadId) => `https://www.curseforge.com/api/v1/mods/${projectId}/files/${downloadId}/download`
const checkEndpoint = `https://www.curseforge.com/api/v1/mods/${projectId}/files?pageIndex=0&pageSize=50&sort=dateCreated&sortDescending=true&removeAlphas=true`
const unzip = (file) => process.platform === 'win32'
  ? cp.execSync(`tar -xf ${file}`)
  : cp.execSync(`unzip ${file}`)

async function fetchLatest() {
  const files = await fetch(checkEndpoint).then(r => r.json())
  // const latest = files.data[0]
  // const filesById = Object.fromEntries(files.data.map(f => [f.id, f]))
  const all = []
  for (const { id, dateCreated, fileName, gameVersions, fileLength } of files.data) {
    all.push({ id, dateCreated, fileName, gameVersions: gameVersions.join(', '), kilos: Math.round(fileLength / 1024) })
  }
  console.table(all)
}

async function downloadVersion(id, intoDir) {
  intoDir ??= `./${id}`
  const oldDir = process.cwd()
  process.chdir(__dirname) // Temp go into script dir to store the .zip file
  const fileName = `${id}.zip`
  const absoluteFilePath = `${__dirname}/${fileName}`
  async function extract() {
    console.log('Extracting', fileName, 'to', intoDir, '...')
    // Go back to original dir
    process.chdir(oldDir)
    if (fs.existsSync(intoDir)) {
      console.warn(`Directory at '${intoDir}' already exists, do you want to overwrite it? (y/n)`)
      const answer = await new Promise(r => process.stdin.once('data', r))
      if (answer.toString().trim().toLowerCase() !== 'y') {
        console.log('Aborted!')
        process.exit(0)
      } else {
        console.log('Deleting', intoDir, '...')
        fs.rmSync(intoDir, { recursive: true })
      }
      process.stdin.destroy() // Close stdin so the process can exit
    }
    fs.mkdirSync(intoDir, { recursive: true })
    // Go into the dir we want to extract to
    process.chdir(intoDir)
    // Extract the .zip file here
    unzip(absoluteFilePath)
    console.log('Done!')
  }
  if (fs.existsSync(fileName)) {
    extract()
  } else {
    const url = getDownloadURL(id)
    console.log('Downloading', url, 'to', fileName, '...')
    // Fetch and save .zip file with a fs stream
    const res = await fetch(url)
    Readable.fromWeb(res.body).pipe(fs.createWriteStream(`./${id}.zip`)).on('finish', extract)
  }
}

if (args.latest) {
  fetchLatest()
} else if (args.id) {
  downloadVersion(args.id, args.downloadToPath)
}

// // downloadVersion(2270313, '1.19.3')
// downloadLatest()
