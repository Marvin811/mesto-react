import React from 'react';


function PopupWithForm(props) {
    return (
        <div className={props.isOpen ?
            `popup popup_type_${props.name} popup_is-opened`
            : `popup popup_type_${props.name}`}
        >
            <div className="popup__container">
                <button
                    className="popup__close-button button "
                    aria-label="Кнопка закрытия редактора формы"
                    type="button"
                    onClick={props.onClose}
                />
                <form className="popup__form popup__edit-profile"
                      name={`form_type_${props.name}`}
                      onSubmit={props.onSubmit}
                >
                    <h3 className="form__title">
                        {props.title}
                    </h3>
                    {props.children}
                    <button className="button popup__save-button" type="submit">{props.submit}</button>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;