package com.poly.cd.gestionProduits.contoller;



import com.poly.cd.gestionProduits.entities.Auteur;
import com.poly.cd.gestionProduits.service.AuteurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/api/auteurs")
public class AuteurController {
    private final AuteurService auteurService;


    public AuteurController(AuteurService auteurService) {
        this.auteurService = auteurService;
    }

    @GetMapping
    public List<Auteur> getAllAuteurs() {
        return auteurService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Auteur> getAuteurById(@PathVariable Long id) {
        Optional<Auteur> auteur = auteurService.findById(id);
        return auteur.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Auteur> createAuteur(@RequestBody Auteur auteur) {
        Auteur createdAuteur = auteurService.save(auteur);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdAuteur);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Auteur> updateAuteur(@PathVariable Long id, @RequestBody Auteur auteur) {
        auteur.setId(id);
        Auteur updatedAuteur = auteurService.save(auteur);
        return ResponseEntity.ok(updatedAuteur);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAuteur(@PathVariable Long id) {
        auteurService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
