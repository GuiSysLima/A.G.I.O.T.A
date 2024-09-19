package com.ufape.agiota.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ufape.agiota.model.Agiota;

@Repository
public interface AgiotaRepository extends JpaRepository<Agiota, Long> {
    List<Agiota> findByNome(String nome);
}
