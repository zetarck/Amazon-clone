import React from 'react'
import './Home.css'
import Product from './Product'
//rcfe = autocompletado REACT
function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                {/*Faded Banner*/}
                <img className='home__image' 
                     src='https://cdn.pixabay.com/photo/2017/10/03/17/53/nature-2813487_960_720.jpg'   
                     alt='image'
                />
                {/*Products Row*/}
                <div className='home__row'>
                  <Product 
                  title='Plants' 
                  price={9.99} 
                  image='https://cdn.pixabay.com/photo/2021/01/19/03/56/girl-5929995_960_720.jpg'
                  rating={5}/>   
                   <Product 
                  title='New Plant Parent: Develop Your Green Thumb and Care for Your House-Plant Family' 
                  price={19.99} 
                  image='https://images-na.ssl-images-amazon.com/images/I/515Ha75lEoL._SX386_BO1,204,203,200_.jpg'
                  rating={4}/>  
                </div>  

                <div className='home__row'>
                <Product 
                  title='Wild at Home: How to style and care for beautiful plants' 
                  price={14.82} 
                  image='https://images-na.ssl-images-amazon.com/images/I/61-sDnEfmZL._SX435_BO1,204,203,200_.jpg'
                  rating={4}/>  
                   <Product 
                  title='How Not to Kill Your Houseplant: Survival Tips for the Horticulturally Challenged' 
                  price={8.99} 
                  image='https://images-na.ssl-images-amazon.com/images/I/513DCEYLB7L._SX386_BO1,204,203,200_.jpg'
                  rating={5}/>  
                  <Product 
                  title='Green Witchcraft: A Practical Guide to Discovering the Magic of Plants, Herbs, Crystals, and Beyond ' 
                  price={19.99} 
                  image='https://images-na.ssl-images-amazon.com/images/I/51TFv-qcFML._SX322_BO1,204,203,200_.jpg'
                  rating={4}/>  
                    
                </div>  

                <div className='home__row'>
                  {/*Product*/}  
                  <Product 
                  title='Mens Health Plant-Based Eating: (The Diet That Can Include Meat)' 
                  price={18.99} 
                  image='https://images-na.ssl-images-amazon.com/images/I/515s6ec8vrL._SX388_BO1,204,203,200_.jpg'
                  rating={4}/>  
                  
                </div>    
            </div>
        </div>
    )
}

export default Home
