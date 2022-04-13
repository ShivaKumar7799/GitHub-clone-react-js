import {Component} from 'react'
import axios from 'axios'
import Loader from './components/loader';
import Card from './components/card';

class App extends Component{
  constructor(props){
    super(props);
    this.state = { 
      data : null
    }
    
  }
  callApi(){
  //  let google = 'https://www.google.com'
    const url = 'https://api.github.com/users/shivakumar7799/repos'
    // fetch(url).then((resp) => {console.log(resp); return resp.json})
    // .then((resp) => {console.log('Response', typeof(resp))})
    // .catch((err) => {
    //   console.log("Error", err)
    // }) 
    axios.get(url).then((resp) => {
      console.log('Response', resp);
      this.setState({
        data : resp.data
      });
   } ).catch((err) => {
         console.log("Error", err)
      })
  }
  componentDidMount(){
    this.callApi()
  } 

  getAllElements(data){
    console.log('getAllElements', data)
      return(
        <>          
            {data.map((elem,index) => { return <Card key={index} data = {elem} > </Card> })}                 
        </> 
      )
  }
    render(){ 
      return( 
        <>
          {this.state.data ? this.getAllElements(this.state.data) : <Loader />}
        </>
 
      )
    }
}

export default App













// import logo from './logo.svg';
// import './App.css';
// import {useState} from 'react'

// function App() {
//   const changeColor = () => {
//     console.log('color changed')
//   }
//   return (
//     <>
//   <button changeColor = {changeColor} > change Background</button>
//       <Child />
//     </>
//   );
// }
// function Child(props){
//   const [color,setColor] = useState("red")
//   const clickHandler = () => {
//     console.log('click handleer')
//   }
//   return(
//     <>
//       <body  style={{backgroundColor : color}} >
//         <h1> changing Background color</h1> 
//         <p> this is a paragraph</p>
//     <button onClick={clickHandler} > child</button>
//       </body>
//     </>
//   )
// }

// export default App;  
