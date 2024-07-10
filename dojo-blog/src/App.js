import './App.css';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const person = {name: 'joshi', age: 30}
  const link="www.google.com"

  return (
    <div className="App">
      <div className='content'>
        <h1>{title}</h1>
        <p>Liked {likes}</p>
        <p>{ person.name }</p>
        <p>{ 10 }</p>
        <a href={link}>Google</a>
      </div>
    </div>
  );
}

export default App;
