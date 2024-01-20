import React from 'react'
 import './pagesShop.css'
import { useNavigate } from 'react-router-dom'
import { handleSeeProduct } from '../../utils/handleSeeProduct'


const PagesShop = () => {


const { handleSeeShop } = handleSeeProduct();

const arrow = "/shared/desktop/icon-arrow-right.svg"
    
  return (
    <section className='pagesShop'>
    <div className='pagesShop__content'>

      <div className='pagesShop__item'>
        <img className='pagesShop__image' src='/shared/desktop/image-category-thumbnail-headphones.png' alt='Headphones' />
        <p className='pagesShop__description'>Headphones </p>
        <span onClick={()=>{handleSeeShop('/headphon')}} className='pagesShop__page'>SHOP <img src={arrow} alt="" /></span>

      </div>

      <div className='pagesShop__item'>
        <img className='pagesShop__image' src='/shared/desktop/image-category-thumbnail-speakers.png' alt='Speakers' />
        <p className='pagesShop__description'>Speakers </p>
        <span onClick={()=>{handleSeeShop('/spekers')}} className='pagesShop__page'>SHOP <img src={arrow}  alt="" /></span>
      </div>

      <div className='pagesShop__item'>
        <img className='pagesShop__image' src='/shared/desktop/image-category-thumbnail-earphones.png' alt='Earphones' />
        <p className='pagesShop__description'>Earphone</p>
        <span onClick={()=>{handleSeeShop('/earphone')}}  className='pagesShop__page'>SHOP <img src={arrow}  alt="" /></span>
      </div>

    </div>
  </section>
  )
}

export default PagesShop