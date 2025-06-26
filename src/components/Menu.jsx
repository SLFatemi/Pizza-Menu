import Pizza from "./Pizza.jsx";
import pizzaData from "../assets/data.js";

function Menu() {
    const isTherePizza = !!pizzaData.length

    return <main className={'menu'}>
        <h2>Our Menu</h2>
        {isTherePizza
            ? <>
                <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all
                    organic, all delicious</p>
                <ul className={'pizzas'}>
                    {pizzaData.map(pizza => {
                        return (
                            <Pizza pizzaObject={pizza} key={pizza.name}/>
                        )
                    })}
                </ul>
            </>
            : <p>'We are still working on our menu, Please come back later!'</p>}
    </main>
}

export default Menu