function OrderButton() {
    return <button onClick={() => showAlert('Happy eating!')} className={'btn'}>Order</button>
}

function showAlert(msg) {
    alert(msg)
}

export default OrderButton