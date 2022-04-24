import "./confirmation-modal.css"

const ConfirmationModal = (props) => {

    const onDelete = () => {
        props.deleteNote();
    }

    return (
        <div className={`Modal ${props.showModal ? '' : 'Modal_hidden'}`}>
            <div className="Confirmation">
                <div className="Confirmation__title">Вы уверены?</div>
                <button className="Confirmation__btn" onClick={() => props.setShowModal(false)}>Нет</button>
                <button className="Confirmation__btn" onClick={onDelete}>Да</button>
            </div>
        </div>
    );
}

export default ConfirmationModal;