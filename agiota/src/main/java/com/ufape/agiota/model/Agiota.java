package com.ufape.agiota.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class Agiota {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private Double taxaMedia;

    // Getters e Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Double getTaxaMedia() {
        return taxaMedia;
    }

    public void setTaxaMedia(Double taxaMedia) {
        this.taxaMedia = taxaMedia;
    }

    // Método para calcular a taxa média
    public Double calcularTaxaMedia() {
        return taxaMedia; // Implemente a lógica para calcular a taxa média, se necessário
    }
}
