import Link from 'next/link'

const  Navigation = ()=>{
    return <div>
        <nav>
            <ul>
                <li> <Link href="/"><a href="">Home Page</a></Link></li>
                <li><Link href="/blog"><a href="">Blog Page</a></Link></li>
                <li><Link href="/photolist"><a href="">PhotoList Page</a></Link></li>
                <li><Link href="/post"><a href="">Post Page</a></Link></li>
            </ul>
        
        </nav>
        <style jsx>{`
        nav {
          background: #ff6600;
          color: #fff;
          font-weight: bold;
        }
        nav ul{
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: center;
            justify-content: space-evenly;
            padding: 22px;
        }
        nav a {
          display: inline-block;
          color: #fff;
          text-decoration: none;
          padding: 33px;
        }
        nav a:hover {
          background-color: rgba(0,0,0,0.1);
        }
        nav .back {
          display: inline-block;
          height: 1em;
          width: 1em;
          font-weight: 300;
          padding: 1em 0 1em 1em;
          text-align: center;
        }
        nav .title {
          display: inline-block;
          padding: 1em;
        }
      `}</style>

      <style jsx global>{`
        body { 
          margin: 0;
          background: #f0f0f0;
          font-family: system-ui;
          padding: 33px;
        }
      `}</style>

    </div>
}

export default Navigation;