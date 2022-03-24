import React from "react";
import PopupWithForm from "./PopupWithForm";

function DeleteCardPopup (props) {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onClose();
        props.onDeleteCard();
    }
    return (
        <PopupWithForm
        name="delete-button"
        title='Вы уверены?'
        sumbit='Да'
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}
    />
    )
}

export default DeleteCardPopup;