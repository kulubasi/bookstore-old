import logo from './logo.svg';
import './App.css';

let counter=0;
function App() {
  counter++;
  return (
    <div className="App">
      <h2> Welcome to bookstore there are {counter} books here</h2>
      <h3> Easily Manage books </h3>
    </div>
  );
}
setInterval(App, 2000);
export default App;
