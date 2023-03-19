import React from 'react'
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri'
import s from './Navbar.module.scss'
import logo from '../../assets/logo.svg'
function Navbar() {
    return (
        <div className={s.gpt3__navbar}>
            <div className={s.gpt3__navbar_links}>
                <div className={s.gpt3__navbar_links_logo}>
                    <img src={logo} alt='logo' />
                </div>
                <div className={s.gpt3__navbar_links_container}>
                    <p><a href="#home">Home</a></p>
                    <p><a href="#wgpt3">What is GPT3?</a></p>
                    <p><a href="#possibility">Open AI</a></p>
                    <p><a href="#features">Case Studies</a></p>
                    <p><a href="#blog">Library</a></p>
                </div>
            </div>
        </div>
    )
}

export default Navbar