import React from "react";

const FavouriteList = (props) => {
    return (
        <>
            <ul className="user-list">
                {props.data.map((favourite) => (
                    <li key={favourite.id}>
                        {" "}
                        <FavouriteItem {...favourite} removeItem={props.removeItem} />
                    </li>
                ))}
            </ul>
        </>
    );
};

const FavouriteItem = ({ id, title, description, removeItem }) => {
    return (
        <article>
            <div className="person-info">
                <div className="person-action">
                    <h6>{title}</h6>
                    <button className="btn" onClick={() => removeItem(id)}>
                        {"Remove"}
                    </button>
                </div>
            </div>
        </article>
    );
};

export default FavouriteList;