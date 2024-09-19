package com.ufape.agiota.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ufape.agiota.exception.ResourceNotFoundException;
import com.ufape.agiota.model.Agiota;
import com.ufape.agiota.repository.AgiotaRepository;

@RestController
@RequestMapping("/api/agiotas")
public class AgiotaController {
    @Autowired
    private AgiotaRepository agiotaRepository;

    @GetMapping
    public List<Agiota> getAllAgiotas() {
        return agiotaRepository.findAll();
    }

    @PostMapping
    public Agiota createAgiota(@RequestBody Agiota agiota) {
        return agiotaRepository.save(agiota);
    }

    @GetMapping("/{id}")
    public Agiota getAgiotaById(@PathVariable Long id) {
        return agiotaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Agiota not found"));
    }

    @PutMapping("/{id}")
    public Agiota updateAgiota(@PathVariable Long id, @RequestBody Agiota agiotaDetails) {
        Agiota agiota = agiotaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Agiota not found"));

        agiota.setNome(agiotaDetails.getNome());
        agiota.setTaxaMedia(agiotaDetails.getTaxaMedia());

        return agiotaRepository.save(agiota);
    }

    @DeleteMapping("/{id}")
    public void deleteAgiota(@PathVariable Long id) {
        Agiota agiota = agiotaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Agiota not found"));
        agiotaRepository.delete(agiota);
    }
}
