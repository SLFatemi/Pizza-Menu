import OrderButton from "./OrderButton.jsx";

function Footer() {
    const curTime = new Date().toLocaleTimeString()

    const hour = new Date().getHours()
    const openHour = 11;
    const closeHour = 22

    let isOpen
    isOpen = (hour >= openHour && hour <= closeHour);
    
    return <div className={'order'}>
        <footer
            className={'footer'}>{isOpen
            ? `We are currently open! until ${closeHour}:00, Come visit us or order online.`
            : `We're happy to welcome you between ${openHour}:00 to ${closeHour}:00`}
        </footer>
        {isOpen ? <OrderButton/> : null}
    </div>
}

export default Footer