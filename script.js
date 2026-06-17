/* ============================================
   SCRIPT - Friema House
   - Menu mobile (hamburger)
   - Modale catalogue par catégorie
   - Panier (ajout, quantité, localStorage)
   - Commande via WhatsApp
   ============================================ */

const WHATSAPP_NUMBER = "22898303670";
const CART_STORAGE_KEY = "friemaHouseCart";

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

    /* ---------- Génération d'un identifiant unique par produit ---------- */
    function getProduitId(category, index) {
        return category + "-" + index;
    }

    function trouverProduit(produitId) {
        for (const category in PRODUITS) {
            const liste = PRODUITS[category];
            for (let i = 0; i < liste.length; i++) {
                if (getProduitId(category, i) === produitId) {
                    return liste[i];
                }
            }
        }
        return null;
    }

    /* ---------- Panier : lecture / écriture localStorage ---------- */
    function chargerPanier() {
        try {
            const data = localStorage.getItem(CART_STORAGE_KEY);
            return data ? JSON.parse(data) : {};
        } catch (e) {
            return {};
        }
    }

    function sauvegarderPanier(panier) {
        try {
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(panier));
        } catch (e) {
            // Stockage indisponible (navigation privée, etc.) : on continue sans bloquer
        }
    }

    let panier = chargerPanier(); // { "homme-0": 2, "femme-3": 1, ... }

    function totalArticlesPanier() {
        let total = 0;
        for (const id in panier) {
            total += panier[id];
        }
        return total;
    }

    function majCompteurPanier() {
        const cartCount = document.getElementById('cartCount');
        if (cartCount) {
            cartCount.textContent = totalArticlesPanier();
        }
    }

    function ajouterAuPanier(produitId, quantite) {
        const qte = parseInt(quantite, 10) || 1;
        panier[produitId] = (panier[produitId] || 0) + qte;
        sauvegarderPanier(panier);
        majCompteurPanier();
    }

    function modifierQuantitePanier(produitId, quantite) {
        const qte = parseInt(quantite, 10);
        if (!qte || qte < 1) {
            delete panier[produitId];
        } else {
            panier[produitId] = qte;
        }
        sauvegarderPanier(panier);
        majCompteurPanier();
        afficherPanier();
    }

    function retirerDuPanier(produitId) {
        delete panier[produitId];
        sauvegarderPanier(panier);
        majCompteurPanier();
        afficherPanier();
    }

    /* ---------- Modale catalogue (catégories -> produits) ---------- */
    const cards = document.querySelectorAll('.category-card');
    const modal = document.getElementById('productModal');
    const galleryGrid = document.getElementById('galleryGrid');
    const galleryTitle = document.getElementById('galleryTitle');
    const galleryClose = document.getElementById('galleryClose');

    function ouvrirCategorie(category) {
        const produits = PRODUITS[category] || [];

        galleryTitle.textContent = CATEGORIES_LABELS[category] || category;

        galleryGrid.innerHTML = '';
        produits.forEach(function (produit, index) {
            const produitId = getProduitId(category, index);
            const item = document.createElement('div');
            item.className = 'col-4 gallery-item';
            item.innerHTML =
                '<img src="' + produit.image + '" alt="' + produit.nom + '">' +
                '<h4>' + produit.nom + '</h4>' +
                '<div class="qty-selector">' +
                    '<button type="button" class="qty-btn qty-minus" aria-label="Diminuer">-</button>' +
                    '<input type="number" class="qty-input" value="1" min="1" inputmode="numeric">' +
                    '<button type="button" class="qty-btn qty-plus" aria-label="Augmenter">+</button>' +
                '</div>' +
                '<button type="button" class="add-to-cart-btn" data-produit-id="' + produitId + '">' +
                    '<i class="fa fa-shopping-bag"></i> Ajouter au panier' +
                '</button>';
            galleryGrid.appendChild(item);
        });

        modal.classList.add('open');
        document.body.classList.add('modal-active');
    }

    function fermerModaleProduits() {
        modal.classList.remove('open');
        document.body.classList.remove('modal-active');
    }

    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            const category = card.getAttribute('data-category');
            ouvrirCategorie(category);
        });
    });

    galleryClose.addEventListener('click', fermerModaleProduits);

    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            fermerModaleProduits();
        }
    });

    // Boutons +/- et ajout au panier (délégation d'événement sur la grille)
    galleryGrid.addEventListener('click', function (e) {
        const target = e.target;

        if (target.classList.contains('qty-plus') || target.classList.contains('qty-minus')) {
            const input = target.parentElement.querySelector('.qty-input');
            let valeur = parseInt(input.value, 10) || 1;
            if (target.classList.contains('qty-plus')) {
                valeur += 1;
            } else {
                valeur = Math.max(1, valeur - 1);
            }
            input.value = valeur;
        }

        if (target.classList.contains('add-to-cart-btn') || target.closest('.add-to-cart-btn')) {
            const btn = target.classList.contains('add-to-cart-btn') ? target : target.closest('.add-to-cart-btn');
            const produitId = btn.getAttribute('data-produit-id');
            const qtyInput = btn.parentElement.querySelector('.qty-input');
            const quantite = qtyInput ? qtyInput.value : 1;

            ajouterAuPanier(produitId, quantite);

            // Petit retour visuel
            const texteOriginal = btn.innerHTML;
            btn.innerHTML = '<i class="fa fa-check"></i> Ajouté !';
            btn.classList.add('added');
            setTimeout(function () {
                btn.innerHTML = texteOriginal;
                btn.classList.remove('added');
            }, 1200);
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            fermerModaleProduits();
        }
    });

    /* ---------- Modale Panier ---------- */
    const cartIconBtn = document.getElementById('cartIconBtn');
    const cartModal = document.getElementById('cartModal');
    const cartClose = document.getElementById('cartClose');
    const cartItemsList = document.getElementById('cartItemsList');
    const cartEmptyMsg = document.getElementById('cartEmptyMsg');
    const cartFooter = document.getElementById('cartFooter');
    const cartOrderBtn = document.getElementById('cartOrderBtn');

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
        ids.forEach(function (produitId) {
            const produit = trouverProduit(produitId);
            if (!produit) return;

            const quantite = panier[produitId];
            const row = document.createElement('div');
            row.className = 'cart-item';
            row.innerHTML =
                '<img src="' + produit.image + '" alt="' + produit.nom + '">' +
                '<div class="cart-item-info">' +
                    '<h4>' + produit.nom + '</h4>' +
                    '<div class="qty-selector cart-qty-selector">' +
                        '<button type="button" class="qty-btn cart-qty-minus" data-id="' + produitId + '">-</button>' +
                        '<input type="number" class="qty-input cart-qty-input" data-id="' + produitId + '" value="' + quantite + '" min="1" inputmode="numeric">' +
                        '<button type="button" class="qty-btn cart-qty-plus" data-id="' + produitId + '">+</button>' +
                    '</div>' +
                '</div>' +
                '<button type="button" class="cart-remove-btn" data-id="' + produitId + '" aria-label="Retirer">' +
                    '<i class="fa fa-trash"></i>' +
                '</button>';
            cartItemsList.appendChild(row);
        });

        majLienWhatsApp();
    }

    function majLienWhatsApp() {
        const ids = Object.keys(panier);
        if (ids.length === 0) return;

        let message = "Bonjour Friema House, je souhaite commander :\n\n";
        ids.forEach(function (produitId) {
            const produit = trouverProduit(produitId);
            if (!produit) return;
            const quantite = panier[produitId];
            message += "- " + produit.nom + " x" + quantite + "\n";
        });
        message += "\nMerci de me confirmer la disponibilité et le prix total.";

        const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
        cartOrderBtn.setAttribute('href', url);
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

    if (cartIconBtn) {
        cartIconBtn.addEventListener('click', ouvrirPanier);
    }
    if (cartClose) {
        cartClose.addEventListener('click', fermerPanier);
    }
    if (cartModal) {
        cartModal.addEventListener('click', function (e) {
            if (e.target === cartModal) {
                fermerPanier();
            }
        });
    }

    // Boutons +/- et suppression dans le panier (délégation d'événement)
    if (cartItemsList) {
        cartItemsList.addEventListener('click', function (e) {
            const target = e.target.closest('button');
            if (!target) return;

            const produitId = target.getAttribute('data-id');
            if (!produitId) return;

            if (target.classList.contains('cart-qty-plus')) {
                modifierQuantitePanier(produitId, (panier[produitId] || 0) + 1);
            } else if (target.classList.contains('cart-qty-minus')) {
                modifierQuantitePanier(produitId, (panier[produitId] || 0) - 1);
            } else if (target.classList.contains('cart-remove-btn')) {
                retirerDuPanier(produitId);
            }
        });

        cartItemsList.addEventListener('change', function (e) {
            if (e.target.classList.contains('cart-qty-input')) {
                const produitId = e.target.getAttribute('data-id');
                modifierQuantitePanier(produitId, e.target.value);
            }
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && cartModal.classList.contains('open')) {
            fermerPanier();
        }
    });

    // Initialisation du compteur au chargement de la page
    majCompteurPanier();
});