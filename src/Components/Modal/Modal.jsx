import "./Modal.scss"

const ModalState = ({modal, setmodal}) => {
    return (
        <>
        <div className={`modal ${modal ? "modal--open" :"" }`}
        onClick={(evt) => {
            if (evt.target.matches(".modal")) {
                setmodal  (false)
            }
        }}
        >

            <div className="modal__second">
                <h1> Hello world</h1>
                <button onClick={() => [
                    setmodal  (false)
                ]}>X</button>
            </div>
        </div> 
        </>
    )
}

export default ModalState