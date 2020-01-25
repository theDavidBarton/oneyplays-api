# oneyplays-api

An api to provide info about [OneyPlays](https://www.youtube.com/channel/UCO1ITICo8MLHGAXR1uzFwjA) videos (OneyNG's gaming YouTube channel).

# Usage

## Node api

```javascript
const oneyPlays = require('oneyPlays')
const searchLittleHarry = oneyPlays('harry potter')
```

=>

```
[
  {
    id: 28,
    title: 'Harry Potter And The Chamber Of Secrets',
    url: 'https://www.youtube.com/watch?v=mae2i1atCWk',
    yt_id: 'mae2i1atCWk'
  }
]
```

## HTTP api

`GET` **/api/1/videos/{id}** - returns a specific video game title with the id

`GET` **/api/1/videos/?q={query}** - returns search result for the query string. E.g.: /api/1/videos/?q=crash

```json
[
  {
    "id": 6,
    "title": "Crash N. Sane Trilogy",
    "url": "https://www.youtube.com/watch?v=ZZs7SaQOiVc",
    "yt_id": "ZZs7SaQOiVc"
  },
  {
    "id": 13,
    "title": "Crash Bandicoot 2: Cortex Strikes Back",
    "url": "https://www.youtube.com/watch?v=mEYGSRC04rQ",
    "yt_id": "mEYGSRC04rQ"
  },
  {
    "id": 22,
    "title": "Crash Bandicoot 3: Warped ",
    "url": "https://www.youtube.com/watch?v=KBm_U564pI8",
    "yt_id": "KBm_U564pI8"
  },
  {
    "id": 34,
    "title": "Crash Bandicoot: Wrath of Cortex",
    "url": "https://www.youtube.com/watch?v=_nRfJptXgWg",
    "yt_id": "_nRfJptXgWg"
  },
  {
    "id": 36,
    "title": "Crash Bandicoot",
    "url": "https://www.youtube.com/watch?v=B0rnOeXpaWM",
    "yt_id": "B0rnOeXpaWM"
  },
  {
    "id": 46,
    "title": "Crash Twinsanity ",
    "url": "https://www.youtube.com/watch?v=KnUxkIfRQQ8",
    "yt_id": "KnUxkIfRQQ8"
  },
  {
    "id": 51,
    "title": "Crash Team Racing (CTR) Nitro-Fueled",
    "url": "https://www.youtube.com/watch?v=UdrqiRM8-lI",
    "yt_id": "UdrqiRM8-lI"
  }
]
```

## Content

[Oney Plays COMPLETE SERIES](https://www.youtube.com/playlist?list=PLIGWVDu9gdfRVjjtZQf9AC9ygRVkQhTji)

_Retrieved on 01/25/2020_

# License

MIT License

Copyright (c) 2020 David Barton
