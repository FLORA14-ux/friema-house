/* ============================================
   SCRIPT - Friema House
   - Menu mobile (hamburger)
   - Catalogue 3 niveaux : catégorie > sous-catégorie > produits
   - Fil d'Ariane cliquable
   - Panier (localStorage)
   - Commande via WhatsApp
   ============================================ */

const WHATSAPP_NUMBER = "22896578701";
const CART_STORAGE_KEY = "friemaHouseCart";

document.addEventListener('DOMContentLoaded', function () {

    /* -------- Menu mobile -------- */
    const navToggle = document.getElementById('navToggle');
    const mainNav   = document.getElementById('mainNav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', function () {
            mainNav.classList.toggle('open');
        });
        mainNav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                mainNav.classList.remove('open');
            });
        });
    }

    /* -------- Identifiant produit -------- */
    function getProduitId(category, subcat, index) {
        return category + '|' + subcat + '|' + index;
    }

    function trouverProduit(produitId) {
        const parts = produitId.split('|');
        if (parts.length !== 3) return null;
        const [category, subcat, idx] = parts;
        const liste = (PRODUITS[category] || {})[subcat] || [];
        return liste[parseInt(idx, 10)] || null;
    }

    /* -------- Panier -------- */
    function chargerPanier() {
        try { return JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || {}; }
        catch (e) { return {}; }
    }
    function sauvegarderPanier(p) {
        try { localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(p)); } catch (e) {}
    }

    let panier = chargerPanier();

    function totalArticles() {
        return Object.values(panier).reduce(function (acc, q) { return acc + q; }, 0);
    }
    function majCompteur() {
        const el = document.getElementById('cartCount');
        if (el) el.textContent = totalArticles();
    }
    function ajouterAuPanier(id, qte) {
        panier[id] = (panier[id] || 0) + (parseInt(qte, 10) || 1);
        sauvegarderPanier(panier);
        majCompteur();
    }
    function modifierQuantite(id, qte) {
        const q = parseInt(qte, 10);
        if (!q || q < 1) delete panier[id];
        else panier[id] = q;
        sauvegarderPanier(panier);
        majCompteur();
        afficherPanier();
    }
    function retirerDuPanier(id) {
        delete panier[id];
        sauvegarderPanier(panier);
        majCompteur();
        afficherPanier();
    }

    /* -------- Modale produits (3 niveaux) -------- */
    const modal        = document.getElementById('productModal');
    const modalTitle   = document.getElementById('galleryTitle');
    const galleryGrid  = document.getElementById('galleryGrid');
    const galleryClose = document.getElementById('galleryClose');
    const breadcrumb   = document.getElementById('modalBreadcrumb');

    let etatModal = { category: null, subcat: null }; // état de navigation

    /* -- Niveau 1 : afficher les sous-catégories d'une catégorie -- */
    function afficherSousCategories(category) {
        etatModal = { category: category, subcat: null };
        const label = CATEGORIES_LABELS[category] || category;
        const subcats = PRODUITS[category] || {};

        modalTitle.textContent = label;

        // Fil d'Ariane
        breadcrumb.innerHTML = '<span class="bc-current">' + label + '</span>';

        galleryGrid.innerHTML = '';
        galleryGrid.className = 'subcat-grid';

        Object.keys(subcats).forEach(function (subcat) {
            const count = subcats[subcat].length;
            const btn = document.createElement('div');
            btn.className = 'subcat-card';
            btn.innerHTML =
                '<div class="subcat-icon"><i class="fa fa-tags"></i></div>' +
                '<div class="subcat-info">' +
                    '<h4>' + subcat + '</h4>' +
                    '<p>' + count + ' article' + (count > 1 ? 's' : '') + '</p>' +
                '</div>' +
                '<i class="fa fa-chevron-right subcat-arrow"></i>';
            btn.addEventListener('click', function () {
                afficherProduits(category, subcat);
            });
            galleryGrid.appendChild(btn);
        });

        ouvrirModale();
    }

    /* -- Niveau 2 : afficher les produits d'une sous-catégorie -- */
    function afficherProduits(category, subcat) {
        etatModal = { category: category, subcat: subcat };
        const catLabel = CATEGORIES_LABELS[category] || category;
        const liste = (PRODUITS[category] || {})[subcat] || [];

        modalTitle.textContent = subcat;

        // Fil d'Ariane cliquable
        breadcrumb.innerHTML =
            '<span class="bc-link" id="bcBack">' + catLabel + '</span>' +
            '<i class="fa fa-chevron-right bc-sep"></i>' +
            '<span class="bc-current">' + subcat + '</span>';

        document.getElementById('bcBack').addEventListener('click', function () {
            afficherSousCategories(category);
        });

        galleryGrid.className = 'row';
        galleryGrid.innerHTML = '';

        liste.forEach(function (produit, index) {
            const produitId = getProduitId(category, subcat, index);
            const item = document.createElement('div');
            item.className = 'col-4 gallery-item';
            item.innerHTML =
                '<img src="' + produit.image + '" alt="' + produit.nom + '">' +
                '<h4>' + produit.nom + '</h4>' +
                '<p class="product-price">' + (produit.prix || '') + '</p>' +
                '<div class="qty-selector">' +
                    '<button type="button" class="qty-btn qty-minus">-</button>' +
                    '<input type="number" class="qty-input" value="1" min="1" inputmode="numeric">' +
                    '<button type="button" class="qty-btn qty-plus">+</button>' +
                '</div>' +
                '<button type="button" class="add-to-cart-btn" data-produit-id="' + produitId + '">' +
                    '<i class="fa fa-shopping-bag"></i> Ajouter au panier' +
                '</button>';
            galleryGrid.appendChild(item);
        });
    }

    function ouvrirModale() {
        modal.classList.add('open');
        document.body.classList.add('modal-active');
    }
    function fermerModale() {
        modal.classList.remove('open');
        document.body.classList.remove('modal-active');
    }

    // Clic sur les cartes catégories
    document.querySelectorAll('.category-card').forEach(function (card) {
        card.addEventListener('click', function () {
            afficherSousCategories(card.getAttribute('data-category'));
        });
    });

    galleryClose.addEventListener('click', fermerModale);
    modal.addEventListener('click', function (e) {
        if (e.target === modal) fermerModale();
    });

    // Délégation : boutons +/- et ajout au panier
    galleryGrid.addEventListener('click', function (e) {
        const t = e.target;

        if (t.classList.contains('qty-plus') || t.classList.contains('qty-minus')) {
            const input = t.parentElement.querySelector('.qty-input');
            let v = parseInt(input.value, 10) || 1;
            input.value = t.classList.contains('qty-plus') ? v + 1 : Math.max(1, v - 1);
        }

        const btn = t.classList.contains('add-to-cart-btn') ? t : t.closest('.add-to-cart-btn');
        if (btn) {
            const id  = btn.getAttribute('data-produit-id');
            const qte = btn.parentElement.querySelector('.qty-input').value;
            ajouterAuPanier(id, qte);
            const orig = btn.innerHTML;
            btn.innerHTML = '<i class="fa fa-check"></i> Ajouté !';
            btn.classList.add('added');
            setTimeout(function () { btn.innerHTML = orig; btn.classList.remove('added'); }, 1200);
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('open')) fermerModale();
    });

    /* -------- Modale Panier -------- */
    const cartModal      = document.getElementById('cartModal');
    const cartClose      = document.getElementById('cartClose');
    const cartItemsList  = document.getElementById('cartItemsList');
    const cartEmptyMsg   = document.getElementById('cartEmptyMsg');
    const cartFooter     = document.getElementById('cartFooter');
    const cartOrderBtn   = document.getElementById('cartOrderBtn');
    const cartIconBtn    = document.getElementById('cartIconBtn');

    function afficherPanier() {
        const ids = Object.keys(panier);
        if (ids.length === 0) {
            cartItemsList.innerHTML = '';
            cartEmptyMsg.style.display = 'block';
            cartFooter.style.display = 'none';
            return;
        }
        cartEmptyMsg.style.display = 'none';
        cartFooter.style.display = 'block';
        cartItemsList.innerHTML = '';

        ids.forEach(function (id) {
            const produit = trouverProduit(id);
            if (!produit) return;
            const qte = panier[id];
            const row = document.createElement('div');
            row.className = 'cart-item';
            row.innerHTML =
                '<img src="' + produit.image + '" alt="' + produit.nom + '">' +
                '<div class="cart-item-info">' +
                    '<h4>' + produit.nom + '</h4>' +
                    (produit.prix ? '<p class="product-price">' + produit.prix + '</p>' : '') +
                    '<div class="qty-selector cart-qty-selector">' +
                        '<button type="button" class="qty-btn cart-qty-minus" data-id="' + id + '">-</button>' +
                        '<input type="number" class="qty-input cart-qty-input" data-id="' + id + '" value="' + qte + '" min="1" inputmode="numeric">' +
                        '<button type="button" class="qty-btn cart-qty-plus" data-id="' + id + '">+</button>' +
                    '</div>' +
                '</div>' +
                '<button type="button" class="cart-remove-btn" data-id="' + id + '" aria-label="Retirer">' +
                    '<i class="fa fa-trash"></i>' +
                '</button>';
            cartItemsList.appendChild(row);
        });

        majLienWhatsApp();
    }

    function majLienWhatsApp() {
        const ids = Object.keys(panier);
        if (!ids.length) return;
        let message = "Bonjour Friema House, je souhaite commander :\n\n";
        ids.forEach(function (id) {
            const p = trouverProduit(id);
            if (!p) return;
            const parts = id.split('|');
            const subcat = parts[1] || '';
            message += "- " + p.nom + " (" + subcat + ")" +
                       (p.prix ? " - " + p.prix : "") +
                       " x" + panier[id] + "\n";
        });
        message += "\nMerci de me confirmer la disponibilité.";
        cartOrderBtn.setAttribute('href',
            "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message));
    }

    function ouvrirPanier() {
        afficherPanier();
        cartModal.classList.add('open');
        document.body.classList.add('modal-active');
    }
    function fermerPanier() {
        cartModal.classList.remove('open');
        document.body.classList.remove('modal-active');
    }

    if (cartIconBtn) cartIconBtn.addEventListener('click', ouvrirPanier);
    if (cartClose)   cartClose.addEventListener('click', fermerPanier);
    if (cartModal)   cartModal.addEventListener('click', function (e) {
        if (e.target === cartModal) fermerPanier();
    });

    if (cartItemsList) {
        cartItemsList.addEventListener('click', function (e) {
            const btn = e.target.closest('button');
            if (!btn) return;
            const id = btn.getAttribute('data-id');
            if (!id) return;
            if (btn.classList.contains('cart-qty-plus'))    modifierQuantite(id, (panier[id] || 0) + 1);
            else if (btn.classList.contains('cart-qty-minus')) modifierQuantite(id, (panier[id] || 0) - 1);
            else if (btn.classList.contains('cart-remove-btn')) retirerDuPanier(id);
        });
        cartItemsList.addEventListener('change', function (e) {
            if (e.target.classList.contains('cart-qty-input')) {
                modifierQuantite(e.target.getAttribute('data-id'), e.target.value);
            }
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && cartModal && cartModal.classList.contains('open')) fermerPanier();
    });

    majCompteur();
});