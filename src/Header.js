import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
    return (
        
        <div className='header'>
            <img 
            //Logo
            className="header__logo"
            src='https://www.flaticon.com/svg/vstatic/svg/892/892926.svg?token=exp=1614277168~hmac=058f4309f25bd9783d6afc7064938c0a'
            />
        
        <div
        //Barra de busqueda
        className='header__search'>
            <input
            className='header__searchInput'
            type='text' />
            <SearchIcon 
            className='header__searchIcon'/>
        </div>
        {/* Opciones del lado derecho*/}
        <div className='header__nav'>
            
            <div className='header__option'>
                <span className='header__optionLineOne'>
                    Hola, invitado
                </span>
                <span className='header__optionLineTwo'>
                    Registrate
                </span>
            </div>
            <div className='header__option'>
                <span className='header__optionLineOne'>
                    Devoluciones
                </span>
                <span className='header__optionLineTwo'>
                    & Pedidos
                </span>
            </div>
            
            
            <div className='header__optionBasket'>
                <ShoppingBasketIcon/>
                <span className='header__optionLine 
                header__basketCount'>0</span>
            </div>

            <div className='header__option'>
                
            </div>
            <div className='header__option'>
                
            </div>
        </div>

        </div>
    )
}

export default Header
