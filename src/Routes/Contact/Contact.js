import React from 'react';
import NavBar from '../../Components/Navbar/NavBar';
import Button from '../../Components/Button/Button'
import git from '../../Assets/svg/mark-github.svg'

const Contact = () => {
    return (
        <div>
            <NavBar title='Contact'></NavBar>
            <Button src={git}icon="git" ></Button>
        </div>
    );
};





export default Contact;
