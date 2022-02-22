const FavouriteList = (props) => {
    return (
        <>
            <ul className="favourite-list">
                {props.data.map((el) => (
                    <li key={el.id}>
                        {" "}
                        <FavouriteItem {...el} removeItem={props.removeItem} />
                    </li>
                ))}
            </ul>
        </>
    );
};

const FavouriteItem = ({ id, title, removeItem }) => {
    return (
        <article>
            <div className="favourite-info">
                <div className="favourite-activity">
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