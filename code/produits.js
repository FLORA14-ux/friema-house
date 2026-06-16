/* ============================================
   DONNÉES PRODUITS - FRIEMA HOUSE
   Pour ajouter un produit : copier une ligne et
   changer "nom" et "image" (chemin vers la photo).
   Pour ajouter une catégorie : créer une nouvelle
   clé dans CATEGORIES_LABELS et dans PRODUITS.
   ============================================ */

const CATEGORIES_LABELS = {
    homme: "Mode Homme",
    femme: "Mode Femme",
    enfant: "Mode Enfant",
    accessoires: "Accessoires"
};

const PRODUITS = {
    homme: [
        { nom: "Chemise élégante", image: "images/produits/homme-chemise.jpg" },
        { nom: "T-shirt classique", image: "images/produits/homme-tshirt.jpg" },
        { nom: "Pantalon",         image: "images/produits/homme-pantalon.jpg" },
        { nom: "Jean",             image: "images/produits/homme-jean.jpg" },
        { nom: "Veste",            image: "images/produits/homme-veste.jpg" },
        { nom: "Chaussures",       image: "images/produits/homme-chaussures.jpg" },
        { nom: "Montre",           image: "images/produits/homme-montre.jpg" },
        { nom: "Ceinture",       image: "images/produits/homme-ceinture.jpg" }
    ],
    femme: [
        { nom: "Robe élégante",    image: "images/produits/femme-robe.jpg" },
        { nom: "Jupe",             image: "images/produits/femme-jupe.jpg" },
        { nom: "Ensemble",         image: "images/produits/femme-ensemble.jpg" },
        { nom: "Pantalon",         image: "images/produits/femme-pantalon.jpg" },
        { nom: "Sac à main",       image: "images/produits/femme-sac.jpg" },
        { nom: "Chaussures",       image: "images/produits/femme-chaussures.jpg" },
        { nom: "Bijoux",           image: "images/produits/femme-bijoux.jpg" },
        { nom: "Accessoires",      image: "images/produits/femme-accessoires.jpg" },
    ],
    enfant: [
        { nom: "Vêtement garçon",  image: "images/produits/enfant-garcon.jpg" },
        { nom: "Vêtement fille",   image: "images/produits/enfant-fille.jpg" },
        { nom: "Chaussures enfant", image: "images/produits/enfant-chaussures1.jpg" },
         { nom: "Chaussures enfant", image: "images/produits/enfant-chaussures2.jpg" },
         { nom: "Sac scolaire",     image: "images/produits/enfant-sac1.jpg" },
        { nom: "Sac scolaire",     image: "images/produits/enfant-sac2.jpg" }
    ],
    accessoires: [
        { nom: "Montre",     image: "images/produits/accessoire-montre.jpg" },
        { nom: "Sac",        image: "images/produits/accessoire-sac1.jpg" },
         { nom: "Sac",        image: "images/produits/accessoire-sac2.jpg" },
        { nom: "Portefeuille", image: "images/produits/accessoire-portefeuille.jpg" },
        { nom: "Ceinture",   image: "images/produits/accessoire-ceinture.jpg" },
        { nom: "Lunettes",   image: "images/produits/accessoire-lunettes.jpg" },
        { nom: "Casquette",  image: "images/produits/accessoire-casquette.jpg" },
        { nom: "Bijoux",     image: "images/produits/accessoire-bijoux.jpg" }
    ]
};