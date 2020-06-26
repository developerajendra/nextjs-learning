import Navigation from './navigation';
import styles from './layout.module.scss'
import {useEffect} from 'react';
import * as serviceWorker from '../sw';

const  Layout = (props)=>{
    useEffect(() => {

        if('serviceWorker' in navigator){
            navigator.serviceWorker.register('../sw.js')
            .then((register)=>{
                console.log('service worker registerd', register);
            }).catch(error=>{
                console.log('service worker not registerd',error);
            })
        }

       
    }, [])
    return <div className={styles.container}> 
        <Navigation></Navigation>
        {props.children}
    </div>
}

export default Layout;