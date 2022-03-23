import React from 'react';

function ImagePopup(props) {
    return (
        <div className={props.card ?
            'popup popup_type_image popup_is-opened'
            : 'popup popup_type_image'}>

            <figure className="popup__container-image">
                <button
                    type="button"
                    onClick={props.onClose}
                    className="popup__close-button button"
                ></button>
                <img
                    src={props.card?.link}
                    alt={props.card?.name}
                    className="popup__image"/>
                <figcaption>
                    <h2 className="popup__heading">{props.card?.name}</h2>
                </figcaption>
            </figure>

        </div>
    );
}

export default ImagePopup;