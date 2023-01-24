import React from "react";
import NavBar from "../../Components/Navbar/NavBar";
import Card from "../../Components/Card/Card";
import ahorcado from "../../Assets/img/ahorcado.png";
import memory from "../../Assets/img/memory.png";
import veterinary from "../../Assets/img/veterinaria.png";
import calculator from "../../Assets/img/calculator.png";
import booking from "../../Assets/img/booking desktop.png";
import movies from "../../Assets/img/movies.png";

const Proyects = () => {
    return (
        <div>
            <NavBar title="Proyects"></NavBar>
            <div className="container vh-100">
                <Card
                    img={booking}
                    title="Booking system (Demo)"
                    description="Freelance proyect fullstack, using react, node, and Mongodb"
                    link="https://reservas-front.vercel.app/"
                    link2=""
                />
                <Card
                    img={veterinary}
                    title="Veterinary"
                    description="Personal proyect fullstack, using react, talwind, node, and Mongodb"
                    link="https://veterinaria-tom.netlify.app/"
                    link2="https://github.com/tomiguagnini/veterinaria"
                />
                <Card
                    img={memory}
                    title="Memory"
                    description="Learning React"
                    link="https://sad-yalow-0a4567.netlify.app/"
                    link2="https://github.com/tomiguagnini/memory-game"
                />
                <Card
                    img={ahorcado}
                    title="Hanged Man Multiplayer"
                    description="College backend proyect, using node, express"
                    link="https://hanged-man.onrender.com/ahorcado.html"
                    link2="https://github.com/tomiguagnini/hangedman_two_players"
                />
                <Card
                    img={movies}
                    title="Movies"
                    description="Netflix clone single page, 
                    learning css and data fetching"
                    link="https://movies-tomigua.netlify.app/"
                    link2="https://github.com/tomiguagnini/netflix"
                />
                <Card
                    img={calculator}
                    title="Simple calculator"
                    description="Little app from college"
                    link="https://calculator-binary.herokuapp.com/"
                    link2="https://github.com/tomiguagnini/calculator_binary"
                />
            </div>
        </div>
    );
};

export default Proyects;
