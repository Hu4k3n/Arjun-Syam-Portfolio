import UIButton from '../UIButton';
import './IconButton.css';

function IconButton({ icon, alt = 'Icon', iconSize = 24, children, className = '', ...props }) {
    return (
        <UIButton className={`icon-button ${className}`} {...props}>
            {icon && (
                <img 
                    src={icon} 
                    alt={alt} 
                    className="icon-button-icon"
                    style={{ width: iconSize, height: iconSize }}
                />
            )}
            {children && <span className="icon-button-text">{children}</span>}
        </UIButton>
    );
}

export default IconButton;
