import React from "react";
import bg1 from "./../Aset/bg.jpg";
import bg2 from "./../Aset/bg2.png";
import bg3 from "./../Aset/bg3.jpg";

const Heroku = () => {
    const style = {
        
    }

    return (
        <div style={style}>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={bg1} class="d-block w-100" alt="..." />
                        <p className="Pa">Loremku</p>
                    </div>
                    <div class="carousel-item">
                        <img src={bg2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={bg3} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Heroku;