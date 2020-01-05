import React, { useState } from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import moon from '../../../static/media/moon.png';
import sun from '../../../static/media/sun.png';
import logo_dark from '../../../static/media/logo_dark.png';
import logo_light from '../../../static/media/logo_light.png';
import styles from './header.module.scss';

const Header = () => {
    const [icon, toggleIcon ] = useState(localStorage.theme === 'dark' ? sun : moon);
    const [logo, toggleLogo ] = useState(localStorage.theme === 'dark' ? logo_light : logo_dark);

    return (
        <div className={styles['header-container']}>
            <img src={logo} alt='Logo' className={styles['logo']} width={70}/>
            <div className={styles['border']}></div>
            <ThemeToggler>
                {({ theme, toggleTheme }) => (                  
                <label>
                    <input
                        style={{display: 'none' }}
                        type="checkbox"
                        onChange={e => {
                            toggleTheme(e.target.checked ? 'dark' : 'light');
                            toggleIcon(e.target.checked ? sun : moon);
                            toggleLogo(e.target.checked ? logo_light : logo_dark);
                        }}
                        checked={theme === 'dark'}
                    /> 
                    <img src={icon} width={30} height={30} className={styles['theme-toggler']} />
                </label>
                )}
            </ThemeToggler>
      </div>
)};

export default Header;