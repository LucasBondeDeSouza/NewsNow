import React from "react";
import { US, BR, ES } from 'country-flag-icons/react/3x2';

export default ({ darkMode, language, handleLanguageChange }) => {

    const chooseFlag = (language) => {
        if (language === 'pt') {
            return <BR style={{ width: '24px', height: 'auto' }} />
        } else if (language === 'en') {
            return <US style={{ width: '24px', height: 'auto' }} />
        } else if (language === 'es') {
            return <ES style={{ width: '24px', height: 'auto' }} />
        }
    }

    return (
        <header className={`px-3 py-2 border-bottom mb-3 sticky-top ${darkMode ? "bg-dark text-light" : "bg-white"}`}>
            <div className="container d-flex justify-content-between align-items-center">
                <div className="logo d-flex align-items-center gap-2">
                    <i className="bi bi-newspaper fs-2 m-0"></i>
                    <h5 className="d-none d-lg-inline m-0">NewsNow</h5>
                </div>

                {/*<div className="d-flex align-items-center gap-3">
                    <div className="form-check form-switch m-0">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleDarkMode} />
                    </div>
                </div>*/}

                <div className="d-flex align-items-center">
                    {chooseFlag(language)}
                    <select
                        className={`form-select-sm w-auto bg-transparent border-0 ms-2 ${darkMode ? 'text-white' : 'text-dark'}`}
                        value={language}
                        onChange={handleLanguageChange}
                    >
                        <option value="pt" className="text-dark">PT</option>
                        <option value="en" className="text-dark">EN</option>
                        <option value="es" className="text-dark">ES</option>
                    </select>
                </div>
            </div> 
        </header>
    );
};