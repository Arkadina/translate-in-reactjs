import { useTranslation } from "react-i18next";
import "/node_modules/flag-icons/css/flag-icons.min.css";

import "./App.css";

function App() {
    const { t, i18n } = useTranslation(); // pega a instancia 118n

    console.log(i18n.language); // idioma atual

    function handleChangeLanguage(lng) {
        i18n.changeLanguage(lng);
    }

    return (
        <div className="App">
            <div className="idiom-text">
                <p>{t("Edit src/App.js and save to reload.")}</p>
                <p> {t("Learn React")}</p>
            </div>
            <div className="idiom-change-button">
                <span
                    class="fi fi-br"
                    onClick={() => handleChangeLanguage("pt-BR")}
                ></span>
                <span
                    class="fi fi-us"
                    onClick={() => handleChangeLanguage("en-US")}
                ></span>
            </div>
        </div>
    );
}

export default App;
