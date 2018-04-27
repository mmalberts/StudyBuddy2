import React from 'react';
import Navbar from './Navbar';
import About from './About';

export default class SetPage extends React.Component{

    render() {
        return(
            <div className="background example-page">
	            <Navbar firstName = {localStorage.getItem('user')}/>
                <About />
            </div>
        )
    }
};