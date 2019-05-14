import fetchJson from './fetchJson';
import createOl from './createOl';
import createTrackingButton from './createTrackingButton';

const url1 = 'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json';
const url2 = 'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json';

const p1 = fetchJson(url1);
const p2 = fetchJson(url2);

const trackingButton = createTrackingButton();
document.body.append(trackingButton);

Promise.all([p1, p2])
.then(results => {

  const [ l1, l2 ] = results;
  const tweets = l1.concat(l2);

  console.log('Le tableau de tweet', tweets);

  const filterButton = document.createElement('button');
  document.body.append(filterButton);
  filterButton.textContent = 'Filtre';

  let isFr = false;

  filterButton.addEventListener('click', () => {
    let tweetsToDisplay = tweets;

    if (!isFr)
      tweetsToDisplay = tweets.filter(tweet => tweet.lang === 'fr');

    const newOl = createOl(tweetsToDisplay);

    displayedOl.replaceWith(newOl);
    displayedOl = newOl;
    isFr = !isFr;
  });

  let displayedOl = createOl(tweets);
  document.body.append(displayedOl);

  // Ajouter les infos de la date à nos <li>


  // Ajouter les infos de l'auteur à nos <li>


  // Donner des classes à la date ainsi qu'à l'auteur pour les styliser


  // Faire un module qui contient une fonction qui crée le bouton de filtre


// ### BONUS 1: LOCALSTORAGE ###
    // 1) Rajouter un bouton "fav" à chaque li


    /* 2) quand le bouton est cliqué, changer le style du li (rajouter une classe 'fav')
    + et stocker l'ensemble des id_str fav dans le localStorage */


    // 3) au chargement de la page, lire le localStorage pour favoriser les favoris.


// ### BONUS 2: TIMING EVENEMENTS ###

    /* Faites un bouton (un peu gros) qui écoute mousedown/click/dblclick et mesure le temps de click et de doubleclick
    et affiche tempsClic1, tempsClic2, tempsDoubleClic */


})
.catch(e => console.error(e));
