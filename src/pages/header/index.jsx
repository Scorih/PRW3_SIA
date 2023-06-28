import React from "react";
import './style.scss'
import { Link } from 'react-router-dom'
import classNames from "classnames";

export const HeaderPage = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    return <div className={"header"}>
        <div className={'header__logo'}>
            <img src={'/assets/logo.svg'} alt="logo" />
        </div>
        <div className={'header__menu'}>
            <div><Link to={'/home_page'}>Главная</Link></div>
            <div><Link to={'/light'}>Свет</Link></div>
            <div><Link to={'/geometry'}>Геометрия</Link></div>
            <div><Link to={'/other_entities'}>Прочие сущности</Link></div>
            <div><Link to={'/optimization'}>Оптимизация</Link></div>
            <div><Link to={'/about_us'}>О руководстве</Link></div>
        </div>
            <div className="headermobile__menu">
                <div className={'headermobile__logo'}>
                    <img src={'/assets/logo.svg'} alt="logo" />
                </div>
                <div onClick={() => setIsOpen(!isOpen)}>
            <img src={'/assets/menu.svg'} alt="burger"/>
          </div>
        </div>
        <div
          className={classNames('headermobile__burger', {
            'headermobile__burger_open': isOpen,
          })}
        >
          {isOpen && (
            <>
                <div><Link to={'/home_page'}>Главная</Link></div>
                <div><Link to={'/light'}>Свет</Link></div>
                <div><Link to={'/geometry'}>Геометрия</Link></div>
                <div><Link to={'/other_entities'}>Прочие сущности</Link></div>
                <div><Link to={'/optimization'}>Оптимизация</Link></div>
                <div><Link to={'/about_us'}>О руководстве</Link></div>
            </>
          )}
        </div>
    </div>
    
    

}