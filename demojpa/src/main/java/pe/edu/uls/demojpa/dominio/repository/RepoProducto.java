package pe.edu.uls.demojpa.dominio.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import jakarta.persistence.LockModeType;
import pe.edu.uls.demojpa.dominio.entity.Producto;

public interface RepoProducto extends JpaRepository<Producto, Integer> {


    @Lock (LockModeType.PESSIMISTIC_WRITE)
    @Query ("SELECT p FROM Producto p WHERE p.id = :id")
    Optional<Producto> findByIdForUpdate(@Param("id") int id);



}
