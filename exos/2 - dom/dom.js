'use strict';

document.addEventListener(
  'DOMContentLoaded',
  function(e) {
    fetch(
      'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json',
    )
      .then(function(resp) {
        return resp.json();
      })
      .then(function(tweets) {
        console.log('Le tableau de tweet', tweets);
        /*

  Pense-bête DOM
  // créer un nouvel élément 'div'
  const x = document.createElement('div');

  // rajouter un enfant
  parentEl.append(enfantEl);

  // accéder au <body>
  document.body

  // ajouter un texte à un élément
  element.textContent = 'le texte yo !';

*/

        // ### 1/ Tweets ###

        // observer la structure des données des tweets dans la console du navigateur

        console.log('--- Question 1 ---');
        /* pour le premier tweet
          - l'afficher dans la console
          - afficher son texte dans la console
          - créer une div qui contient le texte du tweet et ajouter la div au <body>
        */

        console.log('Premier', tweets[0]);
        console.log('Premier texte', tweets[0].text);

        const div = document.createElement('div');
        div.textContent = tweets[0].text;
        document.body.append(div);

        console.log('--- Question 2 ---');
        // afficher dans la console les textes de tous les tweets du tableau en utilisant .forEach()
        tweets.forEach(function(tweet) {
          console.log('Tweet', tweet.text);
        });

        console.log('--- Question 3 ---');
        // créer un tableau avec seulement tous les textes des tweets en utilisant .map()
        const texts = tweets.map(function(tweet) {
          return tweet.text;
        });
        console.log('Texts', texts);

        console.log('--- Question 4 ---');
        // créer un tableau avec seulement les dates de publication
        const dates = tweets.map(function(tweet) {
          return tweet.created_at;
        });
        console.log('Dates', dates);

        console.log('--- Question 5 ---');
        // créer un tableau avec seulement les tweets en français en utilisant .filter()
        const frs = tweets.filter(function(tweet) {
          return tweet.lang === 'fr';
        });
        console.log('Frs', frs);

        console.log('--- Question 6 ---');
        // créer un <ol> et l'ajouter au <body>
        const ol = document.createElement('ol');

        console.log('--- Question 7 ---');
        // pour chaque tweet, créer un <li>, mettre le texte dedans, mettre le <li> dans le <ol>
        tweets.forEach(function(tweet) {
          const li = document.createElement('li');
          li.textContent = tweet.text;
          ol.append(li);
        });

        document.body.append(ol);
      })
      .catch(function(e) {
        console.error(e);
      });
  },
  { once: true },
);
