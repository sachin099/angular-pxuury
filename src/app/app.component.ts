// Java program to demonstrate the
// working of PriorityQueue
import java.util.*;

class PriorityQueueDemo {

	public static void main(String args[])
	{
		PriorityQueue<String> pq = new PriorityQueue<>();
		 
        pq.add("Adding");
        pq.add("to");
        pq.add("PQueue");

		System.out.println("Initial PriorityQueue " + pq);
		 
		System.out.println(pq.peek());
      pq.remove("to");

      System.out.println("After Remove - " + pq);

      System.out.println("Poll Method - " + pq.poll());

      System.out.println("Final PriorityQueue - " + pq);
	}
}
