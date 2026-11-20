package pe.edu.uls.demojpa.cu.administrarproductos;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerProducto {

    private final ServiceAdministrarProductos service;

    public ControllerProducto(ServiceAdministrarProductos service) {
        this.service = service;
    }

    @GetMapping("/productos")
    public List<ResponseProducto> listar() {
        return service.listar();
    }

    @PostMapping("/producto/marca/{idMarca}/nuevo")
    public ResponseProducto registrar(@PathVariable int idMarca,
                                      @RequestBody RequestProducto req) {
        return service.registrar(idMarca, req);
    }
}