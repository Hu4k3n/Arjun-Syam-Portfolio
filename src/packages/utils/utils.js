import { RESUME_URL } from "./constant";

export const onResume = () => {
    const url = RESUME_URL;
        // Open the resume link in a new tab. Use noopener,noreferrer for security.
        openLink(url);
    };

export const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
}
