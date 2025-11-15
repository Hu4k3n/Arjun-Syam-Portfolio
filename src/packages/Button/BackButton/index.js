import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.css';
import UIButton from '../UIButton';
import { Buttons } from '../../utils/constant';


const BackButton = (props) => {
    const navigate = useNavigate();
    const [musicOn, setMusicOn] = React.useState(!!props.bgAudioObject);

    const handleBack = () => {
        if (musicOn) {
            props.onPause && props.onPause();
        }
        navigate('/main');
    };

    const onMusic = () => {
        if (musicOn) {
            props.onPause && props.onPause();
        } else {
            props.onPlay && props.onPlay();
        }
        setMusicOn(!musicOn);
    };

    React.useEffect(() => {
        setMusicOn(!!props.bgAudioObject);
    }, [props.bgAudioObject]);

    return (
        <div className="back-button-row">
            <UIButton className="back-button" onClick={handleBack}>{Buttons.back}</UIButton>
            <UIButton className="music-button" onClick={onMusic}>{musicOn ? Buttons.musicOn : Buttons.musicOff}</UIButton>
        </div>
    );
};


export default BackButton;