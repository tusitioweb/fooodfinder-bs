import React, {useState} from "react";
import "./home.css";

//QUOTES
import quotes from "../../utils/quotes.js";

//COMPONENTS
import NavBar from "../NavBar/NavBar.jsx"

export default function Home() {
    const ramdomQues = () => {
        return quotes[Math.floor(Math.random() * 4)]
    }

    const [value, setValue] = useState(quotes[Math.floor(Math.random() * 4)])
    /* const [secStyle, setSecStyle] = useState("block") */

    const changeValue = () => {
        setValue(ramdomQues)
    }

   /*  const onHover = () => {
        setSecStyle("none")
    } */

    return(
        <>
        <img id="icon" src="../../../public/images/ff-icon.png" alt="" />
            <NavBar />
           <div id="home">
           <h1 id="title">{value}</h1>
            <div id="container">
                    <div id="burger" className="animate__animated animate__fadeInDown" class="section" onClick={changeValue}>
                        <img src="../../../public/images/burger.png" alt="" />
                        <span>Burger</span>
                    </div>
                    <div id="pizza"  className="animate__animated animate__fadeInDown" class="section">
                        <img src="../../../public/images/pizza-slice.png" alt="" />
                        <span>Pizza</span>
                    </div>
                    <div id="parrilla"  className="animate__animated animate__fadeInDown" class="section">
                        <img src="../../../public/images/meat.png" alt="" />
                        <span>Parrilla</span>
                    </div>
                    <div id="empanada"  className="animate__animated animate__fadeInDown" class="section">
                        <img src="../../../public/images/empanada.png" alt="" />
                        <span>Empanada</span>
                    </div>
                    <div id="wine"  className="animate__animated animate__fadeInUp" class="section">
                        <img src="../../../public/images/wine.png" alt="" />
                        <span>Bodegon</span>
                    </div>
                    <div id="sushi"  className="animate__animated animate__fadeInUp" class="section">
                        <img src="../../../public/images/sushi.png" alt="" />
                        <span>Sushi</span>
                    </div>
                    <div id="bar"  className="animate__animated animate__fadeInUp" class="section">
                        <img src="../../../public/images/martini.png" alt="" />
                        <span>Bar</span>
                    </div>
                    <div id="dots" className="animate__animated animate__fadeInUp" class="section">
                        <img src="../../../public/images/more.png" alt="" />
                    </div>
                </div>
            <footer>@copyright SOS rights</footer>
           </div>
        </>
    )
}