import { Turn as Hamburger } from 'hamburger-react';

const BurgerMenu = ({ isOpen, setIsOpen, navBg }) => {
    const handleClass = () => {
        let color = navBg && !isOpen ? 'burguerBlue' : '';
        let width = !isOpen ? 'burguerShort' : '';
        let result = color + ' ' + width;
        return result;
    };
    handleClass();
    return (
        <div className={`burgerContainer d-flex-center ${handleClass()}`}>
            <Hamburger toggled={isOpen} toggle={setIsOpen} direction="right" />
        </div>
    );
};

export default BurgerMenu;
