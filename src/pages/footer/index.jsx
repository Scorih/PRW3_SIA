import React from "react";
import './style.scss'
import { Link } from 'react-router-dom'

export const FooterPage = () => {
    return <div className={"footer"}>
        <div className={'footer__main'}>
            <div className={'footer__head'}>
                Контакты
            </div>
            <div className={"contacts"}>
                <div className={'footer__contact_discord'}>
                Discord: seredes; SeReDeS#0859
                </div>
                <div className={'footer__contact_phone'}>
                Телефон: +7 (999) 999 99-99
                </div>
                <div className={'footer__contact_mail'}>
                E-mail: scorih.ivan@mail.ru
                </div>
            </div>
        </div>
        <div className={'footer__desc'}>
            <div className={'footer__first'}>
            Данное руководство создано исключительно для личного пользования
            </div>
            <div className={"fsecond"}>
                <div className={'footer__second_vk'}>
                <Link to={'https://vk.com/id209147074'}>ВКонтакте</Link>
                </div>
                <div className={'footer__second_tg'}>
                <Link to={'https://t.me/+uelvWab4p-o1MWNi'}>Телеграм</Link>
                </div>
                <div className={'footer__second_git'}>
                <Link to={'https://github.com/Scorih/PRW2_SIA'}>Github</Link> | @2023
                </div>
            </div>
        </div>
    </div>
}