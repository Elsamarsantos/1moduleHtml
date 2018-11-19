package entities;

public class Mota extends Veiculo{
	
	private int mudancas=0;
	
	private int cc=0;
	
	public Mota(int rodas, int portas, String marca, int mudancas, int cc) {
		super(rodas, portas, marca);
		this.mudancas = mudancas;
		this.cc = cc;
	}
	
	

	public int getMudancas() {
		return mudancas;
	}
	public void setMudancas(int mudancas) {
		this.mudancas = mudancas;
	}
	public int getCc() {
		return cc;
	}
	public void setCc(int cc) {
		this.cc = cc;
	}
	

}
