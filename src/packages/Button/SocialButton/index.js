import UIButton from '../UIButton';
import './SocialButton.css';

function SocialButton({ icon, alt = 'Social Icon', iconSize = 24, children, className = '', ...props }) {
    return (
        <UIButton className={`social-button ${className}`} {...props}>
            {icon && (
                <img 
                    src={icon} 
                    alt={alt} 
                    className="social-button-icon"
                    style={{ width: iconSize, height: iconSize }}
                />
            )}
            {children && <span className="social-button-text">{children}</span>}
        </UIButton>
    );
}

export default SocialButton;
