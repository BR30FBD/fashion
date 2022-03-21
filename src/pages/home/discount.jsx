import React, { useEffect, useState } from 'react'
// import { useEffect } from 'react/cjs/react.development';

 const Discount = () => {
     const [sec,setsec]=useState([])
     const [min,setmin]=useState([])
     const [hour,sethour]=useState([])
     const [days,setdays]=useState([])

    const secfun=()=>{
        let commingday=new Date('01/31/2022/12:00');
        let date=new Date().getSeconds();
        setsec(Math.abs(date))
        let days=commingday.getDate()-new Date().getDate();
         setdays(Math.abs(days))
         let hours=new Date().getHours()-commingday.getHours();
         sethour(Math.abs(hours))
         let minut=new Date().getMinutes()-commingday.getMinutes();
         setmin(Math.abs(minut))
    }
    useEffect(()=>{
    setInterval(secfun,1000);

    },[])
    return (
        <>
<section className="discount">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 p-0">
                <div className="discount__pic">
                    <img src="assets/img/discount.jpg" alt="" />
                </div>
            </div>
            <div className="col-lg-6 p-0">
                <div className="discount__text">
                    <div className="discount__text__title">
                        <span>Discount</span>
                        <h2>Summer 2019</h2>
                        <h5><span>Sale</span> 50%</h5>
                    </div>
                    <div className="discount__countdown" id="countdown-time">
                        <div className="countdown__item">
                            <span>{days}</span>
                            <p>Days</p>
                        </div>
                        <div className="countdown__item">
                            <span>{hour}</span>
                            <p>Hour</p>
                        </div>
                        <div className="countdown__item">
                            <span>{min}</span>
                            <p>Min</p>
                        </div>
                        <div className="countdown__item">
                            <span>{sec}</span>
                            <p>Sec</p>
                        </div>
                    </div>
                    <a href="/#">Shop now</a>
                </div>
            </div>
        </div>
    </div>
</section>
 
        </>
    )
}
 export default Discount;