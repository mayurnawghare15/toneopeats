import React from 'react'
import "./Style.css"
import Cards from '../cards';

const OurMenuSection = () => {
    return (
        <>
            <div className='bg-light'>
                <div className='d-flex justify-content-center'>
                    <div className='col-5'>
                    </div>
                    <div className="col-2 font-md">
                        <h2 className>Our <span style={{ color: '#80B53B' }}> Menu</span></h2>
                    </div>
                    <div className='col-5'>
                    </div>
                </div>
                <Cards deviceType="desktop"/>
            </div>

        </>

    )
}

export default OurMenuSection;