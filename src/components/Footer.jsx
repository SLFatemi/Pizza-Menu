function Footer() {
    const curTime = new Date().toLocaleTimeString()

    const hour = new Date().getHours()
    const openHour = 11;
    const closeHour = 22

    let isOpen
    isOpen = (hour >= openHour && hour <= closeHour);


    // return <footer className={'footer'}>{curTime} We are currently {isOpen ? 'open' : 'closed'}!</footer>
    return <div className={'order'}>
        <footer
            className={'footer'}>{isOpen && `We are currently open! until ${closeHour}:00, Come visit us or order online.`}</footer>
        <button className={'btn'}>Order</button>
    </div>
}

export default Footer