import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { BackButton } from "./BackButton";

export default function BlogPost() {

    const [post, setPost] = useState({});
    const params = useParams();
    const slug = params.slug;

    useEffect(() => {
        async function getPost() {
            const url = `https://react-api.igorlech.dk/wp-json/wp/v2/blogposts?slug=${slug}&_embed`;
            const response = await fetch(url);
            const data = await response.json();
            setPost(data[0]);
        }
        getPost();
    }, [slug]);

    return (
        <>
            <BackButton />
            <div className="blogpost">
                <p className="blogpost-content">{post.content && parse(post.content.rendered)}</p>
            </div>
        </>
    )
}