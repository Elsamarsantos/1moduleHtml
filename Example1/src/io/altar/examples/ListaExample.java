package io.altar.examples;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class ListaExample {

	public static void main(String[] args) {
		List<String> listStrings = new ArrayList<>();
		listStrings.add("konamis");
		listStrings.add("maracate");
		
		
		Iterator<String> it = listStrings.iterator();
		while (it.hasNext()){
			String element = it.next();
			System.out.println(element);
		}
		System.out.println(listStrings.get(0));
		System.out.println(listStrings);

	}

}
