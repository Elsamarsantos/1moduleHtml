import entities.Automovel;
import entities.Mota;
import repositorio.AutoRepositorio;
import repositorio.MotaRepositorio;

public class Test {

	private static MotaRepositorio repositorioDeMotas= new MotaRepositorio();
	
	private static AutoRepositorio repositorioDeAuto= new AutoRepositorio();
	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		run();
	}

	
	public static void run() {
		
				
		Mota mota1= new Mota(4, 0, "Piaggio", 5, 0);
		
		repositorioDeMotas.save(mota1);
		
		System.out.println(repositorioDeMotas.findById((long)0).getMarca());
				
		
		
		Automovel auto1= new Automovel(4, 2, "Ferrari", "Radiotech", 0);
		repositorioDeAuto.save(auto1);
		Automovel auto2= new Automovel(4, 2, "Porsche", "Radiotech", 0);
		repositorioDeAuto.save(auto2);
		
		String marca= repositorioDeAuto.findById((long)0).getMarca();
		System.out.println(marca);
		
		Object [] list = repositorioDeAuto.getAll().toArray();
		
		for (int i=0; i<list.length; i++) {
			System.out.println(((Automovel)list[i]).getMarca());
		}
				
	}
}                            
