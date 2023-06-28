import React from 'react'
import './style.scss'

const HomePage = () => {
    return <div className={'home_page'}>
        <div className="text-and-image1"><img src={'./assets/images/pic1.png'} style={{width:100+"%"}} alt="pic1" />
            <div><h3>Mapping (Проработка дизайна уровней) - дисциплина в разработке компьютерных игр, 
                которая включает в себя создание уровней для игр. Для этого используют внутренние редакторы уровней на собственном движке. </h3>
            </div>
        </div>
        <div className='blockOfPopularity'>
            <div className="headOfBlock">Популярность среды разработки уровней</div>
            <div className="poptext">Source SDK - это необычайно гибкий,
             модульный и распрастранненый движок, который позволяет достаточно быстро создать собственный уровень.
              Долгие годы жизни движка и большое число его любителей создали огромную базу в виде подробной документации.</div>
            <div className="popimg"><img src={'./assets/images/charts.png'} style={{width:100+"%"}} alt="charts" /></div>
        </div>
        <div>
        <div className='headOfBlock'>
        Список игр на движке Source
        </div>
        <div className='blockOfGames'>
            <div className='table'>
                <div className='firstLineTable'>
                    <div className='firstMedGrid'>Название игры</div>
                    <div className='medGrid'>Half-Life 2</div>
                    <div className='medGrid'>Vampire: The Masquerade — Bloodlines</div>
                    <div className='medGrid'>Day of Defeat: Source</div>
                    <div className='medGrid'>Dark Messiah of Might and Magic</div>
                    <div className='medGrid'>Garry’s Mod</div>
                    <div className='medGrid'>Portal</div>
                    <div className='medGrid'>Portal 2</div>
                    <div className='medGrid'>Team Fortress 2</div>
                    <div className='medGrid'>Left 4 Dead 2</div>
                    <div className='medGrid'>Alien Swarm</div>
                    <div className='medGrid'>No More Room in Hell</div>
                    <div className='medGrid'>Counter-Strike: Global Offensive</div>
                    <div className='medGrid'>Dota 2</div>
                    <div className='medGrid'>The Stanley Parable</div>
                    <div className='medGrid'>Titanfall</div>
                    <div className='medGrid'>Insurgency</div>
                    <div className='medGrid'>Titanfall 2</div>
                    <div className='medGrid'>Apex Legends</div>
                </div>
                <div className='secondLineTable'>
                    <div className='firstSmallGrid'>Год выхода игры</div>
                    <div className='smallGrid'>2004</div>
                    <div className='smallGrid'>2004</div>
                    <div className='smallGrid'>2005</div>
                    <div className='smallGrid'>2006</div>
                    <div className='smallGrid'>2006</div>
                    <div className='smallGrid'>2007</div>
                    <div className='smallGrid'>2011</div>
                    <div className='smallGrid'>2007</div>
                    <div className='smallGrid'>2009</div>
                    <div className='smallGrid'>2010</div>
                    <div className='smallGrid'>2011</div>
                    <div className='smallGrid'>2012</div>
                    <div className='smallGrid'>2013</div>
                    <div className='smallGrid'>2013</div>
                    <div className='smallGrid'>2014</div>
                    <div className='smallGrid'>2014</div>
                    <div className='smallGrid'>2016</div>
                    <div className='smallGrid'>2019</div>
                </div>
                <div className='thirdLineTable'>
                    <div className='firstBigGrid'>Краткое описание игры</div>
                    <div className='bigGrid'>Компьютерная игра, научно-фантастический шутер от первого лица, сиквел Half-Life, вторая игра серии Half-Life, разработанный компанией Valve.</div>
                    <div className='bigGrid'>Компьютерная игра в жанре Action/RPG, разработанная компанией Troika Games и выпущенная компанией Activision.</div>
                    <div className='bigGrid'>Обновлённая версия компьютерной игры Day of Defeat, созданная на движке Source.</div>
                    <div className='bigGrid'>Игровой процесс представляет собой экшн от первого лица c элементами RPG — игрок может развивать различные способности, такие, как ближний бой, стрельба из лука, скрытность, магические заклинания.</div>
                    <div className='bigGrid'>Компьютерная игра, физическая «песочница», которая позволяет игроку манипулировать объектами и экспериментировать с физикой, реализм которой обеспечивается движком Source.</div>
                    <div className='bigGrid'>Компьютерная игра в жанре головоломки от первого лица, разработанная американской компанией Valve Corporation и выпущенная 10 октября 2007 года на платформах Windows и Xbox 360 в составе сборника The Orange Box.</div>
                    <div className='bigGrid'>Компьютерная игра в жанре головоломки от первого лица, продолжение игры Portal, разработанная компанией Valve Corporation.</div>
                    <div className='bigGrid'>Компьютерная игра в жанре многопользовательского шутера от первого лица, разработанная и впервые изданная компанией Valve Corporation в 2007 году в составе сборника The Orange Box для Windows и Xbox 360.</div>
                    <div className='bigGrid'>Компьютерная игра в жанре кооперативного шутера от первого лица с элементами survival horror, разработанная и изданная американской компанией Valve Corporation.</div>
                    <div className='bigGrid'>Компьютерная игра в жанре мультинаправленного шутера, разработанная и выпущенная компанией Valve для Windows.</div>
                    <div className='bigGrid'>Компьютерная игра в жанре survival horror, разработанная на движке Source, является самостоятельной модификацией для игры Half-Life 2.</div>
                    <div className='bigGrid'>Многопользовательская компьютерная игра, разработанная компаниями Valve и Hidden Path Entertainment.</div>
                    <div className='bigGrid'>Многопользовательская командная компьютерная игра в жанре MOBA, разработанная и изданная корпорацией Valve. Игра является продолжением DotA — пользовательской карты-модификации для игры Warcraft III: Reign of Chaos.</div>
                    <div className='bigGrid'>Компьютерная игра, принадлежащая к жанрам визуальный роман и interactive fiction.</div>
                    <div className='bigGrid'>Многопользовательский сетевой научно-фантастический шутер от первого лица с элементами симулятора меха, разработанный американской компанией Respawn Entertainment.</div>
                    <div className='bigGrid'>Многопользовательский тактический шутер от первого лица, разработанный и изданный американской компанией New World Interactive. Является продолжением модификации Insurgency: Modern Infantry Combat, основанной на движке Source и игре Half-Life 2.</div>
                    <div className='bigGrid'>Компьютерная игра в жанре шутера от первого лица с элементами симулятора меха, разработанная компанией Respawn Entertainment и изданная Electronic Arts.</div>
                    <div className='bigGrid'>Компьютерная игра в жанре многопользовательского геройского шутера от первого лица и королевской битвы, разработанная американской студией Respawn Entertainment и выпущенная компанией Electronic Arts.</div>
                </div>
            </div>
        </div>
        </div>
        <div className='blockOfGallery'>
            <div className='headOfBlock'>
            Галлерея
            </div>
            <div className='gallery'>
                <div className='img'><img src={'./assets/images/pic2.png'} alt="charts" width="1207" height="674" /></div>
                <div className='img'><img src={'./assets/images/pic3.png'} alt="charts" width="1207" height="674" /></div>
                <div className='img'><img src={'./assets/images/pic4.png'} alt="charts" width="1207" height="674" /></div>
            </div>
        </div>
        <div className='headOfBlock'>
        Преимущества и недостатки движка Source
        </div>
        <div className='blockOfBF'>
            <div className='tableBF'>
                    <div className='firstLineTableBF'>
                        <div className='firstGridTableBF'>Преимущества</div>
                        <div className='firstGridBF'><ul>
                            <li>Доступность и интеграция со Steam.</li>
                            <li>В Source есть все, начиная от редактора карт и заканчивая редактором лицевой анимации.</li>
                            <li>Огромное количество документации.</li>
                            <li>Простая установка плагинов и расширений.</li></ul>
                        </div>
                    </div>
                    <div className='secondLineTableBF'>
                        <div className='firstGridTableBF'>Недостатки</div>
                        <div className='secondGridBF'><ul>
                            <li>Сильно устаревший движок (2004 год).</li>
                            <li>Для расширения функций потребуются модифицированные компиляторы.</li>
                            <li>Огромное количество документации.</li>
                            <li>Карты созданные для некоторых игр могут быть не совместимы, хотя общий принцип работы всех редакторов карт схожий.</li></ul>
                        </div>
                    </div>
            </div>
        </div>
    </div>
}

export default HomePage