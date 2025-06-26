function Pizza({pizzaObject}) {
    return <li className={`pizza ${pizzaObject.soldOut ? 'sold-out' : ''}`}>
        <img src={`/src/assets/${pizzaObject.photoName}`} alt={pizzaObject.name}/>
        <div>
            <h3>{pizzaObject.name}</h3>
            <p>{pizzaObject.ingredients}</p>
            <span>{pizzaObject.soldOut ? 'SOLD OUT' : pizzaObject.price}</span>
        </div>
    </li>
}

export default Pizza
