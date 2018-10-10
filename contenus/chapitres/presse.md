# Règles

1. Pas de `<table>` (`display: table/table-row/table-cell` autorisé)
1. Pas d'attributs de style (`align`, `font`, etc...). Pas de `<center>`. Utiliser du CSS
    1. sauf `width` et `height` pour les images
1. Unités : pas de tailles en `px` ou `pt`. Utiliser des `%` (contenants) ou `rem` (textes)
1. Pas de `float` (sauf pour les cas avec `::first-letter`)
1. Pas de `<br>`
1. Interdiction d'utiliser `!important`

1. Les images n'ont aucune importance. Juste prendre des images qui font la même taille/proportion
1. Les textes n'ont aucune importance. Juste mettre la même quantité de texte.

1. Utiliser les éléments sémantiques (`header`, `footer`, `h1`, `h2`, `p`, `article`, etc...)
1. `id` interdits (utiliser des classes ou les parents dans des sélecteurs plus fins ou `:nth-of-type`/`:nth-of-child`)
