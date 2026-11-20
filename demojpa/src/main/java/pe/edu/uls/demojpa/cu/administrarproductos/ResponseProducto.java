package pe.edu.uls.demojpa.cu.administrarproductos;

public record ResponseProducto(int id, String nombre, double precio, int stock,
                               String descripcion, String marca) {
}
