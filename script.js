
const projects = [
  {
    title: "GOIT",
    desc: "A mobile application designed for internet subscription companies to manage subscriptions, subscribers, invoices, and digital payments efficiently.",
    img: "./img/goit.png",
    alt: "GOIT mobile application screenshot"
  },
  {
    title: "Financial Hub",
    desc: "A Big Data platform that analyzes relationships between global currencies and precious metals to provide actionable financial insights.",
    img: "./img/financial.png",
    alt: "Financial Hub data visualization dashboard"
  },
  {
    title: "Coplay",
    desc: "A mobile application that connects players and football field owners by enabling easy booking, scheduling, and player matching.",
    img: "./img/coplay.png",
    alt: "Coplay football booking app interface"
  }
];

const projectsContainer = document.getElementById("projects-container");

projects.forEach((proj) => {
  const projectHTML = `
    <article class="project-item">
      <div class="project-img">
        <img src="${proj.img}" alt="${proj.alt}" />
      </div>
      <div class="project-info">
        <h3>${proj.title}</h3>
        <p>${proj.desc}</p>
      </div>
    </article>
  `;
  projectsContainer.innerHTML += projectHTML;
});


const contacts = [
  { title: "Phone", info: "+972 598458775", icon: "https://img.icons8.com/bubbles/100/000000/phone.png" },
  { title: "Email", info: "suhailaissa610@gmail.com", icon: "https://img.icons8.com/bubbles/100/000000/new-post.png" },
  { title: "Address", info: "Palestine, Tulkarem", icon: "https://img.icons8.com/bubbles/100/000000/map-marker.png" }
];

const contactContainer = document.getElementById("contact-container");

contacts.forEach(contact => {
  const contactHTML = `
    <div class="contact-item">
      <img src="${contact.icon}" alt="${contact.title} icon" />
      <div>
        <h3>${contact.title}</h3>
        <p>${contact.info}</p>
      </div>
    </div>
  `;
  contactContainer.innerHTML += contactHTML;
});


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-list ul");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
