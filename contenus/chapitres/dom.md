# [DOM (Document Object Model)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

C'est une API pour manipuler un document HTML ou XML (arbre).

Grosso modo composée de noeuds, d'élements et d'évènements.

[L'essentiel](https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model/Introduction#Interfaces_essentielles_du_DOM)

## [Node](https://developer.mozilla.org/fr/docs/Web/API/Node)

Représentent les noeuds de l'arbre.

```js
n.children;
n.parentNode;
parent.append(enfant);
n.remove();
n.replaceWith(n2);
```

### Document + HTMLDocument

Le document est un noeud spécial.

```js
document.createElement('div'); // crée une div orpheline
document.createElementNS('http://www.w3.org/2000/svg', 'g'); // pour le SVG

document.querySelector(selector); // renvoie le premier élément correspondant
document.querySelectorAll(selector); // renvoie un iterateur
```

## [Element](https://developer.mozilla.org/en-US/docs/Web/API/element)

Tous les éléments sont des noeuds, mais pas l'inverse.

Il existe notamment des `HTMLElement`, des `SVGElement`.

```js
e.getAttribute(key);
a.getAttribute('href');
e.setAttribute(key, value);
e.removeAttribute(key);
e.removeAttribute('hidden');

e.textContent = 'Blablabla...';

e.querySelector(selector);
e.querySelectorAll(selector);

/!\ e.innerHTML = ... // DANGEREUX, à éviter
e.innerHTML = ''; // pour vider un élément

e.className // ancien, à éviter
e.classList // moderne, pour accéder aux styles
e.classList.add/remove/contains/toggle

e.style.backgroundColor = ... // l'équivalent CSS est background-color
```

## [EventTarget](https://developer.mozilla.org/fr/docs/Web/API/EventTarget)

Tout est un `EventTarget`.

```js
n.addEventListener(type, listener, options);
n.removeEventListener(type, listener); // attention, comparaison par référence
n.dispatchEvent(e); // génére un évènement custom
// Exemple
monElement.addEventListener(
  'click',
  function() {
    console.log('yo');
  },
  { once: true },
);
```

Éviter les `onclick`, `onmousemove`...
Ils sont uniques par élément.

## [Evènements](https://developer.mozilla.org/en-US/docs/Web/Events)

- `DOMContentLoaded`
  - Quand le HTML est chargée et que l'arbre DOM est construit
- `load`
  - Quand la page entière est chargée (CSS, fonts, images, etc.)
- `click`, `mousedown`, `mouseup`, `dblclick`
- `mouseenter`, `mouseleave`
- `submit` (&lt;form>)
- `keypress`, `keyup`, `keydown`
- `input`
- `change`
- `scroll` (listener après le scroll)
- `touchstart`

### Event properties

```js
element.addEventListener('click', function(e) {
  e.target; // renvoie l'élément qui a généré l'évènement
  e.timestamp; // renvoie la date de l'évènement en ms depuis le chargement de la page
  e.preventDefault(); // empêche les comportements par défaut
  e.clientX; // renvoie la position X de la souris
  e.clientY; // renvoie la position Y de la souris
  e.bubbles; // renvoie true si l'évènement remonte l'arbre, false s'il descend
  e.stopPropagation(); // arrête la propagation de l'évènement
});
```

---

# À vos claviers !!!

Ouvrir le fichier `./src/index.html`, et suivre les indications.

## À suivre: [Asynchrone](./asynchrone.md)
