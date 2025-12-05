import GameButton from '../../Button/GameButton';
import './GameUI.css';
import Socials from '../../Socials';


function GameUI() {
    return (
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