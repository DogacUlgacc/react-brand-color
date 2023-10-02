import { useState } from "react";
import Modal from "react-modal";
import { GrClose } from "react-icons/gr";

export default function Sidebar() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function toggleModal() {
        setModalIsOpen(!modalIsOpen);
    }

    return (
        <>
            <aside className="sidebar">
                <div className="logo">
                    <a>
                        Brand <b>Colors</b>
                    </a>
                </div>
                <div className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem odit non voluptates laborum odio! Dolore id
                    nam nostrum. Quia repellat commodi accusantium voluptatibus
                    labore neque assumenda earum harum odit amet!
                </div>
                <ul className="about">
                    <li>
                        <a onClick={toggleModal}>About BrandColors</a>
                    </li>
                </ul>
            </aside>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={toggleModal}
                className="modal"
            >
                <button className="modal-close-icon" onClick={toggleModal}>
                    <GrClose />
                </button>
                <h2>Brand Colors</h2>
                <form>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Recusandae aut sapiente expedita laboriosam odit.
                        Quo deleniti libero obcaecati nam ipsa?
                    </p>
                </form>
            </Modal>
        </>
    );
}
