package pe.edu.uls.demojpa.cu.registrarpedido.response;

import java.util.List;

public record ResponsePedido(int idPedido, List<ResponsePedidoItem> items) {

    public record ResponsePedidoItem(String nombre, int cantidad) {}
}
