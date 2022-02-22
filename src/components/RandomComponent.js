import { useGlobalContext } from "../context/context";

const RandomComponent = () => {
    const {
        submitRandom,
        setSubmitRandom } = useGlobalContext();
        
    const handleSubmitRandom = e => {
        e.preventDefault();
        setSubmitRandom(!submitRandom);
    }
    return (
        <>
                <form className="form-task" onSubmit={handleSubmitRandom}>
                    <div className="form-field">
                        <button id="randomButton" className="btn my-2">Random</button>
                    </div>
                </form>
        </>
    );
};

export default RandomComponent;
