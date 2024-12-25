package com.poly.cd.gestionProduits.service;

import com.poly.cd.gestionProduits.entities.Produit;

import java.util.List;

public interface IServiceProduit {

    public void addProduct(Produit p);
    public List<Produit> getAllProducts();
    public List<Produit> getProductsByMC(String mc);
    public Produit getProduct(Long id);
    public void deleteProduct(Long id);
    public void updateProduct(Produit p);
}
