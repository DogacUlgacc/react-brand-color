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
                    Brand colors are an essential part of a brand's identity and
                    help in its recognition, recall, and differentiation. They
                    typically refer to specific colors carefully chosen for use
                    in a brand's logo and other marketing materials. These
                    colors are selected with great care to reflect the character
                    and values of the brand.
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
                        This application was prepared by Dogac Ulgac using
                        React.
                    </p>
                </form>
            </Modal>
        </>
    );
}
