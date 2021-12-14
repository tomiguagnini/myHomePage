import React from 'react';
import NavBar from '../../Components/Navbar/NavBar';
import Button from '../../Components/Button/Button'


const Contact = () => {
    return (
        <div className="container">
            <NavBar title='Contact'></NavBar>
            <Button src="https://github.com/tomiguagnini" desc="Github"></Button>
            <Button src="https://tomyguagnini@gmail.com" desc="Mail"></Button>
            <Button src="https://www.linkedin.com/in/tomasguagnini/" desc="LinkedIn"></Button>

        </div>
    );
};





export default Contact;
