const SocialMedia = ({ color }) => {
    const handleColor = () => {
        return color ? 'socialMedia blueIcons d-flex-space' : 'socialMedia d-flex-space';
    };
    return (
        <div className={handleColor()}>
            <a href="https://wa.me/5493815845196" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-whatsapp icon"></i>
            </a>
            <a href="https://www.instagram.com/torresalonsoconstructora" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram icon"></i>
            </a>
            <a href="https://www.facebook.com/TorresAlonsoConstructoraa" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook icon"></i>
            </a>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin icon"></i>
            </a>
        </div>
    );
};

export default SocialMedia;
