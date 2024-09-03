import { Link } from "react-router-dom"

import Navbar from "./Navbar"
import './Createblog.css' 

function Createblog() {
    return(
        <div>
            <Navbar />
            <div className="create-blog-container">
            <h2>Create a New Blog </h2>
            <form className="blog-form">
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        placeholder="Enter title"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="subtitle">Subtitle:</label>
                    <input
                        type="text"
                        id="subtitle"
                        placeholder="Enter subtitle"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        placeholder="Enter description"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Upload Image:</label>
                    <input
                        type="file"
                        id="image"
                        accept="image/*"
                    />
                </div>
                <button type="button" className="submit-btn">Create Blog</button>
            </form>

        </div>
        </div>

    )
}
export default Createblog