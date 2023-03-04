
const Card = ({ title, imageSrc, description, btnText, onClick }) => {

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={imageSrc} alt="image" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button onClick={onClick} className="btn btn-primary">{btnText}</button>
                </div>
            </div>
        </div>
    )
}

export default Card;