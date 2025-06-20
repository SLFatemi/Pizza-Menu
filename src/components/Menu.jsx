import Pizza from "./Pizza.jsx";
import spinaciPizza from '../assets/pizzas/spinaci.jpg'
import funghiPizza from '../assets/pizzas/funghi.jpg'
import pizzaData from "../assets/data.js";

function Menu() {

    return <main className={'menu'}>
        <h2>Our Menu</h2>
        <div className={'pizzas'}>
            <Pizza
                name='Pizza Spinaci'
                ing='Tomato, mozarella, spinach, and ricotta cheese'
                img={spinaciPizza}
                price={12}
            />
            <Pizza
                name='Pizza Funghi'
                ing='Tomato, mozarella, mushrooms, and onion'
                img={funghiPizza}
                price={12}
            />
        </div>
    </main>
}

export default Menu