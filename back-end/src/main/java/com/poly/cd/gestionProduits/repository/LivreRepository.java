package com.poly.cd.gestionProduits.repository;



import com.poly.cd.gestionProduits.entities.Livre;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LivreRepository extends JpaRepository<Livre, Long>  {

}
