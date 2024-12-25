package com.poly.cd.gestionProduits.repository;

import com.poly.cd.gestionProduits.entities.Categorie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategorieRepository extends JpaRepository<Categorie,Long> {
}
