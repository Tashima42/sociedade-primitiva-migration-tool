const fs = require('fs')

const episodesInfo = JSON.parse(fs.readFileSync('./content/infos/colectorCode.json'))

const creator = (infos) => {
  let interMediaryObject = {}
  let episodesInfoWithCode = []

  for (let i = 0; i < infos.length; i++) {
    let episodeImage = `<img src='${infos[i].cover}' /><br />`
    let episodeDescription = infos[i].description
    let episodeDate = `<br /> Publicado originalmente em: ${infos[i].date} <br />`
    let episodeLink = `<br /><a href='/${infos[i].fileName}'>${infos[i].fileName}</a>`

    let episodeHTML = `${episodeImage} ${episodeDescription} ${episodeDate} ${episodeLink}`

    interMediaryObject = {
      title: infos[i].title,
      date: infos[i].date,
      cover: infos[i].cover,
      fileName: infos[i].fileName,
      description: infos[i].description,
      code: episodeHTML

    }
    episodesInfoWithCode.push(interMediaryObject)
  }

  const arrayToJson = JSON.stringify(episodesInfoWithCode);

  fs.writeFile(`./content/infos/colectorCode2.json`, arrayToJson, 'utf8', function (err) {
    if (err) {
      console.log("error");
      return console.error(err);
    }
    console.log("saved");
  })

}
creator(episodesInfo)