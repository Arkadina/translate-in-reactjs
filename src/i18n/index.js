import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import PTBR from "./locales/pt/pt-br.json";
import ENUS from "./locales/en/en-us.json";

const resources = {
    "pt-BR": PTBR,
    "en-US": ENUS,
};

i18n.use(initReactI18next).init({
    resources, // idiomas a serem traduzidas
    lng: navigator.language, // define o idioma do navegador como padrão
    interpolation: {
        escapeValue: false,
    }, // segurança
});

export default i18n;
