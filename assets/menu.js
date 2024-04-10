function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav() {
    document.getElementById("mobile-menu").style.width = "0%";
}

const nosotros = document.querySelector("#nosotros");
const servicios = document.querySelector("#servicios");
const planes = document.querySelector("#planes");
const creadores = document.querySelector("#creadores");
const contacto = document.querySelector("#contacto");

nosotros.addEventListener("click", (n) => {
    n.preventDefault();
    const selectionN = document.querySelector("#nosotros-section");
    selectionN.scrollIntoView({ behavior: "smooth" });
});
servicios.addEventListener("click", (s) => {
    s.preventDefault();
    const selectionS = document.querySelector("#servicios-section");
    selectionS.scrollIntoView({ behavior: "smooth" });
});
planes.addEventListener("click", (p) => {
    p.preventDefault();
    const selectionP = document.querySelector("#planes-section");
    selectionP.scrollIntoView({ behavior: "smooth" });
});
creadores.addEventListener("click", (cr) => {
    cr.preventDefault();
    const selectionCr = document.querySelector("#creators-section");
    selectionCr.scrollIntoView({ behavior: "smooth" });
});

contacto.addEventListener("click", (c) => {
    c.preventDefault();
    const selectionC = document.querySelector("#contact-section");
    selectionC.scrollIntoView({ behavior: "smooth" });
});

const nosotros2 = document.querySelector("#nosotros2");
const servicios2 = document.querySelector("#servicios2");
const planes2 = document.querySelector("#planes2");
const creadores2 = document.querySelector("#creadores2");
const contacto2 = document.querySelector("#contacto2");

nosotros2.addEventListener("click", (n) => {
    n.preventDefault();
    const selectionN = document.querySelector("#nosotros-section");
    selectionN.scrollIntoView({ behavior: "smooth" });
    closeNav();
});
servicios2.addEventListener("click", (s) => {
    s.preventDefault();
    const selectionS = document.querySelector("#servicios-section");
    selectionS.scrollIntoView({ behavior: "smooth" });
    closeNav();
});
planes2.addEventListener("click", (p) => {
    p.preventDefault();
    const selectionP = document.querySelector("#planes-section");
    selectionP.scrollIntoView({ behavior: "smooth" });
    closeNav();
});
contacto2.addEventListener("click", (c) => {
    c.preventDefault();
    const selectionC = document.querySelector("#contact-section");
    selectionC.scrollIntoView({ behavior: "smooth" });
    closeNav();
});
creadores2.addEventListener("click", (cr) => {
    cr.preventDefault();
    const selectionCr = document.querySelector("#creators-section");
    selectionCr.scrollIntoView({ behavior: "smooth" });
    closeNav();
});