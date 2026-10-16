package pe.edu.uls.demojpa.dominio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import pe.edu.uls.demojpa.dominio.entity.Marca;

public interface RepoMarca extends JpaRepository<Marca, Integer> {

}