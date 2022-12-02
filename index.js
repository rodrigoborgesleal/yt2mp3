const fs = require('fs')
const { downloadSong } = require('ytdl-mp3')
const ytdl = require('ytdl-core')
const readlineSync = require('readline-sync')


let urlVids = []


if (readlineSync.keyInYN('Deseja adicionar links youtube para download? ')) {
    let qtdLinks = Number(readlineSync.question('Quantos links deseja adicionar? '))

    for (let l=1; l<=qtdLinks; l++) {
        let link = readlineSync.question(`Insira a url do video ${l}? `)
        urlVids.push(link.trim())
        console.clear()
    }
    console.log('')
    console.log('Iniciando conversão...')
    getMP3(urlVids)

  } else {
    // Another key was pressed.
    console.log('Searching another...');
    // Do something...
  }


async function getMP3(urls) {
    if(!fs.existsSync('./audios')) fs.mkdirSync('./audios')
    await urls.forEach(async vid => {
        await downloadSong(vid, {
            getTags: false,
            outputDir: './audios'
        })
    })
}






