/*
MIT License
Copyright (c) 2019 David Barton (theDavidBarton)
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// pairs the scraped YouTube video data with gaming info (RAWG ID and release year)

/* input format example ('./videos_raw.json'):
id, title, yt_id, yt_thumbnail
*/

'use strict'

const request = require('request')
const fs = require('fs')
const videos = require('./videos_raw.json')
const userAgent = { 'User-Agent': 'video-games-on-RAWG-react-app (GitHub)' }
const optionsGetRAWG = {
  method: 'GET',
  headers: userAgent,
  url: 'https://api.rawg.io/api/games',
  qs: {
    search: undefined
  }
}
let newVideos = []
let parsedResult
const apiCall = async options => {
  // (I.) promise to return the parsedResult for processing
  function rawgRequest() {
    return new Promise(function (resolve, reject) {
      request(options, function (error, response, body) {
        try {
          body ? resolve(JSON.parse(body)) : resolve({ results: [] })
        } catch (e) {
          reject(e)
        }
      })
    })
  }
  // (II.)
  try {
    parsedResult = await rawgRequest()
  } catch (e) {
    console.error(e)
  }
  return parsedResult
}

const pairWithRAWG = async () => {
  try {
    for (const [i, el] of videos.entries()) {
      try {
        optionsGetRAWG.qs.search = el.title
        newVideos[el.id] = {
          id: undefined,
          title: undefined,
          release_year: undefined,
          url: undefined,
          yt_id: undefined,
          yt_thumbnail: undefined,
          rawg_id: undefined
        }
        const searchResults = await apiCall(optionsGetRAWG)
        const resultsParsed = await searchResults.results[0]

        if ((await searchResults.results.length) > 0) {
          const rawgName = resultsParsed.name ? resultsParsed.name : null
          const rawgId = resultsParsed.id ? resultsParsed.id : null
          const rawgYear = resultsParsed.released ? resultsParsed.released.match(/[0-9]{4}/)[0] : null

          console.log(i, el.id, el.title, rawgName, rawgYear, rawgId)
          el.title.substring(0, 3).toLowerCase() === rawgName.substring(0, 3).toLowerCase()
            ? ((newVideos[el.id].id = el.id),
              (newVideos[el.id].title = el.title),
              (newVideos[el.id].release_year = rawgYear),
              (newVideos[el.id].url = `https://www.youtube.com/watch?v=${el.yt_id}`),
              (newVideos[el.id].yt_id = el.yt_id),
              (newVideos[el.id].yt_thumbnail = `https://i.ytimg.com/vi/${el.yt_id}/mqdefault.jpg`),
              (newVideos[el.id].rawg_id = rawgId))
            : (console.log('not a match!'),
              (newVideos[el.id].id = el.id),
              (newVideos[el.id].title = el.title),
              (newVideos[el.id].release_year = null),
              (newVideos[el.id].url = `https://www.youtube.com/watch?v=${el.yt_id}`),
              (newVideos[el.id].yt_id = el.yt_id),
              (newVideos[el.id].yt_thumbnail = `https://i.ytimg.com/vi/${el.yt_id}/mqdefault.jpg`),
              (newVideos[el.id].rawg_id = null))
        } else {
          console.log('something went terribly wrong with: ' + el.title)
          newVideos[el.id].id = el.id
          newVideos[el.id].title = el.title
          newVideos[el.id].release_year = null
          newVideos[el.id].url = `https://www.youtube.com/watch?v=${el.yt_id}`
          newVideos[el.id].yt_id = el.yt_id
          newVideos[el.id].yt_thumbnail = `https://i.ytimg.com/vi/${el.yt_id}/mqdefault.jpg`
          newVideos[el.id].rawg_id = null
        }
        optionsGetRAWG.qs.search = undefined
      } catch (e) {
        console.error(e)
      }
      fs.writeFileSync('videos_TEMP.json', JSON.stringify(newVideos))
    }

    return newVideos
  } catch (e) {
    console.error(e)
  }
}

const writeToFile = async () => {
  const newVideos = await pairWithRAWG()
  const finalObjJSON = JSON.stringify(newVideos)
  fs.writeFileSync('videos.json', finalObjJSON)
}
writeToFile()
