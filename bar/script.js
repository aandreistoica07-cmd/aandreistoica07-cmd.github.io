(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  var modal = document.getElementById("aviso-muestra");

  function setNav(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.querySelector(".sr-only").textContent = open ? "Cerrar menú" : "Abrir menú";
    nav.classList.toggle("is-open", open);
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setNav(toggle.getAttribute("aria-expanded") !== "true");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { setNav(false); });
    });
  }

  function openModal() {
    if (!modal) return;
    modal.hidden = false;
    var closeBtn = modal.querySelector("[data-close-sample].btn");
    if (closeBtn) closeBtn.focus();
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  document.querySelectorAll("[data-open-sample]").forEach(function (btn) {
    btn.addEventListener("click", openModal);
  });
  document.querySelectorAll("[data-close-sample]").forEach(function (el) {
    el.addEventListener("click", closeModal);
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setNav(false);
      closeModal();
    }
  });
})();
