import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import './Blog.css'
function Blog(){
    return(
    <>
    <Navbar />
       <section class="blog" id="blog">

<div class="box-container">

    <div class="box">
        <div class="image">
            <img src="images/blog-1.jpeg" alt=""/>
        </div>
        <div class="content">
            <a href="#" class="title">All You Need is Love and More Coffee</a>
            <p>People want to get their daily cup of great-tasting coffee in a relaxing atmosphere. Such customers vary in age, although most of clientele are college students and faculty</p>
            <a href="#" class="btn">Read more</a>
        </div>
    </div>

    <div class="box">
        <div class="image">
            <img src="images/blog-2.jpeg" alt=""/>
        </div>
        <div class="content">
            <a href="#" class="title">tasty and refreshing coffee</a>
            <p>My market research shows that these are discerning customers that gravitate towards better tasting coffee.</p>
            <a href="#" class="btn">Read more</a>
        </div>
    </div>

</div>
</section>
      
    </>
    )
}

export default Blog