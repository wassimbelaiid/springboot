package com.poly.cd.gestionProduits.service;

import com.poly.cd.gestionProduits.entities.Auteur;
import com.poly.cd.gestionProduits.entities.Livre;
import com.poly.cd.gestionProduits.repository.AuteurRepository;
import com.poly.cd.gestionProduits.repository.LivreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AuteurService {

    private final AuteurRepository auteurRepository;



    @Autowired
    public AuteurService(AuteurRepository auteurRepository) {
        this.auteurRepository = auteurRepository;

    }

    public List<Auteur> findAll() {
        return auteurRepository.findAll();
    }

    public Optional<Auteur> findById(Long id) {
        return auteurRepository.findById(id);
    }

    public Auteur save(Auteur auteur) {
        return auteurRepository.save(auteur);
    }

    public void deleteById(Long id) {
        auteurRepository.deleteById(id);
    }

}

