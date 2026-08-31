// 1. La définition de la structure du Nœud (souvent fournie par la plateforme)
public class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

 class Solution {

    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        // 2. Le "Dummy Head" (Tête factice) : une astuce géniale pour 
        // construire une nouvelle liste chaînée facilement sans gérer les cas particuliers du premier nœud.
        ListNode head = null;
        ListNode current = null;
        
        int reste = 0;

        // 3. La boucle unique magique
        while (l1 != null || l2 != null || reste != 0) {
            int sum = reste;

            if (l1 != null) {
                sum += l1.val;
                l1 = l1.next; // On avance au nœud suivant
            }

            if (l2 != null) {
                sum += l2.val;
                l2 = l2.next; // On avance au nœud suivant
            }

            // Calcul de la retenue et de l'unité
            reste = sum / 10;
            int value = sum % 10;
            ListNode newNode = new ListNode(value);

    // Ta condition pour sauvegarder l'entête
          if (head == null) {
             head = newNode;
             current = head;
          } else {
           current.next = newNode;
           current = current.next;
        }
}

        // On retourne la suite de la liste, en ignorant notre faux premier nœud (dummyHead)
        return head;
    }
}