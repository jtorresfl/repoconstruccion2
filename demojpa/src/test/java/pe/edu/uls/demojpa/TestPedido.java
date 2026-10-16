package pe.edu.uls.demojpa;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.resttestclient.TestRestTemplate;
import org.springframework.boot.resttestclient.autoconfigure.AutoConfigureTestRestTemplate;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;

import pe.edu.uls.demojpa.cu.registrarpedido.request.RequestPedido;
import pe.edu.uls.demojpa.cu.registrarpedido.request.RequestPedido.RequestPedidoItem;
import pe.edu.uls.demojpa.cu.registrarpedido.response.ResponsePedido;
import pe.edu.uls.demojpa.dominio.entity.Producto;
import pe.edu.uls.demojpa.dominio.repository.RepoMarca;
import pe.edu.uls.demojpa.dominio.repository.RepoProducto;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureTestRestTemplate 
class TestPedido {

    @Autowired
    private TestRestTemplate restTemplate;   

    @Autowired
    private RepoProducto repoProducto;

    @Autowired
    private RepoMarca repoMarca;

    @Test 
    @DisplayName("Debe guardar solo uno de dos pedido")
    void testRegistrarPedidoConcurrenteReal() throws Exception {
        String nombre="Juan";
        int cantidad=2;
        Producto producto = new Producto();
        producto.setDescripcion("Producto de ejemplo con lock"+nombre);
        producto.setMarca(repoMarca.findById(1001).get());
        producto.setNombre(nombre);
        producto.setStock(cantidad);
        producto.setPrecio(100);
        producto=repoProducto.save(producto);
        int idProducto = producto.getId();
        System.out.println("Producto creado con ID "+idProducto);
        int numeroHilos = 2;

        List<RequestPedidoItem> items = List.of(
                new RequestPedidoItem(idProducto, cantidad, 1200.00)
        );
        RequestPedido pedido = new RequestPedido(items);

        CountDownLatch latchInicio = new CountDownLatch(1);
        CountDownLatch latchFin = new CountDownLatch(numeroHilos);
        ExecutorService executorService = Executors.newFixedThreadPool(numeroHilos);
        List<HttpStatusCode> lstRespuestas=new ArrayList<>();
        for (int i = 0; i < numeroHilos; i++) {
            executorService.submit(() -> {
                try {
                    latchInicio.await();
                    ResponseEntity<ResponsePedido> response = restTemplate.postForEntity(
                            "/pedido/nuevo", pedido, ResponsePedido.class
                    );

                    System.out.println("Pedido registrado con ID:"+response.getBody().idPedido());
                    lstRespuestas.add(response.getStatusCode());
                } catch (Exception e) {
                    throw new RuntimeException(e);
                } finally {
                    latchFin.countDown();
                }
            });
        }
        latchInicio.countDown(); // ¡Disparar al mismo tiempo!
        latchFin.await(5, TimeUnit.SECONDS);
        executorService.shutdown();
        long nexitos = lstRespuestas.stream().filter(s->s.is2xxSuccessful()).count();        
        assertThat(nexitos==1).isTrue();
        // Validar stock final con concurrencia real en BD
        producto = repoProducto.findById(idProducto).get();
        assertThat(producto.getStock()).isEqualTo(0);
    }

    @Test 
    @DisplayName("Test ficticio: Debe guardar dos pedidos")
    void testRegistrarPedidoConcurrenteRealSinLock() throws Exception {
        String nombre="Juan";
        int cantidad=2;
        Producto producto = new Producto();
        producto.setDescripcion("Producto de ejemplo sin lock "+nombre);
        producto.setMarca(repoMarca.findById(1001).get());
        producto.setNombre(nombre);
        producto.setStock(cantidad);
        producto.setPrecio(100);
        producto=repoProducto.save(producto);
        int idProducto = producto.getId();
        System.out.println("Producto creado con ID "+idProducto);
        int numeroHilos = 2;

        List<RequestPedidoItem> items = List.of(
                new RequestPedidoItem(idProducto, cantidad, 1200.00)
        );
        RequestPedido pedido = new RequestPedido(items);

        CountDownLatch latchInicio = new CountDownLatch(1);
        CountDownLatch latchFin = new CountDownLatch(numeroHilos);
        ExecutorService executorService = Executors.newFixedThreadPool(numeroHilos);
        List<HttpStatusCode> lstRespuestas=new ArrayList<>();
        for (int i = 0; i < numeroHilos; i++) {
            executorService.submit(() -> {
                try {
                    latchInicio.await();
                    ResponseEntity<ResponsePedido> response = restTemplate.postForEntity(
                            "/pedido/nuevo/sinlock", pedido, ResponsePedido.class
                    );
                    System.out.println("Pedido registrado con ID:"+response.getBody().idPedido());
                    lstRespuestas.add(response.getStatusCode());
                } catch (Exception e) {
                    throw new RuntimeException(e);
                } finally {
                    latchFin.countDown();
                }
            });
        }
        latchInicio.countDown(); // ¡Disparar al mismo tiempo!
        latchFin.await(5, TimeUnit.SECONDS);
        executorService.shutdown();
        long nexitos = lstRespuestas.stream().filter(s->s.is2xxSuccessful()).count();        
        assertThat(nexitos==2).isTrue();
        // Validar stock final con concurrencia real en BD
        producto = repoProducto.findById(idProducto).get();
        //assertThat(producto.getStock()).isEqualTo(0);
    }
}  
