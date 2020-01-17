package ar.com.educacionit.domain;

public class Curso {

	private String nombre;
    private String dia;
    private String turno;
    private String horario;
	
    public Curso() {
		
	}
	
    public Curso(String nombre, String dia, String turno, String horario) {
		super();
		this.nombre = nombre;
		this.dia = dia;
		this.turno = turno;
		this.horario = horario;
	}
    
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getDia() {
		return dia;
	}
	public void setDia(String dia) {
		this.dia = dia;
	}
	public String getTurno() {
		return turno;
	}
	public void setTurno(String turno) {
		this.turno = turno;
	}
	public String getHorario() {
		return horario;
	}
	public void setHorario(String horario) {
		this.horario = horario;
	}

    
}
