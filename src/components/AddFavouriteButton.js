import { useState, useRef } from 'react'
import { useGlobalContext } from "../context/context";
import { AiFillHeart } from "react-icons/ai";
import { Overlay, Tooltip } from 'react-bootstrap';

function AddFavourite() {

    const {
        dataActivity,
        favourite,
        setFavourite } = useGlobalContext();

    const [show, setShow] = useState(false);
    const target = useRef(null);
    const alertTooltip = () => {
        setShow(true);
        setTimeout(() => setShow(false), 2000)
    }
    return (
        <>
            <button className="btn btn-outline-danger" ref={target} onClick={() => {
                favourite.some(el => el.id === dataActivity.key) ? alertTooltip() :
                    setFavourite([...favourite, { id: dataActivity.key, title: `${dataActivity.activity}` }]);
            }}> <AiFillHeart /> Add Favourite</button>
            <Overlay target={target.current} show={show} placement="right">
                {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                        Already on list
                    </Tooltip>
                )}
            </Overlay>
        </>
    );
}

export default AddFavourite;