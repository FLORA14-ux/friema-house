/* ============================================
   SCRIPT - Friema House
   - Menu mobile (hamburger)
   - Modale catalogue par catégorie
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

    /* ---------- Menu mobile ---------- */
    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', function () {
            mainNav.classList.toggle('open');
        });

        // Fermer le menu mobile après clic sur un lien
        mainNav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                mainNav.classList.remove('open');
            });
        });
    }

    /* ---------- Modale catalogue ---------- */
    const cards = document.querySelectorAll('.category-card');
    const modal = document.getElementById('productModal');
    const galleryGrid = document.getElementById('galleryGrid');
    const galleryTitle = document.getElementById('galleryTitle');
    const galleryClose = document.getElementById('galleryClose');

    function ouvrirCategorie(category) {
        const produits = PRODUITS[category] || [];

        // Titre de la modale
        galleryTitle.textContent = CATEGORIES_LABELS[category] || category;

        // Génération des cartes produits
        galleryGrid.innerHTML = '';
        produits.forEach(function (produit) {
            const item = document.createElement('div');
            item.className = 'col-4 gallery-item';
            item.innerHTML =
                '<img src="' + produit.image + '" alt="' + produit.nom + '">' +
                '<h4>' + produit.nom + '</h4>';
            galleryGrid.appendChild(item);
        });

        // Ouverture de la modale
        modal.classList.add('open');
        document.body.classList.add('modal-active');
    }

    function fermerModale() {
        modal.classList.remove('open');
        document.body.classList.remove('modal-active');
    }

    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            const category = card.getAttribute('data-category');
            ouvrirCategorie(category);
        });
    });

    // Fermer au clic sur la croix
    galleryClose.addEventListener('click', fermerModale);

    // Fermer au clic en dehors de la boîte (sur l'overlay)
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            fermerModale();
        }
    });

    // Fermer avec la touche Échap
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            fermerModale();
        }
    });
});
