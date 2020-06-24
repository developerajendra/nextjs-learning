import Link from 'next/link';
import {useEffect, useState} from 'react';
import fetch from 'isomorphic-unfetch'
import Layout from './layout';

const  Blog = ({data})=> {
  const [newsData, setData] = useState(data)

  useEffect(() => {
    async function loadData(){
        const res = await fetch('https://zeenews.india.com/pwaapi/latestnews.php')
        const newsData = await res.json()
        setData(newsData);
    }
    if(data.length == 0){
      loadData();
    }
    
  }, []);
   
   
  
  
  return <Layout>
      <section>
        <h1>Welcome to blog page</h1>
        {newsData && newsData.latestnews ?  newsData.latestnews.map(news=>{
          let image = news.thumbnail_url.replace('pwaapi/','');
          return(
            <div> 
                <h1>{news.title}</h1>
                {/* <p>{news.title}</p> */}
                <Link href={`/subpages?page=${news.id}`}><img src={image} alt=""/></Link>
            </div>
          )
        }) : <div className="lds-ripple"><div></div><div></div></div>}
      </section>
    </Layout>
}
  
 
  Blog.getInitialProps = async function(ctx){
    if(!ctx.req){
      return {
        data:[]
      }
    }

    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res =  await fetch('https://zeenews.india.com/pwaapi/latestnews.php')
    const data = await res.json()
    console.log('static props');
    
  
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      data
    }
  }
  export default Blog