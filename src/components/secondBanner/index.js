import React from 'react'
import "./Style.css"
import listItemjson from "./jsondata.json"
const SecondBanner = () => {
    return (
        <div className='container'>

            <h1 className="banner-heading">Health &amp; Taste At
                <span>Your Doorstep</span></h1>
            <div className='row'>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col- resPadZero">
                    <ul className="liststyle">
                    {listItemjson.jsondata.map((data,idx)=>(
                        <li>
                            <p id={"list-Item"+idx}>{data.desc}</p>
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col- resPadZero">
                    <img class="second-banner-img" src="https://toneopeats.com/public/img/bannerimg.webp" alt=''/>
                </div>
            </div>
        </div>
    )
}

export default SecondBanner