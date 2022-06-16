
import './App.css';

function App(props) {
  return <div className="center mtop">
    <a href={props.href}target="_blank" ><h2>{props.head}</h2></a>
    <iframe src={props.src} scrolling="yes"></iframe ></div>
}

export default App;
