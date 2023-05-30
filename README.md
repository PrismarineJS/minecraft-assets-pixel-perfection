# minecraft-assets-pixel-perfection
[![Build Status](https://img.shields.io/github/actions/workflow/status/PrismarineJS/minecraft-assets-pixel-perfection/ci.yml.svg?label=CI&logo=github&logoColor=lightgrey)](https://github.com/PrismarineJS/minecraft-assets-pixel-perfection/actions?query=workflow%3A%22CI%22)
[![Try it on gitpod](https://img.shields.io/static/v1.svg?label=try&message=on%20gitpod&color=brightgreen&logo=gitpod)](https://gitpod.io/#https://github.com/PrismarineJS/minecraft-assets-pixel-perfection)
[![GitHub Sponsors](https://img.shields.io/github/sponsors/PrismarineJS)](https://github.com/sponsors/PrismarineJS)
[![Official Discord](https://img.shields.io/static/v1.svg?label=PrismarineJS&message=Discord&color=blue&logo=discord)](https://discord.gg/GsEFRM8)

Provide minecraft 1.8, 1.9.2, 1.11, 1.17 and 1.19.3 assets along with JSON index files

Minecraft assets for the [Pixel Perfection texture pack](https://www.planetminecraft.com/texture-pack/pixel-perfection-chorus-edit/).

## Wrappers

minecraft-assets-pixel-perfection is language independent, you can use it with these language specific modules :

| Wrapper name | Language |
| --- | --- |
| [node-minecraft-assets](https://github.com/rom1504/node-minecraft-assets) | Node.js |

## Updating
After cloning the repo and running `npm install`, you can use the `pack-update` bin script to update the pack to the latest version.

Get the latest downloads:
```c
$ npx pack-update --latest
┌─────────┬─────────┬────────────────────────────┬────────────────────────────────────────┬─────────────────────────────────────────────────┬───────┐
│ (index) │   id    │        dateCreated         │                fileName                │                  gameVersions                   │ kilos │
├─────────┼─────────┼────────────────────────────┼────────────────────────────────────────┼─────────────────────────────────────────────────┼───────┤
│    0    │ 4401203 │ '2023-02-18T13:12:54.63Z'  │ 'Pixel Perfection Legacy 11.20.3.zip'  │             '1.19-Snapshot, 1.19.3'             │ 22118 │
│    1    │ 4351522 │ '2023-01-18T09:09:19.547Z' │ 'Pixel Perfection Legacy 11.20.2.zip'  │                    '1.19.3'                     │ 23391 │
│    2    │ 4143314 │ '2022-12-07T17:39:46.847Z' │ 'Pixel Perfection Legacy 11.20.1.zip'  │                    '1.19.3'                     │ 22971 │
│    3    │ 4044135 │ '2022-10-23T14:07:32.98Z'  │ 'Pixel Perfection Legacy 11.20.0.zip'  │    '1.15.2, 1.16.5, 1.17.1, 1.18.2, 1.19.3'     │ 21735 │
│    4    │ 3929570 │ '2022-08-11T13:39:49.397Z' │ 'Pixel Perfection Legacy 9.19.6.2.zip' │    '1.15.2, 1.16.5, 1.17.1, 1.18.2, 1.19.2'     │ 21587 │
│    5    │ 3870710 │ '2022-07-11T18:43:12.857Z' │ 'Pixel Perfection Legacy 9.19.6.1.zip' │    '1.15.2, 1.16.5, 1.17.1, 1.18.2, 1.19.1'     │ 21577 │
│    6    │ 3855441 │ '2022-07-01T16:16:03.51Z'  │  'Pixel Perfection Legacy 9.19.6.zip'  │    '1.15.2, 1.16.5, 1.17.1, 1.18.2, 1.19.1'     │ 21476 │
│    7    │ 3773792 │ '2022-04-30T14:05:17.953Z' │  'Pixel Perfection Legacy 9.19.4.zip'  │        '1.15.2, 1.16.5, 1.17.1, 1.18.2'         │ 27597 │
│    8    │ 3710904 │ '2022-03-24T19:10:13.433Z' │  'Pixel Perfection Legacy 9.19.3.zip'  │        '1.15.2, 1.16.5, 1.17.1, 1.18.2'         │ 30307 │
│    9    │ 3692619 │ '2022-03-13T23:12:04.667Z' │  'Pixel Perfection Legacy 8.19.2.zip'  │        '1.15.2, 1.16.5, 1.17.1, 1.18.2'         │ 30006 │
│   10    │ 3657660 │ '2022-02-22T19:23:54.047Z' │  'Pixel Perfection Legacy 8.19.1.zip'  │ '1.15.2, 1.16.5, 1.17.1, 1.18-Snapshot, 1.18.1' │ 30001 │
│   11    │ 3547863 │ '2021-12-03T18:56:51.713Z' │  'Pixel Perfection Legacy 8.18.2.zip'  │         '1.15.2, 1.16.5, 1.17.1, 1.18'          │ 30480 │
│   12    │ 3541791 │ '2021-11-30T16:15:23.373Z' │  'Pixel Perfection Legacy 8.18.1.zip'  │     '1.15.2, 1.16.5, 1.17.1, 1.18-Snapshot'     │ 33192 │
│   13    │ 3493328 │ '2021-10-16T21:21:17.31Z'  │   'Pixel Perfection Legacy 8.18.zip'   │            '1.15.2, 1.16.5, 1.17.1'             │ 32809 │
│   14    │ 3453453 │ '2021-09-07T21:13:41.38Z'  │  'Pixel Perfection Legacy 7.18.5.zip'  │            '1.15.2, 1.16.5, 1.17.1'             │ 27225 │
│   15    │ 3409955 │ '2021-08-02T18:44:06.73Z'  │  'Pixel Perfection Legacy 7.18.3.zip'  │            '1.15.2, 1.16.5, 1.17.1'             │ 26728 │
│   16    │ 3367607 │ '2021-06-28T14:07:50.08Z'  │ 'Pixel Perfection Legacy v7.18.3.zip'  │  '1.14.4, 1.15.2, 1.17, 1.16.5, 1.17-Snapshot'  │ 26684 │
└─────────┴─────────┴────────────────────────────┴────────────────────────────────────────┴─────────────────────────────────────────────────┴───────┘
```
Save the id of the version you want to download to specified folder:
```bat
$ npx pack-update --id 3367607 -o ./data/1.17
Downloading https://www.curseforge.com/api/v1/mods/498697/files/3367607/download to 3367607.zip ...
Extracting 3367607.zip to ./data/1.17 ...
Done!
```
Then update the indicies files with:
```fortran
$ npm run build
(... snip ...)
* Please add "overrides" key for 1.19.3 in data/index.json -- You must do this manually!
* Set this to the minecraft-assets version this texture pack overrides, it will be one of the keys in the node-minecraft-assets/index.js data.pc object.
```

If adding a new version you get a warning like above, follow the instructions to add an "overrides" key to the index.json file. This is used to tell the pack what version of minecraft it is for, and what base version minecraft-assets it overrides.

## Credits

Permission is given here: [The Original Resourcepack Webside](https://www.minecraftforum.net/forums/mapping-and-modding-java-edition/resource-packs/1242533-pixel-perfection-now-with-polar-bears-1-11) under "use of these textures":

> Feel free to use these textures in any mixpack, project, game or whatever you want (paid or unpaid). However, I'd appreciate it if I was credited for all the hard work I've put into these textures.

Pixel Perfection by XSSheep is licensed under a Creative Commons Attribution-Share Alike 4.0 International License.

### Authors

**XSSheep**
For the wonderfull pack itself and all his work put in it. For may he return and bring us wonderfull textures in his vision.

**Stingraych**
For Textures and Coding fixes

**freejusticehere**
For Textures and Coding fixes

**StonePendant**
For Textures and Coding fixes

**Hexablu**
For Helping me out with textures for the pack.

**FreshLX**
For the Facial animations and helping me with the CEM animations

**Nova_Wostra**
For a lot of Textures, Texture eddits and Coding fixes
