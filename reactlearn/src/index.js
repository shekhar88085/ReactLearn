import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function formatName(user){
  return user.firstName+' '+user.lastName;
}
const user={
  firstName:'Chandra',
  lastName:'Shekhar'
};
// const element=(
//   <h1>
//   Hello,  {formatName(user)}!
//   </h1>
// );
function getGreeting(user){
  if(user)return <h1>Hello, {formatName(user)}!</h1>;
return <h1>Hello ,stranger.</h1>
}
const name='Chandra Shekhar';
const e=<h1>Hello,{name}</h1>;

const element=(
  <h1>{getGreeting()}!</h1>
);

//ticking render example

  const element1=(
    <div>
      <h1>Hello,world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );

//Components

  function Welcome(props){
    return <h1>Hello, {props.name}</h1>
  }
  function Appex(){
    return(
      <div>
        <Welcome name="Shekhar"/>
        <Welcome name="Khushbu"/>

      </div>
    );
  }

//state

  function Clock(props){
    return(
      <div>
        <h1>Hello,World</h1>
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
function tick(){
  ReactDOM.render(
    <Clock date={new Date()}/>,
    document.getElementById('root')
  );
}

//Adding Loacale state to clock and Adding lifecycle methods to a class

class Clock1 extends React.Component{
  constructor(props){
    super(props);
    this.state={date:new Date()};
  }

  componentDidMount(){
    this.timerID=setInterval(
        ()=>this.tick(),1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({ 
      date:new Date()
    });
  }

  render(){
    return(
      <div>
        <h1>Hello ,world</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

//Handle Events

class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state={isToggleOn:true};

    this.handleClick=this.handleClick.bind(this);
  }

  handleClick() {
        this.setState(prevState => ({
                isToggleOn: !prevState.isToggleOn    
              }));  
            }

            render(){
              return(
                <button onClick={this.handleClick}>
                  {this.state.isToggleOn?'ON':'OFF'}
                </button>
              );
            }

}


//Conditional Rendering

function UserGreeting(props){
  return<h1>Welcome Back</h1>
}

function GuestGreeting(Props){
  return <h1>Please Sign In</h1>
}

function Greeting(props){
  const isLoggedIn=props.isLoggedIn;
  if(isLoggedIn)return <UserGreeting/>;
  return <GuestGreeting/>;
}

//preventing component from rendering

function WarningBanner(props){
  if(!props.warn){
    return null;
  }
return(
  <div className="warning">
    Warning!
  </div>
);
}

class Page extends React.Component{
  constructor(props){
  super(props);
  this.state={showWarning:true};
  this.handleToggleClick=this.handleToggleClick.bind(this);
}
handleToggleClick(){
  this.setState(state=>({
    showWarning:!state.showWarning
  }));
}

render(){
  return(
    <div>
    <WarningBanner warn={this.state.showWarning}/>
    <button onClick={this.handleToggleClick}>
      {this.state.showWarning?'Hide':'Show'}
    </button>
    </div>
  );
}

}

//Lists and Keys

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);

ReactDOM.render(
  //<Greeting isLoggedIn={true}/>,
  <Page/>,
  document.getElementById('root')
);



//setInterval(tick,1000);

// ReactDOM.render(<Appex/>,
  
//   document.getElementById('root')
// );

//

































// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
