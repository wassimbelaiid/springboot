package com.poly.cd.gestionProduits.repository;

import com.poly.cd.gestionProduits.entities.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ProduitRepository extends JpaRepository<Produit,Long> {

    //public List<Produit> findByNomContains(String mc);

    @Query("select p from Produit p where p.nom like %:x%")
    public List<Produit> getProductsByMC(@Param("x") String mc);


}
