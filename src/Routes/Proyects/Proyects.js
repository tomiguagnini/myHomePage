import React from 'react';
import NavBar from '../../Components/Navbar/NavBar';
import Card from '../../Components/Card/Card';
import ahorcado from '../../Assets/img/ahorcado.png'
import memory from '../../Assets/img/memory.png'
import ppt from '../../Assets/img/ppt.png'

const Proyects = () => {
    return (
        <div>
            <NavBar title="Proyects"></NavBar>
            <div className="container">
                <Card 
                    img={ahorcado} 
                    title='Hanged Man'
                    description='asdasd'
                    >    
                </Card>
                <Card
                    img={memory}
                    title='Memory'
                    description='asdasd' 
                >

                </Card>
                <Card
                    img={ppt}
                    title='Piedra Papel Tijera'
                >

                </Card>

            </div>
        </div>
    );
}



export default Proyects;
