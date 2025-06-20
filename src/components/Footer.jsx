/* eslint-disable no-unused-vars */
function Footer() {
    const curTime = new Date().toLocaleTimeString()

    const hour = new Date().getHours()
    const openHour = 12;
    const closeHour = 22

    let isOpen
    isOpen = !(hour >= openHour && hour <= closeHour);


    return <footer className={'footer'}>{curTime} We are currently open!</footer>
}

export default Footer