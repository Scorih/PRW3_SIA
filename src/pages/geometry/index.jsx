import React from 'react'
import './style.scss'

const GeometryPage = () => {
    return <div className={'geometry'}>
        <div className="text-and-image1"><img src={'./assets/images/pic14.png'} style={{width:100+"%"}} alt="pic14" />
            <div><h3>Геометрия - основа (каркас) уровня. Именно это обозначает границы, размеры и детали мира. На ее основе создается интерьер и остальное заполнение.</h3></div>
        </div>
        <div className='Block1'>
            <div className='text'>Для создания геометрии нам потребуется инструмент, который создает геометрию - Block Tool. Это отдельный раздел с собственными сущностями, о которых более подробно можно узнать в разделе “Оптимизация” и в дополнительных материалах “О руководстве”. На этой же странице я расскажу только о базовом представлении: примитивы, неровные поверхности. Любая из выбранных сущностей создается на основной сетке программы, остальное можно настраивать в дополнительных окнах, если они есть.</div>
            <div className='pic'><img src={'./assets/images/pic15.png'} width="114" height="366" alt="pic15" /></div>
        </div>
        <div className='Block2'>
            <div className='pic'><img src={'./assets/images/pic16.png'} width="1075" height="673" alt="pic16" /></div>
        </div>
        <div className='Block3'>
            <div className='pic'><img src={'./assets/images/pic17.png'} width="246" height="228" alt="pic17" /></div>
            <div className='text'>Сам процесс создания геометрии прост - это выбор размеров на сетках программы и последующее нажатие кнопки Create Object. С помощью меню справа снизу можно определять создаваемые примитивы.</div>
        </div>
        <div className='Block4'>
            <div className='text'>Создание неровных поверхностей происходит путем выбора седьмого инструмента (инструмента покраски) и перехода во вкладку Displacement. Здесь нас интересует кнопка Create. Нам предложат выбрать Power нашей неровности - это отразится на числе треугольников, которыми мы сможем манипулировать. Лучше оставить изначальное значение - 3, так как при более высоких есть вероятность ошибок.</div>
            <div className='pic'><img src={'./assets/images/pic18.png'} width="817" height="441" alt="pic18" /></div>
        </div>
        <div className='Block5'>
            <div className='pic'><img src={'./assets/images/pic19.png'} width="1145" height="650" alt="pic19" /></div>
        </div>
        <div className='Block6'>
        <div className='text'>Сразу же после создания можно приступать к созданию ландшафта. Для этого нам потребуются следующие пункты в меню: Paint Geomenry, Noise, Sew. В Paint Geomenry мы можем различными вариантами повышать высоту или понижать треугольников, которые определяются с помощью радиуса, дистанция же определяет силу этого изменения. Noise - это генерация случайных неровностей на поверхности. Sew - сшивание нескольких неровных поверхностей. Ошибок не будет, если сшивать подобные неровности: с той же силой, с подобной размерностью и т.п. </div>
        </div>


    </div>
}

export default GeometryPage