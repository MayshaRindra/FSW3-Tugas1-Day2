import { MenuList } from "../helpers/MenuList";
import MenuItem from "../pages/MenuItem";
import "../styles/Menu.css";
import product from "../assets/product.png";
import {Card, Button} from "react-bootstrap";

function Menu() {
    return (
        <div className="menu">
            <h1 className="menuTitle">Our Menu</h1>
            <div className="menuList">
                {MenuList.map((menuItem, key) => {
                    return (
                        <MenuItem 
                            key={key}
                            image={menuItem.image} 
                            name={menuItem.name} 
                            price={menuItem.price}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default Menu;