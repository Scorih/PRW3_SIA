import React from 'react'
import './style.scss'

const AboutPage = () => {
    return <div className={'about'}>
        <div className="text-and-image1"><img src={'./assets/images/pic32.png'} style={{width:100+"%"}} alt="pic32" />
        </div>
        <div className='blockOfInfo'>
            <div className='tableInfo'>
                    <div className='firstLineTableBF'>
                        <div className='firstGridTableInfo'>Для кого было сделано руководство?</div>
                        <div className='secondGridInfo'>
                        Для тех, кто хотел бы начать разрабатывать уровни Source игр с помощью Hammer SDK, но не знает, с чего ему нужно начать. Это руководство не является полноценным, поэтому ниже будут представлены ссылки на более детальные руководства от других людей.
                        </div>
                    </div>
                    <div className='firstLineTableBF'>
                        <div className='firstGridTableInfo'>Зачем было создано руководство?</div>
                        <div className='secondGridInfo'>
                        Это руководство сделано чтобы направить новичков на необходимые направления в Hammer SDK. Оно рассказывает о базовых принципах при создании уровней в этой программе, которые необходимо соблюдать. 
                        </div>
                    </div>
                    <div className='firstLineTableBF'>
                        <div className='firstGridTableInfo'>Где можно найти больше информации?</div>
                        <div className='secondGridInfo'>
                        Хорошие англоязычные руководства от TopHATTwaffle в видеоформате, самые детальные руководства обо всех особенностях Hammer SDK. Русскоязычные руководства делает канал Project-S, систематизированно и с учетом всех возможных ошибок. Ссылка на официальную Wiki Hammer SDK. Ссылка на русскоязычное руководство в Steam.
                        </div>
                    </div>
            </div>
        </div>
        
    </div>
}

export default AboutPage