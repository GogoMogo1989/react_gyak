import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./Usefetch";

const BlogDetails = () => {

    const { id } = useParams()
    const{ data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id)

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE',
        }).then(()=>{
            console.log('blog deleted')
        })
    }

    return ( 
        <div className="blog-details">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blog && (
                <article>
                    <h2>{ blog.title}</h2>
                    <p>Written by: { blog.author}</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;