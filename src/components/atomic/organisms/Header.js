import React from 'react';
import './Header.css';
import Heading from '../atoms/heading/Heading';
import Navigation from '../molecules/navigation/Navigation';

// Icons
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';


const Header = () => {
    return (
        <div className='header'>
            <div className='header_left'>
                <Heading
                    text='Agneat'
                    size='md'
                    family='Oswald'
                    color='black'
                />
            </div>

            <div className="header_middle">
                <Navigation />
            </div>

            <div className="header_right">
                <Button>Contact</Button>
            </div>

            <div className="header_right_mobile">
                <MenuIcon />
            </div>

        </div>
    )
}

export default Header





