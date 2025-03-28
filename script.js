// Menü-Umschalten
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Darkmode-Umschalter
function toggleDarkMode() {
  document.body.classList.toggle("dark");
  const btn = document.getElementById("darkModeToggle");
  if (document.body.classList.contains("dark")) {
    btn.innerHTML = "☀️";
  } else {
    btn.innerHTML = "🌙";
  }
}

// Übersetzungs-Daten (Deutsch und Englisch)
const translations = {
  de: {
    nav_about: "Über mich",
    nav_experience: "Erfahrung",
    nav_projects: "Projekte",
    nav_contact: "Kontakt",
    profile_greeting: "Hallo, ich bin",
    profile_title: "Baraa Sunjakdar",
    profile_subtitle: "Softwareentwickler",
    btn_cv: "Lebenslauf herunterladen",
    btn_contact: "Kontakt",
    about_intro: "Lerne mich kennen",
    about_heading: "Über mich",
    about_experience_heading: "Erfahrung",
    about_experience_value: "1+ Jahre Softwareentwicklung",
    about_education_heading: "Ausbildung",
    about_education_value: "4. Semester TU Dortmund",
    about_text: "Willkommen auf meinem Portfolio! Ich bin Student im 4. Semester an der TU Dortmund und leidenschaftlicher Softwareentwickler. Mit fundierten Kenntnissen in modernen Programmiersprachen, Frameworks und agilen Methoden entwickle ich effiziente und wartbare Softwarelösungen. Auf dieser Seite finden Sie eine Auswahl meiner Projekte, die mein Engagement für kreatives Problemlösen und kontinuierliches Lernen widerspiegeln. Ich freue mich darauf, gemeinsam die digitale Zukunft zu gestalten.",
    experience_intro: "Entdecke meine",
    experience_heading: "Erfahrung",
    exp_web: "Webentwicklung",
    exp_soft: "Softwareentwicklung",
    skill_experienced: "Erfahren",
    skill_intermediate: "Fortgeschritten",
    skill_basic: "Grundkenntnisse",
    skill_advanced: "Experte",
    projects_intro: "Sieh dir meine aktuellen",
    projects_heading: "Projekte",
    project_one: "Bildbearbeitung Deluxe",
    project_two: "Dinar",
    project_three: "PDF.TEXT",
    btn_github: "Github",
    btn_live: "Live-Demo",
    contact_intro: "Nimm Kontakt auf",
    contact_heading: "Kontaktiere mich",
    footer_rights: "Alle Rechte vorbehalten.",
  },
  en: {
    nav_about: "About",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_contact: "Contact",
    profile_greeting: "Hello, I'm",
    profile_title: "Baraa Sunjakdar",
    profile_subtitle: "Software Developer",
    btn_cv: "Download CV",
    btn_contact: "Contact Info",
    about_intro: "Get to know me",
    about_heading: "About Me",
    about_experience_heading: "Experience",
    about_experience_value: "1+ Years Software Development",
    about_education_heading: "Education",
    about_education_value: "4th Semester TU Dortmund",
    about_text: "I am a passionate software developer creating innovative and efficient solutions for complex challenges. With in-depth knowledge of modern programming languages and frameworks, I focus on clean, maintainable code and agile methodologies. My projects reflect my enthusiasm for continuous learning and creative problem-solving. I look forward to actively shaping the digital future.",
    experience_intro: "Explore my",
    experience_heading: "Experience",
    exp_web: "Web Development",
    exp_soft: "Software Development",
    skill_experienced: "Experienced",
    skill_intermediate: "Intermediate",
    skill_basic: "Basic",
    skill_advanced: "Advanced",
    projects_intro: "Browse my recent",
    projects_heading: "Projects",
    project_one: "Bildbearbeitung Deluxe",
    project_two: "Dinar",
    project_three: "PDF.TEXT",
    btn_github: "Github",
    btn_live: "Live Demo",
    contact_intro: "Get in Touch",
    contact_heading: "Contact Me",
    footer_rights: "All Rights Reserved.",
  },
};

let currentLang = "de";

// Aktualisiert alle Übersetzungen basierend auf currentLang
function updateTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[currentLang] && translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });
  document.getElementById("languageToggle").textContent = currentLang === "de" ? "EN" : "DE";
}

// Sprachumschalter: Wechselt die Sprache und aktualisiert die Übersetzungen
function toggleLanguage() {
  currentLang = currentLang === "de" ? "en" : "de";
  updateTranslations();
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark");
    document.getElementById("darkModeToggle").innerHTML = "☀️";
  }
  updateTranslations();
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll(".fade-in").forEach((el) => {
    observer.observe(el);
  });
});

