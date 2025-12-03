/*
A HashSet in Java is a part of the Java Collections Framework and is used to store a collection of unique elements. It is based on a HashTable and does not allow duplicate values.
*/
import java.util.*;

public class HashSetExample {
    public static void main(String[] args) {
        // 1. Creating a HashSet
        HashSet<String> fruits = new HashSet<>();

        // 2. Adding elements
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Mango");

        // 3. Adding all elements from another collection
        HashSet<String> moreFruits = new HashSet<>();
        moreFruits.add("Orange");
        moreFruits.add("Grapes");
        fruits.addAll(moreFruits);

        // 4. Removing an element
        fruits.remove("Apple");

        // 5. Checking if an element exists
        System.out.println("Contains Banana? " + fruits.contains("Banana"));

        // 6. Checking if the set is empty
        System.out.println("Is set empty? " + fruits.isEmpty());

        // 7. Getting the size of the set
        System.out.println("Size of set: " + fruits.size());

        // 8. Iterating through the set
        System.out.println("Iterating using for-each loop:");
        for (String fruit : fruits) {
            System.out.println(fruit);
        }

        System.out.println("Iterating using Iterator:");
        Iterator<String> iterator = fruits.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }

        // 9. Converting HashSet to an array
        String[] fruitArray = fruits.toArray(new String[0]);
        System.out.println("First element in array: " + fruitArray[0]);

        // 10. Retaining common elements between two sets
        HashSet<String> commonFruits = new HashSet<>();
        commonFruits.add("Banana");
        commonFruits.add("Mango");
        fruits.retainAll(commonFruits);
        System.out.println("After retainAll(): " + fruits);

        // 11. Removing a collection of elements
        fruits.removeAll(commonFruits);
        System.out.println("After removeAll(): " + fruits);

        // 12. Cloning a HashSet
        HashSet<String> clonedFruits = (HashSet<String>) moreFruits.clone();
        System.out.println("Cloned set: " + clonedFruits);

        // 13. Checking for equality between two sets
        System.out.println("Is clonedFruits equal to moreFruits? " + clonedFruits.equals(moreFruits));

        // 14. Creating HashSet with Initial Capacity
        HashSet<Integer> numbers = new HashSet<>(10);
        numbers.add(1);
        numbers.add(2);
        numbers.add(3);
        System.out.println("Numbers set: " + numbers);

        // 15. Creating HashSet with Load Factor
        HashSet<Integer> numbersWithLoadFactor = new HashSet<>(10, 0.75f);
        numbersWithLoadFactor.add(4);
        numbersWithLoadFactor.add(5);
        numbersWithLoadFactor.add(6);
        System.out.println("Numbers with load factor: " + numbersWithLoadFactor);

        // 16. Clearing the set
        fruits.clear();
        System.out.println("After clear(): " + fruits);
    }
}

public class MapMethodsExample {
    public static void main(String[] args) {
        Map<Integer, String> map = new HashMap<>();

        // Put values
        map.put(1, "Apple");
        map.put(2, "Banana");

        // Get value
        System.out.println("Get value: " + map.get(1));

        // Remove a key
        map.remove(2);

        // Check key and value existence
        System.out.println("Contains key 2: " + map.containsKey(2));
        System.out.println("Contains value 'Banana': " + map.containsValue("Banana"));

        // Get size
        System.out.println("Map size: " + map.size());

        // Check if empty
        System.out.println("Is map empty: " + map.isEmpty());

        // Put all from another map
        Map<Integer, String> anotherMap = new HashMap<>();
        anotherMap.put(3, "Cherry");
        anotherMap.put(4, "Date");
        map.putAll(anotherMap);

        // Get key set
        System.out.println("Keys: " + map.keySet());

        // Get values
        System.out.println("Values: " + map.values());

        // Get entry set
        System.out.println("Entries: " + map.entrySet());

        // Get default value if key absent
        System.out.println("Get or default: " + map.getOrDefault(5, "Not Found"));

        // Replace a value
        map.replace(1, "Avocado");
        System.out.println("After replace: " + map);

        // Replace only if old value matches
        map.replace(3, "Cherry", "Citrus");
        System.out.println("After conditional replace: " + map);

        // Compute a value
        map.compute(4, (key, value) -> value + " Fruit");
        System.out.println("After compute: " + map);

        // Compute if absent
        map.computeIfAbsent(5, key -> "Elderberry");
        System.out.println("After computeIfAbsent: " + map);

        // Compute if present
        map.computeIfPresent(1, (key, value) -> value.toUpperCase());
        System.out.println("After computeIfPresent: " + map);

        // Merge values
        map.merge(4, " Delicious", (oldValue, newValue) -> oldValue + newValue);
        System.out.println("After merge: " + map);

        // Clear map
        map.clear();
        System.out.println("After clear, is map empty: " + map.isEmpty());
    }
}

public class ArrayListMethodsExample {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();

