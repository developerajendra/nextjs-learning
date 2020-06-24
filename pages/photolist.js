import Link from 'next/link';
import fetch from 'isomorphic-unfetch'
import React from 'react';
import LazyLoad from 'react-lazyload';
import Layout from './layout';

const  PhotoLit = ({data})=> {
  console.log('props', data);
   
  
  return <Layout>
     
    <section>
      <h1>Welcome to photolist page</h1>
      {data.news[0].sports[0].photos.map(news=>{
         return(
           <div> 
              <h1>{news.title}</h1>
              {/* <p>{news.highlights}</p> */}
              <LazyLoad height={200}>
              <img src={news.thumbnail_url} alt=""/>
              </LazyLoad>
          </div>
         )
      })}
    </section>
    </Layout>
}
  
  // This function gets called at build time on server-side.
  // It won't be called on client-side, so you can even do
  // direct database queries. See the "Technical details" section.
  export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res =  await fetch('https://zeenews.india.com/pwaapi/photolist.php')
    const data = await res.json()
    console.log('static props');
    
  
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        data,
      },
    }
  }
  
  export default PhotoLit