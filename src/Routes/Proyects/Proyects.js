import React from 'react';
import NavBar from '../../Components/Navbar/NavBar';
import Card from '../../Components/Card/Card';
import ahorcado from '../../Assets/img/ahorcado.png'
import memory from '../../Assets/img/memory.png'
import veterinary from '../../Assets/img/veterinaria.png'
import calculator from '../../Assets/img/calculator.png'

const Proyects = () => {
    return (
        <div>
            <NavBar title="Proyects"></NavBar>
            <div className="container vh-100">
                <Card 
                    img={veterinary} 
                    title='Veterinary'
                    description='Personal proyect fullstack, using react, talwind, node, and Mongodb'
                    link="https://veterinaria-tom.netlify.app/"
                    link2="https://github.com/tomiguagnini/veterinaria"
                    />
                <Card
                    img={memory}
                    title='Memory'
                    description='Learning React'
                    link="https://sad-yalow-0a4567.netlify.app/"
                    link2="https://github.com/tomiguagnini/memory-game"
                />
                <Card
                    img={calculator}
                    title='Simple calculator'
                    description='Little app from college'
                    link="https://calculator-binary.herokuapp.com/"
                    link2="https://github.com/tomiguagnini/calculator_binary" 

                />
                <Card 
                    img={ahorcado} 
                    title='Hanged Man'
                    description='College backend proyect, using node, express'
                    link="https://hangedman-2-player.herokuapp.com/ahorcado.html"
                    link2="https://github.com/tomiguagnini/hangedman_two_players"
                    />    
            </div>
        </div>
    );
}



export default Proyects;
