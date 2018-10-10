# [HTML](https://developer.mozilla.org/fr/docs/Web/html)

C'est le **squelette** d'une page web.

## Standards

* HTML 4.01 (décembre 1999)
* XHTML 1 (janvier 2000)
* XHTML 2 [(abandonné fin 2009)](http://www.w3.org/News/2009#entry-6601)
* [**HTML5**](https://fr.wikipedia.org/wiki/HTML5): "[HTML Living standard](http://www.whatwg.org/specs/web-apps/current-work/multipage/index.html)" maintenu par le WHATWG depuis 2004

Backward compatibilité absolue (cercles concentriques)


## Sémantique

HTML est un langage de [balises](https://developer.mozilla.org/fr/docs/Web/Guide/HTML/HTML5/Liste_des_%C3%A9l%C3%A9ments_HTML5), il sert à structurer de l'information pour lui donner du sens.

```html
<monTag monAttribut="maValeur">
  <monAutreTag>Contenu</monAutreTag>
</monTag>

<!-- Commentaire: ceci est une balise auto fermante -->
<monTag monAttribut="maValeur" />
```

### Balises classiques

* [`<meta>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/meta) : Informations sur le document

* [`<a>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/a) : Liens
```html
<a href="https://www.youtube.com/watch?v=2zNSgSzhBfM ">cette vidéo est géniale !</a>
```

* [`<ul>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/ul) [`<ol>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/ol) [`<li>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/li) :  lister des éléments

* [`<article>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/article) [`<menu>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/menu) [`<section>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/section) [`<footer>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/footer) [`<header>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/ul) [`<nav>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/nav) [`<main>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/main) [`<p>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/p) [`<h1>`-`<h6>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Heading_Elements) : structurer son contenu

* [`<table>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/table) : pour des données tabulaires
    * Regarder [`display:flex`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex) ou [`display:table`](https://developer.mozilla.org/en-US/docs/Web/CSS/display) en CSS pour aligner/centrer des éléments visuellement.

* [`<div>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/div) [`<span>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/span) : pas de sens sémantique

### Média

* [`<img>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/img)
    * jpeg
    * png
    * svg
    * gif
```html
<img src="http://example.org/azerty.png" alt="mon image représente..." />
```
* [`<audio>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/audio) [`<video>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/video)
* [`<source>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/source)

### Formulaires

```html
<form action="http://www.monUrl.com" method="POST">
  <label for="nom">Nom</label>
  <input id="nom" name="nom" type="text" />

  <label for="cool">
    Etes-vous cool ?
    <input id="cool" name="cool" type="checkbox" />
  </label>

  <label for="history">Votre histoire</label>
  <textarea id="history" name="histoire"></textarea>

  <input type="submit" value="Envoyer">
</form>
```

* [`<form>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/form)
    * Method: GET ou POST
    * Pas de formulaire imbriqué
    * Envoyer le formulaire avec un &lt;button type="submit"> ou un &lt;input type="submit">
* [`<input>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/input)
    * `type`: text, radio, url, email , number, file, search, date, datetime...
    * `placeholder="coucou"`
    * [`<label>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label) : pour le focus sur l'input quand clic sur label
    * `required`
* [`<textarea>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/textarea), [`<select>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/textarea) et [`<option>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/option)


### Charger une autre page

* [`<iframe src="http://....">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)
    * sandbox

### Attributs communs

* `hidden`
* `lang` (surtout pour &lt;html>)
* `class`
* `id`
* data attributes
    * attributs libres qui commencent par `data-`

* `autocomplete` pour les `<input>`

### Styles

* Dans le `<head>`
* inline : `<style></style>`
* fichier séparé : `<link rel="stylesheet" href="http://www.monUrl.css">`

### Scripts

* Dans le `<head>`
* inline : `<script>`
    * Bloque le parser HTML à cause d'appels potentiels à `document.write`. **NE PAS UTILISER !**
* `<script src=""></script>`
  * toujours fermer la balise!
  * bloque le parser HTML
  * attribut `defer`
      * execution juste avant DOMContentLoaded
      * si plusieurs scripts avec defer, ordre d'execution préservé pour l'execution
  * attribut `async`
      * executé dès que possible, dès la réception du fichier
      * Si plusieurs scripts avec async, aucun ordre d'execution établi


Pour creuser plus profond
* http://www.html5rocks.com/en/tutorials/speed/script-loading/
* https://www.igvita.com/2014/05/20/script-injected-async-scripts-considered-harmful/

## Bonus

* favicon : `<link rel="icon" href="favicon.ico">`

