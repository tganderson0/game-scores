const PlayerCreationCard = ({ playerName, onClick }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="flex justify-between">
                    <div className="text-xl font-bold">
                        {playerName}
                    </div>
                    <button onClick={onClick} className="btn btn-square btn-error btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PlayerCreationCard;