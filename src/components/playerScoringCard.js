const PlayerScoringCard = ({ playerName, scoreEntry, onChangeScoreEntry, isDealer }) => {

    return (
        <div className={`card w-96 bg-base-100 shadow-xl ${isDealer ? 'bg-primary-focus text-primary-content' : ''}`}>
            <div className="card-body">
                <h2 className="card-title">{playerName}</h2>
                <input type="number" placeholder="Enter Score" className="input text-base-content input-bordered w-full max-w-xs" value={scoreEntry} onChange={e => onChangeScoreEntry(e.target.value)} />
            </div>
        </div>
    )
}

export default PlayerScoringCard;