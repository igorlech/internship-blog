import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";

export default function BlogBlock({ post }) {

    const navigate = useNavigate();

    return (
        <div className="blog-block" onClick={() => navigate(post.slug)}>
            <h2 className="blogpost-title">{parse(post.title.rendered)}</h2>
        </div>
    )
}