import Pizza from "./Pizza.jsx";
import pizzaData from "../assets/data.js";

function Menu() {
    const isTherePizza = !!pizzaData.length

    return <main className={'menu'}>
        <h2>Our Menu</h2>

        {isTherePizza ? <ul className={'pizzas'}>
            {pizzaData.map(pizza => {
                return (
                    <Pizza pizzaObject={pizza} key={pizza.name}/>
                )
            })}
        </ul> : 'We are still working on our menu, Please come back later!'}

    </main>
}

export default Menu