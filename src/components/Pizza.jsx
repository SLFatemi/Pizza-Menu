function Pizza(props) {
    console.log(props)
    return <div className={'pizza'}>
        <img src={props.img} alt={props.name}/>
        <div>
            <h3>{props.name}</h3>
            <p>{props.ing}</p>
            <span>{props.price}</span>
        </div>
    </div>
}

export default Pizza
