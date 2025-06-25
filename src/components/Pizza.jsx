function Pizza(props) {
    return <li className={'pizza'}>
        <img src={`/src/assets/${props.pizzaObject.photoName}`} alt={props.pizzaObject.name}/>
        <div>
            <h3>{props.pizzaObject.name}</h3>
            <p>{props.pizzaObject.ingredients}</p>
            <span>{props.pizzaObject.price}</span>
        </div>
    </li>
}

export default Pizza
