package io.altar.examples;

import java.util.Scanner;

public class TryCatchExample {
	static Scanner sc = new Scanner(System.in);
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		getNumero();

	}

	public static void getNumero() {
		System.out.println("Numero :  "  );   
		
		try {
			int value = sc.nextInt();
			System.out.println("Value : "+ value);
			clearScanner();
			
		} catch (Exception e) {
			System.out.println("Erro: " + e);
			clearScanner();
			getNumero();
			
			// TODO: handle exception
		}
		
		
	}
	
	public static void clearScanner() {
		sc.nextLine();
	}
	
	
	
}
