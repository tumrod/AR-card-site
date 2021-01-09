import React, { Component, Suspense } from 'react';  
//import Leftside from './Leftside';  
import Header from './Header'  
import Footer from './Footer'  
import Home from './Home'  

export class Layout extends Component {  
    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>  
    render() {  
        return (  
            <div>   
                <Header/>  
                <Home/>  
                <Footer /> 
            </div>  
        )  
    }  
}  
  
export default Layout  