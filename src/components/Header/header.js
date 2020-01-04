import React, { useState } from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import moon from '../../../static/media/moon.png';
import sun from '../../../static/media/sun.png';
import styles from './header.module.scss';

const Header = () => {
    const [icon, toggleIcon ] = useState(localStorage.theme === 'dark' ? sun : moon);

    return (
        <div className={styles['header-container']}>
            <ThemeToggler>
                {({ theme, toggleTheme }) => (                  
                <label>
                    <input
                        style={{display: 'none' }}
                        type="checkbox"
                        onChange={e => {
                            toggleTheme(e.target.checked ? 'dark' : 'light');
                            toggleIcon(e.target.checked ? sun : moon);
                        }}
                        checked={theme === 'dark'}
                    />
                    <img src={icon} width={30} height={30} />
                </label>
                )}
            </ThemeToggler>
      </div>
)};

export default Header;