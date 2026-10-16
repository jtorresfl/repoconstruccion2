package pe.edu.uls.demojpa.cu.registrarpedido;

import org.springframework.web.bind.annotation.RestController;

import pe.edu.uls.demojpa.cu.registrarpedido.request.RequestPedido;
import pe.edu.uls.demojpa.cu.registrarpedido.response.ResponsePedido;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController 
public class ControllerRegistrarPedido {

    ServiceRegistrarPedido serviceRegistrarPedido;

    public ControllerRegistrarPedido(ServiceRegistrarPedido serviceRegistrarPedido) {
        this.serviceRegistrarPedido = serviceRegistrarPedido;
    }

    @PostMapping("/pedido/nuevo")
    public ResponsePedido guardarPedido(@RequestBody RequestPedido pedido) {
        return serviceRegistrarPedido.registrarPedido(pedido);
    }

    @PostMapping("/pedido/nuevo/sinlock")
    public ResponsePedido guardarPedidoSinLock(@RequestBody RequestPedido pedido) {
        return serviceRegistrarPedido.registrarPedidoSinLock(pedido);
    }
    
    @GetMapping("/pedido/producto/id/{id}")
    public List<ResponsePedido> consultarPedidoPorProductoId(@PathVariable(name = "id") int idProducto) {
        return serviceRegistrarPedido.buscarPedidoPorProductoId(idProducto);
    }

    @GetMapping("/pedido/producto/nombre/{nombre}")
    public List<ResponsePedido> consultarPedidoPorProductoNombre(@PathVariable(name = "nombre") String nombreProducto) {
        return serviceRegistrarPedido.buscarPedidoPorProductoNombre(nombreProducto);
    }
}