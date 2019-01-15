import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      text:'',
      current:'0',
      decimal:true,
      operation:true
    }

    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(e){

    console.log(e.target.value);
    let operators=["+",'-',"/","X"];
    let nums=["1",'2','3','4','5','6','7','8','9','0'];
    e=e.target.value;
    if(e==="AC"){
      this.setState({
        current:"0",
        decimal:true,
        text:'',
        res:null,
        operation:true
      });
    }

    setTimeout(() => {
      console.log(this.state.current.substr(1));
      if(this.state.current.length>1 && /^0[0-9]+/g.test(this.state.current) ){
        // console.log(this.state.current)
        this.setState({operation:true,current:this.state.current.substr(1)});
      }
    }, 500);


    if(e==="." && this.state.decimal){
      if((this.state.current+e).length>1 && /^0[0-9]+/g.test(this.state.current+e) ){
        // console.log(this.state.current)
        this.setState({
          operation:true,
          current:(this.state.current+e).substr(1),
          decimal:false,
        });
      }else{
        this.setState({
          operation:true,
          res:null,
          decimal:false,
          current:this.state.current + e
        });
      }

      // this.setState({
      //   operation:true,
      //   res:null,
      //   decimal:false,
      //   current:this.state.current + e
      // });
      console.log(this.state.current);
    }
    else if( this.state.decimal===false && nums.indexOf(e)!== -1 ){
      if((this.state.current+e).length>1 && /^0[0-9]+/g.test(this.state.current+e) ){
        // console.log(this.state.current)
        this.setState({operation:true,current:(this.state.current+e).substr(1)});
      }else{
        this.setState({
          operation:true,
          res:null,
          current:this.state.current + e
        });
      }
      
      // this.setState({
      //   operation:true,
      //   res:null,
      //   current:this.state.current + e
      // });
    }else if(operators.indexOf(e) !== -1 ){
      if(this.state.operation)
      this.setState({
        operation:false,
        res:null,
        current:"",
        decimal:true,
        text:this.state.text+this.state.current + e
      });
    } else if( nums.indexOf(e)!== -1 ){
      if((this.state.current+e).length>1 && /^0[0-9]+/g.test(this.state.current+e) ){
        // console.log(this.state.current)
        this.setState({operation:true,current:(this.state.current+e).substr(1)});
      }else{
        this.setState({
          operation:true,
          res:null,
          current:this.state.current + e
        });
      }
      // this.setState({
      //   operation:true,
      //   res:null,
      //   current:this.state.current + e
      // });
    }else if(e === "="){
      this.setState({
        operation:true,
        current:"",
        decimal:true,
        text:this.state.text+this.state.current 
      });
      
      let temp=(this.state.text+this.state.current).replace(/x/gi, "*").replace(/‑/g, "-");
      // console.log("temp:",eval(temp) );
      this.setState({
        operation:true,
        res:eval(temp)
      });
      
      
      // let opetr = (this.state.text+this.state.current).replace("X","*").match(/-|\+|\*|\//gi);
      // let temp=(this.state.text+this.state.current).replace("X","*").split(/-|\+|\*|\//gi);
      // let ans=temp.shift();
      // console.log(temp,opetr);
      // console.log(eval(temp));
    
    }

    // if( (/^0/g.test(this.state.current)) && this.state.current.length > 1 ){
    //   // this.setState({ current: (this.state.current).substr(1)  });
    //   console.log(this.state.current,"current : ");
    // }

    // console.log(this.state.text);

  }

  render() {
    let t=(this.state.res!=null) ?"="+this.state.res:"";
    
    return (
      <div className="App container">
        <br/>
        <div className="row">
        <div id="display" className="outputScreen">{this.state.text+this.state.current+t}</div>
          {/* <input type="text" className="form-control" value={this.state.text+this.state.current+t} id="display" /> */}
        </div>
        <div className="row">
          <input type="button" className="btn btn-default" onClick={ this.handleClick } value ="AC" id="clear"/>
          <input type="button" className="btn btn-default" onClick={ this.handleClick } value ="/" id="divide" />
          <input type="button" className="btn btn-default" onClick={ this.handleClick } value ="X" id="multiply"/>
        </div>
        <div className="row">
          <input type="button" className="btn btn-default" onClick={ this.handleClick } value ="7" id="seven"/>
          <input type="button" className="btn btn-default" onClick={ this.handleClick } value ="8" id="eight"/>
          <input type="button" className="btn btn-default" onClick={ this.handleClick } value ="9" id="nine"/>
          <input type="button" className="btn btn-default" onClick={ this.handleClick } value ="-" id="subtract"/>
        </div>
        <div className="row">
          <input type="button" className="btn btn-default" onClick={ this.handleClick } value ="4" id="four"/>
          <input type="button" className="btn btn-default" onClick={ this.handleClick } value ="5" id="five"/>
          <input type="button" className="btn btn-default" onClick={ this.handleClick } value ="6" id="six"/>
          <input type="button" className="btn btn-default" onClick={ this.handleClick } value ="+" id="add"/>
        </div>
        <div className="row">
          <input type="button" className="btn btn-default" onClick={ this.handleClick } value ="1" id="one"/>
          <input type="button" className="btn btn-default" onClick={ this.handleClick } value ="2" id="two"/>
          <input type="button" className="btn btn-default" onClick={ this.handleClick } value ="3" id="three"/>
          <input type="button" className="btn btn-default" onClick={ this.handleClick } value ="=" id="equals"/>
        </div>
        <div className="row">
          <input type="button" className="btn btn-default" onClick={ this.handleClick } value ="0" id="zero"/>
          <input type="button" className="btn btn-default" onClick={ this.handleClick } value ="." id="decimal"/>
        </div>
        exp: {this.state.text} <br/>
        curr : {this.state.current} <br/>

      </div>
      
    );
  }
}

export default App;
