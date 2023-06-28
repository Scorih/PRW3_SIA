import React from 'react'
import './style.scss'

const OtherEntitiesPage = () => {
    return <div className={'other_entities'}>
        <div className="text-and-image1"><img src={'./assets/images/pic20.png'} style={{width:100+"%"}} alt="pic20" />
            <div><h3>Прочие сущности - остальное заполнение, которое может выполнять разнообразные функции, 
                начиная от точки освещенности и заканчивая запуском списка самописных скриптов на glua. 
                Кроме того различают два типа сущностей: точечные и геометрические.</h3></div>
        </div>
        <div className='Block1'>
            <div className='text'>Для создания точечной сущности нам потребуется инструмент Entity Tool, далее мы наживаем правую кнопку мыши по нему на сетке программы и выбираем пункт Properties. Класс сущности изменяется сверху, в поле присутствует фильтр для удобного поиска необходимых точечных сущностей.</div>
            <div className='pic'><img src={'./assets/images/pic21.png'} width="152" height="189" alt="pic21" /></div>
        </div>
        <div className='Block2'>
            <div className='text'>Для создания геометрической сущности нам нужно будет перевести выбранную геометрию в сущность. Это делается нажатием правой кнопки мыши на выбранной геометрии и выбором пункта Tie to Entity.</div>
            <div className='pic'><img src={'./assets/images/pic22.png'} width="251" height="336" alt="pic22" /></div>
        </div>
        <div className='Block3'>
            <div className='text'>Изменение класса сущности происходит в пункте Properties. У каждого типа сущностей есть собственные варианты, но выбор происходит в том же окне. Расскажу об самых полезных точечных сущностях, так как геометрические используются в раздере “Оптимизация”. </div>
            <div className='pic'><img src={'./assets/images/pic23.png'} width="294" height="97" alt="pic23" /></div>
        </div>
        <div className='Block4'>
            <div className='pic'><img src={'./assets/images/pic24.png'} width="1352" height="575" alt="pic24" /></div>
        </div>
        <div className='BlockText'>
        <div className='text'>prop_door_rotating - одна из наиболее распространенных точечных сущностей, используется для создания дверей на петлях или осях. World Model определяет внешний вид сущности. Skin определяет разновидность внешнего вида, если она есть. Это можно посмотреть в окне Skins из Model Browser (он открывается при нажатии кнопки Browse на скриншоте выше).</div>
        </div>
        <div className='Block5'>
            <div className='pic'><img src={'./assets/images/pic25.png'} width="1383" height="589" alt="pic25" /></div>
        </div>
        <div className='BlockText'>
        <div className='text'>prop_static - наиболее простая точечная сущность для наполнения уровней. Она не просчитывает модели столкновения с игроком и имеет собственную коллизию (невидимые границы модели, в которые игрок зайти не может). Главные настройки имеют те же функции, что были описаны выше в prop_door_rotating.</div>
        </div>
        <div className='Block6'>
            <div className='pic'><img src={'./assets/images/pic26.png'} width="1279" height="391" alt="pic26" /></div>
        </div>
        <div className='BlockTextLast'>
        <div className='text'>prop_physics - еще одна сущность для наполнения уровня объектами. Она в отличии от prop_static уже просчитывает модель столкновения с игроком и другими объектами, а также модель поведения после этого. Большинство таких объектов можно сломать, после чего он рассыпется на прописанные внутри модели осколки. Главные настройки имеют те же функции, что были описаны выше в prop_door_rotating.</div>
        </div>
    </div>
}

export default OtherEntitiesPage