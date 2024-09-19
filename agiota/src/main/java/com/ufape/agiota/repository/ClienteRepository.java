package com.ufape.agiota.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ufape.agiota.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
    List<Cliente> findByNome(String nome);
}
