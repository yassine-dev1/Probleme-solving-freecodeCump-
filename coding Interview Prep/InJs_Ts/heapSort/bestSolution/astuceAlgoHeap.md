## 1- L'astuce de Heap (n!)
- L'astuce de Heap est que le tableau est modifié sur place. Les appels de generate(2) altèrent l'ordre des éléments pour la boucle suivante de generate(3), ce qui garantit mathématiquement que toutes les combinaisons possibles seront explorées sans jamais devoir cloner ou stocker de multiples tableaux en mémoire.
----