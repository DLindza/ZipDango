angular.module('starter.services', [])

// .factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
//   var chats = [{
//     id: 0,
//     name: 'Ben Sparrow',
//     lastText: 'You on your way?',
//     face: 'img/ben.png'
//   }, {
//     id: 1,
//     name: 'Max Lynx',
//     lastText: 'Hey, it\'s me',
//     face: 'img/max.png'
//   }, {
//     id: 2,
//     name: 'Adam Bradleyson',
//     lastText: 'I should buy a boat',
//     face: 'img/adam.jpg'
//   }, {
//     id: 3,
//     name: 'Perry Governor',
//     lastText: 'Look at my mukluks!',
//     face: 'img/perry.png'
//   }, {
//     id: 4,
//     name: 'Mike Harrington',
//     lastText: 'This is wicked good ice cream.',
//     face: 'img/mike.png'
//   }];
//
//   return {
//     all: function() {
//       return chats;
//     },
//     remove: function(chat) {
//       chats.splice(chats.indexOf(chat), 1);
//     },
//     get: function(chatId) {
//       for (var i = 0; i < chats.length; i++) {
//         if (chats[i].id === parseInt(chatId)) {
//           return chats[i];
//         }
//       }
//       return null;
//     }
//   };
// }),

.factory('Movie', function() {
  var movies = [{
      "tmsId": "MV008813520000",
      "rootId": "12806084",
      "subType": "Feature Film",
      "title": "Queen of Katwe",
      "releaseYear": 2016,
      "releaseDate": "2016-09-10",
      "titleLang": "en",
      "descriptionLang": "en",
      "entityType": "Movie",
      "genres": ["Biography", "Drama"],
      "longDescription": "Living in the slum of Katwe in Kampala, Uganda, is a constant struggle for 10-year-old Phiona (Madina Nalwanga) and her family. Her world changes one day when she meets Robert Katende (David Oyelowo), a missionary who teaches children how to play chess. Phiona becomes fascinated with the game and soon becomes a top player under Katende's guidance. Her success in local competitions and tournaments opens the door to a bright future and a golden chance to escape from a life of poverty.",
      "shortDescription": "Missionary Robert Katende mentors young Ugandan chess prodigy Phiona Mutesi (Madina Nalwanga).",
      "topCast": ["Madina Nalwanga", "David Oyelowo", "Lupita Nyong'o"],
      "directors": ["Mira Nair"],
      "officialUrl": "http://movies.disney.com/queen-of-katwe",
      "qualityRating": {
        "ratingsBody": "TMS",
        "value": "3"
      },
      "ratings": [{
        "body": "Motion Picture Association of America",
        "code": "PG"
      }],
      "advisories": ["Adult Situations"],
      "runTime": "PT02H04M",
      "preferredImage": {
        "width": "240",
        "height": "360",
        "caption": {
          "content": "Queen of Katwe (2016)",
          "lang": "en"
        },
        "uri": "assets/p12806084_p_v5_ab.jpg",
        "category": "Poster Art",
        "text": "yes",
        "primary": "true"
      },
      "showtimes": [{
        "theatre": {
          "id": "10685",
          "name": "Penn Cinema Riverfront IMAX"
        },
        "dateTime": "2016-09-30T11:30",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAWVI&m=161779&d=2016-09-30"
      }]
  }];


  return {
    all: function() {
      return movies;
    },
    get: function(movieName) {
      for (var i = 0; i < movies.length; i++) {
        if (movies[i]["title"] === (movieName)) {
          return movies[i];
        }
      }
      return null;
    }
  };
}),
