import React from 'react';
import NavBar from '../../Components/Navbar/NavBar';
import Card from '../../Components/Card/Card';
import ahorcado from '../../Assets/img/ahorcado.png'
import memory from '../../Assets/img/memory.png'
import ppt from '../../Assets/img/ppt.png'
import calculator from '../../Assets/img/calculator.png'

const Proyects = () => {
    return (
        <div>
            <NavBar title="Proyects"></NavBar>
            <div className="container">
                <Card 
                    img={ahorcado} 
                    title='Hanged Man'
                    description='Github link'
                    link="https://hangedman-2-player.herokuapp.com/ahorcado.html"
                    link2="https://github.com/tomiguagnini/hangedman_two_players"
                    >    
                </Card>
                <Card
                    img={memory}
                    title='Memory'
                    description='Github link'
                    link="https://sad-yalow-0a4567.netlify.app/"
                    link2="https://github.com/tomiguagnini/memory-game"
                >

                </Card>
                <Card
                    img={calculator}
                    title='Simple calculator'
                    description='Github link'
                    link="https://calculator-binary.herokuapp.com/"
                    link2="https://github.com/tomiguagnini/calculator_binary" 

                >

                </Card>

            </div>
        </div>
    );
}



export default Proyects;
