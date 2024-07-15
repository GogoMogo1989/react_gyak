import {useState, useEffect} from 'react'
import BlogList from './blogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
       setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                if(!res.ok){
                    throw Error('valami elromlott');
                }
                return res.json()
            })
            .then((data) => {
                setBlogs(data);
                setIsPending(false)
                setError(null)
            })
            .catch((err) => {
                setIsPending(false)
                setError(err.message)
                
            })
       }, 1000)
    }, []) 
 
    return ( 
        <div className='home'>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs}/>}
        </div>
     );
}
 
export default Home;