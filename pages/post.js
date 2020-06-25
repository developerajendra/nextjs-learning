import Link from 'next/link';
import Nav from '../components/nav'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout';

const  Post = ({data})=> {
  console.log('props', data);
   
  
  return <Layout>
      <section>
        <h1>Welcome to POST page</h1>
        { data&& data.length ? data.map(news=>{
          return(
            <div> 
                <h1>{news.name}</h1>
                <p>{news.body}</p>
            </div>
          )
        }) : <div>Loading...</div>}
      </section>
    </Layout>
}
  
  // This function gets called at build time on server-side.
  // It won't be called on client-side, so you can even do
  // direct database queries. See the "Technical details" section.
  export async function getServerSideProps( ctx) {

    

    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res =  await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
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
  
  export default Post