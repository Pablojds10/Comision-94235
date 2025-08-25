import Carrito from './Img/carrito-de-compras.png'

const CartWidget =() => {
    return (
        <div className="cart-widget">
            <a href=""><img src={Carrito} alt="" /><span className='acumulado-carrito'>0</span></a>
        </div>
    )
}

export default CartWidget;