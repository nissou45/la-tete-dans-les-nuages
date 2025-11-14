// 1) Sélection des éléments

// Tous les boutons "Voir détails"
const buttons = document.querySelectorAll(".btn-details");

// La modale
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

// Éléments à remplir dans la modale
const modalTitle = document.getElementById("modal-title");
const modalPrice = document.getElementById("modal-price");
const modalTime = document.getElementById("modal-time");
const modalDescription = document.getElementById("modal-description");

// 2) Ouvrir la modale

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Je récupère les infos dans les data-attributes
    modalTitle.textContent = btn.dataset.title;
    modalPrice.textContent = btn.dataset.price;
    modalTime.textContent = btn.dataset.time;
    modalDescription.textContent = btn.dataset.description;

    // Affiche la modale
    modal.style.display = "flex";
  });
});

// 3) Fermer la modale (croix)

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// 4) Fermer la modale en cliquant dehors

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
