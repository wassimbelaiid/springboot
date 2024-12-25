

package com.poly.cd.gestionProduits;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Appliquer CORS uniquement sur les endpoints qui commencent par "/api/"
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:4200")  // Autoriser les requêtes depuis Angular
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")  // Autoriser certaines méthodes HTTP
                .allowedHeaders("*")  // Autoriser toutes les en-têtes
                .allowCredentials(true);  // Autoriser les cookies et autres credentials
    }
}
