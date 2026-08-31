**⚖️ Pourquoi le "Dummy Head" est quand même le grand favori ?**

Si ton approche est plus stricte sur la mémoire, l'industrie et les experts en algorithmique préfèrent massivement l'astuce du dummyHead pour trois raisons concrètes :

1. *L'élimination du "If" inutile (Performance CPU)*Dans ton approche, la condition if (head == null) va être évaluée par le processeur à chaque tour de boucle. Si tu additionnes deux nombres de 1000 chiffres, le programme va vérifier cette condition 1000 fois, alors qu'elle ne sera vraie qu'une seule et unique fois (au tout premier tour). Le dummyHead permet de supprimer totalement cette condition de la boucle, ce qui est meilleur pour la prédiction de branchement du CPU.

2. *La simplicité et la lisibilité du code (Clean Code)*Gérer les listes chaînées est la source numéro un des erreurs de type NullPointerException. Le motif du dummyHead te garantit que ton pointeur current n'est jamais nul au démarrage. Cela enlève de la charge mentale : tu as moins de cas particuliers à gérer, et le code est plus court et plus élégant.

3. *Le coût réel du "gaspillage"* Un nœud ListNode en Java pèse quelques octets. En termes de complexité spatiale, ce nœud unique représente $O(1)$. Que ta liste finale fasse 10 éléments ou 1 million d'éléments, tu ne "gaspilles" toujours qu'un seul objet. Le gain en lisibilité et en vitesse d'exécution compense très largement ces quelques octets.