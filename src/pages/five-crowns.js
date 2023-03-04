import Layout from "../components/standard-layout"
import { useState } from "react";
import PlayerCreationCard from "../components/playerCard";
import ConditionalView from "../components/conditional-view";
import PlayerScoringCard from "../components/playerScoringCard";
import FinalScoreCard from "../components/finalScoreCard";

const createPlayer = (playerName) => ({
    name: playerName,
    scores: [],
})

const ADD_PLAYERS = 'add-players';
const ROUNDS = 'rounds';
const SCORES = 'scores';

const FiveCrowns = () => {

    const [playerData, setPlayerData] = useState([]);
    const [currentRound, setCurrentRound] = useState(3);
    const [typedName, setTypedName] = useState('');
    const [currentStage, setCurrentStage] = useState(ADD_PLAYERS);
    const [currentRoundScores, setCurrentRoundScores] = useState({});
    const [nextRoundReady, setNextRoundReady] = useState(false);

    const addPlayer = () => {
        if (!typedName)
            return;
        const player = createPlayer(typedName);
        setTypedName('');
        setCurrentRoundScores(old => ({...old, [typedName]: '' }));
        setPlayerData(oldData => [...oldData, player]);
    }

    const removePlayer = (playerName) => {
        setPlayerData(oldData => oldData.filter(player => player.name !== playerName));
        let newData = currentRoundScores;
        delete newData[playerName];
        setCurrentRoundScores(newData);
    }

    const modifyRoundScore = (playerName) => (score) => {
        setCurrentRoundScores(old => ({...old, [playerName]: score}));
        setNextRoundReady(Object.keys(currentRoundScores).every(key => currentRoundScores[key] !== ''));
    }

    const nextRound = () => {
        if (currentRound === 13) {
            setCurrentStage(SCORES);
        }
        setCurrentRound(current => current + 1);
        const newScores = {};
        const newPlayerData = playerData;
        Object.keys(currentRoundScores).forEach(key => {
            newScores[key] = '';
            // not efficient, but hey
            newPlayerData.forEach(player => {
                if (player.name === key)
                    player.scores.push(parseInt(currentRoundScores[key]));
            });
        });
        setCurrentRoundScores(newScores);
        setPlayerData(newPlayerData);
        setNextRoundReady(false);
    }

    const resetGame = () => {
        setPlayerData([]);
        setCurrentRound(3);
        setTypedName('');
        setCurrentStage(ADD_PLAYERS);
        setCurrentRoundScores({});
        setNextRoundReady(false);
    }

    return (
        <Layout>
            <div className="w-full flex flex-col gap-4 items-center">
                <ConditionalView show={currentStage === ADD_PLAYERS}>
                    <h1 className="text-2xl">Add Players</h1>
                    <div className="form-control">
                        <div className="input-group">
                            <input type="text" placeholder="Player Name" value={typedName} onChange={(e) => setTypedName(e.target.value)} className="input input-bordered" />
                            <button className="btn btn-square text-2xl" onClick={addPlayer}>+</button>
                        </div>
                    </div>
                    <ConditionalView show={playerData.length > 1}>
                        <button onClick={() => setCurrentStage(ROUNDS)} className="btn btn-primary">Start Game</button>
                    </ConditionalView>

                    {playerData.map(player => (
                        <PlayerCreationCard key={player.name} playerName={player.name} onClick={() => { removePlayer(player.name) }} />
                    ))}
                </ConditionalView>

                <ConditionalView show={currentStage === ROUNDS}>
                    <h1 className="text-2xl">Round {currentRound}</h1>
                    {playerData.map((player, index) => (
                        <PlayerScoringCard
                            key={`${player.name}-${index}`}
                            playerName={player.name}
                            scoreEntry={currentRoundScores[player.name]}
                            onChangeScoreEntry={modifyRoundScore(player.name)}
                            isDealer={(currentRound - 3) % playerData.length === index}
                        />
                    ))}
                    {/* <ConditionalView show={nextRoundReady}> */}
                        <button onClick={nextRound} className="btn btn-primary">{currentRound < 13 ? 'Next Round' : 'End Game'}</button>
                    {/* </ConditionalView> */}
                </ConditionalView>

                <ConditionalView show={currentStage === SCORES}>
                    <h1 className="text-2xl">Final Scores</h1>
                    {playerData.map(player => (
                        <FinalScoreCard
                            playerName={player.name}
                            finalScore={player.scores.reduce((total, current) => total + current, 0)}
                        />
                    ))}
                    <button onClick={resetGame} className="btn btn-primary">New Game</button>
                </ConditionalView>
            </div>
        </Layout>
    )
}

export default FiveCrowns;