import React from "react";
import "./ModalRef.scss"

const ModalRef = React.forwardRef((_, ref) => {

    return (
        <>
        <div className="modal" 
        ref={ref} 
         onClick={(evt) => {
            if (evt.target.matches(".modal")) {
                ref.current.classList.remove("modal--open")
            }
        }}
        >
            <div className="modal__inner" >
                <h1>hello modal</h1>
                <input type="text" placeholder="hh"/>
                <button onClick={() => {
                    ref.current.classList.remove("modal--open")
                }}>X</button>
            </div>
        </div>
        </>
    )
})

export default ModalRef;