import React from 'react'
import NavbarTop from '../components/navbar'
import OurMenuSection from '../components/ourMenu'
import "./Style.css";
import BannerSection from '../components/middleBanner';
import SecondBanner from '../components/secondBanner';

export const MainPage = () => {
  return (
    <>
      <div className='main-page'>
        <NavbarTop />
        <OurMenuSection />
        <BannerSection/>
        <SecondBanner/>
      </div>
    </>
  )
}
