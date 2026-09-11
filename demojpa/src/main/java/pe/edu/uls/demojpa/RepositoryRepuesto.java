package pe.edu.uls.demojpa;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositoryRepuesto extends JpaRepository<Repuesto, Integer> {

    List<Repuesto> findByMarca(String nombre);

    List<Repuesto> findByNombreContainingIgnoreCase(String texto);

    List<Repuesto> findByNombreContainingIgnoreCaseAndMarcaIgnoreCase( String nombre, String marca );  

    List<Repuesto> findByPrecioLessThan(double precio); 
            
    List<Repuesto> findByPrecioBetween( double minimo, double maximo ); 
}
