import Link from 'next/link';
import fetch from 'isomorphic-unfetch'
import {useEffect, useState} from 'react';
import React from 'react';
import LazyLoad from 'react-lazyload';

import Test from './test'

import Layout from '../components/layout';
 

const  Homepage = ({data})=> {
  const [newsData, setData] = useState(data)
   
  

  useEffect(() => {
    async function loadData(){
        const res = await fetch('https://zeenews.india.com/pwaapi/home.php')
        const newsData = await res.json()
        setData(newsData);
    }
    if(data.length == 0){
      loadData();
    }
    
  }, []);


   
  return <div><Layout>
    <section>
      <h1>home</h1>
      <Test />
      <Link href={`/subpages?page=home`}><a>Sub Pages</a></Link>
       
      <Link href={`/posts/[id]`} as="/posts/1"><a>posts</a></Link>
      { newsData && newsData.top_news ? newsData.top_news.map(news=>{
         return(
           <div> 
             {/* <LazyLoad height={200}> */}
                <h1>{news.title}</h1>
                <p>{news.highlights}</p>
                <img src={news.thumbnail_url} alt=""/>
              {/* </LazyLoad> */}
          </div>
         )
      }) :  <div className="lds-ripple"><div></div><div></div></div>}
      
 </section>
  
   
    </Layout>

<style jsx global>{`
.lds-ripple {
  position: absolute;
  width: 80px;
  height: 80px;
  margin: auto;
  right: 0;
  left: 0;
  z-index: 3333;
  top: 0;
  bottom: 0;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #ff6502;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}


  `}</style>
</div>
}

Homepage.getInitialProps = async function(ctx){
  if(!ctx.req){
    return {
      data:[]
    }
  }
  const res = await fetch('https://zeenews.india.com/pwaapi/home.php')
  const data = await res.json()
  
    return {
      data
    }
}

export default Homepage
 





