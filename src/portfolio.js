import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 1000
};

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ramiro Madero",
  title: "Hola! soy Ramiro",
  subTitle: emoji(
    "Responsable, serio y comprometido; con capacidad de trabajo en equipo."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1D4MaWRZUOLC5CiEWdUTnfHP3gF5dEtns/edit?tab=t.0", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

const socialMediaLinks = {
  github: "https://github.com/ramiromadero",
  linkedin: "https://www.linkedin.com/in/ramiro-madero-herranz/",
  gmail: "ramiromaderoh@gmail.com",
  display: true
};

const profilePicture = {
  // Your profile picture
  // You can change the path to your own image
  // If you want to use a static image, set animated to false
  animated: false,
  image: require("./assets/images/profilePicture.png"),
  display: true // Set false to hide this section, defaults to true
};
// Skills Section

const skillsSection = {
  title: "Que hago?",
  subTitle:
    "Tengo un perfil analítico, proactivo y dinámico, con diversos conocimientos de Marketing Automation, Analítica, SQL y Programación (HTML, CSS y JS).",
  skills: [
    emoji("📩 Diseño e implementación de campañas automatizadas centradas en la personalización y eficiencia"),
    emoji("🧠 Conecto datos, creatividad y tecnología para mejorar la experiencia del cliente"),
    emoji("📊 Transformo insights en acciones medibles, integrando plataformas como Salesforce, Eloqua y Google Analytics")    
  ],

  softwareSkills: [
    {
      skillName: "Salesforce Marketing Cloud",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "Oracle Eloqua",
      fontAwesomeClassname: "fas fa-bullseye"
    },
    {
      skillName: "AMPscript",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Google Tag Manager",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "Google Analytics",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "Tealium iQ / AudienceStream",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "Google Data Studio",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "English (FCE & IGCSE)",
      fontAwesomeClassname: "fas fa-language"
    }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Universidad de Buenos Aires",
      logo: require("./assets/images/ubaLogo.png"),
      subHeader: "Ingeniería Industrial",
      duration: "2011 - Actualidad"
    },
    {
      schoolName: "Salesforce",
      logo: require("./assets/images/salesforceLogo.png"),
      subHeader: "Salesforce Certified Data Cloud Consultant",
      duration: "2024"
    },
    {
      schoolName: "Salesforce",
      logo: require("./assets/images/salesforceLogo.png"),
      subHeader: "Marketing Cloud Personalization Accredited Professional",
      duration: "2024"
    },
    {
      schoolName: "Salesforce",
      logo: require("./assets/images/salesforceLogo.png"),
      subHeader: "Salesforce Certified Marketing Cloud Consultant",
      duration: "2022"
    },
    {
      schoolName: "Salesforce",
      logo: require("./assets/images/salesforceLogo.png"),
      subHeader: "Salesforce Certified Marketing Cloud Administrator",
      duration: "2022"
    },
    {
      schoolName: "Salesforce",
      logo: require("./assets/images/salesforceLogo.png"),
      subHeader: "Salesforce Certified Marketing Cloud Developer",
      duration: "2021"
    },
    {
      schoolName: "Salesforce",
      logo: require("./assets/images/salesforceLogo.png"),
      subHeader: "Salesforce Certified Marketing Cloud Email Specialist",
      duration: "2019"
    }
  ]
};

const techStack = {
  viewSkillBars: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Consultor Técnico Marketing Automation",
      company: "Nateevo",
      companylogo: require("./assets/images/nateevoLogo.png"),
      date: "Feb 2020 - Actualidad",
      desc: "Especializado en Salesforce Marketing Cloud y Oracle Eloqua, liderando la implementación de campañas de automatización y soluciones personalizadas para clientes.",
      descBullets: [
        "Modelado de datos, configuración de extensiones y creación de Journeys y Automations en Salesforce Marketing Cloud",
        "Desarrollo de segmentaciones mediante SQL y scripting; personalización de contenidos con AMPscript y JavaScript",
        "Integración de plataformas externas vía API y soporte técnico en Oracle Eloqua, incluyendo Lead Scoring y campañas"
      ]
    },
    {
      role: "Consultor Analítica",
      company: "Nateevo",
      companylogo: require("./assets/images/nateevoLogo.png"),
      date: "Mar 2020 - Mar 2021",
      desc: "Implementación y soporte de analítica web en proyectos de clientes mediante herramientas líderes del mercado.",
      descBullets: [
        "Configuración de Google Analytics, Tag Manager y Tealium para medición de sitios web",
        "Elaboración de dashboards en Google Data Studio para reporting de campañas",
        "Generación de documentación técnica para desarrollo e implementación de analítica"
      ]
    },
    {
      role: "Analista de Administración de Flota",
      company: "Ford Motor Company",
      companylogo: require("./assets/images/fordLogo.png"),
      date: "Jul 2019 - Oct 2019",
      desc: "Gestión integral de la flota de vehículos corporativos asignados al personal gerencial de Ford.",
      descBullets: [
        "Alta, asignación y rotación de unidades",
        "Gestión de facturación, ventas y control de inventario"
      ]
    },
    {
      role: "Pasante de FPS (Producción)",
      company: "Ford Motor Company",
      companylogo: require("./assets/images/fordLogo.png"),
      date: "May 2018 - Oct 2018",
      desc: "Colaboración en el relevamiento e implementación del sistema FPS dentro de la planta de producción de vehículos.",
      descBullets: []
    },
    {
      role: "Pasante de Administración de Flota",
      company: "Ford Motor Company",
      companylogo: require("./assets/images/fordLogo.png"),
      date: "Abr 2017 - Oct 2018",
      desc: "Soporte operativo en tareas administrativas vinculadas a la gestión de flota de vehículos corporativos.",
      descBullets: [
        "Alta, asignación, patentamiento y facturación de unidades",
        "Gestión de infracciones y soporte al personal interno"
      ]
    }
  ]  
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Stuff I Made",
  subtitle: "Some of the projects you worked on",
  projects: [
    {
      image: require("./assets/images/giftpoolLogo.png"),
      projectName: "projectName",
      projectDesc: "A projectDescription",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://projectDesc.app/"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements and Certifications I've earned!",

  achievementsCards: [
    {
      title: "US Patent Granted",
      subtitle:
        "Wrote, submitted, and received a patent for structuring web apps through a specification file.",
      image: require("./assets/images/usptoLogo.png"),
      imageAlt: "USPTO Logo",
      footerLink: [
        {
          name: "Patent",
          url: "https://patents.google.com/patent/US10977011B2/en"
        }
      ]
    },
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle:
        "Obtained a score of 834 on the AWS Certified Cloud Practitioner certification exam.",
      image: require("./assets/images/awsCertifiedCloudPractitioner.png"),
      imageAlt: "AWS Certified Cloud Practitioner Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1unydJb7Xe3u1UNBm4NX_u5r8_DofpE5t/view?usp=sharing"
        }
      ]
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I do not have a podcast yet, but I am planning to start one soon.",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contactame ☎️"),
  subtitle:
    "Si quieres contactarme, no dudes en escribirme a través de mis redes sociales o enviarme un correo electrónico.",
  number: "+34 658 163 382",
  email_address: "ramiromaderoh@gmail.com"
};

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  profilePicture,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
