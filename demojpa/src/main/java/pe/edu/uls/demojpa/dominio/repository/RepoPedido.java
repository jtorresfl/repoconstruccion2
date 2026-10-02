
package pe.edu.uls.demojpa.dominio.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import pe.edu.uls.demojpa.dominio.entity.Pedido;

public interface RepoPedido extends JpaRepository<Pedido, Integer> {

    @Query("""
        SELECT p
        FROM Pedido p
        JOIN p.items item
        JOIN item.producto producto
        WHERE producto.id = :productoId
    """)
    List<Pedido> buscarPorProductoId(int productoId);

    @Query("""
        SELECT p
        FROM Pedido p
        JOIN p.items item
        JOIN item.producto producto
        WHERE producto.nombre LIKE :productoNombre
    """)
    List<Pedido> buscarPorProductoNombre(String productoNombre);

    @Query(value = """
    SELECT
        p.id AS pedido_id,
        COUNT(pi.id) AS cantidad_items
    FROM pedido p
    LEFT JOIN pedido_item pi ON pi.pedido_id = p.id
    GROUP BY p.id
    """, nativeQuery = true)
    List<Object[]> obtenerCantidadItemsPorPedido();

    @Query(value = """
    SELECT
        p.id AS pedido_id,
        COALESCE(SUM(pi.cantidad), 0) AS cantidad_items
    FROM pedido p
    LEFT JOIN pedido_item pi ON pi.pedido_id = p.id
    WHERE p.id = :pedidoId
    GROUP BY p.id
    """, nativeQuery = true)
    Object[] obtenerCantidadItemsPorPedidoId(@Param ("pedidoId") int pedidoId);
}
