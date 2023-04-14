import './BurgerMenu.sass'
import { Navmenu } from '../Navmenu/Navmenu'

export const BurgerMenu = ({isBurgerOpen}) => {

    return (
        <div className={`burger-menu ${isBurgerOpen ? 'burger-menu_status_opened' : ''}`}>
            <Navmenu inBurger='true' />
        </div>
    )
}