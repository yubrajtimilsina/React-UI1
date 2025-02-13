import { Link } from "react-router-dom"
import './Home.css'
import Navbar from "./Navbar"
import { Fragment } from "react"

function Home(){
    return (
        
        <Fragment>
            <Navbar />
        <div class="box-container">

       <div class="box">
          <img src="images/menu-1.png" alt=""/>
          <h3>tasty and healty</h3>
         <div class="price">Rs 250 <span>300</span></div>
        </div>

        <div class="box">
         <img src="images/menu-2.png" alt=""/>
         <h3>tasty and healthy</h3>
         <div class="price">Rs 300 <span>360</span></div>
    
        </div>

        <div class="box">
         <img src="images/menu-3.png" alt=""/>
           <h3>tasty and healthy</h3>
          <div class="price">Rs 500 <span>600</span></div>
        </div>
  
    </div>
        

</Fragment>
    )
}

export default Home