const Home = () => {

    const handleClick = () => {
        console.log('hello')
    }

    const handleClickAgain = (name) => {
        console.log('hello'+ name)
    }
    return ( 
        <div className='home'>
            <h1>Home</h1>
            <button onClick={handleClick}>Click meg</button>
            <button onClick={()=>handleClickAgain('mario')}>Click me again</button>
        </div>
     );
}
 
export default Home;