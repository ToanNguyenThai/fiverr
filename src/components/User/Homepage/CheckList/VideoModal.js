import React from 'react'
import style from "./video.module.css";
import Modal from 'react-modal'
export default function VideoModal(props) {
    const modalStyle = {
        overlay: {
            zIndex: 999999999999,

        }
    }

    return (
        <Modal style={modalStyle} className={`${style.myModal}`} isOpen={props.modalIsOpen} ariaHideApp={false}>
            <video
                style={{
                    "maxHeight": "100%",
                    "maxWidth": "100%",
                    objectFit: "cover"
                }}
                loop autoPlay muted controls

            >
                <source
                    src={props.src}
                    type="video/webm"
                />


            </video>
            <div onClick={() => props.modalIsClose(false)} className={`${style.exit}`}> X</div>
        </Modal>
    )
}
