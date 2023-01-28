import { useEffect, useState } from "react";
import BlogBlock from "./BlogBlock";

export default function HomePage() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://react-api.igorlech.dk/wp-json/wp/v2/blogposts?_embed");
            const data = await response.json();
            setPosts(data);
            console.log(data)
        }
        getData();
    }, []);

    return (
        <div className="main-container">
            <div className="header">
                <h1 className="blog-heading">igor lech</h1>
                <h2 className="blog-subheading">My Frontend/Web Developer internship at Illumi</h2>
            </div>
            <div className="blog-grid">
                {posts.slice(0).reverse().map(post => (
                    <BlogBlock key={post.id} post={post} />
                ))}
            </div>
            <footer>
                <h3 className="footer-text">by Igor Lech</h3>
            </footer>
        </div>
    )
}