import Navigation from '../components/navigation';

const  Layout = (props)=>{
    return <div>
        <Navigation></Navigation>
        {props.children}
    </div>
}

export default Layout;