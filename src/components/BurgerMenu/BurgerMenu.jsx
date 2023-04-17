import './BurgerMenu.sass'
import { Navmenu } from '../Navmenu/Navmenu'

export const BurgerMenu = ({isBurgerOpen, setIsBurgerOpen}) => {

    return (
        <div className={`burger-menu ${isBurgerOpen ? 'burger-menu_status_opened' : ''}`}>
            <Navmenu inBurger='true' setIsBurgerOpen={setIsBurgerOpen} />
        </div>
    )
}