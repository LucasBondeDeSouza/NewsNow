import React from "react";

export default ({ toggleDarkMode, darkMode }) => {

    return (
        <header className={`px-3 py-2 border-bottom mb-3 sticky-top ${darkMode ? "bg-dark text-light" : "bg-white"}`}>
            <div className="container d-flex justify-content-between align-items-center">
                <div className="logo d-flex align-items-center gap-2">
                    <i className="bi bi-newspaper fs-2 m-0"></i>
                    <h5 className="d-none d-lg-inline m-0">NewsNow</h5>
                </div>

                <div className="d-flex align-items-center gap-3">
                    <div className="form-check form-switch m-0">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleDarkMode} />
                    </div>
                </div>
            </div>
        </header>
    );
};