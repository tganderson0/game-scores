const FinalScoreCard = ({ playerName, finalScore }) => {

    return (
        <div className='card w-96 bg-base-100 shadow-xl'>
            <div className="card-body">
                <h2 className="card-title">{playerName}</h2>
                <p className="text-2xl">{finalScore}</p>
            </div>
        </div>
    )
}

export default FinalScoreCard;