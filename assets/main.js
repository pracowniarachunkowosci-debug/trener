
(function () {
  const loader = document.querySelector("[data-loader]");
  if (!loader) return;

  const hideLoader = function () {
    window.setTimeout(function () {
      loader.classList.add("is-hidden");
      window.setTimeout(function () {
        if (loader.parentNode) loader.parentNode.removeChild(loader);
      }, 650);
    }, 450);
  };

  if (document.readyState === "complete") {
    hideLoader();
  } else {
    window.addEventListener("load", hideLoader, { once: true });
  }
})();

document.addEventListener("DOMContentLoaded", function () {
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  const burger = document.querySelector("[data-burger]");
  const menu = document.querySelector("[data-menu]");

  if (burger && menu) {
    burger.addEventListener("click", function () {
      const open = menu.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.setAttribute("aria-label", open ? "Zamknij menu" : "Otwórz menu");
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (!link.classList.contains("is-disabled")) {
          menu.classList.remove("is-open");
          burger.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  document.querySelectorAll("[aria-disabled='true'], .is-disabled").forEach(function (element) {
    element.addEventListener("click", function (event) {
      event.preventDefault();
    });
  });

  const form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const data = new FormData(form);
      const name = data.get("name") || "";
      const goal = data.get("goal") || "";
      const message = data.get("message") || "";
      const mail = "kuba.personalny@gmail.com";
      const subject = encodeURIComponent("Zapytanie ze strony — trening personalny");
      const body = encodeURIComponent(
        "Cześć Kuba,\n\nChcę zapytać o współpracę.\n\nImię: " + name +
        "\nCel: " + goal +
        "\nWiadomość: " + message +
        "\n\nWysłane ze strony."
      );
      window.location.href = "mailto:" + mail + "?subject=" + subject + "&body=" + body;
    });
  }
});
