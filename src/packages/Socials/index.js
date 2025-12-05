import React from 'react';
import SocialButton from '../Button/SocialButton';
import githubIcon from '../../assets/socialIcons/Github.svg';
import linkedinIcon from '../../assets/socialIcons/LinkedIN.svg';
import instagramIcon from '../../assets/socialIcons/Instagram.svg';
import youtubeIcon from '../../assets/socialIcons/Youtube.svg';
import resumeIcon from '../../assets/otherIcons/cv.svg';
import { ProfileCardInfo, RESUME_URL } from '../utils/constant';
import './Socials.css';
import { openLink } from '../utils/utils';

function Socials({ showResume = false }) {
    return (
        <div className="socials-container">
            {showResume && <SocialButton 
                icon={resumeIcon} 
                alt="Resume" 
                className="icon-only"
                onClick={() => openLink(RESUME_URL)}
            />}
            <SocialButton 
                icon={githubIcon} 
                alt="GitHub" 
                className="icon-only"
                onClick={() => openLink(ProfileCardInfo.github)}
            />
            <SocialButton 
                icon={linkedinIcon} 
                alt="LinkedIn" 
                className="icon-only"
                onClick={() => openLink(ProfileCardInfo.linkedIn)}
            />
            <SocialButton 
                icon={instagramIcon} 
                alt="Instagram" 
                className="icon-only"
                onClick={() => openLink(ProfileCardInfo.instagram)}
            />
            <SocialButton 
                icon={youtubeIcon} 
                alt="YouTube" 
                className="icon-only"
                onClick={() => openLink(ProfileCardInfo.youtube)}
            />
            
        </div>
    );
}

export default Socials;
