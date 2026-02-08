
const projects = [
  {
    title: "GOIT",
    desc: "Mobile app for managing internet subscriptions and payments.",
    img: "./img/goit.png",
    alt: "GOIT app"
  },
  {
    title: "Financial Hub",
    desc: "Big Data platform for analyzing currencies and metals.",
    img: "./img/financial.png",
    alt: "Financial Hub"
  },
  {
    title: "Coplay",
    desc: "Football booking and player matching application.",
    img: "./img/coplay.png",
    alt: "Coplay app"
  }
];

const projectsContainer = document.getElementById("projects-container");

function renderProjects(list) {
  projectsContainer.innerHTML = "";
  list.forEach(p => {
    projectsContainer.innerHTML += `
      <article class="project-item">
        <div class="project-img">
          <img src="${p.img}" alt="${p.alt}">
        </div>
        <div class="project-info">
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
        </div>
      </article>
    `;
  });
}

renderProjects(projects);

const searchInput = document.getElementById("project-search");

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const filtered = projects.filter(p =>
    p.title.toLowerCase().includes(value) ||
    p.desc.toLowerCase().includes(value)
  );
  renderProjects(filtered);
});


const contacts = [
  { title: "Phone", info: "+972 598458775" },
  { title: "Email", info: "suhailaissa610@gmail.com" },
  { title: "Address", info: "Palestine, Tulkarem" }
];

const contactContainer = document.getElementById("contact-container");

contacts.forEach(c => {
  contactContainer.innerHTML += `
    <div class="contact-item">
      <h3>${c.title}</h3>
      <p>${c.info}</p>
    </div>
  `;
});


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-list ul");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
