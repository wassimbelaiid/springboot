package com.poly.cd.gestionProduits;

import com.poly.cd.gestionProduits.entities.Categorie;
import com.poly.cd.gestionProduits.entities.Produit;
import com.poly.cd.gestionProduits.repository.CategorieRepository;
import com.poly.cd.gestionProduits.repository.ProduitRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class GestionProduitsApplication {

	//@Bean
	CommandLineRunner commandLineRunner(ProduitRepository produitRepository, CategorieRepository categorieRepository)
	{
		return args -> {
			Categorie c1= Categorie.builder().nom("informatique").build();
			Categorie c2= Categorie.builder().nom("electronique").build();
			categorieRepository.save(c1);
			categorieRepository.save(c2);
			Produit p1= Produit.builder().nom("pc portable").prix(5000).quantite(5).catp(c1).build();
			Produit p2= Produit.builder().nom("imprimante").prix(500).quantite(5).catp(c1).build();
			Produit p3= Produit.builder().nom("machine a laver").prix(5000).quantite(5).catp(c2).build();
			produitRepository.save(p1);
			produitRepository.save(p2);
			produitRepository.save(p3);
		} ;
	}
	public static void main(String[] args) {
		SpringApplication.run(GestionProduitsApplication.class, args);
	}

}
