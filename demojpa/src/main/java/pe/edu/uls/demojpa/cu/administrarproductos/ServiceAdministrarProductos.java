package pe.edu.uls.demojpa.cu.administrarproductos;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import pe.edu.uls.demojpa.dominio.entity.Marca;
import pe.edu.uls.demojpa.dominio.entity.Producto;
import pe.edu.uls.demojpa.dominio.repository.RepoMarca;
import pe.edu.uls.demojpa.dominio.repository.RepoProducto;

@Service
public class ServiceAdministrarProductos {

    private final RepoProducto repoProducto;
    private final RepoMarca repoMarca;

    public ServiceAdministrarProductos(RepoProducto repoProducto, RepoMarca repoMarca) {
        this.repoProducto = repoProducto;
        this.repoMarca = repoMarca;
    }

    @Transactional(readOnly = true)
    public List<ResponseProducto> listar() {
        return repoProducto.findAll().stream().map(this::toResponse).toList();
    }

    @Transactional
    public ResponseProducto registrar(int idMarca, RequestProducto req) {
        Marca marca = repoMarca.findById(idMarca)
            .orElseThrow(() -> new IllegalArgumentException("No existe la marca " + idMarca));
        Producto p = new Producto();
        p.setMarca(marca);
        p.setNombre(req.nombre());
        p.setPrecio(req.precio());
        p.setStock(req.stock());
        p.setDescripcion(req.descripcion());
        return toResponse(repoProducto.save(p));
    }

    private ResponseProducto toResponse(Producto p) {
        return new ResponseProducto(p.getId(), p.getNombre(), p.getPrecio(),
            p.getStock(), p.getDescripcion(), p.getMarca().getNombre());
    }
}