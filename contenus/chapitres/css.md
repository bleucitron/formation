
# [CSS](https://developer.mozilla.org/fr/docs/Web/CSS)

C'est le **maquillage** d'une page web.

## Sélecteurs CSS

```css
mon-selecteur-css {
  ma-regle: "ma-valeur";
}
```

### Base

Tous les éléments d'un certain type
   * `span`, `div`, `p`, `body`, `*`, etc.

Tous les éléments avec la classe `azerty`
    * `.azerty`

L'élément avec l'id `tabs`
    * `#tabs`

Les éléments avec un certain attribut
  * `a[href]`
  * `input[type="email"]`
  * `input[disabled]`

### Composition
  * `E, F` "et"
  * `E F` "descendant"
  * `E > F` "enfant"

### [Pseudo-classes](https://developer.mozilla.org/fr/docs/Web/CSS/Pseudo-classes)
  * `x:hover`, `x:visited`
  * [n-ième élément](https://developer.mozilla.org/fr/docs/Web/CSS/:nth-child)
      * `x:nth-of-type(3)`
      * `x:nth-child(even)`
      * `x:nth-child(odd)`
      * `x:nth-of-type(2n+1)`
      * `x:first-child`, `x:last-child`

```css
tr td {
  background-color: white;
}
tr:nth-child(odd) td {
  background-color: grey;
}

button:hover {
  color: blue;
}

a:visited {
  color: yellow;
}
```


## [Box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model)

* `width`/`height`
* `padding`: marge interne
* `border`: bordure
* `margin`: marge externe

(montrer devtools)

* [box-sizing](https://developer.mozilla.org/fr/docs/Web/CSS/box-sizing) : gérer la définition de la taille

## [La Cascade](https://developer.mozilla.org/fr/docs/Apprendre/CSS/Introduction_%C3%A0_CSS/La_cascade_et_l_h%C3%A9ritage)

Le style d'un document HTML est appliqué selon la logique d'une cascade.

### [`display`](https://developer.mozilla.org/fr/docs/Web/CSS/display)

```css
div {
  display: block;
}
```

* `block`
* `inline`
* `inline-block`
* `table`
  * `table`
  * `table-row`
  * `table-cell`
* [`flex`](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  * `flex-direction`
  * `justify-content`
  * `align-items`
* [`grid`](https://css-tricks.com/snippets/css/complete-guide-grid/)
* `none`

### [`position`](https://developer.mozilla.org/fr/docs/Web/CSS/position)

```css
div {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
}
```
* `relative` : se positionne relativement à sa position initiale
* `absolute`: se positionne relativement à son plus proche parent **positionné**
* `fixed`: se positionne relativement au `body`

## [Unités](https://developer.mozilla.org/en-US/docs/Web/CSS/length#rem)

`px` ou `pt`, c'est le mal !

Utiliser `rem` ou `%`.


## Polices

S'ajoutent via [`@font-face`](https://www.paulirish.com/2009/bulletproof-font-face-implementation-syntax/)

```css
@font-face {
  font-family: 'Graublau Web';
  src: url('GraublauWeb.eot?');
}
```

Où trouver des polices:
* [DaFont](https://www.dafont.com/fr/)
* [GoogleFonts](https://fonts.google.com/)


## [Couleurs](https://fr.wikipedia.org/wiki/Couleur_du_Web)

Hexadécimal: `#123456`

RGB: `rgb(255, 33, 21);`

RGB transparent: `rgba(255, 33, 21, 0.1);`

[HSL](http://fr.wikipedia.org/wiki/Teinte_Saturation_Luminosit%C3%A9#Mod.C3.A8les_colorim.C3.A9triques
): `hsl(204, 27%, 24%)`


## Want more ?

Les navigateurs ne traitent pas toujours les règles exactement de la même façon.
* [Comment normaliser ?](http://necolas.github.io/normalize.css/)

Des bonnes astuces CSS: [CSS-Tricks](https://css-tricks.com/guides/)

[Guide HTML5](http://html5please.com/)

Une grille CSS toute prête: [Bootstrap](http://getbootstrap.com/)

Font d'icônes
* [FontAwesome](http://fortawesome.github.io/Font-Awesome/)
* [Ionicons](https://ionicons.com/)


[Quelles sont les règles CSS les plus populaires ?](https://www.chromestatus.com/metrics/css/popularity)

[Template HTML5](https://github.com/h5bp/html5-boilerplate)


# [À vos claviers !!!](./presse.md)
