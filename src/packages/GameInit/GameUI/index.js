import GameButton from '../../Button/GameButton';
import './GameUI.css';
import '../HowToPlay/howToPlay.css';
import Socials from '../../Socials';
import { useEffect, useState } from 'react';


function GameUI() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);
    return isLoading ? (<>
        <div className="how-to-play-root">
        <div className="how-to-play-box">
            <h1>Loading buttons... </h1>
        </div>
    </div>
    </>) : 
    (
    <>
        <div className="game-ui-container">
            <GameButton icon="up" className="game-button up" />
            <GameButton icon="down" className="game-button down" />
            <GameButton icon="left" className="game-button left" />
            <GameButton icon="right" className="game-button right" />
            <GameButton icon="action" className="game-button action" />
        </div>
        <Socials showResume={true} />
    </>
    );
}

export default GameUI;