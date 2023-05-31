import React from "react";
import NavBar from "../../Components/Navbar/NavBar";
import Card from "../../Components/Card/Card";
import ahorcado from "../../Assets/img/ahorcado.png";
import memory from "../../Assets/img/memory.png";
import veterinary from "../../Assets/img/veterinaria.png";
import countries from "../../Assets/img/countries.jpg";
import booking from "../../Assets/img/booking.png";
import movies from "../../Assets/img/movies.png";
import gym from "../../Assets/img/gym.png";

const Proyects = () => {
    return (
        <div>
            <NavBar title="Proyects"></NavBar>
            <div className="container">
                <Card
                    img={gym}
                    title="Xsports"
                    description="E-commerce app for a fictitious gym, which has the possibility of being shown as an innovative business,
                    and at the same time the possibility of selling products. Includes: administration panel, authentication, combined filters,
                    product searches, sorting, user banning, email sending, payment gateway (MercadoPago), responsive design, etc."
                    link="https://grupo04-henry-pf.fly.dev/home"
                    link2="https://github.com/LMarinBorges/henry-pf"
                />
                <Card
                    img={countries}
                    title="Countries"
                    description="An application that was requested for the individual project of the Soy Henry bootcamp. 
                    It allows the user to view information about countries, including searches, combined filters, sorting, 
                    and also the creation of activities for each country. Technologies: React, Redux, Node, Express and Postgres SQL"
                    link="https://countries-eight-ruby.vercel.app/"
                    link2="https://github.com/tomiguagnini/countries"
                />
                <Card
                    img={veterinary}
                    title="Veterinary"
                    description="Personal fullstack proyect (CRUD), using react, talwind, node, and Mongodb"
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
            </div>
        </div>
    );
};

export default Proyects;
