import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.css';
import UIButton from '../UIButton';
import { Buttons } from '../../utils/constant';
import IconButton from '../IconButton';
import musicOnIcon from '../../../assets/otherIcons/musicOn.svg';
import musicOffIcon from '../../../assets/otherIcons/musicOff.svg';
import backIcon from '../../../assets/otherIcons/back.svg';


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
            <IconButton icon={backIcon} alt="Back" className="icon-only back-button" onClick={handleBack} />
            <IconButton 
                icon={musicOn ? musicOnIcon : musicOffIcon} 
                alt={musicOn ? Buttons.musicOn : Buttons.musicOff} 
                className="icon-only music-button" 
                onClick={onMusic} 
            />
        </div>
    );
};


export default BackButton;