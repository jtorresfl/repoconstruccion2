package pe.edu.uls.demojpa;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import java.util.List;

@RestController 
public class ControllerRepuesto {
    ServiceRepuesto serviceRepuesto;
    MapperRepuesto mapperRepuesto;
    public ControllerRepuesto(ServiceRepuesto serviceRepuesto, MapperRepuesto mapperRepuesto) {
        this.serviceRepuesto=serviceRepuesto;
        this.mapperRepuesto=mapperRepuesto;
    }    

    @PostMapping("/repuesto/nuevo")
    public ResponseRepuesto guardarRepuesto(@RequestBody RequestRepuesto nuevo) {
        Repuesto repuesto = mapperRepuesto.toRepuesto(nuevo);
        repuesto = serviceRepuesto.registrarRepuesto(repuesto);
        ResponseRepuesto response = mapperRepuesto.toResponse(repuesto);
        return response;
    }
    
	@GetMapping("/repuesto/{id}")
    public ResponseRepuesto consultarRepuesto(@PathVariable(name = "id") int id) {
        return mapperRepuesto.toResponse(serviceRepuesto.consultarRepuesto(id));
    }
    @GetMapping("/repuesto/marca/{marca}")
    public List<ResponseRepuesto>consultarPorMarca(@PathVariable(name = "marca") String marca) {
        return serviceRepuesto.consultarPorMarca(marca).stream().map(r->mapperRepuesto.toResponse(r)).toList();
    }
     @GetMapping("/repuesto/nombre/{nombre}")
    public List<ResponseRepuesto>consultarPorNombre(@PathVariable(name = "nombre") String nombre) {
        return serviceRepuesto.consultarPorNombre(nombre).stream().map(r->mapperRepuesto.toResponse(r)).toList();
    }
}
