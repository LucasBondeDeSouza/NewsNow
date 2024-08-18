import React from "react";

export default () => {
    return (
        <header>
            <div class="px-3 py-2 border-bottom mb-3">
                <div class="container d-flex justify-content-between align-items-center">
                    <div className="logo d-flex align-items-center gap-2">
                        <i className="bi bi-newspaper fs-2 m-0"></i>
                        <h5 className="m-0">NewsNow</h5>
                    </div>

                    <div className="temperature d-flex gap-3">
                        <p className="m-0">São Paulo - BR</p>
                        <p className="m-0">31°C</p>
                    </div>
                </div>
            </div>
        </header>
    )
}