import Pizza from "./Pizza.jsx";
import pizzaData from "../assets/data.js";

function Menu() {
    return <main className={'menu'}>
        <h2>Our Menu</h2>
        <ul className={'pizzas'}>
            {pizzaData.map(pizza => {
                return (
                    <Pizza pizzaObject={pizza} key={pizza.name}/>
                )
            })}
        </ul>
    </main>
}

export default Menu