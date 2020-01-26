[![npm package](https://img.shields.io/npm/v/oneyplays-api.svg)](https://www.npmjs.com/package/oneyplays-api)

# oneyplays-api

An api to provide info about [OneyPlays](https://www.youtube.com/channel/UCO1ITICo8MLHGAXR1uzFwjA) videos (OneyNG's gaming YouTube channel).

# Usage

## Node api

```bash
yarn add oneyplays-api
```

```javascript
const oneyPlays = require('oneyplays-api')
const searchLittleHarry = oneyPlays('harry potter')
```

=>

```
[
  {
    id: 28,
    title: 'Harry Potter And The Chamber Of Secrets',
    release_year: '2002',
    url: 'https://www.youtube.com/watch?v=mae2i1atCWk',
    yt_id: 'mae2i1atCWk',
    rawg_id: 31476
  }
]
```

## HTTP api

Served by Express.Js. [see server.js](./server.js)

`GET` **/api/1/videos/{id}** - returns a specific video game title with the id

`GET` **/api/1/videos/?q={query}** - returns search result for the query string. E.g.: /api/1/videos/?q=crash

```json
[
  {
    "id": 6,
    "title": "Crash N. Sane Trilogy",
    "release_year": "2017",
    "url": "https://www.youtube.com/watch?v=ZZs7SaQOiVc",
    "yt_id": "ZZs7SaQOiVc",
    "yt_thumbnail": "https://i.ytimg.com/vi/ZZs7SaQOiVc/mqdefault.jpg",
    "rawg_id": 34
  },
  {
    "id": 13,
    "title": "Crash Bandicoot 2: Cortex Strikes Back",
    "release_year": "1997",
    "url": "https://www.youtube.com/watch?v=mEYGSRC04rQ",
    "yt_id": "mEYGSRC04rQ",
    "yt_thumbnail": "https://i.ytimg.com/vi/mEYGSRC04rQ/mqdefault.jpg",
    "rawg_id": 52827
  },
  {
    "id": 22,
    "title": "Crash Bandicoot 3: Warped ",
    "release_year": "1998",
    "url": "https://www.youtube.com/watch?v=KBm_U564pI8",
    "yt_id": "KBm_U564pI8",
    "yt_thumbnail": "https://i.ytimg.com/vi/KBm_U564pI8/mqdefault.jpg",
    "rawg_id": 5426
  },
  {
    "id": 34,
    "title": "Crash Bandicoot: Wrath of Cortex",
    "release_year": "2001",
    "url": "https://www.youtube.com/watch?v=_nRfJptXgWg",
    "yt_id": "_nRfJptXgWg",
    "yt_thumbnail": "https://i.ytimg.com/vi/_nRfJptXgWg/mqdefault.jpg",
    "rawg_id": 49868
  },
  {
    "id": 36,
    "title": "Crash Bandicoot",
    "release_year": "1996",
    "url": "https://www.youtube.com/watch?v=B0rnOeXpaWM",
    "yt_id": "B0rnOeXpaWM",
    "yt_thumbnail": "https://i.ytimg.com/vi/B0rnOeXpaWM/mqdefault.jpg",
    "rawg_id": 5488
  },
  {
    "id": 46,
    "title": "Crash Twinsanity ",
    "release_year": "2004",
    "url": "https://www.youtube.com/watch?v=KnUxkIfRQQ8",
    "yt_id": "KnUxkIfRQQ8",
    "yt_thumbnail": "https://i.ytimg.com/vi/KnUxkIfRQQ8/mqdefault.jpg",
    "rawg_id": 59192
  },
  {
    "id": 51,
    "title": "Crash Team Racing (CTR) Nitro-Fueled",
    "release_year": "2019",
    "url": "https://www.youtube.com/watch?v=UdrqiRM8-lI",
    "yt_id": "UdrqiRM8-lI",
    "yt_thumbnail": "https://i.ytimg.com/vi/UdrqiRM8-lI/mqdefault.jpg",
    "rawg_id": 274571
  }
]
```

## Content

[Oney Plays COMPLETE SERIES](https://www.youtube.com/playlist?list=PLIGWVDu9gdfRVjjtZQf9AC9ygRVkQhTji)

Connected to [RAWG.io](https://rawg.io) database.

_Updated on 01/26/2020_

# License

MIT License

Copyright (c) 2020 David Barton
