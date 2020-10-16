// run it via Google DevTools
const length = $$('ytd-playlist-video-renderer > #content > a > #meta > h3').length
const arr = []
for (let i = 0; i < length; i++) {
  const link = $$('ytd-playlist-video-renderer > #content > a')[i].href
  const [ytId] = link.match(/(?<=v=)(.*)(?=&list)/)
  const title = $$('ytd-playlist-video-renderer > #content > a > #meta > h3')[i].innerText
  console.log(ytId, title)
  let obj = {
    id: i + 1,
    title: title.replace('Oney Plays ', '').replace('(Complete Series)', ''),
    yt_id: ytId,
    yt_thumbnail: `https://i.ytimg.com/vi/${ytId}/mqdefault.jpg`
  }
  arr.push(obj)
}
console.log(JSON.stringify(arr))
