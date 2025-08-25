import CartWidget from './CartWidget'
import MiImagen from './Img/BYN.png'

const NavBar = () => {
    return (
        <header>
            <nav>
                <a href="#"><img src={MiImagen} className='logo-albinegro' alt="" /></a>
                <div className='header-div'>
                    <a href="#">Camisetas</a>
                    <a href="#">Buzos</a>
                    <a href="#">Pantalones</a>
                </div>
                <CartWidget />
            </nav>
        </header>
    );
};

export default NavBar;