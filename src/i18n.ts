import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "header": "Resumee",
      "personal": "Personal",
      "address": "Address",
      "contact": "Contact",
      "career": "Career",
      "knowledge": "Knowledge and Interests",
      "skills": "Skills",
      "projects": "Projects",
      "male": "Male",
      "female": "Female",
      "diverse": "Diverse",
      "today": "Today",
      "years": "years",
      "year": "year",
      "months": "months",
      "month": "month",
      "bornIn": "in",
      "mr": "Mr",
      "mrs": "Ms",
      "neutral": "",
      "languages": "Languages",
      "workingstudent": "Working Student",
      "fulltime": "Full time",
      "parttime": "Part time",
      "job": "Job",
      "university": "University",
      "communityservice": "Community Service",
      "school": "School",
      "thesis": "Thesis",
      "internship": "Internship",
      "website": "Web site",
      "steptype": "Type",
      "title": "Title",
      "degree": "Degree",
      "workingtime": "Working time model",
      "workplace": "Workplace",
      "location": "Location",
      "institution": "Institution",
      "tasks": "Tasks",
      "technologies": "Technologies",
      "bachelorofscience": "Bachelor of Science",
      "masterofscience": "Master of Science",
      "highschooldiploma": "High School Diploma",
      "professionaleducation": "Professional Education",
      "german": "🇩🇪 German",
      "english": "🇬🇧 English",
      "french": "🇫🇷 French",
      "polish": "🇫🇷 Polish",
      "native": "mother tongue",
      "fluent": "fluent",
      "businessfluent": "business fluent",
      "basic": "basics"
    }
  },
  de: {
    translation: {
      "header": "Lebenslauf",
      "personal": "Persönliches",
      "address": "Adresse",
      "contact": "Kontakt",
      "career": "Werdegang",
      "knowledge": "Kenntnisse und Interessen",
      "skills": "Kenntnisse",
      "projects": "Projekte",
      "male": "Männlich",
      "female": "Weiblich",
      "diverse": "Divers",
      "today": "Heute",
      "years": "Jahre",
      "year": "Jahr",
      "months": "Monate",
      "month": "Monat",
      "bornIn": "in",
      "mr": "Herr",
      "mrs": "Frau",
      "neutral": "",
      "languages": "Sprachen",
      "workingstudent": "Werkstudententätigkeit",
      "fulltime": "Vollzeit",
      "parttime": "Teilzeit",
      "job": "Festanstellung",
      "university": "Studium",
      "communityservice": "Zivildienst",
      "school": "Schule",
      "thesis": "Abschlussarbeit",
      "internship": "Praktikum",
      "website": "Webseite",
      "steptype": "Art",
      "title": "Bezeichnung",
      "degree": "Abschluss",
      "workingtime": "Arbeitszeitmodell",
      "workplace": "Unternehmen",
      "location": "Ort",
      "institution": "Einrichtung",
      "tasks": "Aufgaben",
      "technologies": "Technologien",
      "bachelorofscience": "Bachelor of Science",
      "masterofscience": "Master of Science",
      "highschooldiploma": "Abitur",
      "professionaleducation": "Berufsausbildung",
      "german": "🇩🇪 Deutsch",
      "english": "🇬🇧 Englisch",
      "french": "🇫🇷 Französisch",
      "polish": "🇵🇱 Polnisch",
      "native": "Muttersprache",
      "fluent": "Fließend",
      "businessfluent": "Verhandlungsicher",
      "basic": "Grundkenntnisse"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "de", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;