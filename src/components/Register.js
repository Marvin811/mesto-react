import React from "react";
import {Link} from "react-router-dom";

function Register(props) {
    return (
        <section className='entrance'>
            <div className='entrance__container'>
                <h3 className='entrance__title'>Регистрация</h3>
                <form className='entrance__form'>
                    <input
                        className='entrance__input'
                        required
                        name='email'
                        type='text'
                        placeholder="Email"/>
                    <span className="entrance__error-visible" id="name-error"></span>
                    <input
                        className='entrance__input'
                        required
                        name='password'
                        type='text'
                        placeholder="Пароль"/>
                    <span className="entrance__error-visible" id="name-error"></span>
                    <button className="button entrance__save-button" type="submit">Зарегистрироваться</button>
                    <Link to='sign-in' className='entrance__link'>Уже зарегистрированы? Войти</Link>
                </form>
            </div>
        </section>
    )
}

export default Register