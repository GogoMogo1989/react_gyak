import BlogDetails from './Blogdetails';
import BlogList from './blogList';
import useFetch from './Usefetch';

const Home = () => {
    const{ data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
    return ( 
        <div className='home'>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs}/>}
        </div>
     );
}
 
export default Home;