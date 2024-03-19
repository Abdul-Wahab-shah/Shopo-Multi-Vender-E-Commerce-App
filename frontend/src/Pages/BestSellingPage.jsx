import React, { useState,useEffect } from 'react'
import { productData } from '../Static/data';
import Header from '../Components/Layout/Header';
import styles from '../Styles/styles';
import ProductCard from '../Components/Route/ProductCard/ProductCard';
import Footer from '../Components/Layout/Footer';

const BestSellingPage = () => {

    const [data,setData]=useState([])


    useEffect(() => {
   const d= productData && productData.sort((a,b)=> b.total_sell-a.total_sell)
   setData(d)
    //   window.scrollTo(0,0);
    }, [])
    
  return (
    <div>
        <Header activeHeading={2}/>
        <br />
        <br />
        <div className={`${styles.section}`}>
            <div className="grid grid-cols-1 gap-[20px] md:grid-col-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
                {data && data.map((i,index)=>
                <ProductCard data={i} key={index}/>
                )}
              
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default BestSellingPage