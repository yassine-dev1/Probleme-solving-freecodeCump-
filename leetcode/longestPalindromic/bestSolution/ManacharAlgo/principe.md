**Algorithme de Manacher ($O(N)$)**

*L'algorithme de Manacher passe la complexité de $O(N^2)$ à $O(N)$*

 en exploitant la symétrie des palindromes déjà détectés pour éviter de retester les mêmes caractères.

 Fonctionnement :
 -Normalisation : Insertion de caractères # entre chaque lettre ("abba" $\rightarrow$ "#a#b#b#a#"). Cela transforme tous les palindromes en palindromes de longueur impaire.
 - Réutilisation (Miroir) : On conserve le centre $C$ et le bord droit $R$ du plus grand palindrome trouvé. Si un nouvel index $i$ est à l'intérieur de ce bord ($i < R$), la longueur initiale de son palindrome est directement copiée depuis son indice miroir *($i_{mirror} = 2C - i$)*.

 **for P[i] = min(R - i, P[i_{mirror}])**
 - Expansion : On tente d'étendre le palindrome autour de $i$ tant que les caractères à gauche et à droite sont égaux. Si l'expansion dépasse le bord droit $R$, on met à jour $C$ et $R$.
 
 *En résumé :* On réutilise la symétrie du miroir, mais on la stoppe au bord R car ce qui se trouve après R est encore inconnu.