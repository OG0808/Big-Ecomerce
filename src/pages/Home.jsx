import React from 'react'
import Header from '../components/header/Header'
import PagesShop from '../components/pagesShop/PagesShop'
import ZX9speakerHome from '../components/ZX9speakerHome/ZX9speakerHome'
import ZX7speakers from '../components/ZX7speakersHome/ZX7speakers'
import YX1earphones from '../components/YX1erphonesHome/YX1earphones'
import ListeningToMusic from '../components/manListeningToMusic/ListeningToMusic'


const Home = () => {
  return (
    <div >
    <Header/>
    <PagesShop/>
    <ZX9speakerHome/>
    <ZX7speakers/>
    <YX1earphones/>
    <ListeningToMusic/>
   
    </div>
  )
}

export default Home