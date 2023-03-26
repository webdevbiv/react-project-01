import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import s from './Navbar.module.scss'
import logo from '../../assets/logo.svg'

const Menu = () => (
    <>
        <p><a href="#home">Home</a></p>
        <p><a href="#wgpt3">What is GPT3?</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Library</a></p>
    </>
)

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <div className={s.gpt3__navbar}>
            <div className={s.gpt3__navbar_links}>
                <div className={s.gpt3__navbar_links_logo}>
                    <img src={logo} alt='logo' />
                </div>
                <div className={s.gpt3__navbar_links_container}>
                    <Menu />
                </div>
            </div>
            <div className={s.gpt3__navbar_sign}>
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
            <div className={s.gpt3__navbar_menu}>
                {toggleMenu
                    ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className={`${s.gpt3__navbar_menu_container} ${s.scale_up_center}`} >
                        <div className={s.gpt3__navbar_menu_container_links}>
                            <Menu />
                            <div className={s.gpt3__navbar_menu_container_links_sign}>
                                <p>Sign in</p>
                                <button type="button">Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar