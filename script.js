document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault(); // empêche le lien de recharger la page

      const parentBlock = item.closest(".menu-block");
      const alreadyOpen = parentBlock.classList.contains("open");

      // Fermer tous les autres menus
      document.querySelectorAll(".menu-block.open").forEach(block => {
        block.classList.remove("open");
        block.querySelector(".menu-item").classList.remove("active");
      });

      // Ouvrir celui qu'on vient de cliquer (s'il n'était pas déjà ouvert)
      if (!alreadyOpen) {
        parentBlock.classList.add("open");
        item.classList.add("active");
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger-menu");
  const body = document.body;

  burger.addEventListener("click", () => {
    body.classList.toggle("menu-active");
  });
});
