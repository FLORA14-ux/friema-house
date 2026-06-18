/* ============================================
   DONNÉES PRODUITS - FRIEMA HOUSE
   Structure : catégorie > sous-catégorie > produits

   Pour ajouter un produit :
     { nom: "Nom", image: "images/produits/fichier.jpg", prix: "5 000 FCFA" }

   Pour ajouter une sous-catégorie :
     Ajouter une clé dans la catégorie concernée.

   Pour ajouter une catégorie principale :
     Ajouter une clé dans CATEGORIES_LABELS et PRODUITS.
   ============================================ */

const CATEGORIES_LABELS = {
    homme:       "Mode Homme",
    femme:       "Mode Femme",
    enfant:      "Mode Enfant",
    accessoires: "Accessoires"
};

const PRODUITS = {

    homme: {
        "Chemises": [
            { nom: "Chemise élégante bleue",  image: "images/produits/homme-chemise.jpg",   prix: "8 500 FCFA" },
            { nom: "Chemise fleurie",          image: "images/produits/homme-chemise2.jpg",  prix: "7 000 FCFA" },
            { nom: "Chemise raillée blanc vert",      image: "images/produits/homme-chemise3.jpg",  prix: "7 000 FCFA" },
            { nom: "Chemise à carreaux",      image: "images/produits/homme-chemise4.jpg",  prix: "7 000 FCFA" }
        ],
        "T-shirts": [
            { nom: "T-shirt classique blanc",   image: "images/produits/homme-tshirt.jpg",    prix: "4 500 FCFA" },
            { nom: "T-shirt col rond ",         image: "images/produits/homme-tshirt2.jpg",   prix: "4 000 FCFA" },
            { nom: "T-shirt col rond noir",     image: "images/produits/homme-tshirt3.jpg",   prix: "4 000 FCFA" },
            { nom: "T-shirt ",                  image: "images/produits/homme-tshirt4.jpg",   prix: "4 000 FCFA" }
        ],
        "Pantalons": [
            { nom: "Pantalon chino beige",      image: "images/produits/homme-pantalon.jpg",  prix: "12 000 FCFA" },
            { nom: "Pantalon élégant",          image: "images/produits/homme-pantalon2.jpg",      prix: "13 500 FCFA" },
            { nom: "Jean slim bleu",            image: "images/produits/homme-jean.jpg",      prix: "13 500 FCFA" },
            { nom: "Jean",                      image: "images/produits/homme-jean2.jpg",      prix: "13 500 FCFA" }
        ],
        "Vestes": [
            { nom: "Veste veste de soirée",     image: "images/produits/homme-veste.jpg",     prix: "18 000 FCFA" },
            { nom: "Veste ",                    image: "images/produits/homme-veste2.jpg",     prix: "18 000 FCFA" },
            { nom: "Veste casual grise",        image: "images/produits/homme-veste3.jpg",     prix: "18 000 FCFA" },
            { nom: "Veste élégant",             image: "images/produits/homme-veste4.jpg",     prix: "18 000 FCFA" }
        ],
        "Chaussures": [
            { nom: "Chaussures en cuir",        image: "images/produits/homme-chaussures.jpg", prix: "22 000 FCFA" },
            { nom: "Chaussures en cuir",        image: "images/produits/homme-chaussures2.jpg", prix: "22 000 FCFA" },
            { nom: "Chaussures en cuir",        image: "images/produits/homme-chaussures3.jpg", prix: "22 000 FCFA" },
            { nom: "Chaussures en cuir",        image: "images/produits/homme-chaussures4.jpg", prix: "22 000 FCFA" }
        ],
        "Montres": [
            { nom: "Montre élégante dorée",     image: "images/produits/homme-montre.jpg",    prix: "15 000 FCFA" },
            { nom: "Montre élégante dorée",     image: "images/produits/homme-montre2.jpg",    prix: "15 000 FCFA" },
            { nom: "Montre élégante dorée",     image: "images/produits/homme-montre3.jpg",    prix: "15 000 FCFA" },
            { nom: "Montre élégante dorée",     image: "images/produits/homme-montre4.jpg",    prix: "15 000 FCFA" }
        ],
        "Ceintures": [
            { nom: "Ceinture cuir noir",        image: "images/produits/homme-ceinture.jpg",  prix: "5 000 FCFA" },
            { nom: "Ceinture cuir noir",        image: "images/produits/homme-ceinture2.jpg",  prix: "5 000 FCFA" },
            { nom: "Ceinture cuir noir",        image: "images/produits/homme-ceinture3.jpg",  prix: "5 000 FCFA" },
            { nom: "Ceinture cuir noir",        image: "images/produits/homme-ceinture4.jpg",  prix: "5 000 FCFA" }
        ],
          "Sacs": [
            { nom: "Sac modèle 1",              image: "images/produits/accessoire-sac1.jpg", prix: "14 000 FCFA" },
            { nom: "Sac modèle 2",              image: "images/produits/accessoire-sac2.jpg", prix: "15 000 FCFA" },
            { nom: "Sac modèle 2",              image: "images/produits/accessoire-sac3.jpg", prix: "15 000 FCFA" },
            { nom: "Sac modèle 2",              image: "images/produits/accessoire-sac4.jpg", prix: "15 000 FCFA" }
        ]
    },

    femme: {
        "Robes": [
            { nom: "Robe élégante",           image: "images/produits/femme-robe.jpg",      prix: "14 000 FCFA" },
            { nom: "Robe élégante",           image: "images/produits/femme-robe2.jpg",      prix: "14 000 FCFA" },
            { nom: "Robe élégante",           image: "images/produits/femme-robe3.jpg",      prix: "14 000 FCFA" },
            { nom: "Robe élégante",           image: "images/produits/femme-robe4.jpg",      prix: "14 000 FCFA" }
        ],
        "Jupes": [
            { nom: "Jupe longue fleurie",     image: "images/produits/femme-jupe.jpg",      prix: "9 000 FCFA" },
            { nom: "Jupe longue fleurie",     image: "images/produits/femme-jupe2.jpg",      prix: "9 000 FCFA" },
            { nom: "Jupe longue fleurie",     image: "images/produits/femme-jupe3.jpg",      prix: "9 000 FCFA" },
            { nom: "Jupe longue fleurie",     image: "images/produits/femme-jupe4.jpg",      prix: "9 000 FCFA" }
        ],
        "Ensembles": [
            { nom: "Ensemble tailleur",       image: "images/produits/femme-ensemble.jpg",  prix: "20 000 FCFA" },
            { nom: "Ensemble tailleur",       image: "images/produits/femme-ensemble2.jpg",  prix: "20 000 FCFA" },
            { nom: "Ensemble tailleur",       image: "images/produits/femme-ensemble3.jpg",  prix: "20 000 FCFA" },
            { nom: "Ensemble tailleur",       image: "images/produits/femme-ensemble4.jpg",  prix: "20 000 FCFA" }
        ],
        "Pantalons": [
            { nom: "Pantalon taille haute",   image: "images/produits/femme-pantalon.jpg",  prix: "11 000 FCFA" },
            { nom: "Pantalon taille haute",   image: "images/produits/femme-pantalon2.jpg",  prix: "11 000 FCFA" },
            { nom: "Pantalon taille haute",   image: "images/produits/femme-pantalon3.jpg",  prix: "11 000 FCFA" },
            { nom: "Pantalon taille haute",   image: "images/produits/femme-pantalon4.jpg",  prix: "11 000 FCFA" }
        ],
           "Ceintures": [
            { nom: "Ceinture tressée",        image: "images/produits/accessoire-ceinture.jpg", prix: "4 500 FCFA" },
            { nom: "Ceinture tressée",        image: "images/produits/accessoire-ceinture2.jpg", prix: "4 500 FCFA" },
            { nom: "Ceinture tressée",        image: "images/produits/accessoire-ceinture3.jpg", prix: "4 500 FCFA" },
            { nom: "Ceinture tressée",        image: "images/produits/accessoire-ceinture4.jpg", prix: "4 500 FCFA" }
        ],
        "Sacs à main": [
            { nom: "Sac à main cuir",         image: "images/produits/femme-sac.jpg",       prix: "16 000 FCFA" },
            { nom: "Sac à main cuir",         image: "images/produits/femme-sac2.jpg",       prix: "16 000 FCFA" },
            { nom: "Sac à main cuir",         image: "images/produits/femme-sac3.jpg",       prix: "16 000 FCFA" },
            { nom: "Sac à main cuir",         image: "images/produits/femme-sac4.jpg",       prix: "16 000 FCFA" }
        ],
        "Chaussures": [
            { nom: "Escarpins noirs",         image: "images/produits/femme-chaussures.jpg", prix: "18 000 FCFA" },
            { nom: "Escarpins noirs",         image: "images/produits/femme-chaussures2.jpg", prix: "18 000 FCFA" },
            { nom: "Escarpins noirs",         image: "images/produits/femme-chaussures3.jpg", prix: "18 000 FCFA" },
            { nom: "Escarpins noirs",         image: "images/produits/femme-chaussures4.jpg", prix: "18 000 FCFA" }
        ],
        "Bijoux": [
            { nom: "Bijoux fantaisie doré",   image: "images/produits/femme-bijoux.jpg",    prix: "6 000 FCFA" },
            { nom: "Bijoux fantaisie doré",   image: "images/produits/femme-bijoux2.jpg",    prix: "6 000 FCFA" },
            { nom: "Bijoux fantaisie doré",   image: "images/produits/femme-bijoux3.jpg",    prix: "6 000 FCFA" },
            { nom: "Bijoux fantaisie doré",   image: "images/produits/femme-bijoux4.jpg",    prix: "6 000 FCFA" }
        ]
    },

    enfant: {
        "Vêtements garçon": [
            { nom: "Tenue garçon",            image: "images/produits/enfant-garcon.jpg",   prix: "7 000 FCFA" },
            { nom: "Tenue garçon",            image: "images/produits/enfant-garcon2.jpg",   prix: "7 000 FCFA" },
            { nom: "Tenue garçon",            image: "images/produits/enfant-garcon3.jpg",   prix: "7 000 FCFA" },
            { nom: "Tenue garçon",            image: "images/produits/enfant-garcon4.jpg",   prix: "7 000 FCFA" }

        ],
        "Vêtements fille": [
            { nom: "Tenue fille",             image: "images/produits/enfant-fille.jpg",    prix: "7 000 FCFA" },
            { nom: "Tenue fille",             image: "images/produits/enfant-fille2.jpg",    prix: "7 000 FCFA" },
            { nom: "Tenue fille",             image: "images/produits/enfant-fille3.jpg",    prix: "7 000 FCFA" },
            { nom: "Tenue fille",             image: "images/produits/enfant-fille4.jpg",    prix: "7 000 FCFA" }
        ],
        "Chaussures filles": [
            { nom: "Chaussures chic",     image: "images/produits/enfant-chaussures1.jpg", prix: "9 000 FCFA" },
            { nom: "Chaussures leger",     image: "images/produits/enfant-chaussures2.jpg", prix: "9 500 FCFA" },
            { nom: "Chaussures elegante",     image: "images/produits/enfant-chaussures3.jpg", prix: "9 000 FCFA" },
            { nom: "Chaussures classique ",     image: "images/produits/enfant-chaussures4.jpg", prix: "9 000 FCFA" }
        ],
         "Chaussures garçons": [
            { nom: "Chaussures chic",     image: "images/produits/enfant-chaussures-garçon1.jpg", prix: "9 000 FCFA" },
            { nom: "Chaussures elegant",     image: "images/produits/enfant-chaussures-garçon2.jpg", prix: "9 500 FCFA" },
            { nom: "Chaussures moderne",     image: "images/produits/enfant-chaussures-garçon3.jpg", prix: "9 000 FCFA" },
            { nom: "Chaussures classique",     image: "images/produits/enfant-chaussures-garçon4.jpg", prix: "9 000 FCFA" }
        ],
        "Sacs scolaires": [
            { nom: "Sac scolaire bleu",       image: "images/produits/enfant-sac1.jpg",     prix: "8 000 FCFA" },
            { nom: "Sac scolaire rouge",      image: "images/produits/enfant-sac2.jpg",     prix: "8 500 FCFA" },
            { nom: "Sac scolaire bleu",       image: "images/produits/enfant-sac1.jpg",     prix: "8 000 FCFA" },
            { nom: "Sac scolaire vert",       image: "images/produits/enfant-sac1.jpg",     prix: "8 000 FCFA" }
        ]
    },

    accessoires: {
        "Portefeuilles": [
            { nom: "Portefeuille cuir",       image: "images/produits/accessoire-portefeuille.jpg", prix: "6 500 FCFA" },
            { nom: "Portefeuille cuir",       image: "images/produits/accessoire-portefeuille2.jpg", prix: "6 500 FCFA" },
            { nom: "Portefeuille cuir",       image: "images/produits/accessoire-portefeuille3.jpg", prix: "6 500 FCFA" },
            { nom: "Portefeuille cuir",       image: "images/produits/accessoire-portefeuille4.jpg", prix: "6 500 FCFA" }
        ],
         "Foulards": [
            { nom: "Ceinture foulard",        image: "images/produits/accessoire-foulard.jpg", prix: "4 500 FCFA" },
            { nom: "Ceinture foulard",        image: "images/produits/accessoire-foulard2.jpg", prix: "4 500 FCFA" },
            { nom: "Ceinture foulard",        image: "images/produits/accessoire-foulard3.jpg", prix: "4 500 FCFA" },
            { nom: "Ceinture foulard",        image: "images/produits/accessoire-foulard4.jpg", prix: "4 500 FCFA" }
        ],
        "Lunettes": [
            { nom: "Lunettes de soleil",      image: "images/produits/accessoire-lunettes.jpg", prix: "7 000 FCFA" },
            { nom: "Lunettes de soleil",      image: "images/produits/accessoire-lunettes2.jpg", prix: "7 000 FCFA" },
            { nom: "Lunettes de soleil",      image: "images/produits/accessoire-lunettes3.jpg", prix: "7 000 FCFA" },
            { nom: "Lunettes de soleil",      image: "images/produits/accessoire-lunettes4.jpg", prix: "7 000 FCFA" }  
        ],
        "Casquettes": [
            { nom: "Casquette tendance",      image: "images/produits/accessoire-casquette.jpg", prix: "3 500 FCFA" },
            { nom: "Casquette tendance",      image: "images/produits/accessoire-casquette2.jpg", prix: "3 500 FCFA" },
            { nom: "Casquette tendance",      image: "images/produits/accessoire-casquette3.jpg", prix: "3 500 FCFA" },
            { nom: "Casquette tendance",      image: "images/produits/accessoire-casquette4.jpg", prix: "3 500 FCFA" }
        ],
    }
};