import Navigation from './navigation';
import styles from './layout.module.scss'

const  Layout = (props)=>{
    return <div className={styles.container}> 
        <Navigation></Navigation>
        {props.children}
    </div>
}

export default Layout;