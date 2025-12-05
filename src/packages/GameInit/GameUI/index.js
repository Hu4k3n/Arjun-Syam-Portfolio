import React from 'react';
import GameButton from '../../Button/GameButton';
import './GameUI.css';
import Socials from '../../Socials';
import { onResume } from '../../utils/utils';
import UIButton from '../../Button/UIButton';


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
        <UIButton onClick={onResume}>See my Resume</UIButton>
        <Socials />
    </>
    );
}

export default GameUI;