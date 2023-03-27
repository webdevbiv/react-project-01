import React from 'react'
import s from './Header.module.scss'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

function Header() {
    return (
        <div className={`${s.gpt3__header} section__padding`} id='home'>
            <div className={`${s.gpt3__header_content}`}>
                <h1 className={`${s.gpt3__header} gradient__text`}>
                    Let’s Build Somethingamazing with GPT-3 OpenAI
                </h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <div className={`${s.gpt3__header_content__input}`}>
                    <input type='email' placeholder='Your Email Address' />
                    <button type='button'>Get Started</button>
                </div>
                <div className={`${s.gpt3__header_content__people}`}></div>
                <img src={people} alt='people' />
                <p>1,600 people requested access a visit in last 24 hours</p>
                <div className={`${s.gpt3__header_image}`}>
                    <img src={ai} alt='ai' />
                </div>
            </div>
        </div>
    )
}

export default Header