        // 1. add() - Add elements
        list.add("Apple");  
        list.add("Banana"); 
        list.add("Cherry");  
        list.add(1, "Orange");
        System.out.println("After adding: " + list);

        // 2. get() - Get element at index
        System.out.println("Element at index 1: " + list.get(1));

        // 3. set() - Update element
        list.set(1, "Mango");
        System.out.println("After updating: " + list);

        // 4. remove() - Remove by index and object
        list.remove(2);
        list.remove("Apple");
        System.out.println("After removing: " + list);

        // 5. contains() - Check if element exists
        System.out.println("Contains Mango? " + list.contains("Mango"));

        // 6. indexOf() - Find index of element
        System.out.println("Index of Orange: " + list.indexOf("Orange"));

        // 7. size() - Get size of list
        System.out.println("Size of list: " + list.size());

        // 8. isEmpty() - Check if list is empty
        System.out.println("Is list empty? " + list.isEmpty());

        // 9. Iterating over list
        System.out.println("Iterating using for loop:");
        for (int i = 0; i < list.size(); i++) {
            System.out.println(list.get(i));
        }
        
        System.out.println("Iterating using for-each loop:");
        for (String item : list) {
            System.out.println(item);
        }
        
        System.out.println("Iterating using forEach method:");
        list.forEach(System.out::println);

        // 10. sort() - Sorting list
        Collections.sort(list);
        System.out.println("After sorting: " + list);
        Collections.sort(list, Collections.reverseOrder());
        System.out.println("After reverse sorting: " + list);

        // 11. toArray() - Convert to Array
        String[] array = list.toArray(new String[0]);
        System.out.println("Array elements: " + Arrays.toString(array));

        // 12. clone() - Clone list
        ArrayList<String> clonedList = (ArrayList<String>) list.clone();
        System.out.println("Cloned List: " + clonedList);

        // 13. clear() - Clear list
        list.clear();
        System.out.println("After clearing: " + list);

        // 14. addAll() - Add multiple elements
        ArrayList<String> list1 = new ArrayList<>(Arrays.asList("A", "B", "C", "D"));
        System.out.println("After addAll: " + list1);

        // 15. removeAll() - Remove multiple elements
        ArrayList<String> list2 = new ArrayList<>(Arrays.asList("B", "C"));
        list1.removeAll(list2);
        System.out.println("After removeAll: " + list1);

        // 16. retainAll() - Retain common elements
        list1.addAll(Arrays.asList("B", "C"));
        list1.retainAll(list2);
        System.out.println("After retainAll: " + list1);

        // 17. ensureCapacity() - Increase capacity
        list1.ensureCapacity(20);
        System.out.println("Increased capacity of list1.");

        // 18. trimToSize() - Trim capacity to current size
        list1.trimToSize();
        System.out.println("Trimmed capacity of list1.");
    }
}

public class StackExample {
    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<>();

        // Push elements
        stack.push(10);
        stack.push(20);
        stack.push(30);
        System.out.println("Stack: " + stack); // Output: [10, 20, 30]

        // Peek (check top element)
        System.out.println("Top element: " + stack.peek()); // Output: 30

        // Pop (remove top element)
        System.out.println("Popped: " + stack.pop()); // Output: 30
        System.out.println("Stack after pop: " + stack); // Output: [10, 20]

        // Check if stack is empty
        System.out.println("Is stack empty? " + stack.isEmpty()); // Output: false

        // Check stack size
        System.out.println("Stack size: " + stack.size()); // Output: 2

        // Searching an element
        System.out.println("Position of 10: " + stack.search(10)); // Output: 2

        // Checking if an element exists
        System.out.println("Stack contains 20? " + stack.contains(20)); // Output: true

        // Iterating over stack elements
        System.out.print("Stack elements: ");
        for (Integer num : stack) {
            System.out.print(num + " "); // Output: 10 20
        }
        System.out.println();

        // Clearing the stack
        stack.clear();
        System.out.println("Stack after clearing: " + stack); // Output: []
    }
}

class StackIteratorExample {
    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<>();
        stack.push(10);
        stack.push(20);
        stack.push(30);

        Iterator<Integer> it = stack.iterator();
        while (it.hasNext()) {
            System.out.print(it.next() + " "); // Output: 10 20 30
        }
    }
}

class ReverseStackTraversal {
    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<>();
        stack.push(1);
        stack.push(2);
        stack.push(3);

        // Traversing in reverse (LIFO order)
        while (!stack.isEmpty()) {
            System.out.print(stack.pop() + " "); // Output: 3 2 1
        }
    }
}

class CustomStack {
    public static void main(String[] args) {
        ArrayDeque<Integer> stack = new ArrayDeque<>();

        stack.push(10);
        stack.push(20);
        stack.push(30);

        System.out.println(stack.pop()); // Output: 30
        System.out.println(stack.peek()); // Output: 20
    }
}


