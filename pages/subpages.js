
import {withRouter} from 'next/router';
import Layout from '../components/layout';
import {useEffect, useState} from 'react';


const SubPages = withRouter((props)=>{
    console.log('dynamic router', props.router.query.page);

    const [newsData, setData] = useState();

    useEffect(() => {
      async function loadData(){
          const res = await fetch(`https://zeenews.india.com/pwaapi/newsdetail.php?newsid=${props.router.query.page}`);
          const newsData = await res.json()
          console.log('newsData', newsData);
          
          setData(newsData);
      }
      loadData();
      
    }, []);

    
    return <Layout>
         {newsData ? <section>
               <h1>{newsData.newsdetail.title}</h1>
               <img src={newsData.newsdetail.thumbnail_url} alt=""/>
               <p>{newsData.newsdetail.safe_content}</p>
          </section> : <div className="lds-ripple"><div></div><div></div></div> }


<style jsx>{`
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
    </Layout>
  })

  
  export default SubPages