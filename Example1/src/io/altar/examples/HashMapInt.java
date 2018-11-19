package io.altar.examples;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class HashMapInt {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Map<Integer,String> intMap= new HashMap <Integer,String>();

		intMap.put(1,"cao");
		intMap.put(2,"gato");

		Iterator<String> intIterator = intMap.values().iterator();
		while (intIterator.hasNext()){

			System.out.println("String value:"+ intIterator.next());

		}

		Iterator<Integer> intKeyIterator = intMap.keySet().iterator();
		while (intKeyIterator.hasNext()){

			System.out.println("Int key:"+ intKeyIterator.next());
		}	








	}

}
