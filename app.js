(function () {
  const LOGO_URL = "https://videos.wowlife.lk/wow-logo.avif";
  const SOURCE_FOLDER_ID = "14224080";
  const DEFAULT_EMBEDDED_VIDEOS = [
      {
          "id": "vimeo_1006496941",
          "vimeoVideoId": "1006496941",
          "embedUrl": "https://player.vimeo.com/video/1006496941?badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "WOWLife DEEP DIVES",
          "description": "For access to the comprehensive teachings from WOWLife that are not available on YouTube or Facebook, visit the DEEP Dives space on Mighty Networks and subscribe for exclusive content.",
          "publishedAt": "2024-09-05T07:24:42+00:00",
          "duration": 151,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1923215888-fa332524bf942942c86be2aad2e00f84130fda99e85cf81417d7784a0a71a395-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_846009856",
          "vimeoVideoId": "846009856",
          "embedUrl": "https://player.vimeo.com/video/846009856?badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "THE FIELD (Long Version)",
          "description": "",
          "publishedAt": "2023-07-17T18:03:04+00:00",
          "duration": 320,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1698781793-1313c7dc9162588e00b97a7a7d524a9277983cebb6040ffe52e18f8f5062c47e-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_845992511",
          "vimeoVideoId": "845992511",
          "embedUrl": "https://player.vimeo.com/video/845992511?badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "A Conversation with a Neurotheologist",
          "description": "",
          "publishedAt": "2023-07-17T17:06:56+00:00",
          "duration": 311,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1698759228-babfc554355ad1b8411d5722fd2ba60e6c69a9d45338a6a16f8df24764b947d0-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_844990407",
          "vimeoVideoId": "844990407",
          "embedUrl": "https://player.vimeo.com/video/844990407?badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Goal-Setting Session #2 Peter & Judy Fleming - 12 July 2023",
          "description": "",
          "publishedAt": "2023-07-13T15:00:32+00:00",
          "duration": 6928,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1697297766-6ce3074ab3386c775cd4d0e1ba92190b22cbdd533657ffaf7ce26bc5876abef5-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_844982599",
          "vimeoVideoId": "844982599",
          "embedUrl": "https://player.vimeo.com/video/844982599?badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Goal-setting - Session #1 Peter & Judy Fleming - 11 July 2023",
          "description": "",
          "publishedAt": "2023-07-13T14:39:04+00:00",
          "duration": 6683,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1697288332-31e020b6c3fcc834d625fdbb2d849a9ca4c8997bf8be527746f37cd5f6fb11e1-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_843157029",
          "vimeoVideoId": "843157029",
          "embedUrl": "https://player.vimeo.com/video/843157029?badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "COVER IMAGE",
          "description": "",
          "publishedAt": "2023-07-07T10:24:54+00:00",
          "duration": 7,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1694623394-e905217fa1e4d46c68c12340289ddc2465fc68e98fff8fc674ede4036a537c13-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_827804791",
          "vimeoVideoId": "827804791",
          "embedUrl": "https://player.vimeo.com/video/827804791?badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Passion Recipes - Flow",
          "description": "",
          "publishedAt": "2023-05-17T22:04:12+00:00",
          "duration": 5670,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1671364199-9357f2d12bc50765e94d155d7370504303e7e2d06f501f21bab9ee8dfa3e7d0a-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_645049198:6480da818c",
          "vimeoVideoId": "645049198:6480da818c",
          "embedUrl": "https://player.vimeo.com/video/645049198?h=6480da818c&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Tohu Wa-Bohu   Pilot Program   Day 01   Kirby de Lanerolle.mp4",
          "description": "",
          "publishedAt": "2021-11-12T02:55:58+00:00",
          "duration": 4509,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1297495977-8379e44048c77afd8811a93c21995f3b22492c3da0548cb0f_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_645068395:8bb497e41b",
          "vimeoVideoId": "645068395:8bb497e41b",
          "embedUrl": "https://player.vimeo.com/video/645068395?h=8bb497e41b&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Tohu Wa-Bohu   Pilot Program   Day 02  Kirby de Lanerolle",
          "description": "",
          "publishedAt": "2021-11-12T04:25:25+00:00",
          "duration": 3133,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1297534537-58e9c8e2cdbae89f495f6de6412fa77218860f0c62fae8177_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_645076072:f544916148",
          "vimeoVideoId": "645076072:f544916148",
          "embedUrl": "https://player.vimeo.com/video/645076072?h=f544916148&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Tohu Wa-Bohu Pilot Program   Session 5   Day 08   Ajai Vir Singh",
          "description": "",
          "publishedAt": "2021-11-12T05:00:47+00:00",
          "duration": 4420,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1297546434-416b79354a7ecd16473c8bc090cbc3b0ab3878ca6621116c6_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_645078081:da0ccf1147",
          "vimeoVideoId": "645078081:da0ccf1147",
          "embedUrl": "https://player.vimeo.com/video/645078081?h=da0ccf1147&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Tohu Wa-Bohu Pilot Program   Session 7   Day 13  Sean Hamlin",
          "description": "",
          "publishedAt": "2021-11-12T05:10:09+00:00",
          "duration": 4043,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1297550406-cd15bd284c54275eaec5669c91bcff6d87b91cfaa22278860_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_645079913:73ff824803",
          "vimeoVideoId": "645079913:73ff824803",
          "embedUrl": "https://player.vimeo.com/video/645079913?h=73ff824803&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Tohu Wa-Bohu Pilot Program   Day 16   Session 8 - Jeff & Jaime",
          "description": "",
          "publishedAt": "2021-11-12T05:19:14+00:00",
          "duration": 2901,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1297553548-c58a09624d44349fd9bee157ce9f911b749ffed4468c2ca07_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_645192465:26ab6933ca",
          "vimeoVideoId": "645192465:26ab6933ca",
          "embedUrl": "https://player.vimeo.com/video/645192465?h=26ab6933ca&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Tohu Wa-Bohu   Pilot Program   Day 03   Kirby de Lanerolle.mp4",
          "description": "",
          "publishedAt": "2021-11-12T12:11:56+00:00",
          "duration": 3815,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1297786532-066ae4da138e253c264fe0e972f0f146aef06e3ac23254c83_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_645206672:77277ab9fe",
          "vimeoVideoId": "645206672:77277ab9fe",
          "embedUrl": "https://player.vimeo.com/video/645206672?h=77277ab9fe&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Tohu Wa-Bohu   Pilot Program   Day 04   Kirby de Lanerolle.mp4",
          "description": "",
          "publishedAt": "2021-11-12T12:54:34+00:00",
          "duration": 3383,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1297813264-cb5e041817fff10f6a075b6ab85faa73b220eb5964eb74e7a_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_645222329:4e3fdb54d3",
          "vimeoVideoId": "645222329:4e3fdb54d3",
          "embedUrl": "https://player.vimeo.com/video/645222329?h=4e3fdb54d3&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Tohu Wa-Bohu Pilot Program   Session 6   Day 10   Kirby de Lanerolle.mp4",
          "description": "",
          "publishedAt": "2021-11-12T13:39:27+00:00",
          "duration": 3380,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1297831974-cb9e37c25a7c4db747ad09921deeda98981e9f0df7fe200bd_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_645231809:94c3f271d8",
          "vimeoVideoId": "645231809:94c3f271d8",
          "embedUrl": "https://player.vimeo.com/video/645231809?h=94c3f271d8&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Tohu Wa-Bohu  Pilot Program  Session 9 - Kirby",
          "description": "",
          "publishedAt": "2021-11-12T14:05:27+00:00",
          "duration": 3042,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1297846394-7673a20e1a66bde41a02c111c187d18ad1874580133794972_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_645241867:e2f40948fa",
          "vimeoVideoId": "645241867:e2f40948fa",
          "embedUrl": "https://player.vimeo.com/video/645241867?h=e2f40948fa&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Tohu Wa-Bohu   Pilot Program   Session 12   Day 23",
          "description": "",
          "publishedAt": "2021-11-12T14:33:59+00:00",
          "duration": 6209,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1297866728-89d380c8a1b0b8b7848688ef3999a7f5acb8d79cd563d72d6_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_645254028:e6a705202b",
          "vimeoVideoId": "645254028:e6a705202b",
          "embedUrl": "https://player.vimeo.com/video/645254028?h=e6a705202b&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Tohu Wa-Bohu   Pilot Program   Session 10   Fancesco Jubiare Astuaro   Day 19",
          "description": "",
          "publishedAt": "2021-11-12T15:04:24+00:00",
          "duration": 4056,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1297883333-2cb43ef824c1722d7d3ebc72f9e9c9eee14c25d47670e0d28_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_645265943:d4b689e578",
          "vimeoVideoId": "645265943:d4b689e578",
          "embedUrl": "https://player.vimeo.com/video/645265943?h=d4b689e578&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Tohu Wa-Bohu   Pilot Program   Session 11   Raj Omprasdham   Day 22",
          "description": "",
          "publishedAt": "2021-11-12T15:35:56+00:00",
          "duration": 6219,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1297910922-329f123e7a97dae404f38a45fd9f80272b999ce4045e525a6_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_645567622:ebd4bfdbec",
          "vimeoVideoId": "645567622:ebd4bfdbec",
          "embedUrl": "https://player.vimeo.com/video/645567622?h=ebd4bfdbec&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Tohu Wa-Bohu Pilot Session 13 - Jacky",
          "description": "",
          "publishedAt": "2021-11-13T16:40:36+00:00",
          "duration": 4725,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1298771348-86ebac7062ddcbcef196c6cbefad6b184d813a12c5189d28b_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_646036235:a97ba1deee",
          "vimeoVideoId": "646036235:a97ba1deee",
          "embedUrl": "https://player.vimeo.com/video/646036235?h=a97ba1deee&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Tohu Wa-Bohu - Ajai Vir Singh - Pilot Program   Session 14   Day 29",
          "description": "",
          "publishedAt": "2021-11-15T13:51:59+00:00",
          "duration": 3883,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1300285117-d2e9f03ed9fb7587fa30dfde1fe5cf07142c9c294950a256d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_646888256:50611cd187",
          "vimeoVideoId": "646888256:50611cd187",
          "embedUrl": "https://player.vimeo.com/video/646888256?h=50611cd187&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "SESSION 15 - Pilot - Kirby",
          "description": "",
          "publishedAt": "2021-11-17T13:46:41+00:00",
          "duration": 4799,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1302396463-4f09215e646a23bbefc98872b2b7953232c86a6a2ae96b5e5_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_648062114:6d1c134e9a",
          "vimeoVideoId": "648062114:6d1c134e9a",
          "embedUrl": "https://player.vimeo.com/video/648062114?h=6d1c134e9a&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "CMS Pilot - Session 16",
          "description": "",
          "publishedAt": "2021-11-20T14:09:19+00:00",
          "duration": 6000,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1305328356-3fb5a2bef867ee37f19c6a149702c086cb71494843ea2fafd_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_648592288:518e4e45d1",
          "vimeoVideoId": "648592288:518e4e45d1",
          "embedUrl": "https://player.vimeo.com/video/648592288?h=518e4e45d1&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "THWB  Pilot Program - Session 17 - J&J",
          "description": "",
          "publishedAt": "2021-11-22T13:49:33+00:00",
          "duration": 5168,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1306983832-afe63d80d2e2879d290513e677d8dd1bef7f50070e5e816c3_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_649337859:05a5b101b3",
          "vimeoVideoId": "649337859:05a5b101b3",
          "embedUrl": "https://player.vimeo.com/video/649337859?h=05a5b101b3&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "THWB - Pilot Program - Kirby Session 18",
          "description": "",
          "publishedAt": "2021-11-24T04:42:31+00:00",
          "duration": 5534,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1308714291-e4976fd539640e0a6af2a4337b83ad6bdcf2cd17c0e566f7e_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_653713934:3bf7244937",
          "vimeoVideoId": "653713934:3bf7244937",
          "embedUrl": "https://player.vimeo.com/video/653713934?h=3bf7244937&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "THWB  Pilot - Session 20 - Raj",
          "description": "",
          "publishedAt": "2021-12-06T14:47:21+00:00",
          "duration": 6375,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1319424869-164098d4e6f8d2c098f25a745fa7edf0abece851764fd42b7d35a11ad46b12ad-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_654383961:1a88518921",
          "vimeoVideoId": "654383961:1a88518921",
          "embedUrl": "https://player.vimeo.com/video/654383961?h=1a88518921&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Pilot - Session 21 - Kirby",
          "description": "",
          "publishedAt": "2021-12-08T04:40:38+00:00",
          "duration": 4011,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1320749604-bbdf95e89c36457908d80f9b33956eb7ba9df2f349ac281bfd20322e5f46ed9a-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_655565234:cbef75fb0c",
          "vimeoVideoId": "655565234:cbef75fb0c",
          "embedUrl": "https://player.vimeo.com/video/655565234?h=cbef75fb0c&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Pilot - Session 22 - Jacky",
          "description": "",
          "publishedAt": "2021-12-11T03:19:57+00:00",
          "duration": 3202,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1323151728-60968a92495ee2e2229cc03781f168f2e0f5c3461e0fbb23489a9e53779602a7-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_655991332:c6a9f676f1",
          "vimeoVideoId": "655991332:c6a9f676f1",
          "embedUrl": "https://player.vimeo.com/video/655991332?h=c6a9f676f1&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Pilot - Session 23 - Ajai",
          "description": "",
          "publishedAt": "2021-12-13T04:20:44+00:00",
          "duration": 5532,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1324345967-92ea9b685114bfffd0f66bd7172d3b38b069490d3ee883b8d36ee3dbdb8ab1c9-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_656852845:6964cfc03f",
          "vimeoVideoId": "656852845:6964cfc03f",
          "embedUrl": "https://player.vimeo.com/video/656852845?h=6964cfc03f&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Session 24 - Kirby",
          "description": "",
          "publishedAt": "2021-12-15T03:28:44+00:00",
          "duration": 4375,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1326052183-c39432624aa4354e6485d009b939d902f54bca94eaf039896298bef4ce6c786c-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_719146231:ec1bb57052",
          "vimeoVideoId": "719146231:ec1bb57052",
          "embedUrl": "https://player.vimeo.com/video/719146231?h=ec1bb57052&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Setting Your Time Zone in Canvas",
          "description": "",
          "publishedAt": "2022-06-10T15:38:26+00:00",
          "duration": 64,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1448699467-fa7e485e19eaf2f905369dbb7d2d52c99de2e13c4010562564e6ee6afa71cc85-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_646040299:c86cc698cc",
          "vimeoVideoId": "646040299:c86cc698cc",
          "embedUrl": "https://player.vimeo.com/video/646040299?h=c86cc698cc&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Mystery School VS Culture   Into the Deep for WOWLife Coaches   October Session",
          "description": "",
          "publishedAt": "2021-11-15T14:03:33+00:00",
          "duration": 6193,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1300294927-6ed22bf22b22028889691df893adf70304f3c39af802f1c06_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_646126954:1a5372119c",
          "vimeoVideoId": "646126954:1a5372119c",
          "embedUrl": "https://player.vimeo.com/video/646126954?h=1a5372119c&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Into the Deep   November 2021   WOWLife Coach Mentorship",
          "description": "",
          "publishedAt": "2021-11-15T18:00:52+00:00",
          "duration": 8937,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1300486304-1201b755ea4a1fa76067a1a56cba8c2ece30858478d0082ac_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_650590201:49b6f56b4a",
          "vimeoVideoId": "650590201:49b6f56b4a",
          "embedUrl": "https://player.vimeo.com/video/650590201?h=49b6f56b4a&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Pilot Session 19 Francesco",
          "description": "",
          "publishedAt": "2021-11-27T13:24:10+00:00",
          "duration": 4919,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1311933426-51fcc6fca065ce3d0f0ad87db47fa0070a2683f9e07fb86ff_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_703261049:4e28ced795",
          "vimeoVideoId": "703261049:4e28ced795",
          "embedUrl": "https://player.vimeo.com/video/703261049?h=4e28ced795&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Into The Deep (5DP Session 1 UpUP Down Down)- April 2022",
          "description": "",
          "publishedAt": "2022-04-26T12:19:58+00:00",
          "duration": 8214,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1420649701-d74c0a1842b848b087cc5371b3a7ddd64c2cab23f02d026947d446d08acc0361-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_715983880:7dd5944ff5",
          "vimeoVideoId": "715983880:7dd5944ff5",
          "embedUrl": "https://player.vimeo.com/video/715983880?h=7dd5944ff5&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Into the Deep - June 1, 2022.mp4",
          "description": "Expectations of a Coach",
          "publishedAt": "2022-06-01T12:33:20+00:00",
          "duration": 7417,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1442883826-29379c7d36bf0bde1ca012815c8032fd09eb29ffaaa0dcf46a78509ac9c39bce-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_653715698:edfe31ef7e",
          "vimeoVideoId": "653715698:edfe31ef7e",
          "embedUrl": "https://player.vimeo.com/video/653715698?h=edfe31ef7e&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "The Integrity of the Vessel (The Wisdom Series)",
          "description": "",
          "publishedAt": "2021-12-06T14:51:55+00:00",
          "duration": 2078,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1319426166-f9dc14268dd057b8a68de0279fb8067165971ca65969a526162edb005061a620-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_657473418:d58947ad7e",
          "vimeoVideoId": "657473418:d58947ad7e",
          "embedUrl": "https://player.vimeo.com/video/657473418?h=d58947ad7e&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Spirit Flow Beginners Session 1",
          "description": "",
          "publishedAt": "2021-12-16T15:39:25+00:00",
          "duration": 3040,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1327321218-2c108cb9082045899e52787fd97ac2ad1e76af8669f6d0d7fcf45c9b413799d6-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_660449140:0b10895d64",
          "vimeoVideoId": "660449140:0b10895d64",
          "embedUrl": "https://player.vimeo.com/video/660449140?h=0b10895d64&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Spirit Flow beginners Session 2",
          "description": "",
          "publishedAt": "2021-12-27T16:19:26+00:00",
          "duration": 3756,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1334846340-ed10c5109931672ac673068a562752b0a817b171396c1ac81c8c52424000b4eb-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_663754763:bd349028ce",
          "vimeoVideoId": "663754763:bd349028ce",
          "embedUrl": "https://player.vimeo.com/video/663754763?h=bd349028ce&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Spirit Flow Beginners Session 3",
          "description": "",
          "publishedAt": "2022-01-08T19:42:49+00:00",
          "duration": 4179,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1343337431-f2ce2c7e35ab341ec1fe630b0a8be5ec6cd0dd9f86dad3a75eea7def1154b646-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_666828770:659f89b97a",
          "vimeoVideoId": "666828770:659f89b97a",
          "embedUrl": "https://player.vimeo.com/video/666828770?h=659f89b97a&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Spirit Flow Beginners Session 4",
          "description": "",
          "publishedAt": "2022-01-17T16:16:57+00:00",
          "duration": 4171,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1350247081-c2477322642bcf6359431ebbb13b0c4bf56ace5c1ad2e52f7c3cba29eeb444e4-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_670757723:a1e0344d30",
          "vimeoVideoId": "670757723:a1e0344d30",
          "embedUrl": "https://player.vimeo.com/video/670757723?h=a1e0344d30&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Spirit flow Beginners Session 5",
          "description": "",
          "publishedAt": "2022-01-27T15:17:20+00:00",
          "duration": 3829,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1358765625-36e80413848b20a57da7e319e508e5593c2698ef70f0a012a2333b9fce1bff4c-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_676279837:ae9979666c",
          "vimeoVideoId": "676279837:ae9979666c",
          "embedUrl": "https://player.vimeo.com/video/676279837?h=ae9979666c&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Spirit Flow - Session 6",
          "description": "",
          "publishedAt": "2022-02-11T13:32:19+00:00",
          "duration": 3669,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1370475749-c7ef09adc41a3782ef4325de62f3ca0f1eb3b55ee903426c994338d649cff69b-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_678793763:e72b94ba22",
          "vimeoVideoId": "678793763:e72b94ba22",
          "embedUrl": "https://player.vimeo.com/video/678793763?h=e72b94ba22&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Spirit Flow - Session 7",
          "description": "",
          "publishedAt": "2022-02-17T16:58:15+00:00",
          "duration": 3361,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1375564862-0ed56c7c6d491d5f6312daf9dc57b1aa2350fa15a9a6688925b64ac29ac89997-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_681865016:3c048d0404",
          "vimeoVideoId": "681865016:3c048d0404",
          "embedUrl": "https://player.vimeo.com/video/681865016?h=3c048d0404&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Spirit Flow - Session 8",
          "description": "",
          "publishedAt": "2022-02-25T13:12:55+00:00",
          "duration": 3588,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1382039948-5ef2bb4475eeaa8e6a8eba035acfe304557ffabbba7978e594d038151fe35836-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_658816808:37d1b8bda6",
          "vimeoVideoId": "658816808:37d1b8bda6",
          "embedUrl": "https://player.vimeo.com/video/658816808?h=37d1b8bda6&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Syllabus Meeting - Lesson 20 & 21 12/19/2021",
          "description": "",
          "publishedAt": "2021-12-21T03:12:08+00:00",
          "duration": 7056,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1330506708-fb26be168ab5c6bbc8e9e445fd6f9a0940b6ef9ce30bc243f02e9534bc7a59aa-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_666622164:9d2170bf8c",
          "vimeoVideoId": "666622164:9d2170bf8c",
          "embedUrl": "https://player.vimeo.com/video/666622164?h=9d2170bf8c&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Syllabus Meeting | 16 January 2022 (Melissa Fisher,  Sam & Chitra Das)",
          "description": "",
          "publishedAt": "2022-01-17T03:54:22+00:00",
          "duration": 6498,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1349798543-bf6b9b30359229ac0d7d506f16a28c1d93e2dc8565a411a351d69fc9fc46485b-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_673755188:77729a015e",
          "vimeoVideoId": "673755188:77729a015e",
          "embedUrl": "https://player.vimeo.com/video/673755188?h=77729a015e&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Coach Party Demo Video",
          "description": "",
          "publishedAt": "2022-02-04T21:15:29+00:00",
          "duration": 3598,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1365333502-a487431729722f8548e4a2aeeceb9ba5dc724b4e36dc07fc672fbab68409457b-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_658831602:9aed770781",
          "vimeoVideoId": "658831602:9aed770781",
          "embedUrl": "https://player.vimeo.com/video/658831602?h=9aed770781&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Cultural Infusion 12-2-2021",
          "description": "",
          "publishedAt": "2021-12-21T04:35:46+00:00",
          "duration": 7286,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1330544335-f5f002a4da3d0519abe9a34f680f0a2a96b8f7ffed87f54f4c7974f46682196b-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_660466380:8b4c9995fc",
          "vimeoVideoId": "660466380:8b4c9995fc",
          "embedUrl": "https://player.vimeo.com/video/660466380?h=8b4c9995fc&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Cultural Infusion Aug 24, 2021",
          "description": "",
          "publishedAt": "2021-12-27T17:46:25+00:00",
          "duration": 5034,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1334890429-b88d79f3f7855479ae6c99dffa51ce9dc15040d0e012d0525d6916aac72e3cb1-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_661041511:02a852882b",
          "vimeoVideoId": "661041511:02a852882b",
          "embedUrl": "https://player.vimeo.com/video/661041511?h=02a852882b&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Cultural Infusion September 2021",
          "description": "",
          "publishedAt": "2021-12-29T22:20:27+00:00",
          "duration": 5515,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1336375127-09ed15ba1604f17cc3ca627a2aa5108fcb74505c6f247d359f96cb505ff4432a-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_661042934:2e39d5bfa4",
          "vimeoVideoId": "661042934:2e39d5bfa4",
          "embedUrl": "https://player.vimeo.com/video/661042934?h=2e39d5bfa4&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Cultural Infusion November 2021",
          "description": "",
          "publishedAt": "2021-12-29T22:28:24+00:00",
          "duration": 7355,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1336380627-5d4e101c42f7d882d7aa11f61e0942fc0d8df8c81fd4035dbe3ded29bfe05333-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_661056101:1a8a48659c",
          "vimeoVideoId": "661056101:1a8a48659c",
          "embedUrl": "https://player.vimeo.com/video/661056101?h=1a8a48659c&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "October 2021 Cultural Infusion",
          "description": "",
          "publishedAt": "2021-12-29T23:50:38+00:00",
          "duration": 7355,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1336415739-0ec1e8a5dd0637d3b6d0a2631c05afef55747384be709124f9ebe82fde5e4877-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_665033317:2d1ba1bfaf",
          "vimeoVideoId": "665033317:2d1ba1bfaf",
          "embedUrl": "https://player.vimeo.com/video/665033317?h=2d1ba1bfaf&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "New WLC Orientation",
          "description": "",
          "publishedAt": "2022-01-12T00:26:26+00:00",
          "duration": 785,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1346013508-f26de113218f30ae2b0c83395b2b0832c3c1f9b177dee7287839e3d4ab5d0296-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_674294869",
          "vimeoVideoId": "674294869",
          "embedUrl": "https://player.vimeo.com/video/674294869?badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Module 1 THWBH Session 1 Kirby",
          "description": "",
          "publishedAt": "2022-02-07T04:40:02+00:00",
          "duration": 4552,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1366797609-3c02dc4ff3be23029c7b6cebfbb448e5718a18f60e22a124f4a3dab80f48f87e-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_674709273",
          "vimeoVideoId": "674709273",
          "embedUrl": "https://player.vimeo.com/video/674709273?badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Module 1 THWBH Session 2 Kirby",
          "description": "",
          "publishedAt": "2022-02-08T05:06:01+00:00",
          "duration": 3861,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1367646331-c4dea6893f4f8ce23b1532957f27db14ce5b293c58db8012124269c523fb7030-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_675306718",
          "vimeoVideoId": "675306718",
          "embedUrl": "https://player.vimeo.com/video/675306718?badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Module 1 THWBH Session 3 Kirby",
          "description": "",
          "publishedAt": "2022-02-09T04:00:40+00:00",
          "duration": 3468,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1368475894-a6b406a0c7a029f8573689d2a7b4dbd41c149018ccf109f3902004969686a4c9-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_675717596",
          "vimeoVideoId": "675717596",
          "embedUrl": "https://player.vimeo.com/video/675717596?badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Reverse Breathing with Jacky Vogt",
          "description": "",
          "publishedAt": "2022-02-10T02:44:40+00:00",
          "duration": 608,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1369295783-74f3d290ff2051b02e643e7f4b32740e1de1287f054cdedccd51273dd2d70637-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_675725444",
          "vimeoVideoId": "675725444",
          "embedUrl": "https://player.vimeo.com/video/675725444?badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Module 1 THWBH Session 4 Raj",
          "description": "",
          "publishedAt": "2022-02-10T03:24:12+00:00",
          "duration": 2544,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1384065004-c804f59db66f2fbfa66e23ea3ed28f6ff5dd35efb5d9389dddb92c1857b7004a-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_676288813",
          "vimeoVideoId": "676288813",
          "embedUrl": "https://player.vimeo.com/video/676288813?badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Module 1 THWBH Session 5 Francesco",
          "description": "",
          "publishedAt": "2022-02-11T13:59:42+00:00",
          "duration": 2088,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1384069380-532427073b5288770902551059d5086f2acb39f9f99bcd3432e09be5415ed334-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_676586616",
          "vimeoVideoId": "676586616",
          "embedUrl": "https://player.vimeo.com/video/676586616?badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Module 1 THWBH Session 6 Sean",
          "description": "",
          "publishedAt": "2022-02-12T14:10:30+00:00",
          "duration": 2023,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1384069669-54733138462bfb9b4bd9823cb37cc0d4f3c4fbf10d71555f4b2a9e0bc27a8737-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_676817485",
          "vimeoVideoId": "676817485",
          "embedUrl": "https://player.vimeo.com/video/676817485?badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Module 1 THWBH Session 7 J&J",
          "description": "",
          "publishedAt": "2022-02-13T15:52:15+00:00",
          "duration": 2283,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1384070192-9198d5aabefa38dba54435a9f0700cf5bd8b57a00904adaa1356ab26d3b07bab-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_676974784",
          "vimeoVideoId": "676974784",
          "embedUrl": "https://player.vimeo.com/video/676974784?badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Kirby FB Live Mood Swings and Meds 2.13.22",
          "description": "",
          "publishedAt": "2022-02-14T02:46:31+00:00",
          "duration": 376,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1372219419-12095c54a55433676d8101e02632d36fd890e5abb73e31f315a99197e2684645-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_677010612",
          "vimeoVideoId": "677010612",
          "embedUrl": "https://player.vimeo.com/video/677010612?badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Module 1 THWBH Session 8 Jacky Vogt",
          "description": "",
          "publishedAt": "2022-02-14T05:08:33+00:00",
          "duration": 2142,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1384070457-b30bd71541f767dc6ef8cf23c4d35b031698751ef0beb0c78d9c4b76919b3cb4-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_677528341",
          "vimeoVideoId": "677528341",
          "embedUrl": "https://player.vimeo.com/video/677528341?badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Module 1 THWBH Session 9 Ajai",
          "description": "",
          "publishedAt": "2022-02-15T03:51:28+00:00",
          "duration": 1997,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1384068339-224cfa32ac74ea6efbaa56eec426a1098ce911243bc8c09afd8b924a7a65bb5d-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_677992883",
          "vimeoVideoId": "677992883",
          "embedUrl": "https://player.vimeo.com/video/677992883?badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Module 1 THWBH Session 10 Raj.mp4",
          "description": "",
          "publishedAt": "2022-02-16T03:16:45+00:00",
          "duration": 2222,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1384068019-c130c3e860371594243fd37e5ff5e74fc0d667f2f4d667e736c756b115d54113-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_678022153:043106e8bf",
          "vimeoVideoId": "678022153:043106e8bf",
          "embedUrl": "https://player.vimeo.com/video/678022153?h=043106e8bf&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Rose Week 1.mp4",
          "description": "",
          "publishedAt": "2022-02-16T05:23:52+00:00",
          "duration": 395,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1374132443-a5ce4ac603a6997a22005433818ed1b84284b93192ec66a25cdc21bb331b22cb-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_678023127:f8d7d8e469",
          "vimeoVideoId": "678023127:f8d7d8e469",
          "embedUrl": "https://player.vimeo.com/video/678023127?h=f8d7d8e469&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Rose Week 2.mp4",
          "description": "",
          "publishedAt": "2022-02-16T05:28:42+00:00",
          "duration": 397,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1374134709-8f3927ee22f8c72c07cad08d926da0e409b1e9974c0ee1884b35d39304b26fb0-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_678519500",
          "vimeoVideoId": "678519500",
          "embedUrl": "https://player.vimeo.com/video/678519500?badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Module 1 THWBH Session 11 Kirby",
          "description": "",
          "publishedAt": "2022-02-17T04:04:02+00:00",
          "duration": 3677,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1375060481-58c5a15257942e74faec4d12c9d333e68233bb3ab00de2018efa8185e5514ee3-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_679147077",
          "vimeoVideoId": "679147077",
          "embedUrl": "https://player.vimeo.com/video/679147077?badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Module 1 THWBH Session 12 Francesco",
          "description": "",
          "publishedAt": "2022-02-18T13:49:19+00:00",
          "duration": 2216,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1384067687-7ba15be3f35913867377864769e6de1cd1847840909517913bc17728010bdc0e-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_679487769:b3531c8a23",
          "vimeoVideoId": "679487769:b3531c8a23",
          "embedUrl": "https://player.vimeo.com/video/679487769?h=b3531c8a23&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Module 1 THWBH Session 13 Sean",
          "description": "",
          "publishedAt": "2022-02-19T14:23:26+00:00",
          "duration": 1879,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1384067237-270c0bff226c34f13c011c6ac3dea53a6cc1b3eab3a6a5cb3aa27c2ee54c8dec-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_679716474:5ab890a801",
          "vimeoVideoId": "679716474:5ab890a801",
          "embedUrl": "https://player.vimeo.com/video/679716474?h=5ab890a801&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Module 1 THWBH Session 14 J&J",
          "description": "",
          "publishedAt": "2022-02-20T15:58:44+00:00",
          "duration": 2170,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1384066777-4919d8c73b26511e7f3d46182c97ec9c66eedc463fef421f166390508fa98189-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_679879339:1e8fee1f40",
          "vimeoVideoId": "679879339:1e8fee1f40",
          "embedUrl": "https://player.vimeo.com/video/679879339?h=1e8fee1f40&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Module 1 THWBH Session 15 Jacky",
          "description": "",
          "publishedAt": "2022-02-21T05:41:44+00:00",
          "duration": 2354,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1384066560-88f447470871d0469cf7d79eb3a3b74bb223c1806747b83a809f8b88c6da9062-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_680272636:1cf61af999",
          "vimeoVideoId": "680272636:1cf61af999",
          "embedUrl": "https://player.vimeo.com/video/680272636?h=1cf61af999&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Module 1 THWBH Session 16 Ajai",
          "description": "",
          "publishedAt": "2022-02-22T04:03:09+00:00",
          "duration": 1761,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1384066078-2824191086b5f245891948770a2a5250987adbbec8404846883d8407ea6d40f9-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_680723352:65d123c571",
          "vimeoVideoId": "680723352:65d123c571",
          "embedUrl": "https://player.vimeo.com/video/680723352?h=65d123c571&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Module 1 THWBH Session 17 Kirby",
          "description": "",
          "publishedAt": "2022-02-23T04:20:44+00:00",
          "duration": 3613,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1379809004-ff45a9226acf7e7da54998912e84ce6e5b136cb5e3d58cea0fd0a4c73cae9474-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_681094996:806a30fc4a",
          "vimeoVideoId": "681094996:806a30fc4a",
          "embedUrl": "https://player.vimeo.com/video/681094996?h=806a30fc4a&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "I AM - 7 Personality Gifts Meditation",
          "description": "",
          "publishedAt": "2022-02-23T23:05:21+00:00",
          "duration": 1246,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1380543620-3a04e47413b7acee0779d9d0b9b1e0b6711eb48182b9ff58c2a1454efbe72617-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_681156388:24782f65b6",
          "vimeoVideoId": "681156388:24782f65b6",
          "embedUrl": "https://player.vimeo.com/video/681156388?h=24782f65b6&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Module 1 THWBH Session 18 Raj",
          "description": "",
          "publishedAt": "2022-02-24T03:17:20+00:00",
          "duration": 2225,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1384065521-e1021e33860ad826b5a750a0bec743bb0a573eaf38662c7f414a5df7adcc876d-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_681885685:0f2ee97939",
          "vimeoVideoId": "681885685:0f2ee97939",
          "embedUrl": "https://player.vimeo.com/video/681885685?h=0f2ee97939&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Module 1 THWBH Session 19 Francesco",
          "description": "",
          "publishedAt": "2022-02-25T14:08:44+00:00",
          "duration": 2711,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1384064120-c356ca21f177ca2684dde1f9807acdc24b9c6ca2f2d95b62277466af91009f49-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_681902132:e8b5b63806",
          "vimeoVideoId": "681902132:e8b5b63806",
          "embedUrl": "https://player.vimeo.com/video/681902132?h=e8b5b63806&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Rose Week 3",
          "description": "",
          "publishedAt": "2022-02-25T14:51:34+00:00",
          "duration": 134,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1382107443-b6a268892718f101148686137c65bd2ccaf91a63e1efd5ef5116533ab00fe8d8-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_682255912:36433d84bc",
          "vimeoVideoId": "682255912:36433d84bc",
          "embedUrl": "https://player.vimeo.com/video/682255912?h=36433d84bc&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Module 1 THWBH Session 20 Sean",
          "description": "",
          "publishedAt": "2022-02-26T15:29:57+00:00",
          "duration": 2000,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1384064509-4425422c5e0817f9ae84d3a71689e7cfe6f52154c2a23867d20c0df18f503915-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_682259967:cabbb5dd2a",
          "vimeoVideoId": "682259967:cabbb5dd2a",
          "embedUrl": "https://player.vimeo.com/video/682259967?h=cabbb5dd2a&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Kirby Thoughts Feelings Pattern 2.25.22 FB Live Video RECORDING",
          "description": "",
          "publishedAt": "2022-02-26T15:49:42+00:00",
          "duration": 235,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1382932712-fc40b2972c07d69195c4ff95b8416fe22e7d1f1c7485a50442454e31c55e0364-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_682514746:1d234a231b",
          "vimeoVideoId": "682514746:1d234a231b",
          "embedUrl": "https://player.vimeo.com/video/682514746?h=1d234a231b&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Module 1 THWBH Session 21 J&J",
          "description": "",
          "publishedAt": "2022-02-27T15:51:55+00:00",
          "duration": 2106,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1384063675-186797183d7820244a7ba5ef2a8a0be7aee1e90c07543ef4d87d33039d26fc87-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_682703503:70e0980c19",
          "vimeoVideoId": "682703503:70e0980c19",
          "embedUrl": "https://player.vimeo.com/video/682703503?h=70e0980c19&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Module 1 THWBH Session 22 Jacky",
          "description": "",
          "publishedAt": "2022-02-28T05:44:27+00:00",
          "duration": 1879,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1384061188-5801a17228779f0d46cfd306c1548a1ca24e28514070f4697065869b13d48548-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_683131702:ef239ee70b",
          "vimeoVideoId": "683131702:ef239ee70b",
          "embedUrl": "https://player.vimeo.com/video/683131702?h=ef239ee70b&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Session 23 Ajai",
          "description": "",
          "publishedAt": "2022-03-01T04:10:07+00:00",
          "duration": 1998,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1384931712-e5ff6181a86880cd2290886bc25d2cc0d9b2d545057bd7b1fb36171e4533c251-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_683618909:b0565a0287",
          "vimeoVideoId": "683618909:b0565a0287",
          "embedUrl": "https://player.vimeo.com/video/683618909?h=b0565a0287&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Module 1 THWBH Session 24 Kirby",
          "description": "",
          "publishedAt": "2022-03-02T03:56:44+00:00",
          "duration": 3029,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1385894193-0b2ed53e280d39ecfe767752934bd6d94cdd910a768e87295423faac4e10ff59-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_684064130:9d57cfe3e2",
          "vimeoVideoId": "684064130:9d57cfe3e2",
          "embedUrl": "https://player.vimeo.com/video/684064130?h=9d57cfe3e2&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Module 1 THWBH Session 25 Raj",
          "description": "",
          "publishedAt": "2022-03-03T03:12:45+00:00",
          "duration": 2147,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1386635063-31ab6ff36615f16ede495b1870470b9e25c101a7a891b11cfc198079ad74014e-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_684357674:3b888995db",
          "vimeoVideoId": "684357674:3b888995db",
          "embedUrl": "https://player.vimeo.com/video/684357674?h=3b888995db&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Kirby 3.3.22 Egos and Dreams FB Live",
          "description": "",
          "publishedAt": "2022-03-03T18:53:25+00:00",
          "duration": 563,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1387114720-02310272acd0c628dcad658d5cbb2c7370043c859f5d2fe06c2619c20acc8769-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_684508613:04ef730ee0",
          "vimeoVideoId": "684508613:04ef730ee0",
          "embedUrl": "https://player.vimeo.com/video/684508613?h=04ef730ee0&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Rose Week 4",
          "description": "",
          "publishedAt": "2022-03-04T05:02:33+00:00",
          "duration": 275,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1387374207-6c4332a8b7f6666f8d984df9215bdcde8a3a319c9ba5453c99fce9ac305ce1c6-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_684806056:958f1f1397",
          "vimeoVideoId": "684806056:958f1f1397",
          "embedUrl": "https://player.vimeo.com/video/684806056?h=958f1f1397&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Module 1 Session 26 Francesco",
          "description": "",
          "publishedAt": "2022-03-04T21:19:23+00:00",
          "duration": 2352,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1387861160-0c0017f0a2edbb8813def52a0c4a37cf1b566b093fc8f809f3a96b5688f60e2d-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_684809061:f0038f8f27",
          "vimeoVideoId": "684809061:f0038f8f27",
          "embedUrl": "https://player.vimeo.com/video/684809061?h=f0038f8f27&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Session ad.mp4",
          "description": "",
          "publishedAt": "2022-03-04T21:31:25+00:00",
          "duration": 51,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1387863537-6914098b61d091427639a15d952eafb4972e4d1c04ccd1328987759ead6ce7eb-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_685074842:64e8aec3c9",
          "vimeoVideoId": "685074842:64e8aec3c9",
          "embedUrl": "https://player.vimeo.com/video/685074842?h=64e8aec3c9&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Module 1 THWBH Session 27 Sean",
          "description": "",
          "publishedAt": "2022-03-06T02:45:27+00:00",
          "duration": 1974,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1388426575-d02f97eb1c802398044af1594648ccec9f618552e22ae361d22d9ef8db788701-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_685174801:ce1c26e081",
          "vimeoVideoId": "685174801:ce1c26e081",
          "embedUrl": "https://player.vimeo.com/video/685174801?h=ce1c26e081&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Session 28 J&J",
          "description": "",
          "publishedAt": "2022-03-06T15:37:54+00:00",
          "duration": 1935,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1388648026-245d3ee566e6f73b6dc610e7695d1b9e94e6912f1422ed2deed21ec4cb1f39df-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_685637471:afeaab4f15",
          "vimeoVideoId": "685637471:afeaab4f15",
          "embedUrl": "https://player.vimeo.com/video/685637471?h=afeaab4f15&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Module 1 Session 29 Ajai",
          "description": "",
          "publishedAt": "2022-03-07T21:40:51+00:00",
          "duration": 2322,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1389455662-b16bb3330f412fac4a74bfae6dbcb7eeb6a2f51083010a3c3fc77acafec550cf-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_686261207:01cd59d0ee",
          "vimeoVideoId": "686261207:01cd59d0ee",
          "embedUrl": "https://player.vimeo.com/video/686261207?h=01cd59d0ee&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Module 1 THWBH Session 30 All Trainers Q & A",
          "description": "",
          "publishedAt": "2022-03-09T12:48:10+00:00",
          "duration": 4687,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1390571466-b8c4722a1e6ef5b07bde66b9b3ef2b090d37c47cc4b48f43cdbf43703d3d0f14-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_687471066:8065dcd285",
          "vimeoVideoId": "687471066:8065dcd285",
          "embedUrl": "https://player.vimeo.com/video/687471066?h=8065dcd285&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Sean FB Live RECORDING 3.10.22",
          "description": "",
          "publishedAt": "2022-03-12T17:08:23+00:00",
          "duration": 616,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1392658440-138f5dd5e68ff8549005fdd7001ee24ac0b451a76694c793f2626a1cefc0253d-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_688003189:d662100fd7",
          "vimeoVideoId": "688003189:d662100fd7",
          "embedUrl": "https://player.vimeo.com/video/688003189?h=d662100fd7&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Module 1 THWBH Session 31 Francesco",
          "description": "",
          "publishedAt": "2022-03-14T15:28:49+00:00",
          "duration": 2994,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1394852149-9dae6130cd2cb76dc7a31a87a310cdda56519db95f1136cb30db63d16dd4764f-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_688852671:50b97b6ee6",
          "vimeoVideoId": "688852671:50b97b6ee6",
          "embedUrl": "https://player.vimeo.com/video/688852671?h=50b97b6ee6&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Module 1 THWBH Session 32 Kirby",
          "description": "",
          "publishedAt": "2022-03-16T13:47:40+00:00",
          "duration": 7152,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1395124910-16ade615434cddb53282b6b48d15cbdee40f703baad2643120cd579934a22b42-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_689543887:b1dde7b4ce",
          "vimeoVideoId": "689543887:b1dde7b4ce",
          "embedUrl": "https://player.vimeo.com/video/689543887?h=b1dde7b4ce&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Module 1 THWBH Session 33 Ajai",
          "description": "",
          "publishedAt": "2022-03-18T03:36:29+00:00",
          "duration": 1876,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1396290774-db642ef9e16a1e2901d404532eb8b0c1cf207a9946f1d73e8fea7b4d6c4a29b4-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_690533445:1f2177394e",
          "vimeoVideoId": "690533445:1f2177394e",
          "embedUrl": "https://player.vimeo.com/video/690533445?h=1f2177394e&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Module 1 THWBH Session 34 Sean",
          "description": "",
          "publishedAt": "2022-03-21T14:20:36+00:00",
          "duration": 2386,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1398212728-9b7f1f90f65efba2f116e69223381fd88a78657b1a4f58937804a1df90f0696a-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      },
      {
          "id": "vimeo_691288002:fe9b085778",
          "vimeoVideoId": "691288002:fe9b085778",
          "embedUrl": "https://player.vimeo.com/video/691288002?h=fe9b085778&badge=0&autopause=0&player_id=0&app_id=536651",
          "title": "Module 1 THWBH Session 35 Kirby",
          "description": "",
          "publishedAt": "2022-03-23T08:34:32+00:00",
          "duration": 4051,
          "thumbnailUrl": "https://i.vimeocdn.com/video/1399482893-7e8dca2c480ca34379213effdfc8b7a19a99dfc9bc16d630cfe39176ec315f55-d_1920x1080?&r=pad&region=us",
          "speaker": "WOWLife Church",
          "category": "Deep Dives"
      }
  ];

  const RESOURCE_SERIES = [
      {
          "title": "CMS Redux",
          "parts": 21,
          "projectId": "28762467",
          "videos": [
              {
                  "id": "vimeo_1178455053_1f29cd62b8",
                  "vimeoVideoId": "1178455053:1f29cd62b8",
                  "embedUrl": "https://player.vimeo.com/video/1178455053?h=1f29cd62b8&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "1._introduction_to_tohu_wa-bohu (720p)",
                  "description": "",
                  "publishedAt": "2026-03-30T13:17:13+00:00",
                  "duration": 1861,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2140049716-55555d92c66742a0a6e69b8e2e1c13191c607de4c4f621f665ed6942994c56bc-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1178460664_509e6a45ee",
                  "vimeoVideoId": "1178460664:509e6a45ee",
                  "embedUrl": "https://player.vimeo.com/video/1178460664?h=509e6a45ee&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "Gregory of Nyssa - Luminous Darkness",
                  "description": "",
                  "publishedAt": "2026-03-30T13:32:33+00:00",
                  "duration": 122,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2140052575-2ea3c88b41669baaaefb7f0c827e5e61dc5824dab4f5f9893bc9c43e8993eee9-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1179097665_63ab7e1d4f",
                  "vimeoVideoId": "1179097665:63ab7e1d4f",
                  "embedUrl": "https://player.vimeo.com/video/1179097665?h=63ab7e1d4f&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "CMS Redux Oath",
                  "description": "",
                  "publishedAt": "2026-04-01T05:08:39+00:00",
                  "duration": 869,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2140851490-e76f3b5e1345fa46d4c22156d8e189916d9dc7b206815baf50a148f4956a9bd5-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1180035602_aa118b1e3c",
                  "vimeoVideoId": "1180035602:aa118b1e3c",
                  "embedUrl": "https://player.vimeo.com/video/1180035602?h=aa118b1e3c&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "cms_module_1_introduction (720p)_1",
                  "description": "",
                  "publishedAt": "2026-04-04T05:29:20+00:00",
                  "duration": 2639,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2142043867-f2d9d8c5042c2a6521a0943771cc5b844a114ca529035d877c02efd2b42a9f01-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1180095091_1dc37e7b0b",
                  "vimeoVideoId": "1180095091:1dc37e7b0b",
                  "embedUrl": "https://player.vimeo.com/video/1180095091?h=1dc37e7b0b&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2._learning_to_disappear (720p)_1",
                  "description": "",
                  "publishedAt": "2026-04-04T13:27:28+00:00",
                  "duration": 3806,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2142122917-e769b2ebb98480de88fc1e30af1d7b2388a6aab0c914a35bec9082cc59f33c6b-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1180143754_084fd63d8a",
                  "vimeoVideoId": "1180143754:084fd63d8a",
                  "embedUrl": "https://player.vimeo.com/video/1180143754?h=084fd63d8a&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "Module 1 Promo",
                  "description": "",
                  "publishedAt": "2026-04-04T19:42:36+00:00",
                  "duration": 143,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2142179097-052a8e4b10c8ec9c206ce3c279ac6671108c08c7e0883ca9190d051a7027ce02-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1180260551_91e4f193c2",
                  "vimeoVideoId": "1180260551:91e4f193c2",
                  "embedUrl": "https://player.vimeo.com/video/1180260551?h=91e4f193c2&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "I am Meditation",
                  "description": "",
                  "publishedAt": "2026-04-05T12:29:44+00:00",
                  "duration": 608,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2142329790-bd904e18c6a65725c626b7d99b98725d159b3d83928117b6c57d6ec05c1c7615-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1180264839_1610523697",
                  "vimeoVideoId": "1180264839:1610523697",
                  "embedUrl": "https://player.vimeo.com/video/1180264839?h=1610523697&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2._learning_to_disappear (720p)_1",
                  "description": "",
                  "publishedAt": "2026-04-05T13:14:31+00:00",
                  "duration": 3533,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2142335518-94ea4fbcfa0a34cd0bbd7b2ddd352de5ff2cfcf1ca38c029735c39f417fb484f-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1181474355_0a21fdd71c",
                  "vimeoVideoId": "1181474355:0a21fdd71c",
                  "embedUrl": "https://player.vimeo.com/video/1181474355?h=0a21fdd71c&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3__setting_goals_&_calendar_v1 (720p)",
                  "description": "",
                  "publishedAt": "2026-04-09T07:10:18+00:00",
                  "duration": 3052,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2145269433-c579f44dae2ea9981a867bdc9fcd1f570a79505b57528214dc88dae8d467e464-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1182401273_aa0a7ab6dd",
                  "vimeoVideoId": "1182401273:aa0a7ab6dd",
                  "embedUrl": "https://player.vimeo.com/video/1182401273?h=aa0a7ab6dd&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "Module 1 Session 4",
                  "description": "",
                  "publishedAt": "2026-04-12T15:43:55+00:00",
                  "duration": 2905,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2145006550-cf0cfdf4f13e7864389d755e42c3b805ec3668789f6e738f544b168a756ca42c-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1182405061_19e4cb20a2",
                  "vimeoVideoId": "1182405061:19e4cb20a2",
                  "embedUrl": "https://player.vimeo.com/video/1182405061?h=19e4cb20a2&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "Reverse Breathing Explained",
                  "description": "",
                  "publishedAt": "2026-04-12T16:05:30+00:00",
                  "duration": 74,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2145011022-34e9fff84f45c67726404026264260c9fd4820a09960bdb013f8a322925ca776-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1182406775_922e84c953",
                  "vimeoVideoId": "1182406775:922e84c953",
                  "embedUrl": "https://player.vimeo.com/video/1182406775?h=922e84c953&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WhatsApp Video 2026-04-09 at 17.10.12",
                  "description": "",
                  "publishedAt": "2026-04-12T16:14:51+00:00",
                  "duration": 128,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2145012617-803355f4ce3643f55d0442fa3225081af3933eda3d90527bdbb77088d505f5c7-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1184524741_c3d1a0e588",
                  "vimeoVideoId": "1184524741:c3d1a0e588",
                  "embedUrl": "https://player.vimeo.com/video/1184524741?h=c3d1a0e588&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "5._streaming_in (720p)",
                  "description": "",
                  "publishedAt": "2026-04-19T10:52:20+00:00",
                  "duration": 3385,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2147700398-b1bdd9c5b4065e1adc8d86d95e44c985de2cc92cfd357dad4845e13153c5d125-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1186564173_65a820e786",
                  "vimeoVideoId": "1186564173:65a820e786",
                  "embedUrl": "https://player.vimeo.com/video/1186564173?h=65a820e786&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "Cinematic",
                  "description": "",
                  "publishedAt": "2026-04-25T18:56:18+00:00",
                  "duration": 381,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2150290492-2ce8f9b400abbac9a62475ac741c972e1f002239ba75674e609519b87b689400-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1186723194_936b5e388e",
                  "vimeoVideoId": "1186723194:936b5e388e",
                  "embedUrl": "https://player.vimeo.com/video/1186723194?h=936b5e388e&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "6._compassion_meditation_v1 (720p)",
                  "description": "",
                  "publishedAt": "2026-04-26T17:23:02+00:00",
                  "duration": 4056,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2150497057-d08ab2400211c37a0b41f211a6dda3c3ff3bce2fb798be39359a7ffb8c68f5c7-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1188313878_f8fb8641b5",
                  "vimeoVideoId": "1188313878:f8fb8641b5",
                  "embedUrl": "https://player.vimeo.com/video/1188313878?h=f8fb8641b5&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "Supplement Compassion Meditation",
                  "description": "",
                  "publishedAt": "2026-05-01T04:04:24+00:00",
                  "duration": 1088,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2152562450-d76bd695400dc0f0487725e2f62fd44d342830f4c73f0a05c8fa46eb630c7b89-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1188807701_2462c67774",
                  "vimeoVideoId": "1188807701:2462c67774",
                  "embedUrl": "https://player.vimeo.com/video/1188807701?h=2462c67774&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "7._thinking,_feeling,_patterning,_openness,_probing_v1 (720p)",
                  "description": "",
                  "publishedAt": "2026-05-03T14:36:58+00:00",
                  "duration": 3505,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2153173570-7b635e9bfa736c873cff4c4000b46f807121827e08e04ab0b631671a5d64894d-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1188846351_095816ea7e",
                  "vimeoVideoId": "1188846351:095816ea7e",
                  "embedUrl": "https://player.vimeo.com/video/1188846351?h=095816ea7e&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "Session 7 Audio Summary",
                  "description": "",
                  "publishedAt": "2026-05-03T18:21:23+00:00",
                  "duration": 356,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2153214927-bb06d4846333cbdf5111e1f46d4c0ca61b6b3b2054944802ae48328df832ab72-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1189677946_6c832358dd",
                  "vimeoVideoId": "1189677946:6c832358dd",
                  "embedUrl": "https://player.vimeo.com/video/1189677946?h=6c832358dd&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "8._the_void__what_is_it__&_feathering_v2 (720p)",
                  "description": "",
                  "publishedAt": "2026-05-06T09:20:43+00:00",
                  "duration": 2966,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2154661175-a5069170c9136848723f814859b3dc9e072a0f12917f460525791c2f756ac69e-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1193052908_0438d28b32",
                  "vimeoVideoId": "1193052908:0438d28b32",
                  "embedUrl": "https://player.vimeo.com/video/1193052908?h=0438d28b32&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "Session 9 | Q & A",
                  "description": "",
                  "publishedAt": "2026-05-17T20:25:24+00:00",
                  "duration": 3693,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2158444478-8809d18af6bc1b9c457a201c4e7693169f095644a01e2b4ef9e89392134077fb-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1193534900_4823d695bd",
                  "vimeoVideoId": "1193534900:4823d695bd",
                  "embedUrl": "https://player.vimeo.com/video/1193534900?h=4823d695bd&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "CMS redux Module 10",
                  "description": "",
                  "publishedAt": "2026-05-19T09:34:21+00:00",
                  "duration": 463,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2159032761-7fc55b95a30b53fa2854a11fe28950c83ce47bfc1581ddd3980a379380fcbce6-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "Cornerstone Reflections",
          "parts": 7,
          "projectId": "27501854",
          "videos": [
              {
                  "id": "vimeo_1147240743_47ad4e76b1",
                  "vimeoVideoId": "1147240743:47ad4e76b1",
                  "embedUrl": "https://player.vimeo.com/video/1147240743?h=47ad4e76b1&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "Super Erogation Meditation Audio_Paul of Thebes_Paid",
                  "description": "",
                  "publishedAt": "2025-12-17T08:21:16+00:00",
                  "duration": 680,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2096961355-16e275c112e81f8d7ee4348ca0b11d822c28004f5a7d3affefb1e57b8e0dd874-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1147243333",
                  "vimeoVideoId": "1147243333",
                  "embedUrl": "https://player.vimeo.com/video/1147243333?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "Super Erogation Meditation Audio_Paul of Thebes_Free",
                  "description": "",
                  "publishedAt": "2025-12-17T08:33:15+00:00",
                  "duration": 435,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2096962069-ed97a9c6d71059c292f4180411ecbe4836c49c0cee62268da7749fa75be5e0bf-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "WOWLife Uncut",
          "parts": 11,
          "projectId": "22626065",
          "videos": [
              {
                  "id": "vimeo_1024927104",
                  "vimeoVideoId": "1024927104",
                  "embedUrl": "https://player.vimeo.com/video/1024927104?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "The Secret Meaning Behind Communion",
                  "description": "WOW Communion Sunday:  09-29-2024",
                  "publishedAt": "2024-10-30T22:50:37+00:00",
                  "duration": 6483,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1944948370-4f1e7d246e8e348c12fe69b8a5cb56e32fc017aedabc43eb3a2068cd09b26a79-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1025374605",
                  "vimeoVideoId": "1025374605",
                  "embedUrl": "https://player.vimeo.com/video/1025374605?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Tuesday (10-29-2024)",
                  "description": "This service was broadcast live only on the Facebook transcend private group.",
                  "publishedAt": "2024-11-01T08:41:12+00:00",
                  "duration": 7075,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1944935928-b20e129e5740a53c16f82c3d0d4d32e68dae4bccd5e2d06003b64f2c8c973842-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1026080527",
                  "vimeoVideoId": "1026080527",
                  "embedUrl": "https://player.vimeo.com/video/1026080527?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "The Secret Life of a Miracle-Worker | WOW Sunday 03rd November 2024",
                  "description": "",
                  "publishedAt": "2024-11-04T10:42:47+00:00",
                  "duration": 6750,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1945792649-016a88b68c47d3120a1b6036492d39f1c7d54bfc9b0b6fac6a11f7b246430c05-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1026760998",
                  "vimeoVideoId": "1026760998",
                  "embedUrl": "https://player.vimeo.com/video/1026760998?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Tuesday | 05th November 2024 | WOWLife Uncut",
                  "description": "",
                  "publishedAt": "2024-11-06T04:23:41+00:00",
                  "duration": 6551,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1946604046-b942aa704fde8e674d64f08aa41ea409ad13646c4781a2805a6afe47c06084d3-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1028117359",
                  "vimeoVideoId": "1028117359",
                  "embedUrl": "https://player.vimeo.com/video/1028117359?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Sunday | 10th November 2024 | WOWLife Uncut",
                  "description": "",
                  "publishedAt": "2024-11-10T11:31:48+00:00",
                  "duration": 7506,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1948217330-f72a6bacd5b35600e2b04537c7fc71c996431c6a5aff3fa282c632264edb1adb-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1029020265",
                  "vimeoVideoId": "1029020265",
                  "embedUrl": "https://player.vimeo.com/video/1029020265?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Tuesday | 12th November 2024 | WOWLife Uncut",
                  "description": "",
                  "publishedAt": "2024-11-12T21:59:29+00:00",
                  "duration": 6963,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1949273436-c4fff550a1a460a7c8d93eee4407262365129e58897aeaddc5dae34c13077928-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1030437584",
                  "vimeoVideoId": "1030437584",
                  "embedUrl": "https://player.vimeo.com/video/1030437584?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Sunday | 17th November 2024 | WOWLife Uncut",
                  "description": "",
                  "publishedAt": "2024-11-17T09:38:06+00:00",
                  "duration": 7186,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1951005634-6d24fc556c8a24fdb83c6259608af009beb7b9b03092b2341dc1edadf6a71017-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1031262267",
                  "vimeoVideoId": "1031262267",
                  "embedUrl": "https://player.vimeo.com/video/1031262267?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Tuesday 19th November 2024 | WOWLife Uncut",
                  "description": "",
                  "publishedAt": "2024-11-19T19:02:16+00:00",
                  "duration": 6271,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1951963388-3311494bc22aab560797593467b202e454a1cbcf411aaf10bb4da0c5b1097097-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1033765873",
                  "vimeoVideoId": "1033765873",
                  "embedUrl": "https://player.vimeo.com/video/1033765873?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Tuesday 27th November | WOWLife Uncut",
                  "description": "",
                  "publishedAt": "2024-11-27T08:05:03+00:00",
                  "duration": 7130,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1954955589-8644827381e4bda7e31f02801e1270766577190b8c3b042284e47412f440e019-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1035066011",
                  "vimeoVideoId": "1035066011",
                  "embedUrl": "https://player.vimeo.com/video/1035066011?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Sunday 1st December | WOWLife Uncut",
                  "description": "",
                  "publishedAt": "2024-12-02T03:03:58+00:00",
                  "duration": 7287,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1956510445-adc074c6f0e9475c96ee8d5ce75199da972ae424c834b302da56bc154b22e132-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1035740006",
                  "vimeoVideoId": "1035740006",
                  "embedUrl": "https://player.vimeo.com/video/1035740006?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Sunday 03rd December | WOWLife Uncut",
                  "description": "",
                  "publishedAt": "2024-12-03T20:21:44+00:00",
                  "duration": 7168,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1957309633-fbdbb5bf0c77a4fff06ff9a8dcbd01280445e8b4b728633db37c19eb7dce3dc5-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "Theos & Theory",
          "parts": 2,
          "projectId": "24867004",
          "videos": [
              {
                  "id": "vimeo_1073173248",
                  "vimeoVideoId": "1073173248",
                  "embedUrl": "https://player.vimeo.com/video/1073173248?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "The Holy Trinity (Ep - 01)",
                  "description": "",
                  "publishedAt": "2025-04-07T11:54:29+00:00",
                  "duration": 604,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2002257180-fa984ca478528aaf2072490ad02f4abfa14db507eb30133d6d364a005340cb2c-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1090025429",
                  "vimeoVideoId": "1090025429",
                  "embedUrl": "https://player.vimeo.com/video/1090025429?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "DD THEOS AND THEORY EP 2",
                  "description": "",
                  "publishedAt": "2025-06-03T09:43:25+00:00",
                  "duration": 1015,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2022557063-82ed2ad522526b715d6b3621e112b803376d1447923d52988b20529e5eb15281-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "WOW Online Church (WOC) Teachings",
          "parts": 16,
          "projectId": "26036833",
          "videos": [
              {
                  "id": "vimeo_1103387221",
                  "vimeoVideoId": "1103387221",
                  "embedUrl": "https://player.vimeo.com/video/1103387221?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "21-07-2025 (HANDBRAKE)",
                  "description": "",
                  "publishedAt": "2025-07-22T08:11:20+00:00",
                  "duration": 2782,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2039389541-b313d55c131e468b414955f5b9d5d8ddb8afc66e1f9a7fc2dd8ef2a75bffc775-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1103390842",
                  "vimeoVideoId": "1103390842",
                  "embedUrl": "https://player.vimeo.com/video/1103390842?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "07-07-2025 Woc (Handbrake)",
                  "description": "",
                  "publishedAt": "2025-07-22T08:26:51+00:00",
                  "duration": 2432,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2039393564-8a9ed6c2355167d8b0c2b796c9ae469bc5e253479fb4853df23c40dd0e016831-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1103395459",
                  "vimeoVideoId": "1103395459",
                  "embedUrl": "https://player.vimeo.com/video/1103395459?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOC _ Kirby & Fiona de Lanerolle _ June 7, 2025",
                  "description": "",
                  "publishedAt": "2025-07-22T08:48:15+00:00",
                  "duration": 1867,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2039399480-e47b45125f6316b1ff9c2cad21dd7b0a801dda87413af4bf179199704ecc6965-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1103397820",
                  "vimeoVideoId": "1103397820",
                  "embedUrl": "https://player.vimeo.com/video/1103397820?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOC _ Sung Han _ June 15, 2025",
                  "description": "",
                  "publishedAt": "2025-07-22T09:00:03+00:00",
                  "duration": 1436,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2039402332-0eff49d5f2a5291ef7dca0a294698351eb488f4c4a4a91c62727ab83cf9708d7-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1103398909",
                  "vimeoVideoId": "1103398909",
                  "embedUrl": "https://player.vimeo.com/video/1103398909?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "Woc - Ezra Moses (23Rd June) (Handbrake)",
                  "description": "",
                  "publishedAt": "2025-07-22T09:05:08+00:00",
                  "duration": 1242,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2039404535-9caf26199763d58619b381d5ee25727887da553a9b8aa5126e34ae36327298f5-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1103400444",
                  "vimeoVideoId": "1103400444",
                  "embedUrl": "https://player.vimeo.com/video/1103400444?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOC _ Kirby de Lanerolle _ June 30th, 2025",
                  "description": "",
                  "publishedAt": "2025-07-22T09:11:33+00:00",
                  "duration": 3216,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2039406165-d4cead6700c1082179da306a685e8148172ece1cfdd223753bef77db8de335ec-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1103407852",
                  "vimeoVideoId": "1103407852",
                  "embedUrl": "https://player.vimeo.com/video/1103407852?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "Woc Pilot (HANDBRAKE)",
                  "description": "",
                  "publishedAt": "2025-07-22T09:42:27+00:00",
                  "duration": 2763,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2039416228-202fc04e39ca333e8d2fca736aad6346702835a2087a9a1c956c550ed66b585f-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1105057911",
                  "vimeoVideoId": "1105057911",
                  "embedUrl": "https://player.vimeo.com/video/1105057911?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "28-07-2025 WOC (Ben Johnston)",
                  "description": "",
                  "publishedAt": "2025-07-28T09:00:32+00:00",
                  "duration": 2400,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2041481969-b2c7dbe2ca2958648b0d3baa36809cc03cd33e025a729aeb5999c8dd3cc12e0b-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1113124655",
                  "vimeoVideoId": "1113124655",
                  "embedUrl": "https://player.vimeo.com/video/1113124655?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "04-08-2025 WOC",
                  "description": "",
                  "publishedAt": "2025-08-26T05:57:36+00:00",
                  "duration": 1756,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2051552739-9b04366e5e9620cdaf607d8bd455a459c423e933426f2dc0d7488113a4acb789-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1113126151",
                  "vimeoVideoId": "1113126151",
                  "embedUrl": "https://player.vimeo.com/video/1113126151?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOC _ Ron Marquardt _ August 10 2025",
                  "description": "",
                  "publishedAt": "2025-08-26T06:07:14+00:00",
                  "duration": 1263,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2051554474-afa21346425763d5e546c40dc239f2f8b3d71ca8e353fa0bd86000f3a0a764d1-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1113133725",
                  "vimeoVideoId": "1113133725",
                  "embedUrl": "https://player.vimeo.com/video/1113133725?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOC 17-08-2025",
                  "description": "",
                  "publishedAt": "2025-08-26T06:50:11+00:00",
                  "duration": 0,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/default-2308240_1920x1080?&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1113133836",
                  "vimeoVideoId": "1113133836",
                  "embedUrl": "https://player.vimeo.com/video/1113133836?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOC 17-08-2025",
                  "description": "",
                  "publishedAt": "2025-08-26T06:50:50+00:00",
                  "duration": 2921,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2051564559-87c4337cfc053a89994140e7a3b3dd479d0796f8565eacdcf46ce5ceeb97b319-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1115042995",
                  "vimeoVideoId": "1115042995",
                  "embedUrl": "https://player.vimeo.com/video/1115042995?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOC_01-09-2025",
                  "description": "",
                  "publishedAt": "2025-09-02T04:14:56+00:00",
                  "duration": 2550,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2054253870-05c6ad468ba91f8f03525d993c191b68a0219dc69f7aa3e05c23f3edfc26f242-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1124825417",
                  "vimeoVideoId": "1124825417",
                  "embedUrl": "https://player.vimeo.com/video/1124825417?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOC_06-10-2025",
                  "description": "",
                  "publishedAt": "2025-10-06T12:50:38+00:00",
                  "duration": 2146,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2066810041-00977eee8aea0a23b6985a223904a468e254d8982a0b06d8594d11b4a915664b-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1126932563",
                  "vimeoVideoId": "1126932563",
                  "embedUrl": "https://player.vimeo.com/video/1126932563?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOC _ Sung Han _ October 12, 2025",
                  "description": "",
                  "publishedAt": "2025-10-13T18:28:07+00:00",
                  "duration": 2038,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2069528358-c1f0ecc4e5c4d5128ea470574137affdc3132d3f20fcad0e0ceca7be59698cc2-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1131207572",
                  "vimeoVideoId": "1131207572",
                  "embedUrl": "https://player.vimeo.com/video/1131207572?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "27-10-2025",
                  "description": "",
                  "publishedAt": "2025-10-28T07:35:11+00:00",
                  "duration": 2535,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/2075089928-d92224bc1684971a16a6c9d0ff6a533d5acbe449f601063265c4d0d7747b6944-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "Conscience Series (2023)",
          "parts": 12,
          "projectId": "16420145",
          "videos": [
              {
                  "id": "vimeo_812661127",
                  "vimeoVideoId": "812661127",
                  "embedUrl": "https://player.vimeo.com/video/812661127?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOWSunday: 03-26-2023",
                  "description": "",
                  "publishedAt": "2023-03-29T03:11:33+00:00",
                  "duration": 4126,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1643255342-71bd7d0592a0419d3d50027f80dff57866258a7fe69aedc7a8384f870af3e182-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_814140132",
                  "vimeoVideoId": "814140132",
                  "embedUrl": "https://player.vimeo.com/video/814140132?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOWSunday 04-02-2023",
                  "description": "",
                  "publishedAt": "2023-04-03T06:41:05+00:00",
                  "duration": 2478,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1647130050-c8916bdcd762b37bc9763e84f627b53fdeb8b5fb40d0c66f15f3e9d3615b4e03-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_815229840",
                  "vimeoVideoId": "815229840",
                  "embedUrl": "https://player.vimeo.com/video/815229840?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOWTuesday  04-04-2023",
                  "description": "",
                  "publishedAt": "2023-04-06T07:09:29+00:00",
                  "duration": 3889,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1649705471-1e2e5dd2635e3cda7a0163b8234f046d8f5ad22933d8d9904a6bbdea7eaeb790-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_818256973",
                  "vimeoVideoId": "818256973",
                  "embedUrl": "https://player.vimeo.com/video/818256973?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOWTuesday: 04-11-2023",
                  "description": "",
                  "publishedAt": "2023-04-17T06:32:18+00:00",
                  "duration": 2566,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1656527869-740a860663b353544e78cdd8aa23d1db75b9730b5110ffca0621e15f613ccf62-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832184628",
                  "vimeoVideoId": "832184628",
                  "embedUrl": "https://player.vimeo.com/video/832184628?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOWTuesday 05-09-2023",
                  "description": "",
                  "publishedAt": "2023-06-01T08:55:54+00:00",
                  "duration": 2430,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1677932894-82ba0cdc0c20ca8b2a9392bec6b22ef65596e4c26c514db07ff7b52d98803e16-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832184830",
                  "vimeoVideoId": "832184830",
                  "embedUrl": "https://player.vimeo.com/video/832184830?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOWTuesday 05-02-2023",
                  "description": "",
                  "publishedAt": "2023-06-01T08:56:44+00:00",
                  "duration": 2185,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1677933417-d8884b0a547146705918ba3d87b4e097c19e719194f841a1c7980ddba4ea15aa-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832190763",
                  "vimeoVideoId": "832190763",
                  "embedUrl": "https://player.vimeo.com/video/832190763?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOWTuesday 04-25-2023",
                  "description": "",
                  "publishedAt": "2023-06-01T09:19:08+00:00",
                  "duration": 3067,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1677941051-20d06b5dbc92ff05767d905957dd47d1d828625c4c829da31521d69aa203a725-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832193695",
                  "vimeoVideoId": "832193695",
                  "embedUrl": "https://player.vimeo.com/video/832193695?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOWSunday 04-30-2023",
                  "description": "",
                  "publishedAt": "2023-06-01T09:30:25+00:00",
                  "duration": 2370,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1677941431-9891e74da03f02000e6e3e8549e4963c3ee033dac4f8d54e2de896c268e0fbfd-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832197432",
                  "vimeoVideoId": "832197432",
                  "embedUrl": "https://player.vimeo.com/video/832197432?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOWSunday 04-18-2023",
                  "description": "",
                  "publishedAt": "2023-06-01T09:45:37+00:00",
                  "duration": 3131,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1677963859-f6281dc3cdb9371727de6b0c9ddd0439bdf534baece824ed25fbfb38f97aeef4-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832210362",
                  "vimeoVideoId": "832210362",
                  "embedUrl": "https://player.vimeo.com/video/832210362?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOWSunday 04-23-2023",
                  "description": "",
                  "publishedAt": "2023-06-01T10:36:03+00:00",
                  "duration": 3074,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1677969395-e796b26bf965b8cd8acf17b88fb0067a908d178b5662dbab16946a4a6cebe123-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832212740",
                  "vimeoVideoId": "832212740",
                  "embedUrl": "https://player.vimeo.com/video/832212740?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOWsunday 04-16-2023",
                  "description": "",
                  "publishedAt": "2023-06-01T10:45:26+00:00",
                  "duration": 2904,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1677970908-063e78395b46051392607206ac904ab8e4b1041741cbc703680b124fbb3a860d-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832216404",
                  "vimeoVideoId": "832216404",
                  "embedUrl": "https://player.vimeo.com/video/832216404?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOWTuesday 03-29-2023",
                  "description": "",
                  "publishedAt": "2023-06-01T10:59:39+00:00",
                  "duration": 2787,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1677973288-2bb9f4d914a5f48e1df5253ae63cf709812bcaa01d14ce110e86dcb0d47b8258-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "The Wildcard Series [New]",
          "parts": 4,
          "projectId": "22118326",
          "videos": [
              {
                  "id": "vimeo_1009118954",
                  "vimeoVideoId": "1009118954",
                  "embedUrl": "https://player.vimeo.com/video/1009118954?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "4) Seeing in the Unseen Realm (Creating your Inner Castle)",
                  "description": "",
                  "publishedAt": "2024-09-13T09:29:16+00:00",
                  "duration": 1206,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1928365025-c10ca08420883c1096206100b7c3ef117d9344fab3dfb8e747fc1eb7ed26a6c5-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1009119036",
                  "vimeoVideoId": "1009119036",
                  "embedUrl": "https://player.vimeo.com/video/1009119036?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2) Will Humans Ever be Immortal (Quantum Immortality)",
                  "description": "",
                  "publishedAt": "2024-09-13T09:29:38+00:00",
                  "duration": 1307,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1928339712-8f86edfb2f34ecdabec4785c80e3cb84745a5d1f790d2922bb5e57c662c9220e-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1009119137",
                  "vimeoVideoId": "1009119137",
                  "embedUrl": "https://player.vimeo.com/video/1009119137?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "1) How Close Are we to Immortality (Longevity Escape Velocity)",
                  "description": "",
                  "publishedAt": "2024-09-13T09:29:59+00:00",
                  "duration": 1247,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1928338433-81d18a86673850263fd7edb4e03b687fb179d00057a4b662822bbebbc52b36ca-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_1009119233",
                  "vimeoVideoId": "1009119233",
                  "embedUrl": "https://player.vimeo.com/video/1009119233?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3) Living from Heaven (Reverse Aging Technology)",
                  "description": "",
                  "publishedAt": "2024-09-13T09:30:20+00:00",
                  "duration": 1192,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1928365137-d067fd6e78e7b61ac5f2d0237b8d2c3643844654d40826adcc88bc2f6bd49774-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "Purpose Series",
          "parts": 4,
          "projectId": "16434018",
          "videos": [
              {
                  "id": "vimeo_832220813",
                  "vimeoVideoId": "832220813",
                  "embedUrl": "https://player.vimeo.com/video/832220813?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "4) WOWTuesday 03-21-2023",
                  "description": "",
                  "publishedAt": "2023-06-01T11:15:59+00:00",
                  "duration": 3257,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1677981019-5cc6c69a75081b4ed1f32f1555ca9dff4ba306e333936dd7b30f9951deb1e534-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832221147",
                  "vimeoVideoId": "832221147",
                  "embedUrl": "https://player.vimeo.com/video/832221147?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "1) WOWSunday 03-12-2023",
                  "description": "",
                  "publishedAt": "2023-06-01T11:17:16+00:00",
                  "duration": 4487,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1677981332-5f0dd3ce6f3a7c0fac0b6c956c46101d9bf978cf0a8b00135d515fd681751f8c-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832221652",
                  "vimeoVideoId": "832221652",
                  "embedUrl": "https://player.vimeo.com/video/832221652?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3) WOWSunday 03-19-2023",
                  "description": "",
                  "publishedAt": "2023-06-01T11:19:14+00:00",
                  "duration": 3693,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1677981585-108d223c2e78f9c947cfa1d88ba31f2c8f39201dd75767a75207afaa7915bb45-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832221996",
                  "vimeoVideoId": "832221996",
                  "embedUrl": "https://player.vimeo.com/video/832221996?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2) WOWTuesday 03-15-2023",
                  "description": "",
                  "publishedAt": "2023-06-01T11:20:38+00:00",
                  "duration": 3919,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1677981830-6f347c55917f49a7bbbd0416b12d9b415e591c976ee6adec10d3aff2a554a061-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "Law & Grace",
          "parts": 16,
          "projectId": "16434021",
          "videos": [
              {
                  "id": "vimeo_832494933",
                  "vimeoVideoId": "832494933",
                  "embedUrl": "https://player.vimeo.com/video/832494933?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "12. WOW Sunday 02-06-2023",
                  "description": "",
                  "publishedAt": "2023-06-02T03:40:32+00:00",
                  "duration": 3375,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678387314-a1399fba23db9c842d1f0381c845a5373e71e9a7e767160bd4470907cc01a2aa-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832495174",
                  "vimeoVideoId": "832495174",
                  "embedUrl": "https://player.vimeo.com/video/832495174?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "1. WOW Tuesday 01-03-2022",
                  "description": "",
                  "publishedAt": "2023-06-02T03:41:58+00:00",
                  "duration": 3494,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678411397-7438e0509a47b2a200b0267c05dfe1f63087fde51d84c5f114b1173a3d7bcc89-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832495296",
                  "vimeoVideoId": "832495296",
                  "embedUrl": "https://player.vimeo.com/video/832495296?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2. WOW Sunday 01-08-2023",
                  "description": "",
                  "publishedAt": "2023-06-02T03:43:01+00:00",
                  "duration": 4550,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678411230-4fb766a74710652415a339221df2541eaebbc4867593364e7e75238b9c24effb-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832495487",
                  "vimeoVideoId": "832495487",
                  "embedUrl": "https://player.vimeo.com/video/832495487?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3. WOW Tuesday 01-02-2023",
                  "description": "",
                  "publishedAt": "2023-06-02T03:44:17+00:00",
                  "duration": 3521,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678410879-6011f4246654f8fd0420f86c52ad9241141d930f7b78d67e893433d7ea536190-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832495644",
                  "vimeoVideoId": "832495644",
                  "embedUrl": "https://player.vimeo.com/video/832495644?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "6. WOW Sunday 01-22-2023",
                  "description": "",
                  "publishedAt": "2023-06-02T03:45:20+00:00",
                  "duration": 3861,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678409337-2a94c8ca2969ff907ee30b968f1c19b0a51ca1c58896ffb0891f4552862145e7-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832495903",
                  "vimeoVideoId": "832495903",
                  "embedUrl": "https://player.vimeo.com/video/832495903?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "7. WOW Tuesday 01-25-23",
                  "description": "",
                  "publishedAt": "2023-06-02T03:46:52+00:00",
                  "duration": 3324,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678408798-677cd00f7fb2cac9a46f60063d59aba067608104c4c279d1f2e1eecc317316a8-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832496080",
                  "vimeoVideoId": "832496080",
                  "embedUrl": "https://player.vimeo.com/video/832496080?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "9. WOW Tuesday 01-31-23",
                  "description": "",
                  "publishedAt": "2023-06-02T03:48:18+00:00",
                  "duration": 3379,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678408363-6f86cb363f353385b11c0cacce9b2bc0bacc7fe1b88d2e012a6b6c2c6f1470c3-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832496289",
                  "vimeoVideoId": "832496289",
                  "embedUrl": "https://player.vimeo.com/video/832496289?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "11. WOW Tuesday 02-14-23",
                  "description": "",
                  "publishedAt": "2023-06-02T03:49:36+00:00",
                  "duration": 3264,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678388889-a66dfee40cbb876319d2f09d02149a6d4e0a4bc0ad4a0db1120905614431f390-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832496456",
                  "vimeoVideoId": "832496456",
                  "embedUrl": "https://player.vimeo.com/video/832496456?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "13. WOW Sunday 02-19-2023",
                  "description": "",
                  "publishedAt": "2023-06-02T03:50:43+00:00",
                  "duration": 2685,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678388479-6db2db6230acb3891764bcdbd0be3aea887273ad2dd08557312c18424b3fb65b-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832497458",
                  "vimeoVideoId": "832497458",
                  "embedUrl": "https://player.vimeo.com/video/832497458?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "15. WOW Tuesday 02-28-2023",
                  "description": "",
                  "publishedAt": "2023-06-02T03:57:17+00:00",
                  "duration": 3206,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678386525-facc858f5eff27fc682ba240072590fe1353f4745c5d4e0716e349b1088b0c0d-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832497648",
                  "vimeoVideoId": "832497648",
                  "embedUrl": "https://player.vimeo.com/video/832497648?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "16. WOW Tuesday 03-07-2023",
                  "description": "",
                  "publishedAt": "2023-06-02T03:58:24+00:00",
                  "duration": 3852,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678386291-caa2696da24001309d6b02600e2ed68f80bbaebf737318fa6e95c0df07692463-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832501517",
                  "vimeoVideoId": "832501517",
                  "embedUrl": "https://player.vimeo.com/video/832501517?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "14. WOW Tuesday 02-21-2023",
                  "description": "",
                  "publishedAt": "2023-06-02T04:24:00+00:00",
                  "duration": 3347,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678387820-1df417b7aa985a5baeb16b5df9c488706bfa64a4389df9176ed504bbe82cc6fc-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832511795",
                  "vimeoVideoId": "832511795",
                  "embedUrl": "https://player.vimeo.com/video/832511795?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "10. WOW Sunday 02-13-2023",
                  "description": "",
                  "publishedAt": "2023-06-02T05:30:57+00:00",
                  "duration": 4017,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678407803-08f68d8691efd4d709c4680f1c28a8059cd435d8b1528e648c3cc5b7d2319d43-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832512113",
                  "vimeoVideoId": "832512113",
                  "embedUrl": "https://player.vimeo.com/video/832512113?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "8. WOW Sunday 01-29- 2023",
                  "description": "",
                  "publishedAt": "2023-06-02T05:32:31+00:00",
                  "duration": 3844,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678408572-7dee719f6ae48bc8993ee3f61cd710bdae022374f9344b08a722c244dcae8f03-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832514310",
                  "vimeoVideoId": "832514310",
                  "embedUrl": "https://player.vimeo.com/video/832514310?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "4. WOW Sunday 01-15-23",
                  "description": "",
                  "publishedAt": "2023-06-02T05:47:21+00:00",
                  "duration": 3098,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678410003-211593dbdbed22f61bf25791020fae7a93d5dc74e6bc8d0778b04785fe988c97-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832514470",
                  "vimeoVideoId": "832514470",
                  "embedUrl": "https://player.vimeo.com/video/832514470?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "5. WOW Tuesday 01-17-2023",
                  "description": "",
                  "publishedAt": "2023-06-02T05:48:23+00:00",
                  "duration": 3053,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678409781-0f895ff491f0e3d4968d3ca5934d445c9cb45f6d2da5311b874814b17e495d72-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "Righteousness by faith",
          "parts": 3,
          "projectId": "16435177",
          "videos": [
              {
                  "id": "vimeo_832560547",
                  "vimeoVideoId": "832560547",
                  "embedUrl": "https://player.vimeo.com/video/832560547?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOWTuesday 01-18-2022",
                  "description": "",
                  "publishedAt": "2023-06-02T09:30:12+00:00",
                  "duration": 4058,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678479458-4b3574776e3bfb9b4b476b5ffc42c070daa928930fc3f1182f088a6e5fb21343-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832560835",
                  "vimeoVideoId": "832560835",
                  "embedUrl": "https://player.vimeo.com/video/832560835?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOWSunday 01-05-2022",
                  "description": "",
                  "publishedAt": "2023-06-02T09:31:14+00:00",
                  "duration": 3992,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678479876-95ecbd42293ce80082c6cc50cbbd70f5d1e0593bc8c151cee08d94bad498af7b-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832561223",
                  "vimeoVideoId": "832561223",
                  "embedUrl": "https://player.vimeo.com/video/832561223?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOWTuesday 01-11-2022",
                  "description": "",
                  "publishedAt": "2023-06-02T09:32:34+00:00",
                  "duration": 3680,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678479605-32cac2632ec3503c7f416f01c3c2a85f3068a54567281eb47a0b88351f096a57-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "Crash Course",
          "parts": 16,
          "projectId": "16513411",
          "videos": [
              {
                  "id": "vimeo_834307908",
                  "vimeoVideoId": "834307908",
                  "embedUrl": "https://player.vimeo.com/video/834307908?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Sunday 05-29-2022",
                  "description": "",
                  "publishedAt": "2023-06-08T06:56:32+00:00",
                  "duration": 3282,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1681186626-ec39c3e936be674309e4a15eae0bc97702c6259910ddc948cf61f2fa2026be08-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_834308200",
                  "vimeoVideoId": "834308200",
                  "embedUrl": "https://player.vimeo.com/video/834308200?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Tuesday 05-31-2022",
                  "description": "",
                  "publishedAt": "2023-06-08T06:58:02+00:00",
                  "duration": 2828,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1681186491-c13d9a9106bbe2a5d0cf981d739ade3840d5744c175ab63a936b02e885483f19-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_834308361",
                  "vimeoVideoId": "834308361",
                  "embedUrl": "https://player.vimeo.com/video/834308361?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Sunday 05-06-2202",
                  "description": "",
                  "publishedAt": "2023-06-08T06:58:53+00:00",
                  "duration": 2363,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1681186284-e75ed6229c966b9bcfa8b5d3db3fef0afbeb50195569646915a0e6a3881027f9-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_834308512",
                  "vimeoVideoId": "834308512",
                  "embedUrl": "https://player.vimeo.com/video/834308512?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Sunday 06-07-2022",
                  "description": "",
                  "publishedAt": "2023-06-08T06:59:45+00:00",
                  "duration": 3533,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1681185951-04327843ee8eaf845e1ad5e22df59e2f042a6fcde81b2a6ad1a89cc0f70a057c-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_834308799",
                  "vimeoVideoId": "834308799",
                  "embedUrl": "https://player.vimeo.com/video/834308799?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Sunday 06-12-2022",
                  "description": "",
                  "publishedAt": "2023-06-08T07:01:05+00:00",
                  "duration": 2337,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1681185795-ef925bc10206feaddfa879f4f646917aaeb57a606ced8745a7810abe46492ad7-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_834308965",
                  "vimeoVideoId": "834308965",
                  "embedUrl": "https://player.vimeo.com/video/834308965?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Tuesday 14-06-2022",
                  "description": "",
                  "publishedAt": "2023-06-08T07:01:54+00:00",
                  "duration": 2935,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1681185658-82dc51956fdd5f8af714219bfc3394435c02c8877f96d9e04a9c506b3ae8ee3d-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_834309305",
                  "vimeoVideoId": "834309305",
                  "embedUrl": "https://player.vimeo.com/video/834309305?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Sunday 06-19-2022",
                  "description": "",
                  "publishedAt": "2023-06-08T07:03:10+00:00",
                  "duration": 3397,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1681185506-51eb3372974e091c1b0c4169e09e7978ea0fde35831f42fd7111637c182119f2-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_834309606",
                  "vimeoVideoId": "834309606",
                  "embedUrl": "https://player.vimeo.com/video/834309606?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Tuesday 06-21-2022",
                  "description": "",
                  "publishedAt": "2023-06-08T07:04:40+00:00",
                  "duration": 3885,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1681185328-5b2a422b0dc4377c8460b849994010a03b962c61073a0e5de9ca5adaff7afc78-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_834309854",
                  "vimeoVideoId": "834309854",
                  "embedUrl": "https://player.vimeo.com/video/834309854?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Sunday 05-26-2022",
                  "description": "",
                  "publishedAt": "2023-06-08T07:06:00+00:00",
                  "duration": 4412,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1681185053-ca0739eb6db67ca3e03a1384d1e7da948b9220cf0bbbc8298c3f45b7b5e1b11a-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_834310219",
                  "vimeoVideoId": "834310219",
                  "embedUrl": "https://player.vimeo.com/video/834310219?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Tuesday 06-28-2022",
                  "description": "",
                  "publishedAt": "2023-06-08T07:07:31+00:00",
                  "duration": 3296,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1681184872-436d28cf53898899ec10de97fd3df2080e1109004c5900c8d4621ee0a5312340-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_834310471",
                  "vimeoVideoId": "834310471",
                  "embedUrl": "https://player.vimeo.com/video/834310471?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Sunday 07-03-2022",
                  "description": "",
                  "publishedAt": "2023-06-08T07:08:34+00:00",
                  "duration": 2331,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1681184517-c619cbabcb376c5f118ecf1003e16e2c00c4129a510734e84be8b32370616867-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_834310739",
                  "vimeoVideoId": "834310739",
                  "embedUrl": "https://player.vimeo.com/video/834310739?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Tuesday 06-06-2022",
                  "description": "",
                  "publishedAt": "2023-06-08T07:09:48+00:00",
                  "duration": 3479,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1681184231-7c75d83dd18fd5fb23d795071893991add1c549afca405788b7829e6bc853114-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_834311011",
                  "vimeoVideoId": "834311011",
                  "embedUrl": "https://player.vimeo.com/video/834311011?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Tuesday 07-12-2022",
                  "description": "",
                  "publishedAt": "2023-06-08T07:11:07+00:00",
                  "duration": 2614,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1681184013-b09b31c1eff8a2f282b55ecf95b8e55efbf408961e7185ef19d4abd4418a7612-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_834311184",
                  "vimeoVideoId": "834311184",
                  "embedUrl": "https://player.vimeo.com/video/834311184?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Tuesday 01-19-2022",
                  "description": "",
                  "publishedAt": "2023-06-08T07:11:50+00:00",
                  "duration": 2719,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1681183825-56b734362ad6d355e390b27748e8a47803c28dc60af4d292abce26deb881bd9f-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_834311494",
                  "vimeoVideoId": "834311494",
                  "embedUrl": "https://player.vimeo.com/video/834311494?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Sunday 07-17-2022",
                  "description": "",
                  "publishedAt": "2023-06-08T07:13:04+00:00",
                  "duration": 2746,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1681183638-ac3264ad4414eabc66e759758d2cec4f764b11910c202309cf82354381da1e6a-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_834311764",
                  "vimeoVideoId": "834311764",
                  "embedUrl": "https://player.vimeo.com/video/834311764?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Sunday 07-24-22",
                  "description": "",
                  "publishedAt": "2023-06-08T07:14:19+00:00",
                  "duration": 2646,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1681183469-3bd6dafd0803ecba42c082f25f63592704e4e2201074396a811f19274fa8f873-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "The Vast Mind of Christ",
          "parts": 24,
          "projectId": "16435194",
          "videos": [
              {
                  "id": "vimeo_832569224",
                  "vimeoVideoId": "832569224",
                  "embedUrl": "https://player.vimeo.com/video/832569224?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "16. WOW Tuesday 08-03-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T10:03:51+00:00",
                  "duration": 2226,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678507643-3b168137fa18ec7faa79cb1022ffe48dd3fffff61c3d0a2a06f71680f80a984b-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832569336",
                  "vimeoVideoId": "832569336",
                  "embedUrl": "https://player.vimeo.com/video/832569336?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOWTuesday 08-08-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T10:04:18+00:00",
                  "duration": 2108,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678507524-e3ffaabc70a8097446d6918535701f1d6c075a0ea4099a6b59de3686d727fb5a-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832569431",
                  "vimeoVideoId": "832569431",
                  "embedUrl": "https://player.vimeo.com/video/832569431?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOWTuesday 08-10-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T10:04:42+00:00",
                  "duration": 2059,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678507412-7a28b3b54c2c8e3df6b24173448cad320e8b9b149c3623121317481e5c59052e-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832569570",
                  "vimeoVideoId": "832569570",
                  "embedUrl": "https://player.vimeo.com/video/832569570?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "12. WOW Sunday 08-15-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T10:05:12+00:00",
                  "duration": 3047,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678507123-93536c27c3adbfac50a58145d3359f34f06e65d88e206e575485f250addc454a-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832569702",
                  "vimeoVideoId": "832569702",
                  "embedUrl": "https://player.vimeo.com/video/832569702?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOWTuesday 08-17-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T10:05:42+00:00",
                  "duration": 3323,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678506932-e959d25550094affccd34391e2bcbc94f1f2a93b8e8e55ff833ef27731450bee-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832569907",
                  "vimeoVideoId": "832569907",
                  "embedUrl": "https://player.vimeo.com/video/832569907?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "13. WOW Sunday 08-22-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T10:06:23+00:00",
                  "duration": 2889,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678506761-e24103f2d845bf8fea53c9bb5ab02d27c15e29c5398099d7d03884bd3ec468fd-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832570043",
                  "vimeoVideoId": "832570043",
                  "embedUrl": "https://player.vimeo.com/video/832570043?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOWTuesday 08-24-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T10:06:57+00:00",
                  "duration": 2877,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678506483-d342d20ca34473d5ddd3555de64b42f5197b58a2f8df09bbb10904e4992ffeb5-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832570172",
                  "vimeoVideoId": "832570172",
                  "embedUrl": "https://player.vimeo.com/video/832570172?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOWSunday: 08-29-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T10:07:30+00:00",
                  "duration": 1848,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678506321-feda95df32da11b6e08b722167394cf40299502fe9810d3f5f1d6dad48c52b3b-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832570268",
                  "vimeoVideoId": "832570268",
                  "embedUrl": "https://player.vimeo.com/video/832570268?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "1. WOW Tuesday  06-08-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T10:07:51+00:00",
                  "duration": 3770,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678511223-810b759f1bb494b2a16a750cb348f383be669b67aa2007855ed3cd8c8f4ba060-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832570414",
                  "vimeoVideoId": "832570414",
                  "embedUrl": "https://player.vimeo.com/video/832570414?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2. WOW Sunday 06-13-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T10:08:21+00:00",
                  "duration": 3994,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678511112-bbbd72074011be381a5ce5fe2e7c86b1bb5f7af69fe785f4fb971f1ac70ff6ba-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832570549",
                  "vimeoVideoId": "832570549",
                  "embedUrl": "https://player.vimeo.com/video/832570549?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3. WOW Tuesday 06-15-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T10:08:51+00:00",
                  "duration": 2813,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678510964-62cb4b0cd9a12f822b5c5d2f82507fc3e9b26153f0f9926651d67b239350cd58-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832570663",
                  "vimeoVideoId": "832570663",
                  "embedUrl": "https://player.vimeo.com/video/832570663?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "4. WOW Sunday 06-20-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T10:09:22+00:00",
                  "duration": 3013,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678510794-40d6b16dd1d75e5be60ea42586d4a2a2a6479b98a244d998698141ed19da2d45-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832577139",
                  "vimeoVideoId": "832577139",
                  "embedUrl": "https://player.vimeo.com/video/832577139?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "17. WOW Tuesday 08-07-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T10:36:14+00:00",
                  "duration": 2571,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678507762-16ea03f42c1e30c24bb278e178d50b31c1f11ed5555b94bed443dc0bef04f4b2-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832577258",
                  "vimeoVideoId": "832577258",
                  "embedUrl": "https://player.vimeo.com/video/832577258?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "6. WOW Sunday 06-27-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T10:36:38+00:00",
                  "duration": 2918,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678510653-3988e8ebef4706dd19e79eefb69b1449c5073441042f1b92ee5b65d1b125b110-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832577383",
                  "vimeoVideoId": "832577383",
                  "embedUrl": "https://player.vimeo.com/video/832577383?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "5. WOW Tuesday 06-22-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T10:37:08+00:00",
                  "duration": 3528,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678510542-23d1a75a2cf3d00c22b4f73b65b3ccc5c009b0d30be833d7a11a8e6741b5775b-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832577580",
                  "vimeoVideoId": "832577580",
                  "embedUrl": "https://player.vimeo.com/video/832577580?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "7. WOW Tuesday 06-29-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T10:38:07+00:00",
                  "duration": 3535,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678510430-751f2dabc6cdf9f4de1fb06e03eedbf6eab58cf22270b6a5e4ecf2e357188f23-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832577757",
                  "vimeoVideoId": "832577757",
                  "embedUrl": "https://player.vimeo.com/video/832577757?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "8. WOW Tuesday 07-04-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T10:38:45+00:00",
                  "duration": 3171,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678510293-24f30faf3a0a0d74395672d039c0b0c2c0e9ab87efa98c5b90ee74f5a22a31b7-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832577908",
                  "vimeoVideoId": "832577908",
                  "embedUrl": "https://player.vimeo.com/video/832577908?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "9. WOW Tuesday 07-06-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T10:39:18+00:00",
                  "duration": 3063,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678510198-98f9537c7db0d2ddef345ff93f8985666253e46ac63f96ab6532ad3175135b27-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832578043",
                  "vimeoVideoId": "832578043",
                  "embedUrl": "https://player.vimeo.com/video/832578043?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "10. WOW Sunday 07-11-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T10:39:56+00:00",
                  "duration": 2924,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678510090-cb2fc84dfaa007a8627a790e94ccebe8bb25624e22204802a9a84a057192fd06-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832578188",
                  "vimeoVideoId": "832578188",
                  "embedUrl": "https://player.vimeo.com/video/832578188?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "11. WOW Tuesday 07-13-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T10:40:27+00:00",
                  "duration": 2728,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678509483-a58011198a9a890677ada5612eab1d90c7927e4993fb455e6812572099cfd4ed-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832578345",
                  "vimeoVideoId": "832578345",
                  "embedUrl": "https://player.vimeo.com/video/832578345?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "12. WOW Sunday 07-18-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T10:41:02+00:00",
                  "duration": 1861,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678509337-aae75884467d5908e5d738ceb2dad81b6db5d42c4f530258c3232d0c42611f08-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832578421",
                  "vimeoVideoId": "832578421",
                  "embedUrl": "https://player.vimeo.com/video/832578421?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "13. WOW Tuesday 07-20-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T10:41:16+00:00",
                  "duration": 2350,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678509122-dbad117a484d64d9f429334fb0205630e079f02d332b7f5773c34d679f09f116-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832578543",
                  "vimeoVideoId": "832578543",
                  "embedUrl": "https://player.vimeo.com/video/832578543?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "14. WOW Sunday 07-25-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T10:41:42+00:00",
                  "duration": 2120,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678508993-de31bd3b0fa8076289a4509d169c2b516afb526759de79b37c942f33d091a611-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832578659",
                  "vimeoVideoId": "832578659",
                  "embedUrl": "https://player.vimeo.com/video/832578659?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "15. WOW Tuesday 07-27-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T10:42:10+00:00",
                  "duration": 3075,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678507875-d652968ba349855e2d9f120be23e5bb0f06f54265935e8c911f369360d487a34-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "Jesus the Man",
          "parts": 4,
          "projectId": "16435183",
          "videos": [
              {
                  "id": "vimeo_832564422",
                  "vimeoVideoId": "832564422",
                  "embedUrl": "https://player.vimeo.com/video/832564422?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "4 - WOW Tuesday 12-28-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T09:45:14+00:00",
                  "duration": 3370,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678489713-556e924204a252fe8bc3e53a20e927ba0fba63ffd40291f58b5bccfa0df552d2-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832564585",
                  "vimeoVideoId": "832564585",
                  "embedUrl": "https://player.vimeo.com/video/832564585?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "1 - WOWSunday 12-19-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T09:45:55+00:00",
                  "duration": 3725,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678489054-a9806b55fad4bd8034209071dabd7ca0bea6e4f394018997156c95b601e6f3d2-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832564721",
                  "vimeoVideoId": "832564721",
                  "embedUrl": "https://player.vimeo.com/video/832564721?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2 - WOWTuesday 12-21-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T09:46:36+00:00",
                  "duration": 3610,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678489271-db43f7d283d643641c4f4a13239afcc80721d3d5aba387513faf9960b0809134-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832565039",
                  "vimeoVideoId": "832565039",
                  "embedUrl": "https://player.vimeo.com/video/832565039?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3 - Son of Man (Christmas Message 2021)",
                  "description": "",
                  "publishedAt": "2023-06-02T09:47:54+00:00",
                  "duration": 4121,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678489572-92c83d2b0c880056a0aecce812dff137c4335475336e854973acb8cddd865e88-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "Wisdom Series",
          "parts": 9,
          "projectId": "16435184",
          "videos": [
              {
                  "id": "vimeo_832564798",
                  "vimeoVideoId": "832564798",
                  "embedUrl": "https://player.vimeo.com/video/832564798?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Sunday 12-14-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T09:46:53+00:00",
                  "duration": 3221,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678490868-25a34106f1539f8173d122a991fff6d8f94bd7a643370488505bd7120e3d4589-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832565119",
                  "vimeoVideoId": "832565119",
                  "embedUrl": "https://player.vimeo.com/video/832565119?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Tuesday 11-09-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T09:48:13+00:00",
                  "duration": 2990,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678492326-cef613a9e65ac8d71624f2d003ae8d10a1d4703b69af4a962a791178f3f27153-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832565350",
                  "vimeoVideoId": "832565350",
                  "embedUrl": "https://player.vimeo.com/video/832565350?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Sunday 11-14-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T09:49:15+00:00",
                  "duration": 2747,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678492246-defb14daffb5440d9fc36389a934ccfcf90d66a87bd1122ccfea5e118288aab2-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832565666",
                  "vimeoVideoId": "832565666",
                  "embedUrl": "https://player.vimeo.com/video/832565666?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Tuesday 11-21-21",
                  "description": "",
                  "publishedAt": "2023-06-02T09:50:21+00:00",
                  "duration": 2848,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678492139-b45d07e28ea349da9ccaa318b53233cbd4aecf231477ae1f2a47e2dbc7252434-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832565990",
                  "vimeoVideoId": "832565990",
                  "embedUrl": "https://player.vimeo.com/video/832565990?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Tuesday 11-23-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T09:51:32+00:00",
                  "duration": 2332,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678491925-391421f2216043238fccd7bedf7d7c7e7970110c71d287d8129f34cb2c5393d6-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832566222",
                  "vimeoVideoId": "832566222",
                  "embedUrl": "https://player.vimeo.com/video/832566222?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Tuesday 11-28-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T09:52:33+00:00",
                  "duration": 2227,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678491760-353437f0a1be190b23189f1d34f2619c8f853eb3c47353ea142ab940ec0a983d-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832566365",
                  "vimeoVideoId": "832566365",
                  "embedUrl": "https://player.vimeo.com/video/832566365?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Tuesday 12-05-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T09:53:09+00:00",
                  "duration": 2077,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678491489-86bc4db896ea7464f7c48b44b9f2e6825fc0d9c8a93e623f0cfbf066ad7209f9-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832566518",
                  "vimeoVideoId": "832566518",
                  "embedUrl": "https://player.vimeo.com/video/832566518?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Tuesday 12-07-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T09:53:46+00:00",
                  "duration": 2711,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678491266-65f7051d361fae41eb884409a8932eeed69541a40bd131ec198f0c3ce347cf13-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832566752",
                  "vimeoVideoId": "832566752",
                  "embedUrl": "https://player.vimeo.com/video/832566752?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Sunday 12-12-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T09:54:42+00:00",
                  "duration": 2482,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678491123-80c80c1e81fdc2b78cb8f5311836c6108c558978696d3d1d23f8c2c39ab737a0-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "New Creation Reality",
          "parts": 11,
          "projectId": "16435187",
          "videos": [
              {
                  "id": "vimeo_832565211",
                  "vimeoVideoId": "832565211",
                  "embedUrl": "https://player.vimeo.com/video/832565211?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Sunday 11-07-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T09:48:39+00:00",
                  "duration": 2884,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678494156-975d809c0684080f2d8c84ba2293ac98289c242a4fd596a1b03255441964b557-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832565562",
                  "vimeoVideoId": "832565562",
                  "embedUrl": "https://player.vimeo.com/video/832565562?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Tuesday 09-28-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T09:50:00+00:00",
                  "duration": 2648,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678497466-8d3dfd66b3e89b6b75e7ce9ce27500cc891425c1241e798b67725205722bd62a-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832565858",
                  "vimeoVideoId": "832565858",
                  "embedUrl": "https://player.vimeo.com/video/832565858?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Tuesday 10-05-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T09:51:03+00:00",
                  "duration": 2941,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678497222-c68fc0f60245d25d5a767bc7184f8bdb002cc3abda8b201170a694b1130fa49f-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832566114",
                  "vimeoVideoId": "832566114",
                  "embedUrl": "https://player.vimeo.com/video/832566114?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Sunday 10-10-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T09:52:03+00:00",
                  "duration": 2125,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678496937-ed012dbb819d006548a909d71c705b10ec02d1b9690abf2f87f67db38a4aeea6-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832566262",
                  "vimeoVideoId": "832566262",
                  "embedUrl": "https://player.vimeo.com/video/832566262?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Tuesday 12-10-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T09:52:43+00:00",
                  "duration": 2497,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678496785-bc9e311cf09511324b8f148a1b925b1433fea5c93144509adc5c3783929b9a96-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832566559",
                  "vimeoVideoId": "832566559",
                  "embedUrl": "https://player.vimeo.com/video/832566559?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Tuesday 17-10-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T09:53:57+00:00",
                  "duration": 2512,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678496450-205b83420843e5961a4adf2a3cf4d0df6a234c8ef9b47a51fd0aca647bc4f814-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832566749",
                  "vimeoVideoId": "832566749",
                  "embedUrl": "https://player.vimeo.com/video/832566749?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Tuesday 19-10-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T09:54:41+00:00",
                  "duration": 2517,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678496187-9aac982c4bfc3f9f49faf94a79b7edf03bc43b8b60cafc981337c92bab08769b-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832567038",
                  "vimeoVideoId": "832567038",
                  "embedUrl": "https://player.vimeo.com/video/832567038?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Tuesday 24-10-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T09:55:42+00:00",
                  "duration": 2217,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678495987-b338fcc54c0b0534e9065f2025b673bf00df89b1c040cc074d49fe4537d0a52d-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832567140",
                  "vimeoVideoId": "832567140",
                  "embedUrl": "https://player.vimeo.com/video/832567140?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Tuesday 10-26-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T09:56:09+00:00",
                  "duration": 2298,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678495800-96783277757cda149f3c3be92c824db6d727a2f0b0b58264083bc55253c93a5b-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832567290",
                  "vimeoVideoId": "832567290",
                  "embedUrl": "https://player.vimeo.com/video/832567290?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "WOW Sunday 10-31-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T09:56:43+00:00",
                  "duration": 2407,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678495608-1811b2130702c0debae715f87c4c53acab0a22c4446b50a33e5fc4a221f15a4a-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_832567403",
                  "vimeoVideoId": "832567403",
                  "embedUrl": "https://player.vimeo.com/video/832567403?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "9 - WOW Tuesday 02-30-2021",
                  "description": "",
                  "publishedAt": "2023-06-02T09:57:06+00:00",
                  "duration": 2109,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1678484695-01eee87b4401927b6e4bc6ec6cec0aba0b8c94ecad683b6bb3afe1ab424a6335-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "Ego Man",
          "parts": 7,
          "projectId": "16556164",
          "videos": [
              {
                  "id": "vimeo_835356342",
                  "vimeoVideoId": "835356342",
                  "embedUrl": "https://player.vimeo.com/video/835356342?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "7 - WOW Sunday 06-06-2021",
                  "description": "",
                  "publishedAt": "2023-06-12T08:42:23+00:00",
                  "duration": 3223,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1682775874-952734b795443037cd3fb729aea4ac90c6f3445aba55074f3f100c8e93f99285-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_835356488",
                  "vimeoVideoId": "835356488",
                  "embedUrl": "https://player.vimeo.com/video/835356488?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "1 - WOWTuesday 03-30-2021",
                  "description": "",
                  "publishedAt": "2023-06-12T08:42:56+00:00",
                  "duration": 4233,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1682776784-7b343b5f747d385934d2f2917a0144094572025456a7c2000ebaff3328c6e7e6-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_835356844",
                  "vimeoVideoId": "835356844",
                  "embedUrl": "https://player.vimeo.com/video/835356844?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2 - WOWTuesday 04-04-2021",
                  "description": "",
                  "publishedAt": "2023-06-12T08:44:17+00:00",
                  "duration": 4238,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1682777091-44b2ae2a8ba756d398d980f8a377f8b236e6afbd0dd515c60d86087812c6f315-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_835357186",
                  "vimeoVideoId": "835357186",
                  "embedUrl": "https://player.vimeo.com/video/835357186?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3 - WOW Sunday 11-04-2021",
                  "description": "",
                  "publishedAt": "2023-06-12T08:45:44+00:00",
                  "duration": 3009,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1682778210-f2eb572b15c3a78c6ad1ccfce0eb89d0f92e2a64c65988042420ed50e7adcacf-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_835357379",
                  "vimeoVideoId": "835357379",
                  "embedUrl": "https://player.vimeo.com/video/835357379?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "4 - WOW Tuesday 04-13-2021",
                  "description": "",
                  "publishedAt": "2023-06-12T08:46:37+00:00",
                  "duration": 3409,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1682777935-a62291c0e5389f27b6f970895904036032bba93915be1adeaafb242a0ef73010-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_835357684",
                  "vimeoVideoId": "835357684",
                  "embedUrl": "https://player.vimeo.com/video/835357684?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "5 - WOW Sunday 04-18-2021",
                  "description": "",
                  "publishedAt": "2023-06-12T08:47:45+00:00",
                  "duration": 3629,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1682778706-496a7b69845cadb6c68d5b89c71fedbfbe229bb2406468541bbc4f81883cec80-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_835357941",
                  "vimeoVideoId": "835357941",
                  "embedUrl": "https://player.vimeo.com/video/835357941?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "6 - WOW Tuesday 04-20-2021",
                  "description": "",
                  "publishedAt": "2023-06-12T08:48:47+00:00",
                  "duration": 3809,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1682778870-e8828383482e2d6476a1140d31eeb82caa83fc3b0d196f5a51129ba43640d892-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "Emotional Alchemy",
          "parts": 5,
          "projectId": "16556407",
          "videos": [
              {
                  "id": "vimeo_835383161",
                  "vimeoVideoId": "835383161",
                  "embedUrl": "https://player.vimeo.com/video/835383161?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "5 - WOW Sunday 03-28-2020",
                  "description": "",
                  "publishedAt": "2023-06-12T10:18:03+00:00",
                  "duration": 2822,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1682814659-fd323f355e21383b697f4749fefbf71e7f5a506539fbb6774ac34ed28b563a73-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_835383405",
                  "vimeoVideoId": "835383405",
                  "embedUrl": "https://player.vimeo.com/video/835383405?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "1 - WOW Tuesday 02-23-2021",
                  "description": "",
                  "publishedAt": "2023-06-12T10:18:55+00:00",
                  "duration": 4132,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1682815244-d2bf70663e88d822a1f2bd2836e74842ea984e889a57967dce36520b2b3cec05-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_835383797",
                  "vimeoVideoId": "835383797",
                  "embedUrl": "https://player.vimeo.com/video/835383797?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2 - WOWSunday 02-28-2021",
                  "description": "",
                  "publishedAt": "2023-06-12T10:20:33+00:00",
                  "duration": 3773,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1682815596-204be4dd3c72d15ba3b7ab8d6f3da9c47ef6f01dab6d1d7277b21809b445e233-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_835384101",
                  "vimeoVideoId": "835384101",
                  "embedUrl": "https://player.vimeo.com/video/835384101?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3 - WOW Tuesday 03-02-2021",
                  "description": "",
                  "publishedAt": "2023-06-12T10:21:42+00:00",
                  "duration": 3418,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1682816063-0418121c87f7a8d33772f0ef84fc6bbaa55f78808acb2596e0672194ee14676b-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_835384432",
                  "vimeoVideoId": "835384432",
                  "embedUrl": "https://player.vimeo.com/video/835384432?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "4 - WOW Tuesday 03-27-2021",
                  "description": "",
                  "publishedAt": "2023-06-12T10:22:43+00:00",
                  "duration": 3347,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1682816372-b79d081d17e5c7d96e223e890cb38a20ec337624ab177e32458462b123792404-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "Rise of the SHE",
          "parts": 8,
          "projectId": "16556166",
          "videos": [
              {
                  "id": "vimeo_835388518",
                  "vimeoVideoId": "835388518",
                  "embedUrl": "https://player.vimeo.com/video/835388518?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "8 - WOW Sunday 02-21-2021",
                  "description": "",
                  "publishedAt": "2023-06-12T10:38:29+00:00",
                  "duration": 3853,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1682822489-0a1636434f24df6f7471e0f6ae5bac5a89441568fea2e04943f8e573c1ff59d0-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_835388826",
                  "vimeoVideoId": "835388826",
                  "embedUrl": "https://player.vimeo.com/video/835388826?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "1 - WOW Tuesday  01-26-2021",
                  "description": "",
                  "publishedAt": "2023-06-12T10:39:44+00:00",
                  "duration": 2886,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1682822787-5fed34633168dfb827921e082b4547b3b98fe6d5b87236dfe9ed30e462be478d-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_835389051",
                  "vimeoVideoId": "835389051",
                  "embedUrl": "https://player.vimeo.com/video/835389051?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2 - WOW Sunday 01-31-2021",
                  "description": "",
                  "publishedAt": "2023-06-12T10:40:36+00:00",
                  "duration": 4760,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1682823165-11bb027fbee665642b1d2442c2194053978af36ef9d08183bdab585f65f0bac0-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_835389312",
                  "vimeoVideoId": "835389312",
                  "embedUrl": "https://player.vimeo.com/video/835389312?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3 - WOW Tuesday 02-02-2021",
                  "description": "",
                  "publishedAt": "2023-06-12T10:41:45+00:00",
                  "duration": 3653,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1682823557-e5b69a5481224f6e38f05209bddd35c373168e815472ca2884058613622fa500-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_835389596",
                  "vimeoVideoId": "835389596",
                  "embedUrl": "https://player.vimeo.com/video/835389596?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "4 - WOW Sunday 02-07-2021",
                  "description": "",
                  "publishedAt": "2023-06-12T10:42:55+00:00",
                  "duration": 4032,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1682824682-67597376c93640b426138bedb7ba360120a80d38ec2d130dbf798a657bc44bfa-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_835389853",
                  "vimeoVideoId": "835389853",
                  "embedUrl": "https://player.vimeo.com/video/835389853?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "5 - WOW Tuesday 02- 09-2021",
                  "description": "",
                  "publishedAt": "2023-06-12T10:44:16+00:00",
                  "duration": 3172,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1682824377-bf6f2bbd22add4b20fa989bea94c97162cd91f46f123c78eb19de717e9de2819-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_835390086",
                  "vimeoVideoId": "835390086",
                  "embedUrl": "https://player.vimeo.com/video/835390086?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "6 - WOW Sunday 02-14-2021",
                  "description": "",
                  "publishedAt": "2023-06-12T10:45:21+00:00",
                  "duration": 4033,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1682824922-fdf315d3e06a6dd077beef23f70f47844fd54d515b9636a07e7acaa1505d88b5-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_835390378",
                  "vimeoVideoId": "835390378",
                  "embedUrl": "https://player.vimeo.com/video/835390378?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "7 - WOW Tuesday 02-26-2021",
                  "description": "",
                  "publishedAt": "2023-06-12T10:46:33+00:00",
                  "duration": 3514,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1682825347-4eda49ea0f74c3179ebc81bb1ef83d197f9c40520d32f91f14dae7466208d28f-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "Who is Satan",
          "parts": 8,
          "projectId": "16605806",
          "videos": [
              {
                  "id": "vimeo_836412189",
                  "vimeoVideoId": "836412189",
                  "embedUrl": "https://player.vimeo.com/video/836412189?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2 - WOW Sunday 09-27-2020",
                  "description": "",
                  "publishedAt": "2023-06-15T04:40:16+00:00",
                  "duration": 3398,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1684309858-2b15d628f6d87bf1d9fc2e15130d6d7f84432e1ac94882a6a167baa56ec8f9df-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_836412300",
                  "vimeoVideoId": "836412300",
                  "embedUrl": "https://player.vimeo.com/video/836412300?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3 - WOW Tuesday 29-09-2020",
                  "description": "",
                  "publishedAt": "2023-06-15T04:40:58+00:00",
                  "duration": 3933,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1684310054-dcea507d70bed99d448af6260473450fcd7380244291ef3d57307bbd99d4267f-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_836412421",
                  "vimeoVideoId": "836412421",
                  "embedUrl": "https://player.vimeo.com/video/836412421?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "4 - WOW Tuesday 10-13-2020",
                  "description": "",
                  "publishedAt": "2023-06-15T04:41:46+00:00",
                  "duration": 3703,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1684310160-70bb083a9bf22550fe07fb491236a05f179dcedab3748f33b215a7b7ffcb509a-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_836412487",
                  "vimeoVideoId": "836412487",
                  "embedUrl": "https://player.vimeo.com/video/836412487?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "5 - WOW Tuesday 10-20-2020",
                  "description": "",
                  "publishedAt": "2023-06-15T04:42:12+00:00",
                  "duration": 3206,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1684310200-adc78beaf240dc045edc2738bf940e2c8d25f219ca14e7d4ff80ec10cd26e33f-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_836412537",
                  "vimeoVideoId": "836412537",
                  "embedUrl": "https://player.vimeo.com/video/836412537?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "6 - WOW Tuesday 10-27-2020",
                  "description": "",
                  "publishedAt": "2023-06-15T04:42:30+00:00",
                  "duration": 4092,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1684310344-75d179d0e10089acd47a66672db95ec98a18bd5c34bea8bf947cac8fd220dc42-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_836412587",
                  "vimeoVideoId": "836412587",
                  "embedUrl": "https://player.vimeo.com/video/836412587?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "7 - WOW Tuesday 11-03-2020",
                  "description": "",
                  "publishedAt": "2023-06-15T04:42:55+00:00",
                  "duration": 3826,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1684310479-f3a7917ec35b8c258a64e3ef8fc8d9031dfd6e29e033e355c6b6594c8608452e-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_836412644",
                  "vimeoVideoId": "836412644",
                  "embedUrl": "https://player.vimeo.com/video/836412644?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "8 - WOW Tuesday 11-17-2020",
                  "description": "",
                  "publishedAt": "2023-06-15T04:43:18+00:00",
                  "duration": 3193,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1684310478-07cb8edf6572d230b69e8b092fd465bed972e8d4a50bdfe41fb6747e5b293a1f-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_836412706",
                  "vimeoVideoId": "836412706",
                  "embedUrl": "https://player.vimeo.com/video/836412706?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "1 - WOW Tuesday 09-22-2020",
                  "description": "",
                  "publishedAt": "2023-06-15T04:43:45+00:00",
                  "duration": 3176,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1684310666-d8c32547be45aa1db44c1d0982978b5f0c3a897802789e90ebac38e55349f20a-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "Synchronized Knowledge",
          "parts": 14,
          "projectId": "17360611",
          "videos": [
              {
                  "id": "vimeo_854602226",
                  "vimeoVideoId": "854602226",
                  "embedUrl": "https://player.vimeo.com/video/854602226?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "14 - Moving in the Glory (Session 08)",
                  "description": "",
                  "publishedAt": "2023-08-15T08:52:48+00:00",
                  "duration": 2729,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1710653218-143265b23b91adcd29e4fd6e0f0fb32b5eb2d86b895676712c6c3fd0f9db73fb-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_854602374",
                  "vimeoVideoId": "854602374",
                  "embedUrl": "https://player.vimeo.com/video/854602374?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "1 - Synchronized Knowledge  Advanced Prophetic Mentoring  by Kirby de Lanerolle  (Session 01)",
                  "description": "",
                  "publishedAt": "2023-08-15T08:53:37+00:00",
                  "duration": 3384,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1710653543-94873bbf5ebcf6c0cc2791cfa57b080191ee145286bffa2430faf75d9365f797-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_854602509",
                  "vimeoVideoId": "854602509",
                  "embedUrl": "https://player.vimeo.com/video/854602509?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2 - Spirit Gym - Psych Diagrams (Session 01)",
                  "description": "",
                  "publishedAt": "2023-08-15T08:54:25+00:00",
                  "duration": 709,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1710653495-9fe5ab4934e8911fe2d243f2f4081dfa056635838453dcd647f5dcc052aa3e78-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_854602543",
                  "vimeoVideoId": "854602543",
                  "embedUrl": "https://player.vimeo.com/video/854602543?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3 - The practice, interpretation and flow of tongues in the prophetic (Session 02)",
                  "description": "",
                  "publishedAt": "2023-08-15T08:54:38+00:00",
                  "duration": 2038,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1710653662-cf6cb43a4a3191706151b3636921bf1d9cc84d96527e91eecfc0859cf95ebd94-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_854602618",
                  "vimeoVideoId": "854602618",
                  "embedUrl": "https://player.vimeo.com/video/854602618?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "4 - Prophetic Brain Wave State  (Session 03)",
                  "description": "",
                  "publishedAt": "2023-08-15T08:55:16+00:00",
                  "duration": 2340,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1710653819-980ef3eac32765a0bda1c42727f34696174b7eb86bd0dca15d415838a357e531-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_854602741",
                  "vimeoVideoId": "854602741",
                  "embedUrl": "https://player.vimeo.com/video/854602741?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "5 - Spirit Gym -  Woman at the well (Session 03)",
                  "description": "",
                  "publishedAt": "2023-08-15T08:55:59+00:00",
                  "duration": 2314,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1710654031-a1bd890a8568b324cc939c4be1c83fe2d89f28b925a06faafb381e1dd7c607bd-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_854602882",
                  "vimeoVideoId": "854602882",
                  "embedUrl": "https://player.vimeo.com/video/854602882?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "6 - Question & Answer  (Session 03)",
                  "description": "",
                  "publishedAt": "2023-08-15T08:56:46+00:00",
                  "duration": 977,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1710654096-e74c4f7c809e9c3076353fd1d6f52cf4de6d646a222df5af3b5b39f73e56d7f9-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_854602930",
                  "vimeoVideoId": "854602930",
                  "embedUrl": "https://player.vimeo.com/video/854602930?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "7 - Kairos Time – Different times of prayer in the day (Session 04)",
                  "description": "",
                  "publishedAt": "2023-08-15T08:57:07+00:00",
                  "duration": 1365,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1710654306-32cf7b79964f7e7c35b598f8ae758a6218ab484586339597265ca56d5d5fc63b-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_854603011",
                  "vimeoVideoId": "854603011",
                  "embedUrl": "https://player.vimeo.com/video/854603011?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "8 - Kairos God for Chronos Moments  (Session 05)",
                  "description": "",
                  "publishedAt": "2023-08-15T08:57:31+00:00",
                  "duration": 4515,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1710654770-cc1e7205bfaf653aae4f0c5eeb2e61e3bb4622eeac1df38c2e91d4985ea744e3-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_854603255",
                  "vimeoVideoId": "854603255",
                  "embedUrl": "https://player.vimeo.com/video/854603255?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "9 - Spirit Gym Living Creatures & Seraphim  (Session 05)",
                  "description": "",
                  "publishedAt": "2023-08-15T08:58:52+00:00",
                  "duration": 2912,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1710654978-feb88cfed2e905a1051c0f14b4f0dfb69f1e36085248b6e6e49a564dc9a72a17-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_854603446",
                  "vimeoVideoId": "854603446",
                  "embedUrl": "https://player.vimeo.com/video/854603446?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "10 - Question & Answer (Session 05)",
                  "description": "",
                  "publishedAt": "2023-08-15T08:59:53+00:00",
                  "duration": 787,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1710654945-67dbd4479986bb0ec07bfb01b96b1c738ddc8e8967f844bb512144c03f1bcfc7-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_854603510",
                  "vimeoVideoId": "854603510",
                  "embedUrl": "https://player.vimeo.com/video/854603510?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "11 - Intercessory Body and Prophetic Life  (Session 06)",
                  "description": "",
                  "publishedAt": "2023-08-15T09:00:11+00:00",
                  "duration": 1649,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1710655115-fdd0661cf7ae4bd8653201090cad51c986d71eb9a688e3d77f02c0d400e19e48-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_854603595",
                  "vimeoVideoId": "854603595",
                  "embedUrl": "https://player.vimeo.com/video/854603595?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "12 - Fasting, Diets and Nootropics (Session 07)",
                  "description": "",
                  "publishedAt": "2023-08-15T09:00:42+00:00",
                  "duration": 847,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1710655189-96d88a7955e9714ff61809a2cfaed18447a2aa0b4c959fa83544acf3c5e4ca82-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_854603673",
                  "vimeoVideoId": "854603673",
                  "embedUrl": "https://player.vimeo.com/video/854603673?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "13 - Spirit Gym Deep waters meditation (Session 07)",
                  "description": "",
                  "publishedAt": "2023-08-15T09:01:03+00:00",
                  "duration": 1628,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1710655405-4c88dfbe4e224778e863d353fccbed0cbcf4b668df7699e7f6e38d5436cfa761-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "Awaken to Righteousness (South Africa)",
          "parts": 3,
          "projectId": "18769102",
          "videos": [
              {
                  "id": "vimeo_892497657",
                  "vimeoVideoId": "892497657",
                  "embedUrl": "https://player.vimeo.com/video/892497657?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3 - Cleansed Conscience - The Way in to the Holy of Holies - 2014",
                  "description": "",
                  "publishedAt": "2023-12-08T04:24:49+00:00",
                  "duration": 7522,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765656708-0c6023f0a907e063e11f469103d806bbec201c520435f1d6092257e518aaac49-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892498024",
                  "vimeoVideoId": "892498024",
                  "embedUrl": "https://player.vimeo.com/video/892498024?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "1 - Awaken to Righteousness - Kirby de Lanerolle - Spirit Word (South Africa) - DAY 1 - 2014",
                  "description": "",
                  "publishedAt": "2023-12-08T04:27:22+00:00",
                  "duration": 6991,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765656894-c5b81855143ab3d96ac8af9d001768115bc77bcdb3dc494fbb5d0b575cb43f27-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892498117",
                  "vimeoVideoId": "892498117",
                  "embedUrl": "https://player.vimeo.com/video/892498117?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2 - Agape Frequency - Awakening Conference (Spirit Word South Africa) - Day 2 - 2014",
                  "description": "",
                  "publishedAt": "2023-12-08T04:28:05+00:00",
                  "duration": 7348,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765656994-5af18d870012e749296a4e3e28b559cad10f1992d2c26ed160b3308d825c8afc-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "Communion Series",
          "parts": 6,
          "projectId": "18769103",
          "videos": [
              {
                  "id": "vimeo_892501654",
                  "vimeoVideoId": "892501654",
                  "embedUrl": "https://player.vimeo.com/video/892501654?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "6 - More Training on Communion - 05-26-2015",
                  "description": "",
                  "publishedAt": "2023-12-08T04:49:22+00:00",
                  "duration": 6599,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765663638-1e3cc3fa8541ed00bad9d9d7b1c96c97bfd3ff52a76be0a8a7544964b5e7a5d1-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892502011",
                  "vimeoVideoId": "892502011",
                  "embedUrl": "https://player.vimeo.com/video/892502011?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "1 - Why Work in Grace - 05-05-2015",
                  "description": "",
                  "publishedAt": "2023-12-08T04:51:03+00:00",
                  "duration": 6048,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765664065-ecf7997c4fc74bc2aaa6bfe00b2f3340b204505b33676fc7de5f8103ac1ac220-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892502401",
                  "vimeoVideoId": "892502401",
                  "embedUrl": "https://player.vimeo.com/video/892502401?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2 - Breaking out of Natural Limitations - Fiona - 05-10-2015",
                  "description": "",
                  "publishedAt": "2023-12-08T04:53:17+00:00",
                  "duration": 6254,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765667676-cafdf4060dc36b4f6cb56719b37628c8e3a419b774e0faf1dada2893669bd6a6-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892502799",
                  "vimeoVideoId": "892502799",
                  "embedUrl": "https://player.vimeo.com/video/892502799?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3 - Binding through the Power of Agreement - 05-12-2015",
                  "description": "",
                  "publishedAt": "2023-12-08T04:55:30+00:00",
                  "duration": 7736,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765665345-974b80cfeb34295eb62d3faaa88e3e5902f843e4d55ca3a5ae657cd5709b9745-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892503169",
                  "vimeoVideoId": "892503169",
                  "embedUrl": "https://player.vimeo.com/video/892503169?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "4 - Incorruptible Seed - Fiona - 5-17-2015",
                  "description": "",
                  "publishedAt": "2023-12-08T04:57:46+00:00",
                  "duration": 4061,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765665765-bf5756b78f28257f30da6629977e742bc88816d2eafe7b9d94006f0e8a8904e4-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892503409",
                  "vimeoVideoId": "892503409",
                  "embedUrl": "https://player.vimeo.com/video/892503409?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "5 - Communion vs Cup of Demons - 05-19-2015",
                  "description": "",
                  "publishedAt": "2023-12-08T04:59:11+00:00",
                  "duration": 3254,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765731689-6c44f5122477f9ae17169120b71050a1cd4a92c7f789dbe7c3a6f0a4c053a37c-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "The New Grace Series",
          "parts": 15,
          "projectId": "18769105",
          "videos": [
              {
                  "id": "vimeo_892505573",
                  "vimeoVideoId": "892505573",
                  "embedUrl": "https://player.vimeo.com/video/892505573?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "15 - Only Begotten Son - Sons of Abraham or Sons of God - 07-28-2015",
                  "description": "",
                  "publishedAt": "2023-12-08T05:11:26+00:00",
                  "duration": 5482,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765669935-f4c26bb7b17bf7cd1d334c318cf7b138fe2cbf6b4d036490c251e434d3b9de3b-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892505911",
                  "vimeoVideoId": "892505911",
                  "embedUrl": "https://player.vimeo.com/video/892505911?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "1 - Saved from Death and Hell - 06-02-2015",
                  "description": "",
                  "publishedAt": "2023-12-08T05:13:06+00:00",
                  "duration": 4451,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765670417-4a08fee9506812aa9f89109b80e90b57e42bcd4df8af1cabed98eea676ca0241-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892506183",
                  "vimeoVideoId": "892506183",
                  "embedUrl": "https://player.vimeo.com/video/892506183?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2 - The Spirit of Man - 06-09-2015",
                  "description": "",
                  "publishedAt": "2023-12-08T05:14:44+00:00",
                  "duration": 5414,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765671062-1db4fc75e66457d9a72885f32e60463873eb8bb05efe966aa579ae50224006ad-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892506558",
                  "vimeoVideoId": "892506558",
                  "embedUrl": "https://player.vimeo.com/video/892506558?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3 - Submission and Entitlement - Fiona - 06-14-2015",
                  "description": "",
                  "publishedAt": "2023-12-08T05:16:59+00:00",
                  "duration": 5045,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765671614-35e4c79e50b1c7a527fba95c686bf9b2c0a53ee290003512bc56c2cf95b1f1ab-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892506876",
                  "vimeoVideoId": "892506876",
                  "embedUrl": "https://player.vimeo.com/video/892506876?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "4 - Regenerated Spirit Man - 06-16-2015",
                  "description": "",
                  "publishedAt": "2023-12-08T05:19:05+00:00",
                  "duration": 4360,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765734812-e8545d4b23bf0e76941a24f097cf85e3ece1b5dd8a2c7fd994cae95562ea71df-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892507157",
                  "vimeoVideoId": "892507157",
                  "embedUrl": "https://player.vimeo.com/video/892507157?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "5. Identity in Grace - Fiona - 06-21-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T05:20:51+00:00",
                  "duration": 4292,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765672541-18a1fa1147391de29dd7150577140519ba97ba46a34ea151847abf08b68d38ff-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892507373",
                  "vimeoVideoId": "892507373",
                  "embedUrl": "https://player.vimeo.com/video/892507373?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "6 - I Died - 06-23-2015",
                  "description": "",
                  "publishedAt": "2023-12-08T05:22:08+00:00",
                  "duration": 3425,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765672882-ff4a85fef781256a7bb2109940e793ee9bb661eba9788efad64e4fd60a455b24-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892507594",
                  "vimeoVideoId": "892507594",
                  "embedUrl": "https://player.vimeo.com/video/892507594?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "7 - For His Name's Sake - 28-05-2015",
                  "description": "",
                  "publishedAt": "2023-12-08T05:23:23+00:00",
                  "duration": 3318,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765673116-8e6b8d8551f015c52b70a3faac447d5a4eb992a9d35022e69b1a0b13c7eb4be7-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892507731",
                  "vimeoVideoId": "892507731",
                  "embedUrl": "https://player.vimeo.com/video/892507731?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "8 - The Author and Finisher of Faith - 06-30-2015",
                  "description": "",
                  "publishedAt": "2023-12-08T05:24:23+00:00",
                  "duration": 5419,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765673289-c46c62f15509d2677c1e599d0cd69eef38c3f8dd476ce3f0317887a33b26d3c7-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892507829",
                  "vimeoVideoId": "892507829",
                  "embedUrl": "https://player.vimeo.com/video/892507829?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "9 -  The Spirit of the Son - Fiona - 07-05-2015",
                  "description": "",
                  "publishedAt": "2023-12-08T05:25:02+00:00",
                  "duration": 4054,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765673617-ff9d14e678de68532f9e98afadf3bf7ed88f09f5dbc0495749f00334730c8418-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892508002",
                  "vimeoVideoId": "892508002",
                  "embedUrl": "https://player.vimeo.com/video/892508002?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "10 - Sons Welcome Correction - Fiona - 07-19-2015",
                  "description": "",
                  "publishedAt": "2023-12-08T05:26:04+00:00",
                  "duration": 5508,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765674144-a45781c9bc57da0fc7a632b2199badde8835a769dc7d9f823ebd9fdd4efa0324-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892508302",
                  "vimeoVideoId": "892508302",
                  "embedUrl": "https://player.vimeo.com/video/892508302?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "11 - Inexhaustible Spirit of the Son - 07-21-2015",
                  "description": "",
                  "publishedAt": "2023-12-08T05:27:55+00:00",
                  "duration": 4610,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765678952-4e008c24b67659c88aaaf060e78ac96cc69ff1cb965d569266bc7f9f4147d4d9-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892508543",
                  "vimeoVideoId": "892508543",
                  "embedUrl": "https://player.vimeo.com/video/892508543?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "12 - Never Seen Father - 08-02-2015",
                  "description": "",
                  "publishedAt": "2023-12-08T05:29:33+00:00",
                  "duration": 5328,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765675116-9dcb05be3ba4dd9be2d82b98acec4ffd5b1bcefa239e57f9b2e9d3f104dea837-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892508892",
                  "vimeoVideoId": "892508892",
                  "embedUrl": "https://player.vimeo.com/video/892508892?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "13 - God or Lord - 08-09-2015",
                  "description": "",
                  "publishedAt": "2023-12-08T05:31:31+00:00",
                  "duration": 4938,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765675789-e9c5123f138cd344cfd45f15b733fc9349a833ca7d9c8459c92f83f29cbdb30f-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892509184",
                  "vimeoVideoId": "892509184",
                  "embedUrl": "https://player.vimeo.com/video/892509184?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "14 - Sons of Abraham or Sons of God - 07-28-2015",
                  "description": "",
                  "publishedAt": "2023-12-08T05:33:19+00:00",
                  "duration": 5380,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765676094-edea78806bb7a887df8c9f0a1bd4a7f9df2c4e9440400136ee184a0f6b46fd74-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "Patience Series",
          "parts": 3,
          "projectId": "18769108",
          "videos": [
              {
                  "id": "vimeo_892510451",
                  "vimeoVideoId": "892510451",
                  "embedUrl": "https://player.vimeo.com/video/892510451?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3 - Shift is Preceded by Patience - 10-06-2015",
                  "description": "",
                  "publishedAt": "2023-12-08T05:41:03+00:00",
                  "duration": 5382,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765679168-a0cb6672530db41f9b13bd20af32805204740be54e0bc8a27d88ef715e3f819b-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892510944",
                  "vimeoVideoId": "892510944",
                  "embedUrl": "https://player.vimeo.com/video/892510944?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "1 - Wrath vs Patience - 09-08-2015",
                  "description": "",
                  "publishedAt": "2023-12-08T05:43:54+00:00",
                  "duration": 6855,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765679617-00af4dbf121eec77aea212c9fb347a1fe264a87a66a1804938064210c57e2a98-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892511407",
                  "vimeoVideoId": "892511407",
                  "embedUrl": "https://player.vimeo.com/video/892511407?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2 - Wrath is Impulsiveness - 09-15-2015",
                  "description": "",
                  "publishedAt": "2023-12-08T05:46:18+00:00",
                  "duration": 5438,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765680024-6c2de34f272c69e29a09c819103ea4dabebe75ad81701a9d1db28897e52ae840-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "Conscience Series 2015",
          "parts": 4,
          "projectId": "18769111",
          "videos": [
              {
                  "id": "vimeo_892514053",
                  "vimeoVideoId": "892514053",
                  "embedUrl": "https://player.vimeo.com/video/892514053?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "4 - To Judge in the Flesh is to Conclude on Intention - Fiona - 10-18-2015",
                  "description": "",
                  "publishedAt": "2023-12-08T06:02:51+00:00",
                  "duration": 4357,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765684858-3acbdf03938ca82aeb5e3c74b0e76a28f6e05d5f0c54b2cdccfbc76edbd1af06-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892514239",
                  "vimeoVideoId": "892514239",
                  "embedUrl": "https://player.vimeo.com/video/892514239?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "1 - Conscience, the Message of the New Testament - 28-01-2015",
                  "description": "",
                  "publishedAt": "2023-12-08T06:04:07+00:00",
                  "duration": 4909,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765685330-a18eaee9ebd693bff8ae3f22e7ff5db4aae066b38b96a576d26cf08f22c60b08-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892514475",
                  "vimeoVideoId": "892514475",
                  "embedUrl": "https://player.vimeo.com/video/892514475?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2 - Blood and Works - 21-02-2015",
                  "description": "",
                  "publishedAt": "2023-12-08T06:05:54+00:00",
                  "duration": 4032,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765685879-8ae553d7c6ff48b240c239cc75b467db343464d3c87854d6981faefc05c995ed-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892514762",
                  "vimeoVideoId": "892514762",
                  "embedUrl": "https://player.vimeo.com/video/892514762?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3 - The Sacrifice for Intentional Sin - Fiona - 10-11-2015",
                  "description": "",
                  "publishedAt": "2023-12-08T06:07:34+00:00",
                  "duration": 4797,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765686207-9ae3c0c2fc0357b173c6d7f94a37462572b2d3226e1d102ef4687ff3e4ec7328-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "Spirit of Mammon",
          "parts": 2,
          "projectId": "18769119",
          "videos": [
              {
                  "id": "vimeo_892516657",
                  "vimeoVideoId": "892516657",
                  "embedUrl": "https://player.vimeo.com/video/892516657?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3 - No More Evil Eye! - 02-28-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T06:18:53+00:00",
                  "duration": 6321,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765690273-0165e7621e829a48b94e6ae75a0a4329218de44766084d74b937da452b19d7ca-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892517268",
                  "vimeoVideoId": "892517268",
                  "embedUrl": "https://player.vimeo.com/video/892517268?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2 -  Freedom from the Spirit of Mammon - 02-21-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T06:22:08+00:00",
                  "duration": 4907,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765690850-10cfb3a2cbb7c8336d25dc7260d28c3687a7a381ea67815ee33829dee00f16be-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "Blessings In Grace Series",
          "parts": 9,
          "projectId": "18769124",
          "videos": [
              {
                  "id": "vimeo_892517930",
                  "vimeoVideoId": "892517930",
                  "embedUrl": "https://player.vimeo.com/video/892517930?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "9 - Priesthood (Simplified) - 05-25-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T06:25:58+00:00",
                  "duration": 3294,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765691946-e4173261f296b6a8f9374c7ccacedd6fda6373a7134c2a239f55919820c51bb1-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892518163",
                  "vimeoVideoId": "892518163",
                  "embedUrl": "https://player.vimeo.com/video/892518163?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "1 - Breaking Out Of Karmic Cycles - 04-27-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T06:27:28+00:00",
                  "duration": 4818,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765692113-321cf33cdbf28ef46913679c0d9d2b3fcc855c69ae71544710a49d6504c8a3d8-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892518393",
                  "vimeoVideoId": "892518393",
                  "embedUrl": "https://player.vimeo.com/video/892518393?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2 - Blessings Before Repentance - 04-28-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T06:28:40+00:00",
                  "duration": 6018,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765741416-70ee5be41f78287f4d41c07d57dd5486a6382d39738de7d167dfd7008a6a995f-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892518792",
                  "vimeoVideoId": "892518792",
                  "embedUrl": "https://player.vimeo.com/video/892518792?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3 - There Is No Penalty In Love - 05-03-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T06:31:05+00:00",
                  "duration": 3207,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765693223-92e0664f5fcdd2b460b51d3911db2ce0726b64a3bc25f27870bec406cd3a152c-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892518990",
                  "vimeoVideoId": "892518990",
                  "embedUrl": "https://player.vimeo.com/video/892518990?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "4 - Grace Without Offence - 05-04-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T06:32:13+00:00",
                  "duration": 4846,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765693666-6881b76ddd2a2026c3e10701891421a7e2a965212720e0a4010995e3a5aa9711-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892519224",
                  "vimeoVideoId": "892519224",
                  "embedUrl": "https://player.vimeo.com/video/892519224?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "5 - Enemy Lovers - Fiona - 05-10-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T06:33:57+00:00",
                  "duration": 4458,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765694049-ec5d2281385a697ed9a471ccf997f5ecd46c4d49ac0fbc1702028cfd12bcd2d5-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892519445",
                  "vimeoVideoId": "892519445",
                  "embedUrl": "https://player.vimeo.com/video/892519445?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "6 - Your Sin Is Loved Away - 05-13-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T06:35:19+00:00",
                  "duration": 3426,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765694422-d63f97271c61c631b0d73e5f7f2e65e1c07893cfcac5bce6772efcb075de2ccc-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892519690",
                  "vimeoVideoId": "892519690",
                  "embedUrl": "https://player.vimeo.com/video/892519690?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "7 - Deeper Into Faith - 05-19-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T06:36:42+00:00",
                  "duration": 4190,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765694872-2a0cf62e6530b049597099efc8c16498b7f44a25cb8da18277d9d65953eef8d9-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892519968",
                  "vimeoVideoId": "892519968",
                  "embedUrl": "https://player.vimeo.com/video/892519968?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "8 - What's So Scary About Grace - 05-24-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T06:38:12+00:00",
                  "duration": 4112,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765695283-adf3f118dd724604a72677cf00ef17de8860eed9975ed91bfa91a474dd0d97b7-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "Faith Series",
          "parts": 12,
          "projectId": "18769133",
          "videos": [
              {
                  "id": "vimeo_892520447",
                  "vimeoVideoId": "892520447",
                  "embedUrl": "https://player.vimeo.com/video/892520447?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "12 - The Power of Forgiven Intentions - 09-18-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T06:40:30+00:00",
                  "duration": 4081,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765695903-5a99d993a3207ff03ddd4129fb42e850f52067da99b7a90bb43a55e6e3c25b7b-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892520688",
                  "vimeoVideoId": "892520688",
                  "embedUrl": "https://player.vimeo.com/video/892520688?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "1 - Un-Faith - 06-31-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T06:41:41+00:00",
                  "duration": 3835,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765696411-22c77e0041d96d3ff4a85be4275a24e6fe21931503dd676df9938e01f8b31f64-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892521004",
                  "vimeoVideoId": "892521004",
                  "embedUrl": "https://player.vimeo.com/video/892521004?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2 - Look at the Cross.Cost -  08-02-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T06:43:02+00:00",
                  "duration": 2905,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765742418-8a3c6c06d61232fa728542f7273713e9099241b44668586cf9b6ff158f87ad5d-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892521279",
                  "vimeoVideoId": "892521279",
                  "embedUrl": "https://player.vimeo.com/video/892521279?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3 - Don't Look Back - 08-07-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T06:44:16+00:00",
                  "duration": 4372,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765697619-a60f77acb2150ddea2f853bd631e28a009c0a21629c0a965873f56769b10934c-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892521703",
                  "vimeoVideoId": "892521703",
                  "embedUrl": "https://player.vimeo.com/video/892521703?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "4 - Faith of Christ - 08-09-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T06:46:03+00:00",
                  "duration": 2783,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765697961-bf4a715bef728eb7120c42fb35b99c876d0909064cc547ed7e7519541a4f5b2d-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892521918",
                  "vimeoVideoId": "892521918",
                  "embedUrl": "https://player.vimeo.com/video/892521918?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "5 - Word in You - 08-21-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T06:47:09+00:00",
                  "duration": 4107,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765698460-88b058cb63a53f8099b27616786e98935a4da82b08406cd32e5eb818cb2ae53a-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892522199",
                  "vimeoVideoId": "892522199",
                  "embedUrl": "https://player.vimeo.com/video/892522199?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "6 - Let's Strengthen the Flesh - 08-23-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T06:48:39+00:00",
                  "duration": 3916,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765698757-09d471ba968008ad3246ebaafc254461441923db71f672fdb956c4621e997265-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892522383",
                  "vimeoVideoId": "892522383",
                  "embedUrl": "https://player.vimeo.com/video/892522383?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "7 - Remember Who You Are (for Christ's Sake) - 08-28-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T06:49:45+00:00",
                  "duration": 4557,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765699125-fb305e79fc0aafacaead8242daf01806b4bae78efdc3f747027d831582181c98-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892522632",
                  "vimeoVideoId": "892522632",
                  "embedUrl": "https://player.vimeo.com/video/892522632?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "8 - Storm Walker - 08-30-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T06:51:02+00:00",
                  "duration": 3059,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765699416-b051744e59c773b07d05f86cd618ef7e110307eabe6e0b6fa198fe7c94de5f58-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892522826",
                  "vimeoVideoId": "892522826",
                  "embedUrl": "https://player.vimeo.com/video/892522826?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "9 - This is Sin - 09-06-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T06:52:14+00:00",
                  "duration": 3869,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765699927-048278b60d5aebbddd283e94b3cee7ea21921b003cdfa6c182ab85d69b2e8129-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892523112",
                  "vimeoVideoId": "892523112",
                  "embedUrl": "https://player.vimeo.com/video/892523112?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "10 - Get With the New Living Way! - 09-11-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T06:53:44+00:00",
                  "duration": 3570,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765743525-ffcae8fb4229b456cbcd1a1defd136d87e17650394c838bc94332badbcc1f663-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892523314",
                  "vimeoVideoId": "892523314",
                  "embedUrl": "https://player.vimeo.com/video/892523314?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "11 - The Jerusalem Controversy - 09-13-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T06:54:35+00:00",
                  "duration": 3247,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765700428-b984953dada92d16c27f8d39f123c13b1633f27f40d87ab3601cf11ec15d0f5f-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "Lasting Life Series",
          "parts": 17,
          "projectId": "18769136",
          "videos": [
              {
                  "id": "vimeo_892523666",
                  "vimeoVideoId": "892523666",
                  "embedUrl": "https://player.vimeo.com/video/892523666?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "6 - True Living Way 10-30-16",
                  "description": "",
                  "publishedAt": "2023-12-08T06:56:12+00:00",
                  "duration": 5338,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765744038-05925fe6d5806d854d8d1ed855f333c47fb630cfe344d9b9af2d2a2641fb44e0-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892523965",
                  "vimeoVideoId": "892523965",
                  "embedUrl": "https://player.vimeo.com/video/892523965?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "7 - Incorruptible Generation - 11-01-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T06:57:46+00:00",
                  "duration": 3744,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765701632-3121d05e08ab3992cdf0f9b796057398711cf2aa108ccc8dc012e7b746d1d983-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892524092",
                  "vimeoVideoId": "892524092",
                  "embedUrl": "https://player.vimeo.com/video/892524092?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "8 -A Ready Defense - 11-06-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T06:58:44+00:00",
                  "duration": 3727,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765744271-7eed8591cb1df842deee267c0179bfb6f8151ea5c373e9012fd127a084e6f7f7-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892524296",
                  "vimeoVideoId": "892524296",
                  "embedUrl": "https://player.vimeo.com/video/892524296?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "9 - Speak Out Your Future  11-08-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T06:59:59+00:00",
                  "duration": 2550,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765702184-33ce0490220b3562c03e9129efe0d00faf209c23fff7bf84a0bdceaa3da0ed61-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892524442",
                  "vimeoVideoId": "892524442",
                  "embedUrl": "https://player.vimeo.com/video/892524442?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "10 - Knowledge of Source 11-13-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T07:00:46+00:00",
                  "duration": 4064,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765702559-5fe8d768a04f5c5f4277804b9dcf092d1d1c56ddeeeec11db85188ada3050e58-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892524685",
                  "vimeoVideoId": "892524685",
                  "embedUrl": "https://player.vimeo.com/video/892524685?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "11 - Fire Talking  11-22-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T07:02:12+00:00",
                  "duration": 4798,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765703183-282dd7680988a82bdfaa88c2d0c1fd69947ff68faf07b7467fd40d60297dece2-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892524971",
                  "vimeoVideoId": "892524971",
                  "embedUrl": "https://player.vimeo.com/video/892524971?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "12 - Mirror Image  11-27-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T07:04:05+00:00",
                  "duration": 3896,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765703528-2a34e05b04a1e752cdc732cadbf31d36b76d40b8974616b87a65612bb261bd31-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892525206",
                  "vimeoVideoId": "892525206",
                  "embedUrl": "https://player.vimeo.com/video/892525206?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "13 - Mirror Neurons 11-29-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T07:05:27+00:00",
                  "duration": 3417,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765703930-d7c5a7afb0e07a2234526a64905b096af4fa8e3b0e7bd62a5368d7fc6b3924a5-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892525388",
                  "vimeoVideoId": "892525388",
                  "embedUrl": "https://player.vimeo.com/video/892525388?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "14 - Prophetic Mirroring  12-04-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T07:06:35+00:00",
                  "duration": 5207,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765704183-049d70a08f4ba9a8309d274d8ee5e508dad74549eecb7c1c957e25ae9e6abe31-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892525565",
                  "vimeoVideoId": "892525565",
                  "embedUrl": "https://player.vimeo.com/video/892525565?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "15 - Mystery of Life  12-13-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T07:07:41+00:00",
                  "duration": 2732,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765704352-e3522d34923a2543f2e7c0e0e279f672c905d32af76d02d60c0c1a51e61b87db-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892525667",
                  "vimeoVideoId": "892525667",
                  "embedUrl": "https://player.vimeo.com/video/892525667?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "16 - Mirror The Son 12-18-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T07:08:14+00:00",
                  "duration": 3243,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765704694-66207f98f1a09b895a697699fe3dfeb847d410be35a6b9b3a799026e7dcbc640-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892525872",
                  "vimeoVideoId": "892525872",
                  "embedUrl": "https://player.vimeo.com/video/892525872?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "17 - Laying Hands on Purpose 12-20-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T07:09:30+00:00",
                  "duration": 2745,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765704986-d53f7448e8327c921a64c1856d537612e336e0da97a1104fed4a4966c0b05abe-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892525983",
                  "vimeoVideoId": "892525983",
                  "embedUrl": "https://player.vimeo.com/video/892525983?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "1 - The Science of Life - 10-04-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T07:10:15+00:00",
                  "duration": 4911,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765705711-6a537a80131b27526ea71058266cb9a751797ae657316c5854cc8d52697880d5-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892526332",
                  "vimeoVideoId": "892526332",
                  "embedUrl": "https://player.vimeo.com/video/892526332?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2 - Testing of the Word in You - 10-09-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T07:12:10+00:00",
                  "duration": 2737,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765705842-44a9a038dce4c25809e2e90c9dea3c97400338e69b6a4a2394ac28e55d656ae0-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892526476",
                  "vimeoVideoId": "892526476",
                  "embedUrl": "https://player.vimeo.com/video/892526476?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3 - Re-Gened - 18-10-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T07:13:08+00:00",
                  "duration": 3701,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765706698-3116b5a6fc5a2d385ea30a56c7a2a1c6abb221ccf0c4a0b0dbaa9ebe430aa39c-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892526800",
                  "vimeoVideoId": "892526800",
                  "embedUrl": "https://player.vimeo.com/video/892526800?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "4 - F E A R - 10-23-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T07:14:50+00:00",
                  "duration": 5193,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765706888-a9661127853d7a2cd66d624e8372826dec4f1d4f7f022b8b91d036d95078643e-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892527098",
                  "vimeoVideoId": "892527098",
                  "embedUrl": "https://player.vimeo.com/video/892527098?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "5 - Synchronised Knowledge - 10-25-16",
                  "description": "",
                  "publishedAt": "2023-12-08T07:16:19+00:00",
                  "duration": 3702,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765707187-ecae2901075651370121b2f544c00718a8a90490195496ed8f3b5e6885b637b9-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "Lords of The Earth Series",
          "parts": 6,
          "projectId": "18769138",
          "videos": [
              {
                  "id": "vimeo_892527881",
                  "vimeoVideoId": "892527881",
                  "embedUrl": "https://player.vimeo.com/video/892527881?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "5 - Masters of the Universe 02-28-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T07:20:51+00:00",
                  "duration": 2719,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765708712-cb38d12560e8aaf8ce997ac591d13328c96a3cb1cdd3989ff25bf0b4ece8836b-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892528048",
                  "vimeoVideoId": "892528048",
                  "embedUrl": "https://player.vimeo.com/video/892528048?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "6 - There Are Two! 03-12-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T07:21:41+00:00",
                  "duration": 3577,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765709010-f36db06bfbe6f4f1fbf0c3d490978da662c4a59d1b0a95829bb7c9e4314bd303-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892528308",
                  "vimeoVideoId": "892528308",
                  "embedUrl": "https://player.vimeo.com/video/892528308?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "1 - Walking Into Your Lordship 02-12-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T07:22:55+00:00",
                  "duration": 2823,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765709648-f84447badae36f3e88eb8ac68ceef983511dea526fd487b8128cce7f2b9a43e6-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892528615",
                  "vimeoVideoId": "892528615",
                  "embedUrl": "https://player.vimeo.com/video/892528615?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2 - Lords or Victims 02-19-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T07:24:26+00:00",
                  "duration": 4368,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765709858-2b6f3ef589b9f0d075c0b51dec4593c243dd71639159d9183356499b7121e0e0-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892528828",
                  "vimeoVideoId": "892528828",
                  "embedUrl": "https://player.vimeo.com/video/892528828?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3 - Conquestry  02-21-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T07:25:36+00:00",
                  "duration": 2621,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765710173-581364ce444cdcf115a6d2e9c2d58ad1c3a4a51fb7a4ca652224b1ee89cb9ca5-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892528973",
                  "vimeoVideoId": "892528973",
                  "embedUrl": "https://player.vimeo.com/video/892528973?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "4 - Lord Over Your Troubles 02-26-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T07:26:34+00:00",
                  "duration": 4116,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765710534-4be21cf40c8e9b77d00b966de8b62a733a62bcbdefc182c846d88d6a49cf1122-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "Prosperity Gospel Series",
          "parts": 9,
          "projectId": "18769143",
          "videos": [
              {
                  "id": "vimeo_892532492",
                  "vimeoVideoId": "892532492",
                  "embedUrl": "https://player.vimeo.com/video/892532492?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "8 - What Is Impossible For A Rich Man 02-05-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T07:45:50+00:00",
                  "duration": 2882,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765716691-1b092a76461beb83168fcd69d0ba33b5337f496c56c58ba3ef80d5db75ce3326-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892532747",
                  "vimeoVideoId": "892532747",
                  "embedUrl": "https://player.vimeo.com/video/892532747?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "9 - Blood Money 02-07-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T07:46:51+00:00",
                  "duration": 2813,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765717013-f518f357a9f0ef68344692fc9e6b53d34d3dd82631a92a895951f0ea81b70768-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892532995",
                  "vimeoVideoId": "892532995",
                  "embedUrl": "https://player.vimeo.com/video/892532995?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "1 - Heavenly Forex 01-01-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T07:48:13+00:00",
                  "duration": 3241,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765717230-f8071a67760cb2d3ad1f3956e789fdc48ea08c1e7b43189a3dff71bf972fa82f-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892533162",
                  "vimeoVideoId": "892533162",
                  "embedUrl": "https://player.vimeo.com/video/892533162?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2 - The Power to Make Wealth 01-03-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T07:49:20+00:00",
                  "duration": 3495,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765717632-fba0f433fa15d2a408aab2801f970c62d35a43d7a4d8daedea4f437524b60b9a-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892533406",
                  "vimeoVideoId": "892533406",
                  "embedUrl": "https://player.vimeo.com/video/892533406?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3 - Money Talks 01-08-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T07:50:37+00:00",
                  "duration": 2984,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765718046-3805b2b93c6b523d49f65d2cd581df3fd822a786475e5a44e927c5e324f3cd76-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892533537",
                  "vimeoVideoId": "892533537",
                  "embedUrl": "https://player.vimeo.com/video/892533537?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "4 - Time to Profit 01-10-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T07:51:27+00:00",
                  "duration": 2490,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765718253-4f85fdb1d40cdfec78ca2c280c87f82d21eecad40c1b4235ddb68d4800422751-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892533668",
                  "vimeoVideoId": "892533668",
                  "embedUrl": "https://player.vimeo.com/video/892533668?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "5 - True Riches 01-22-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T07:52:07+00:00",
                  "duration": 2966,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765718388-da0739f4e7e43d5634feff1c0d61665e6d2246858770ddd0b194aec9ba27a9cc-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892533820",
                  "vimeoVideoId": "892533820",
                  "embedUrl": "https://player.vimeo.com/video/892533820?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "6 - Circumventing Bloodlines 01-24-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T07:52:58+00:00",
                  "duration": 3468,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765718616-ddcd38eccc21a3541d65c38b9472baecbcb967ef2f51a05be3682a4f39add815-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892534003",
                  "vimeoVideoId": "892534003",
                  "embedUrl": "https://player.vimeo.com/video/892534003?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "7 - I'm Innocent 01-31-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T07:53:59+00:00",
                  "duration": 3146,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765718942-d3da1e79097dd713ce83378391b3eb48bc5961e9e76f6d159595afd6f8946aba-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "The Power of Communion Series",
          "parts": 3,
          "projectId": "18769147",
          "videos": [
              {
                  "id": "vimeo_892536644",
                  "vimeoVideoId": "892536644",
                  "embedUrl": "https://player.vimeo.com/video/892536644?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3 - More Training on Communion 05-26-2015",
                  "description": "",
                  "publishedAt": "2023-12-08T08:06:59+00:00",
                  "duration": 6599,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765723433-4d44ef018b4a874f388db893a5fec6d43fcbeb16e1bfb1c4479066e5b6d7efb4-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892536998",
                  "vimeoVideoId": "892536998",
                  "embedUrl": "https://player.vimeo.com/video/892536998?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "4 - Inedia - Communion meditation 11-29-2015",
                  "description": "",
                  "publishedAt": "2023-12-08T08:08:40+00:00",
                  "duration": 753,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765723620-456aebaa9475ba0459e2e40b3b73919d94258936680b575b065866b5e2601b41-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892537029",
                  "vimeoVideoId": "892537029",
                  "embedUrl": "https://player.vimeo.com/video/892537029?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "5 - Inedia - Communion meditation 05-12-2015",
                  "description": "",
                  "publishedAt": "2023-12-08T08:08:48+00:00",
                  "duration": 825,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765723486-8bc8b14cf1f3834fdd14e6775c0610b92a3e793d95d1a71b6550609b92189330-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "Cleanse Your Conscience Series",
          "parts": 6,
          "projectId": "18769149",
          "videos": [
              {
                  "id": "vimeo_892538219",
                  "vimeoVideoId": "892538219",
                  "embedUrl": "https://player.vimeo.com/video/892538219?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "4 - Conscience of the Melchizedek Priesthood 01-02-2015",
                  "description": "",
                  "publishedAt": "2023-12-08T08:15:33+00:00",
                  "duration": 905,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765725678-e3c50e979f3f78d5609daab4dc07a5234510fbd582015961dc063e989d56ce48-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892538355",
                  "vimeoVideoId": "892538355",
                  "embedUrl": "https://player.vimeo.com/video/892538355?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "5 - Incorruptible Seed  05-17-2015",
                  "description": "",
                  "publishedAt": "2023-12-08T08:16:10+00:00",
                  "duration": 4061,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765726160-ce89eea7ba9713ccdd8c6e736541919fd0517b45a1450278c7134e81cb4edd2e-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892538629",
                  "vimeoVideoId": "892538629",
                  "embedUrl": "https://player.vimeo.com/video/892538629?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "6 - Cycles and Traditions 03-05-2015",
                  "description": "",
                  "publishedAt": "2023-12-08T08:17:37+00:00",
                  "duration": 3958,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765726705-1311dac0ef5062fc9130f167ee3fc119f8d76fbe3bde7f77718176ecdc7ca607-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892538903",
                  "vimeoVideoId": "892538903",
                  "embedUrl": "https://player.vimeo.com/video/892538903?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "1 - The Power of Forgiven Intentions  11-18-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T08:18:56+00:00",
                  "duration": 4081,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765726807-333004bd1a25d2227e46b78ee1bde659b3c49715cb82307bcad524561015459e-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892539047",
                  "vimeoVideoId": "892539047",
                  "embedUrl": "https://player.vimeo.com/video/892539047?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2 - To Judge in the Flesh is to Conclude on Intention 10-18-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T08:19:43+00:00",
                  "duration": 4357,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765727529-94f8766a3c9a41746fdc09e7ececd2ab28548ee8846474bd57ab04681e979fdb-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892539289",
                  "vimeoVideoId": "892539289",
                  "embedUrl": "https://player.vimeo.com/video/892539289?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3 - The Sacrifice for Intentional Sin 10-11-2015",
                  "description": "",
                  "publishedAt": "2023-12-08T08:20:57+00:00",
                  "duration": 4797,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765727716-1e0683c20bdc9c55713b7b47a6ef7206c339dadb58f22cd44d275b7b8ffb2e20-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "Heart Culture Series",
          "parts": 12,
          "projectId": "18769154",
          "videos": [
              {
                  "id": "vimeo_892541563",
                  "vimeoVideoId": "892541563",
                  "embedUrl": "https://player.vimeo.com/video/892541563?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "8 - Debt Cancellation 06-06-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T08:31:23+00:00",
                  "duration": 4017,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765731190-0e4d88a3a74fbe2c8372008cff22b68a826eb8fd8a0c7a7daaf820799ec146de-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892541850",
                  "vimeoVideoId": "892541850",
                  "embedUrl": "https://player.vimeo.com/video/892541850?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "9 - Heart of a Son 06-11-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T08:32:54+00:00",
                  "duration": 4940,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765731684-3e441a6a1ce604b6c4119e2c9bcb6abefe6d495bdb5786d6bcae25d215de27d4-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892542093",
                  "vimeoVideoId": "892542093",
                  "embedUrl": "https://player.vimeo.com/video/892542093?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "10 - The Advocate 06-13-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T08:34:06+00:00",
                  "duration": 2265,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765731981-2129c7db32e54814bcc0ac057fafdbdd566eebb42d624a978a8134a4671d0281-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892542300",
                  "vimeoVideoId": "892542300",
                  "embedUrl": "https://player.vimeo.com/video/892542300?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "11 - Transcendent Heart 06-18-2016",
                  "description": "",
                  "publishedAt": "2023-12-08T08:34:59+00:00",
                  "duration": 3484,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765732504-9c591cc375ef456aec6239cf1221ac46700616be4a7bb30d31b39686a7643019-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892542517",
                  "vimeoVideoId": "892542517",
                  "embedUrl": "https://player.vimeo.com/video/892542517?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "12 - Who is the Third Witness 06-20-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T08:35:53+00:00",
                  "duration": 2536,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765733127-17f211d3f43d95c347e365da75b687833fed01a9c0806d8ef7e6bb632ed00b81-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892542748",
                  "vimeoVideoId": "892542748",
                  "embedUrl": "https://player.vimeo.com/video/892542748?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "13 - Heart of the Bride 07-02-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T08:36:49+00:00",
                  "duration": 2945,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765733625-efb87e99b3d7ba2f5472f850584b56e68386ac81d7016cbf37ecc59619f82d92-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892543029",
                  "vimeoVideoId": "892543029",
                  "embedUrl": "https://player.vimeo.com/video/892543029?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "1 - Heart Culture (Introduction) 04-23-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T08:37:56+00:00",
                  "duration": 5054,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765734107-282454bf1e7a31fcac636b0e2c875635cd08334a969b9f00516422b089b7d5ea-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892543418",
                  "vimeoVideoId": "892543418",
                  "embedUrl": "https://player.vimeo.com/video/892543418?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2 - Heart Transplant 04-25-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T08:39:40+00:00",
                  "duration": 3867,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765735194-ce854761162c20ec2e96fa9afb2520712a5fa8cfe2e7ae7753e5756a997e0d6c-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892543658",
                  "vimeoVideoId": "892543658",
                  "embedUrl": "https://player.vimeo.com/video/892543658?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3 - His Heart Matters  04-30-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T08:41:03+00:00",
                  "duration": 4393,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765734748-b31a770de6c74a4f42405fcdb52fbf0d0e1e588807ce91f2ffdf4d793efce87c-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892543960",
                  "vimeoVideoId": "892543960",
                  "embedUrl": "https://player.vimeo.com/video/892543960?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "4 - For Christs' Sake 04-02-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T08:42:24+00:00",
                  "duration": 3587,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765735091-28119eac789609583185c2caf56fc4d44524ebd3808d6067689b1430af9e292e-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892544172",
                  "vimeoVideoId": "892544172",
                  "embedUrl": "https://player.vimeo.com/video/892544172?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "5 - Warning_ Offensive Message 05-23-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T08:43:34+00:00",
                  "duration": 5875,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765735609-846794449d8a2c3b89963fe58a048255dea7a7d7f4c8e8cbb3bf0be3c0cbfa46-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892544405",
                  "vimeoVideoId": "892544405",
                  "embedUrl": "https://player.vimeo.com/video/892544405?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "6 - Caught in a Trap 05-28-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T08:44:54+00:00",
                  "duration": 4467,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765736350-7e7de8e877c5231493c42100a46d0bb2fdf1635f3ad8fbd385f084cff88621cc-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "Psych-Ascension Series",
          "parts": 6,
          "projectId": "18769159",
          "videos": [
              {
                  "id": "vimeo_892546229",
                  "vimeoVideoId": "892546229",
                  "embedUrl": "https://player.vimeo.com/video/892546229?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "5 - Why 08-27-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T08:51:43+00:00",
                  "duration": 3545,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765738434-5247dc38106ecff54b4a9ae1bf1169a00aec861244ed70411da9ed4eb10f3a7a-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892546538",
                  "vimeoVideoId": "892546538",
                  "embedUrl": "https://player.vimeo.com/video/892546538?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "6 - Worriers 11-05-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T08:52:51+00:00",
                  "duration": 3400,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765738832-9abb23f679b074a5623a79100fe7a8d5e7e619bf617d2e132c7fd3bc62e1fbb6-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892546848",
                  "vimeoVideoId": "892546848",
                  "embedUrl": "https://player.vimeo.com/video/892546848?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "1 - Mind-Heart Alignment  07-25-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T08:54:09+00:00",
                  "duration": 3747,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765739276-4b27fdeed75594d7f0566da52af2107dd6bc81bb5736ca0c63e96c4b70a62d2c-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892547023",
                  "vimeoVideoId": "892547023",
                  "embedUrl": "https://player.vimeo.com/video/892547023?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2 - Devil at the Thinking Level 08-01-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T08:54:54+00:00",
                  "duration": 3832,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765739532-377bff0483c6cc7fbb91a8642e990e9386990480f3f13b8d6e54a297a8bba9f7-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892547326",
                  "vimeoVideoId": "892547326",
                  "embedUrl": "https://player.vimeo.com/video/892547326?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3 - Ascended Minds 08-06-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T08:56:02+00:00",
                  "duration": 3889,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765740003-e313e8a5a92cf9db6cd3b0e27a3f804d7833d0077fb70fe1a98287f7464c8c60-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892547627",
                  "vimeoVideoId": "892547627",
                  "embedUrl": "https://player.vimeo.com/video/892547627?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "4 - Kairos-Practor 08-08-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T08:57:22+00:00",
                  "duration": 4246,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765741389-18ce4cb34266d307c85b9e4c19954cd5d8783762fe31aa77b861060443d297d8-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "The Last Enemy Series",
          "parts": 7,
          "projectId": "18769163",
          "videos": [
              {
                  "id": "vimeo_892548256",
                  "vimeoVideoId": "892548256",
                  "embedUrl": "https://player.vimeo.com/video/892548256?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "5 - Cocoon 10-17-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T09:00:39+00:00",
                  "duration": 3120,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765741557-fe078430151dd5005839610b311a04c10b00b408e8a3e0366a97dab33ffddcd0-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892548515",
                  "vimeoVideoId": "892548515",
                  "embedUrl": "https://player.vimeo.com/video/892548515?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "6 - Happy Reformation Day 10-31-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T09:01:55+00:00",
                  "duration": 3188,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765741975-e6c1b71026e711e3d2c02187bd264742a6afedd1e848abca5ea0038674e7a04b-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892548773",
                  "vimeoVideoId": "892548773",
                  "embedUrl": "https://player.vimeo.com/video/892548773?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "7 - Life and Laughs 10-29-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T09:03:11+00:00",
                  "duration": 3628,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765742608-f7f31bd93fcf2735d7a73e7c4a52421888f01ce4761df6d5fc5907c4bf5a8555-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892548875",
                  "vimeoVideoId": "892548875",
                  "embedUrl": "https://player.vimeo.com/video/892548875?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "1 - Know Your Enemy  10-01-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T09:03:49+00:00",
                  "duration": 2697,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765742455-67751ddd91b6807594dd1b8c66febbc9fa1d1446b6bc2c0a08220fde36b719d9-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892549123",
                  "vimeoVideoId": "892549123",
                  "embedUrl": "https://player.vimeo.com/video/892549123?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2 - Life Certainty 10-08-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T09:04:51+00:00",
                  "duration": 4325,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765743255-2d90db4fb614830f4fe722c1fcdc67c9f0c81bcc28a3e3017f32c7d9cecfd474-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892549392",
                  "vimeoVideoId": "892549392",
                  "embedUrl": "https://player.vimeo.com/video/892549392?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3 - Daredevil 10-10-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T09:06:03+00:00",
                  "duration": 3741,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765743573-bb86069a08195c5158fcdf4c56e173b251a9cce57fa0f9ee1084e5a771ef8448-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892549739",
                  "vimeoVideoId": "892549739",
                  "embedUrl": "https://player.vimeo.com/video/892549739?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "4 + Something Better  10-15-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T09:07:36+00:00",
                  "duration": 3363,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765743683-07811fca2d1b0cffb64704e5639286f340b5759042c8d11375a6f6c76dd8186a-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "Character of the Flesh Series",
          "parts": 7,
          "projectId": "18769177",
          "videos": [
              {
                  "id": "vimeo_892558596",
                  "vimeoVideoId": "892558596",
                  "embedUrl": "https://player.vimeo.com/video/892558596?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "5 - Confession 05-08-2018",
                  "description": "",
                  "publishedAt": "2023-12-08T09:46:08+00:00",
                  "duration": 6116,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765757684-ee76adbfa38bf5cd63183d31109d51306f544ff78e44c1a25db48c335f528fcc-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892558946",
                  "vimeoVideoId": "892558946",
                  "embedUrl": "https://player.vimeo.com/video/892558946?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "6 - Naked 05-13-2018",
                  "description": "",
                  "publishedAt": "2023-12-08T09:47:48+00:00",
                  "duration": 5658,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765758245-a9d2f661c96527f2c0a3bb6947a37d3d3d036d99f6b8bbb79ba3ff899aec3919-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892559212",
                  "vimeoVideoId": "892559212",
                  "embedUrl": "https://player.vimeo.com/video/892559212?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "7 - Spiritual Detox 05-15-2018",
                  "description": "",
                  "publishedAt": "2023-12-08T09:49:18+00:00",
                  "duration": 4519,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765758685-f267babc69e9516a0ec7564860f8385e2836dc63f91a9eef74a05e5567b41cf6-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892559525",
                  "vimeoVideoId": "892559525",
                  "embedUrl": "https://player.vimeo.com/video/892559525?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "1 - Fast and Furious 04-24-2018",
                  "description": "",
                  "publishedAt": "2023-12-08T09:50:39+00:00",
                  "duration": 4483,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765759081-7b522b12529934400418b1aa7ee966eb9071760b69cbabc2a10225370d331a1a-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892559788",
                  "vimeoVideoId": "892559788",
                  "embedUrl": "https://player.vimeo.com/video/892559788?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2 - In The Flesh 04-29-2018",
                  "description": "",
                  "publishedAt": "2023-12-08T09:51:53+00:00",
                  "duration": 5184,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765759590-6f17906e5c78c3e11a3ede4aeae9b3ca969808c2c2146006b5e97fa6d1edc2c6-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892560023",
                  "vimeoVideoId": "892560023",
                  "embedUrl": "https://player.vimeo.com/video/892560023?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3 - Spirit Walkers 05-01-2018",
                  "description": "",
                  "publishedAt": "2023-12-08T09:53:00+00:00",
                  "duration": 5466,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765761971-fb9e2a5bda9bc1cd41273bee2eac50900a5978fb47c1be88ea47b0162d588198-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892560339",
                  "vimeoVideoId": "892560339",
                  "embedUrl": "https://player.vimeo.com/video/892560339?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "4 - Look Steady 05-06-2018",
                  "description": "",
                  "publishedAt": "2023-12-08T09:54:33+00:00",
                  "duration": 6575,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765760618-48f8c71327d7d696b83ba4bbd66b3624a864ffb9bdcd1230e2b93aad6441f3e8-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "Teachings on Righteousness Series",
          "parts": 6,
          "projectId": "18769182",
          "videos": [
              {
                  "id": "vimeo_892565043",
                  "vimeoVideoId": "892565043",
                  "embedUrl": "https://player.vimeo.com/video/892565043?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "6 - True Stand 06-26-2018",
                  "description": "",
                  "publishedAt": "2023-12-08T10:11:11+00:00",
                  "duration": 3832,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765766792-0ce0ab725ebf6ca1e7be295ec5f8bd9e78efbf5b82a729d67c7d7a1e2a9db1fb-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892565359",
                  "vimeoVideoId": "892565359",
                  "embedUrl": "https://player.vimeo.com/video/892565359?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "7 - Seed Carrier 07-08-2018",
                  "description": "",
                  "publishedAt": "2023-12-08T10:12:13+00:00",
                  "duration": 4814,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765767398-ff6fe17d87a3a8b88f1253943e22e6067f7dc9a7a5ea57dc5f298303f845db05-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892565708",
                  "vimeoVideoId": "892565708",
                  "embedUrl": "https://player.vimeo.com/video/892565708?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "1 - Justice League 05-27-2018",
                  "description": "",
                  "publishedAt": "2023-12-08T10:13:18+00:00",
                  "duration": 5246,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765767861-df6c69990b58b97bdba8508c674d9554f81ec6818263afb8af5fd47109d36de0-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892566096",
                  "vimeoVideoId": "892566096",
                  "embedUrl": "https://player.vimeo.com/video/892566096?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2 - Vengeance is mine 05-29-2018",
                  "description": "",
                  "publishedAt": "2023-12-08T10:14:35+00:00",
                  "duration": 7266,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765768646-e6ed70ff517e7ed417b27f73cb4c1a615bba9f152cf523f666021fe1b01033e3-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892566560",
                  "vimeoVideoId": "892566560",
                  "embedUrl": "https://player.vimeo.com/video/892566560?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3 - Righteousness, Many Have Got It Wrong 06-05-2018",
                  "description": "",
                  "publishedAt": "2023-12-08T10:16:23+00:00",
                  "duration": 4634,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765768928-a574d424f0a88b4e7b45bd6d4abd5a98dc33af418d5136f77f40c0e4006e1262-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892567690",
                  "vimeoVideoId": "892567690",
                  "embedUrl": "https://player.vimeo.com/video/892567690?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "5 - Righteous Training  06-10-2018",
                  "description": "",
                  "publishedAt": "2023-12-08T10:21:25+00:00",
                  "duration": 4739,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765770942-db66265c9439fce2eab4a9b93ace3df7e3b75a9c146636d84d6582eefdc1a47d-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "Priesthood Series",
          "parts": 12,
          "projectId": "18769189",
          "videos": [
              {
                  "id": "vimeo_892568063",
                  "vimeoVideoId": "892568063",
                  "embedUrl": "https://player.vimeo.com/video/892568063?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "9 - Priestly Generation 01-14-2018",
                  "description": "",
                  "publishedAt": "2023-12-08T10:23:17+00:00",
                  "duration": 4311,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765771769-f15d91c65b5a0b4a3df32a185d33369a3a6738d2c7eabf89ed5390a6b4c8ef3e-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892568439",
                  "vimeoVideoId": "892568439",
                  "embedUrl": "https://player.vimeo.com/video/892568439?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "10 - From the Beginning 014-16-2018",
                  "description": "",
                  "publishedAt": "2023-12-08T10:24:53+00:00",
                  "duration": 3671,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765772080-fd9fac31f9570e2d86dbec64029977dad8d899ad5f034818a26fa6d5875ce12f-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892568652",
                  "vimeoVideoId": "892568652",
                  "embedUrl": "https://player.vimeo.com/video/892568652?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "11 - Works of the Mind 01-21-2018",
                  "description": "",
                  "publishedAt": "2023-12-08T10:25:54+00:00",
                  "duration": 4454,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765772445-9244711c3e1ee6f93e1c6d364dce8714d8fcc1988772c95730fb880198736e8b-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892568931",
                  "vimeoVideoId": "892568931",
                  "embedUrl": "https://player.vimeo.com/video/892568931?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "12 - Outlaw Christianity 01-23-2018",
                  "description": "",
                  "publishedAt": "2023-12-08T10:26:57+00:00",
                  "duration": 3226,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765773369-30308724b3c4669e000d780ff13d7b3f464a68af85dab1fa9a74c34faa780458-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892569140",
                  "vimeoVideoId": "892569140",
                  "embedUrl": "https://player.vimeo.com/video/892569140?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "1 - Melchizedek Effect 11-26-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T10:27:52+00:00",
                  "duration": 3602,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765773441-2ff750ea8fee20a08dbce06dac526351d808eb20005a4f943d0ec35284ba160d-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892569451",
                  "vimeoVideoId": "892569451",
                  "embedUrl": "https://player.vimeo.com/video/892569451?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2 - The New Order 12-12-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T10:29:05+00:00",
                  "duration": 2809,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765773649-a4b21076bf2f5bb1f0c25dfcc58110dc0e184f9fcc1cc39c015472ae495caf0d-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892569657",
                  "vimeoVideoId": "892569657",
                  "embedUrl": "https://player.vimeo.com/video/892569657?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3 - The Last Magi _ Christmas Special 12-24-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T10:30:02+00:00",
                  "duration": 3935,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765774336-d4cecb2b8cf09aa99f38b619a9ade7c8af7c0bcb25b012dbba78d4b96879010f-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892569964",
                  "vimeoVideoId": "892569964",
                  "embedUrl": "https://player.vimeo.com/video/892569964?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "4 - Identity Crisis 12-17-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T10:31:21+00:00",
                  "duration": 3839,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765775407-ca7ed2c1d288092011322d0b9bfd0abd3b9eaba33075603f70e06aafb416264c-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892570329",
                  "vimeoVideoId": "892570329",
                  "embedUrl": "https://player.vimeo.com/video/892570329?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "5 - Good Time to Die 12-19-2017",
                  "description": "",
                  "publishedAt": "2023-12-08T10:32:55+00:00",
                  "duration": 4012,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765775198-c4c07e7d8081fea32bbc502040decbf31228a0b50e30052aef37ed48e0a7e493-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892570769",
                  "vimeoVideoId": "892570769",
                  "embedUrl": "https://player.vimeo.com/video/892570769?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "6 - Doctrines of Melchizedek 01-02-2018",
                  "description": "",
                  "publishedAt": "2023-12-08T10:34:25+00:00",
                  "duration": 3948,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765775536-5dc936aeb8d90a22aaa03d5f96c76ff9e0a5ed90dbca2d1aceea0793d1b6e401-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892571083",
                  "vimeoVideoId": "892571083",
                  "embedUrl": "https://player.vimeo.com/video/892571083?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "7 - Priestly Sight 01-07-2018",
                  "description": "",
                  "publishedAt": "2023-12-08T10:35:27+00:00",
                  "duration": 3993,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765776127-b9d392b7222c6254e1b5b608b8074d40a930b2250fdd5e31d4cff69dce8cdaa5-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892571390",
                  "vimeoVideoId": "892571390",
                  "embedUrl": "https://player.vimeo.com/video/892571390?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "8 - Righteous Foundations 01-09-2018",
                  "description": "",
                  "publishedAt": "2023-12-08T10:36:31+00:00",
                  "duration": 2096,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765776428-ecc03c96156360c3d70dffe3083f146c3d314ef1856f67f66e8566a895afed83-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "Why Church? Series",
          "parts": 3,
          "projectId": "18769197",
          "videos": [
              {
                  "id": "vimeo_892573207",
                  "vimeoVideoId": "892573207",
                  "embedUrl": "https://player.vimeo.com/video/892573207?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3 - Unwrap your Gift 08-26-2018",
                  "description": "",
                  "publishedAt": "2023-12-08T10:43:21+00:00",
                  "duration": 5569,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765779170-ab32a8c6685a317be25794078b0ddfa2af686108f2488fbe1fc35f8af18ac51d-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892573547",
                  "vimeoVideoId": "892573547",
                  "embedUrl": "https://player.vimeo.com/video/892573547?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "1 - Camp Fire 08-07-2018",
                  "description": "",
                  "publishedAt": "2023-12-08T10:44:52+00:00",
                  "duration": 3615,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765779721-d13ca6553232c3d0292b7d91b1d992eae50c33f82b9dd0ddbd566338437a637a-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892573844",
                  "vimeoVideoId": "892573844",
                  "embedUrl": "https://player.vimeo.com/video/892573844?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2 - Work up the Zeal 08-28-2018",
                  "description": "",
                  "publishedAt": "2023-12-08T10:46:11+00:00",
                  "duration": 4369,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765780085-f498750f1349e20fd6c98800e15a1ba31cc5973c9857dceecb2f8a4f67e7b9ec-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "Unending Provision Series",
          "parts": 3,
          "projectId": "18769203",
          "videos": [
              {
                  "id": "vimeo_892574416",
                  "vimeoVideoId": "892574416",
                  "embedUrl": "https://player.vimeo.com/video/892574416?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2 - UNENDING PROVISION PART 02 -2018",
                  "description": "",
                  "publishedAt": "2023-12-08T10:48:39+00:00",
                  "duration": 4167,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765781535-0d8aea8a34ed43d8f600930af9e38c9a7db6fa212e8e883338513da513dd3b2b-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892574919",
                  "vimeoVideoId": "892574919",
                  "embedUrl": "https://player.vimeo.com/video/892574919?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3 - UNENDING PROVISION PART 03 - 2018",
                  "description": "",
                  "publishedAt": "2023-12-08T10:50:54+00:00",
                  "duration": 4334,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765782589-43ca7e4cce4d5bb64d7cf7131c09869e43d25988d9cf397443fcf98a95a51c27-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892575541",
                  "vimeoVideoId": "892575541",
                  "embedUrl": "https://player.vimeo.com/video/892575541?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "1 - UNDENDING PROVISION PART 01 - 2018",
                  "description": "",
                  "publishedAt": "2023-12-08T10:53:26+00:00",
                  "duration": 4396,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765782883-1b2a345e73aedc809daa356758eeca096b582e04f77c7a04ecf4cff2c38c8024-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "The Secret Place Series",
          "parts": 3,
          "projectId": "18769225",
          "videos": [
              {
                  "id": "vimeo_892581694",
                  "vimeoVideoId": "892581694",
                  "embedUrl": "https://player.vimeo.com/video/892581694?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3 - Moses the Bride 01-15-2019",
                  "description": "",
                  "publishedAt": "2023-12-08T11:18:47+00:00",
                  "duration": 3419,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765791728-a8e08f9ecf384eec5c9d46cac85124b332b97c5a3975b64165cd5e8566eb8324-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892581971",
                  "vimeoVideoId": "892581971",
                  "embedUrl": "https://player.vimeo.com/video/892581971?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "1 - Dancing Generation 01-08-2019",
                  "description": "",
                  "publishedAt": "2023-12-08T11:20:10+00:00",
                  "duration": 5217,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765792365-53bbbb921d2c0a64e4f04c9a44ec5d56bbfe095563bfe30d4a55ca4f9c62ab56-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892582345",
                  "vimeoVideoId": "892582345",
                  "embedUrl": "https://player.vimeo.com/video/892582345?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2 - Unlawful Priests 01-13-2019",
                  "description": "",
                  "publishedAt": "2023-12-08T11:21:53+00:00",
                  "duration": 4029,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765792705-5c5718b51d48968277e54363d7a0b1c7f67a02f4070d56d31bd0329a7ff1a001-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "The Conscience Series 2018",
          "parts": 10,
          "projectId": "18769229",
          "videos": [
              {
                  "id": "vimeo_892582981",
                  "vimeoVideoId": "892582981",
                  "embedUrl": "https://player.vimeo.com/video/892582981?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "10 - Bad Boys 11-27-2018",
                  "description": "",
                  "publishedAt": "2023-12-08T11:24:49+00:00",
                  "duration": 4590,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765793589-ada7789d85b079e365225c88b67d2f18dc42ba21e9e717f20fc9370a8747fd3c-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892583114",
                  "vimeoVideoId": "892583114",
                  "embedUrl": "https://player.vimeo.com/video/892583114?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "1 - Bloody Confessions 10-09-2018",
                  "description": "",
                  "publishedAt": "2023-12-08T11:25:27+00:00",
                  "duration": 4057,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765793801-979e48725711ad96c80397a52b04ef751faa67935be1628f0c750d76a9d13053-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892583363",
                  "vimeoVideoId": "892583363",
                  "embedUrl": "https://player.vimeo.com/video/892583363?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2 - In Every Season 10-14-2018",
                  "description": "",
                  "publishedAt": "2023-12-08T11:26:36+00:00",
                  "duration": 4147,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765794307-3d57d3b2a556114da1474f1aee5ba22a60600aa996de0f800d0bef98719cb85e-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892583636",
                  "vimeoVideoId": "892583636",
                  "embedUrl": "https://player.vimeo.com/video/892583636?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3 - Born from Above  10-19-2018",
                  "description": "",
                  "publishedAt": "2023-12-08T11:27:43+00:00",
                  "duration": 5244,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765794878-f70e0eb12bca4a0c2a34f0900dd7a98810b0c6f10fc75ce3cb045c726215bb8b-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892583993",
                  "vimeoVideoId": "892583993",
                  "embedUrl": "https://player.vimeo.com/video/892583993?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "4 - Fallen -10-23-2018",
                  "description": "",
                  "publishedAt": "2023-12-08T11:29:10+00:00",
                  "duration": 3698,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765795074-f620d065f9becde0979055d3cea13ad6630811e7e1dcd6b17f698915b173bc35-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892584200",
                  "vimeoVideoId": "892584200",
                  "embedUrl": "https://player.vimeo.com/video/892584200?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "5 - Commending your Conscience 10-28-2018",
                  "description": "",
                  "publishedAt": "2023-12-08T11:30:01+00:00",
                  "duration": 4599,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765795714-08647695c38828111c5c0a1602337ce9995d36348001c74ad3194b1ed4856ae6-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892584571",
                  "vimeoVideoId": "892584571",
                  "embedUrl": "https://player.vimeo.com/video/892584571?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "6 - Blood Borders  10-30-2018",
                  "description": "",
                  "publishedAt": "2023-12-08T11:31:25+00:00",
                  "duration": 4169,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765796050-c3a52368c0db642d18cf96e366583435561c4f5fe0c3182114c2e73c29a7f334-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892584829",
                  "vimeoVideoId": "892584829",
                  "embedUrl": "https://player.vimeo.com/video/892584829?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "7 - Caught in a Trap Neil Obeysekere 11-06-2018",
                  "description": "",
                  "publishedAt": "2023-12-08T11:32:33+00:00",
                  "duration": 4378,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765797029-6fc92f5fbb492e90fbe2e49a8cecef48b648a7424325804ea498db3a1310c858-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892585101",
                  "vimeoVideoId": "892585101",
                  "embedUrl": "https://player.vimeo.com/video/892585101?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "8 - Transformational Grace 11-11-2018",
                  "description": "",
                  "publishedAt": "2023-12-08T11:33:40+00:00",
                  "duration": 4664,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765797334-714863783d00243ec5d92f5cda6b9c0709d503857161bca56717dc74618525b9-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892585489",
                  "vimeoVideoId": "892585489",
                  "embedUrl": "https://player.vimeo.com/video/892585489?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "9 - Naked and Loving it 11-25-2018",
                  "description": "",
                  "publishedAt": "2023-12-08T11:35:08+00:00",
                  "duration": 3747,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765797442-98f922322de8dcd67f9a5a0ba717b5a0890ed24ad696bfff9ee6fbea9a52e66f-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "Manifest Sons of God Series",
          "parts": 4,
          "projectId": "18769241",
          "videos": [
              {
                  "id": "vimeo_892587991",
                  "vimeoVideoId": "892587991",
                  "embedUrl": "https://player.vimeo.com/video/892587991?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "5 - Disentangled 03-05-2019",
                  "description": "",
                  "publishedAt": "2023-12-08T11:45:15+00:00",
                  "duration": 3268,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765801315-0fa42650e2184077d721b4babea6dca16659ee544cc818ef373898a2c35c62fb-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892588366",
                  "vimeoVideoId": "892588366",
                  "embedUrl": "https://player.vimeo.com/video/892588366?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "1 - First Born Rights 02-12-2019",
                  "description": "",
                  "publishedAt": "2023-12-08T11:46:46+00:00",
                  "duration": 4574,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765801699-8edbdcd3ffe8dd7cb1e1035ae4d35b3ca8a78019a4ba8ae878e03c4adb0824d0-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892588627",
                  "vimeoVideoId": "892588627",
                  "embedUrl": "https://player.vimeo.com/video/892588627?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2 - Double Double 02-19-2019",
                  "description": "",
                  "publishedAt": "2023-12-08T11:47:59+00:00",
                  "duration": 4833,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765802456-210e9ac37aca3a29a5e49b2a27f4047ececbad38701f8026a04e2228328fe1d7-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892589161",
                  "vimeoVideoId": "892589161",
                  "embedUrl": "https://player.vimeo.com/video/892589161?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3 - Following The Spirit _ Neil Obeyesekere 02-24-2019",
                  "description": "",
                  "publishedAt": "2023-12-08T11:50:07+00:00",
                  "duration": 6402,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765803115-a00bc38ffac020ac7fe040577bbbfa172220331fe4930e8bf2e69829f1439c2f-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "Ecclesiastical Purpose",
          "parts": 13,
          "projectId": "18769247",
          "videos": [
              {
                  "id": "vimeo_892591637",
                  "vimeoVideoId": "892591637",
                  "embedUrl": "https://player.vimeo.com/video/892591637?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "9 - Judgement Seats 06-18-2019",
                  "description": "",
                  "publishedAt": "2023-12-08T11:59:55+00:00",
                  "duration": 5816,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765806760-36c676545278196a20f7988659c7ce983569167cde195de859942379722dbbe8-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892592097",
                  "vimeoVideoId": "892592097",
                  "embedUrl": "https://player.vimeo.com/video/892592097?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "10 - Debt Collectors 06-25-2019",
                  "description": "",
                  "publishedAt": "2023-12-08T12:01:48+00:00",
                  "duration": 4377,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765807595-b189d5a3ad2fb9e3360dfd2ac186b37c882e9be4708d805481933e3ce8147b53-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892592500",
                  "vimeoVideoId": "892592500",
                  "embedUrl": "https://player.vimeo.com/video/892592500?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "11 - Betrayed 06-30-2019",
                  "description": "",
                  "publishedAt": "2023-12-08T12:03:21+00:00",
                  "duration": 5463,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765807802-3c53f4f11a0468dbdb36f763f4f0b2d322cbe391ba1b9f82924b683f1b6ab234-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892592828",
                  "vimeoVideoId": "892592828",
                  "embedUrl": "https://player.vimeo.com/video/892592828?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "12 - Strangers 07-02-2019",
                  "description": "",
                  "publishedAt": "2023-12-08T12:04:46+00:00",
                  "duration": 4671,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765808530-30176c9e107c4de41cebfa6820f471236ee609afe5da72d8a054e244c45e51b9-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892593215",
                  "vimeoVideoId": "892593215",
                  "embedUrl": "https://player.vimeo.com/video/892593215?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "13 - Walking the Talk 07-07-2019",
                  "description": "",
                  "publishedAt": "2023-12-08T12:06:12+00:00",
                  "duration": 3991,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765808956-cdbbd223219ed0c08e4d4491ad0ec85ad877653c15ec1495d662d2342364b4a8-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892593588",
                  "vimeoVideoId": "892593588",
                  "embedUrl": "https://player.vimeo.com/video/892593588?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "1 - Good Governance 05-21-2019",
                  "description": "",
                  "publishedAt": "2023-12-08T12:07:14+00:00",
                  "duration": 5320,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765809788-f8d762d0e1368953d0a89a2317f5a73cb4c01b6c074bd45f4ad46fc72e2e334c-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892594212",
                  "vimeoVideoId": "892594212",
                  "embedUrl": "https://player.vimeo.com/video/892594212?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2 - Crowns 05-25-2019",
                  "description": "",
                  "publishedAt": "2023-12-08T12:09:25+00:00",
                  "duration": 5499,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765810416-1d96419b343fbe7efd8973cb705e0fef68549efcead616b347d01669198ec522-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892594391",
                  "vimeoVideoId": "892594391",
                  "embedUrl": "https://player.vimeo.com/video/892594391?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3 - This is Wisdom  05-28-2019",
                  "description": "",
                  "publishedAt": "2023-12-08T12:10:18+00:00",
                  "duration": 4649,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765811131-0bb29eb1148c5c7d87c2c9bae028b69cca3c62688e95e7de798008fb5a6ce2ec-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892596506",
                  "vimeoVideoId": "892596506",
                  "embedUrl": "https://player.vimeo.com/video/892596506?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "6 - High Performance 06-08-2019",
                  "description": "",
                  "publishedAt": "2023-12-08T12:19:59+00:00",
                  "duration": 6079,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765814082-40e9854df9c248a5a76841d899cafbdc4b9464559aefd7403792a7c03d3f78b6-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892596850",
                  "vimeoVideoId": "892596850",
                  "embedUrl": "https://player.vimeo.com/video/892596850?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "4 - Bethel -06-3-2019",
                  "description": "",
                  "publishedAt": "2023-12-08T12:21:37+00:00",
                  "duration": 5986,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765814686-121566b3df41b23fb38a0253fc35cf7a32812e50f47a47803caf2428753d135b-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892597302",
                  "vimeoVideoId": "892597302",
                  "embedUrl": "https://player.vimeo.com/video/892597302?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "5 - Despicable Me 06-04-2019",
                  "description": "",
                  "publishedAt": "2023-12-08T12:23:27+00:00",
                  "duration": 4236,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765815403-84ba2adea09d90b2f2227dcdd974a7d3153c1987bb961051129da4fd108e7d51-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892597805",
                  "vimeoVideoId": "892597805",
                  "embedUrl": "https://player.vimeo.com/video/892597805?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "7 - Life Stories 06-11-2019",
                  "description": "",
                  "publishedAt": "2023-12-08T12:25:18+00:00",
                  "duration": 4942,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765816186-27972d539ee513c763c1839c7b11f5d768b2b65c45fdc34f6ed6a9cdbdf232d2-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_892598221",
                  "vimeoVideoId": "892598221",
                  "embedUrl": "https://player.vimeo.com/video/892598221?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "8 - Eye Am 06-16-2019",
                  "description": "",
                  "publishedAt": "2023-12-08T12:27:04+00:00",
                  "duration": 6200,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1765817009-13648ecdf1cf82cf3ce9b765866e34d9f64d0d892f16878afba53b7e20d470b4-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "Meta Cognition Series",
          "parts": 9,
          "projectId": "18769250",
          "videos": [
              {
                  "id": "vimeo_893181409",
                  "vimeoVideoId": "893181409",
                  "embedUrl": "https://player.vimeo.com/video/893181409?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "10 - Victim Mentality 01-26-2020",
                  "description": "",
                  "publishedAt": "2023-12-11T03:40:24+00:00",
                  "duration": 3816,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1766820815-62e8367210c71465071143a5c2584fbc0b5c0be1d8305798379217e48fe30346-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_893183048",
                  "vimeoVideoId": "893183048",
                  "embedUrl": "https://player.vimeo.com/video/893183048?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "1 - Bad Habits 12-17-2019",
                  "description": "",
                  "publishedAt": "2023-12-11T03:51:35+00:00",
                  "duration": 4193,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1766822360-643f1fdbc5018ba19753ecce20ee8df628e782199701cfe47be932270f053425-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_893183954",
                  "vimeoVideoId": "893183954",
                  "embedUrl": "https://player.vimeo.com/video/893183954?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2 - NEXTGEN - Christmas Message 2019",
                  "description": "",
                  "publishedAt": "2023-12-11T03:57:51+00:00",
                  "duration": 4713,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1766824473-abbf01051bd4e082dd928bdb4cb8b433a461ff951e0f7f3f8e269149099c3073-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_893185000",
                  "vimeoVideoId": "893185000",
                  "embedUrl": "https://player.vimeo.com/video/893185000?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3 - How to Stop Overthinking Everything 12-29-2019",
                  "description": "",
                  "publishedAt": "2023-12-11T04:04:14+00:00",
                  "duration": 3996,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1766825917-2bfbd138e01fa6c95b63a480eaa3651ea9dcb822a53029445ee7379f18a25118-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_893186129",
                  "vimeoVideoId": "893186129",
                  "embedUrl": "https://player.vimeo.com/video/893186129?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "4 - Unveiling Manifest Sons  - 2020 Prophetic Word",
                  "description": "",
                  "publishedAt": "2023-12-11T04:11:38+00:00",
                  "duration": 6587,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1766829147-126bb312c6c9167f26f3180b054ec18ae12daf52a509e8247a5ec6b548f4e631-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_893187973",
                  "vimeoVideoId": "893187973",
                  "embedUrl": "https://player.vimeo.com/video/893187973?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "5 - Overcoming Guilt 01-05-2020",
                  "description": "",
                  "publishedAt": "2023-12-11T04:25:16+00:00",
                  "duration": 4605,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1766832703-119086e475562d64f84f426f9bcc5fcf6b71cddea5f08b66341e0d4a99b895ab-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_893190036",
                  "vimeoVideoId": "893190036",
                  "embedUrl": "https://player.vimeo.com/video/893190036?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "6 - How can I overcome a Habitual Sin 01-07-2020",
                  "description": "",
                  "publishedAt": "2023-12-11T04:38:29+00:00",
                  "duration": 3970,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1766834201-2093ce90fe4f6ba27978c4677737a901a27f4feb16c9a92b3ef9409c160ce27c-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_893190988",
                  "vimeoVideoId": "893190988",
                  "embedUrl": "https://player.vimeo.com/video/893190988?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "7 - How to Find Your Purpose  01-12-2020",
                  "description": "",
                  "publishedAt": "2023-12-11T04:44:15+00:00",
                  "duration": 4837,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1766835200-15859c1ccc1ac22a309849e3e70b5744b8f4494e9fa86c1c6d3b3965c0b9ecc5-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_893191607",
                  "vimeoVideoId": "893191607",
                  "embedUrl": "https://player.vimeo.com/video/893191607?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "8 - Before you Overthink, Watch this 01-14-2020",
                  "description": "",
                  "publishedAt": "2023-12-11T04:48:19+00:00",
                  "duration": 3628,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1766836034-60f9b68c0c2a7f6e8507107b8fa78080528e288830af635753bb6c91f0a33498-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      },
      {
          "title": "Thelēma Series",
          "parts": 4,
          "projectId": "18769258",
          "videos": [
              {
                  "id": "vimeo_893205788",
                  "vimeoVideoId": "893205788",
                  "embedUrl": "https://player.vimeo.com/video/893205788?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "5 - Mystery of his will 09-15-2020",
                  "description": "",
                  "publishedAt": "2023-12-11T06:15:17+00:00",
                  "duration": 2687,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1766860548-fc4d1b795860ff0c7dcc17f2983dabc5010fa0950a3edad231beae8fdb3b1105-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_893206709",
                  "vimeoVideoId": "893206709",
                  "embedUrl": "https://player.vimeo.com/video/893206709?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "1 - Willpower  08-11-2020",
                  "description": "",
                  "publishedAt": "2023-12-11T06:21:34+00:00",
                  "duration": 2525,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1766861419-b45e0f560e2865891c8144f653a3ccebbf218f2161fddb6754d39d6017e3c5b0-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_893207295",
                  "vimeoVideoId": "893207295",
                  "embedUrl": "https://player.vimeo.com/video/893207295?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "2 - Active intention 08-25-2020",
                  "description": "",
                  "publishedAt": "2023-12-11T06:24:58+00:00",
                  "duration": 4673,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1766863458-a4771dfdebc9fd9d777d1b471e9fb98b7e5be4ecabe1d0fe7f9a3c772e95234e-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              },
              {
                  "id": "vimeo_893208310",
                  "vimeoVideoId": "893208310",
                  "embedUrl": "https://player.vimeo.com/video/893208310?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=536651",
                  "title": "3 - Momentum of the will (Daily effective prayer) 09-01-2020",
                  "description": "",
                  "publishedAt": "2023-12-11T06:31:12+00:00",
                  "duration": 3460,
                  "thumbnailUrl": "https://i.vimeocdn.com/video/1766863821-99674a00b0acd18178d6f65b491f430b503d3239a52f6963c1a7a169d2802a82-d_1920x1080?&r=pad&region=us",
                  "speaker": "WOWLife Church",
                  "category": "Resources"
              }
          ]
      }
  ];

  const state = {
    series: [],
    videos: [],
    filtered: [],
    search: "",
    sort: "latest",
    openSeries: "",
  };

  const app = document.getElementById("app");

  async function fetchVideos() {
    const paths = [
      "./deep-dives.json",
      "/spaces/12760353/feed/deep-dives.json",
      "/feed/deep-dives.json",
      "/deep-dives.json",
    ];
    for (const path of paths) {
      try {
        const response = await fetch(path, { cache: "no-store" });
        if (response.ok) {
          return normalizeVideos(await response.json());
        }
      } catch {
        // Static deployments may omit the JSON file; embedded data below keeps the page usable.
      }
    }

    return normalizeVideos(getEmbeddedVideos());
  }

  async function fetchResourceSeries() {
    const paths = [
      "./resource-series.json",
      "/spaces/12760353/feed/resource-series.json",
      "/feed/resource-series.json",
      "/resource-series.json",
    ];
    for (const path of paths) {
      try {
        const response = await fetch(path, { cache: "no-store" });
        if (response.ok) {
          return normalizeSeries(await response.json());
        }
      } catch {
        // Static deployments may omit the JSON file; embedded data below keeps the page usable.
      }
    }

    return normalizeSeries(getEmbeddedResourceSeries());
  }

  function getEmbeddedVideos() {
    return Array.isArray(window.WLWN_EMBEDDED_VIDEOS) ? window.WLWN_EMBEDDED_VIDEOS : DEFAULT_EMBEDDED_VIDEOS;
  }

  function getEmbeddedResourceSeries() {
    return Array.isArray(window.WLWN_RESOURCE_SERIES) ? window.WLWN_RESOURCE_SERIES : RESOURCE_SERIES;
  }

  function normalizeSeries(seriesList) {
    return seriesList.map((series) => ({
      ...series,
      videos: sortSeriesVideos(normalizeVideos(series.videos || [])),
    }));
  }

  function sortSeriesVideos(videos) {
    return videos
      .map((video, index) => ({ video, index, order: videoOrder(video.title) }))
      .sort((a, b) => {
        if (a.order !== b.order) return a.order - b.order;
        return a.index - b.index;
      })
      .map((item) => item.video);
  }

  function videoOrder(title) {
    const value = String(title || "").toLowerCase();
    const patterns = [
      /^(\d+)[._\s-]/,
      /session\s*(\d+)/,
      /module[_\s]*(\d+)/,
    ];
    for (const pattern of patterns) {
      const match = value.match(pattern);
      if (match) return Number(match[1]);
    }
    return Number.MAX_SAFE_INTEGER;
  }

  function flattenSeriesVideos(seriesList) {
    return seriesList.flatMap((series) =>
      (series.videos || []).map((video) => ({
        ...video,
        seriesTitle: series.title,
      })),
    );
  }

  function normalizeVideos(videos) {
    return videos
      .filter((video) => video.vimeoVideoId)
      .map((video) => ({
        ...video,
        category: "Deep Dives",
        speaker: video.speaker || "WOWLife Church",
        publishedAt: video.publishedAt ? new Date(video.publishedAt) : null,
      }));
  }

  function formatDate(value) {
    if (!value) return "";
    const date = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(date.getTime())) return "";
    return date.toLocaleDateString("en", { year: "numeric", month: "short", day: "numeric" });
  }

  function formatDuration(seconds) {
    if (!seconds) return "";
    const value = Number(seconds);
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    const secs = Math.floor(value % 60);
    if (hours) return `${hours}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    return `${minutes}:${String(secs).padStart(2, "0")}`;
  }

  function displayTitle(title) {
    let value = String(title || "").trim();
    value = value.replace(/\.(mp4|mov|m4v|webm)$/i, "");
    value = value.replace(/\s*\((?:\d{3,4}p|hd|full hd)\)\s*[_-]?\d*$/i, "");
    value = value.replace(/\s+v\d+$/i, "");
    value = value.replace(/\b(?:720p|1080p|4k)\b/gi, "");
    value = value.replace(/[_]+/g, " ");
    value = value.replace(/\s+v\d+$/i, "");
    value = value.replace(/^(\d+)\s*[.\-:]\s*/, "$1. ");
    value = value.replace(/^(\d+)\s+/, "$1. ");
    value = value.replace(/\s+/g, " ").trim();
    if (!value) return "Untitled Video";

    return value
      .split(" ")
      .map((word) => {
        if (/^(cms|q&a|wow|wowlife)$/i.test(word)) return word.toUpperCase();
        if (/^(tohu|wa-bohu)$/i.test(word)) return word.replace(/\b\w/g, (char) => char.toUpperCase());
        if (/^v\d+$/i.test(word)) return word.toLowerCase();
        if (/^\d/.test(word)) return word;
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ")
      .replace(/\bAnd\b/g, "&")
      .replace(/\bAt\b/g, "at")
      .replace(/\bTo\b/g, "to")
      .replace(/\bIn\b/g, "in")
      .replace(/\bOf\b/g, "of");
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function icon(name) {
    const icons = {
      play: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
      search: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
      home: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/></svg>',
      grid: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect width="7" height="7" x="3" y="3"/><rect width="7" height="7" x="14" y="3"/><rect width="7" height="7" x="14" y="14"/><rect width="7" height="7" x="3" y="14"/></svg>',
    };
    return icons[name] || "";
  }

  function videoUrl(video) {
    const watchPath = `/watch/${encodeURIComponent(video.id)}`;
    return window.location.protocol === "file:" ? `#${watchPath}` : watchPath;
  }

  function homeUrl() {
    return window.location.protocol === "file:" ? "#/" : "/";
  }

  function seriesSlug(title) {
    return `series-${String(title || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")}`;
  }

  function parseVimeoReference(value) {
    const raw = String(value || "").trim();
    const match = raw.match(/(?:vimeo\.com\/(?:video\/)?|player\.vimeo\.com\/video\/)?(\d+)(?::([a-z0-9]+)|[?&]h=([a-z0-9]+))?/i);
    if (!match) return null;
    return {
      id: match[1],
      hash: match[2] || match[3] || "",
    };
  }

  function buildVimeoEmbedUrl(video, options = {}) {
    const existing = video.embedUrl || "";
    const autoplay = options.autoplay ? "1" : "";
    if (existing) {
      try {
        const url = new URL(existing, window.location.href);
        if (autoplay) url.searchParams.set("autoplay", autoplay);
        url.searchParams.set("title", "0");
        url.searchParams.set("byline", "0");
        url.searchParams.set("portrait", "0");
        return url.toString();
      } catch {
        return existing;
      }
    }

    const parsed = parseVimeoReference(video.vimeoVideoId || video.id);
    if (!parsed) return "";
    const url = new URL(`https://player.vimeo.com/video/${parsed.id}`);
    if (parsed.hash) url.searchParams.set("h", parsed.hash);
    url.searchParams.set("title", "0");
    url.searchParams.set("byline", "0");
    url.searchParams.set("portrait", "0");
    url.searchParams.set("badge", "0");
    url.searchParams.set("autopause", "0");
    url.searchParams.set("player_id", "0");
    url.searchParams.set("app_id", "536651");
    if (autoplay) url.searchParams.set("autoplay", autoplay);
    return url.toString();
  }

  function createAdHocVimeoVideo(reference) {
    const parsed = parseVimeoReference(reference);
    if (!parsed) return null;
    const vimeoVideoId = parsed.hash ? `${parsed.id}:${parsed.hash}` : parsed.id;
    return {
      id: `vimeo_${vimeoVideoId}`,
      vimeoVideoId,
      title: "WOWLife Video",
      description: "",
      publishedAt: null,
      duration: 0,
      thumbnailUrl: "",
      speaker: "WOWLife Church",
      category: "Resources",
    };
  }

  function applyFilters() {
    const query = state.search.trim().toLowerCase();
    state.filtered = state.series
      .map((series) => {
        const videos = series.videos || [];
        const titleMatch = !query || series.title.toLowerCase().includes(query);
        const matchingVideos = titleMatch
          ? videos
          : videos.filter((video) => [video.title, displayTitle(video.title), video.description].join(" ").toLowerCase().includes(query));
        return { ...series, videos: matchingVideos };
      })
      .filter((series) => !query || series.title.toLowerCase().includes(query) || series.videos.length);
  }

  function renderShell(inner) {
    app.innerHTML = `
      <div class="app-shell">
        <header class="topbar">
          <a class="brand-link" href="${homeUrl()}">
            <img class="brand-logo" src="${LOGO_URL}" alt="WOWLife" />
            <span class="brand-copy">
              <span class="brand-title">WOWLife</span>
              <span class="brand-kicker">Watch</span>
            </span>
          </a>
          <div class="top-actions">
            <a class="nav-button" href="https://www.wowlife.lk">${icon("home")} Home</a>
            <a class="nav-button" href="${homeUrl()}">${icon("grid")} Browse</a>
          </div>
        </header>
        ${inner}
      </div>
    `;
  }

  function renderHome() {
    applyFilters();
    const totalParts = state.series.reduce((sum, series) => sum + series.parts, 0);
    const visibleVideos = flattenSeriesVideos(state.filtered);
    const featured = visibleVideos[0] || state.videos[0];
    const countText = `${state.filtered.length} series • ${visibleVideos.length} videos • ${totalParts} parts`;
    const heroStyle = featured?.thumbnailUrl ? ` style="background-image:url('${escapeHtml(featured.thumbnailUrl)}')"` : "";

    renderShell(`
      <section class="hero hero-cinema">
        <div class="hero-media"${heroStyle}></div>
        <div class="hero-noise" aria-hidden="true"></div>
        <div class="hero-inner">
          <div class="hero-copy">
            <p class="eyebrow">WOWLife Church</p>
            <h1>
              <span>WOWLife</span>
              <span>Resources</span>
            </h1>
            <p>Deep teachings, resource series, and spiritual formation content<br />organized for steady learning and personal transformation</p>
            <label class="hero-search search-box">
              ${icon("search")}
              <input id="searchInput" type="search" placeholder="Search resources..." value="${escapeHtml(state.search)}" />
            </label>
          </div>
        </div>
        <div class="scroll-cue" aria-hidden="true"><span></span></div>
      </section>

      <main class="content streaming-content" id="library">
        <div class="filters">
          <button class="chip active" type="button">All Resources</button>
        </div>
        <div class="section-head">
          <div>
            <h2>Continue Watching</h2>
            <p>${countText}</p>
          </div>
        </div>
        ${renderResourceGrid(state.filtered)}
      </main>
    `);

    bindHomeEvents();
  }

  function renderResourceGrid(seriesList) {
    if (!seriesList.length) {
      return `
        <div class="empty-state" style="min-height:280px">
          <p>No resource series match your search.</p>
        </div>
      `;
    }

    return `
      <div class="library-layout">
        <aside class="series-nav" aria-label="Resource series">
          <div class="series-nav-head">
            <span>Browse by series</span>
            <strong>${seriesList.length}</strong>
          </div>
          <div class="series-nav-list">
            ${seriesList
              .map(
                (series, index) => `
                  <a href="#${escapeHtml(seriesSlug(series.title))}">
                    <em>${String(index + 1).padStart(2, "0")}</em>
                    <span>${escapeHtml(series.title)}</span>
                    <small>${series.videos?.length || 0} videos</small>
                  </a>
                `,
              )
              .join("")}
          </div>
        </aside>
        <div class="resource-sections">
          ${seriesList.map(renderResourceSection).join("")}
        </div>
      </div>
    `;
  }

  function renderResourceSection(series) {
    const available = series.videos?.length || 0;
    return `
      <section class="resource-section" id="${escapeHtml(seriesSlug(series.title))}">
        <div class="resource-section-head">
          <div>
            <h3>${escapeHtml(series.title)}</h3>
            <p>${series.parts} ${series.parts === 1 ? "Part" : "Parts"}${available ? ` • ${available} video${available === 1 ? "" : "s"}` : ""}</p>
          </div>
        </div>
        <div class="resource-panel open">
          ${
            available
              ? `<div class="video-row">${series.videos.map(renderVideoCard).join("")}</div>`
              : `<div class="empty-resource">No matched Vimeo videos found for this resource yet.</div>`
          }
        </div>
      </section>
    `;
  }

  function renderVideoGrid(videos) {
    if (!videos.length) {
      return `
        <div class="empty-state" style="min-height:280px">
          <p>No videos have been pulled from Vimeo folder ${SOURCE_FOLDER_ID} yet. Run the Vimeo folder sync with a token that can read this folder.</p>
        </div>
      `;
    }

    return `
      <div class="video-grid">
        ${videos.map(renderVideoCard).join("")}
      </div>
    `;
  }

  function renderVideoCard(video, index) {
    const title = displayTitle(video.title);
    return `
      <button class="video-card" type="button" data-video-id="${escapeHtml(video.id)}">
        <span class="thumb">
          <img src="${escapeHtml(video.thumbnailUrl)}" alt="${escapeHtml(title)}" loading="lazy" />
          <span class="play-mark">${icon("play")}</span>
          <span class="episode-number">${String(index + 1).padStart(2, "0")}</span>
          ${video.duration ? `<span class="duration">${formatDuration(video.duration)}</span>` : ""}
        </span>
        <span class="card-body">
          <h3>${escapeHtml(title)}</h3>
          <span class="meta">
            <span>${escapeHtml(video.speaker)}</span>
            ${video.publishedAt ? `<span>${formatDate(video.publishedAt)}</span>` : ""}
            <span class="tag">${escapeHtml(video.seriesTitle || video.category || "Resources")}</span>
          </span>
        </span>
      </button>
    `;
  }

  function bindHomeEvents() {
    const searchInput = document.getElementById("searchInput");
    const sortSelect = document.getElementById("sortSelect");

    searchInput?.addEventListener("input", (event) => {
      state.search = event.target.value;
      renderHome();
      document.getElementById("searchInput")?.focus();
    });

    sortSelect?.addEventListener("change", (event) => {
      state.sort = event.target.value;
      renderHome();
    });

    document.querySelectorAll("[data-video-id]").forEach((card) => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-video-id");
        window.location.href = videoUrl({ id });
      });
    });

  }

  function renderWatch(videoId) {
    const video =
      state.videos.find((item) => item.id === videoId || item.vimeoVideoId === videoId) ||
      createAdHocVimeoVideo(videoId);
    if (!video) {
      renderShell(`
        <main class="error-state">
          <div>
            <h1>Video not found</h1>
            <p>The selected Deep Dives video is unavailable.</p>
            <p><a class="nav-button" href="#/">Back to videos</a></p>
          </div>
        </main>
      `);
      return;
    }

    const upNext = state.videos.filter((item) => item.id !== video.id).slice(0, 8);
    const embedUrl = buildVimeoEmbedUrl(video, { autoplay: true });
    const title = displayTitle(video.title);

    renderShell(`
      <main class="watch-layout">
        <article class="player-panel">
          <div class="player-frame">
            <iframe
              src="${escapeHtml(embedUrl)}"
              title="${escapeHtml(title)}"
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
              referrerpolicy="strict-origin-when-cross-origin"
              loading="eager"
              allowfullscreen
            ></iframe>
          </div>
          <div class="watch-copy">
            <p class="eyebrow">Now watching</p>
            <h1>${escapeHtml(title)}</h1>
            <div class="meta">
              <span>${escapeHtml(video.speaker)}</span>
              ${video.publishedAt ? `<span>${formatDate(video.publishedAt)}</span>` : ""}
              ${video.duration ? `<span>${formatDuration(video.duration)}</span>` : ""}
              <span class="tag">${escapeHtml(video.seriesTitle || video.category || "Resources")}</span>
            </div>
            ${video.description ? `<p>${escapeHtml(video.description)}</p>` : ""}
          </div>
        </article>
        <aside class="up-next">
          <h2>Up Next</h2>
          <div class="next-list">
            ${upNext.map(renderNextItem).join("")}
          </div>
        </aside>
      </main>
    `);
  }

  function renderNextItem(video) {
    const title = displayTitle(video.title);
    return `
      <a class="next-item" href="${videoUrl(video)}">
        <img src="${escapeHtml(video.thumbnailUrl)}" alt="${escapeHtml(title)}" loading="lazy" />
        <span>
          <strong>${escapeHtml(title)}</strong>
          <span>${formatDate(video.publishedAt)}</span>
        </span>
      </a>
    `;
  }

  function route() {
    const hashRoute = window.location.hash.replace(/^#\/?/, "");
    const pathRoute = window.location.pathname.replace(/^\/+/, "");
    const activeRoute = pathRoute.startsWith("watch/") ? pathRoute : hashRoute;
    if (activeRoute.startsWith("watch/")) {
      renderWatch(decodeURIComponent(activeRoute.slice("watch/".length)));
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    renderHome();
  }

  function renderError(error) {
    app.innerHTML = `
      <div class="error-state">
        <div>
          <h1>Could not load Deep Dives</h1>
          <p>${escapeHtml(error.message)}</p>
        </div>
      </div>
    `;
  }

  window.addEventListener("hashchange", route);
  window.addEventListener("popstate", route);

  state.series = normalizeSeries(getEmbeddedResourceSeries());
  state.videos = flattenSeriesVideos(state.series);
  route();

  fetchResourceSeries()
    .then((series) => {
      if (!series.length) return;
      state.series = series;
      state.videos = flattenSeriesVideos(series);
      route();
    })
    .catch(() => {
      // Embedded resource data is already rendered above.
    });
})();
