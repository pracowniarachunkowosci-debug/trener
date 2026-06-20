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
        menu.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

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