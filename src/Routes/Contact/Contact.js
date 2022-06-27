import React from 'react';
import NavBar from '../../Components/Navbar/NavBar';
import Button from '../../Components/Button/Button';
import github from '../../Assets/icons/github.png';
import email from '../../Assets/icons/email.png';
import linkedin from '../../Assets/icons/linkedin.png';
import whatsapp from '../../Assets/icons/whatsapp.png';


const Contact = () => {
    return (
        <div>
            <NavBar title='Contact'></NavBar>
            <div className=" d-flex flex-column max-w-600 m-auto " >
                <Button src="https://github.com/tomiguagnini" desc="Github" icon={github}></Button>
                <Button src="https://tomyguagnini@gmail.com" desc="Email" icon={email}></Button>
                <Button src="https://www.linkedin.com/in/tomasguagnini/" desc="LinkedIn" icon={linkedin}></Button>
                <Button src="https://api.whatsapp.com/send?phone=5492355641213" desc="Whatsapp" icon={whatsapp}></Button>
            </div>

        </div>
    );
};





export default Contact;
