import React from 'react';

import './app.scss';
import noImage from './no-image.jpg';

const App = () => {
    return (
        <main className="container">
            <div className="container__wrapper">
                <section className="container__articles articles">
                    <h1 className="articles__title">Статьи</h1>
                    <ul className="articles__list">
                        <li className="articles__item">
                            <div className="article">
                                <div className="article__image">
                                    <img src={noImage} alt="Изображение отсутствует"/>
                                </div>
                                <h2 className="article__title">Lorem ipsum</h2>
                                <time className="article__time">17.03.2018</time>
                                <p className="article__text">
                                    Конструкцию из композитного материала изготавливают непосредствено на модели без какой-либо
                                </p>
                            </div>
                        </li>
                        <li className="articles__item">
                            <div className="article">
                                <div className="article__image">
                                    <img src={noImage} alt="Изображение отсутствует"/>
                                </div>
                                <h2 className="article__title">Lorem ipsum</h2>
                                <time className="article__time">17.03.2018</time>
                                <p className="article__text">
                                    Конструкцию из композитного материала изготавливают непосредствено на модели без какой-либо
                                </p>
                            </div>
                        </li>
                        <li className="articles__item">
                            <div className="article">
                                <div className="article__image">
                                    <img src={noImage} alt="Изображение отсутствует"/>
                                </div>
                                <h2 className="article__title">Lorem ipsum</h2>
                                <time className="article__time">17.03.2018</time>
                                <p className="article__text">
                                    Конструкцию из композитного материала изготавливают непосредствено на модели без какой-либо
                                </p>
                            </div>
                        </li>
                        <li className="articles__item">
                            <div className="article">
                                <div className="article__image">
                                    <img src={noImage} alt="Изображение отсутствует"/>
                                </div>
                                <h2 className="article__title">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</h2>
                                <time className="article__time">17.03.2018</time>
                                <p className="article__text">
                                    Конструкцию из композитного материала изготавливают непосредствено на модели без какой-либо
                                </p>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        </main>
    )
};

export default App;
