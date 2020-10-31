import React, {Component} from 'react';
import './keyPadStyles.css';
class KeyPadComponent extends Component {

  constructor() {
    super();
    this.state = {
      upper: '',
      lower: 0
    }
  }
  
  btnHandler = char => {
    // destructuring state
    const lower = this.state.lower;
    const upper = this.state.upper;
    
    if(!isNaN(char)){
      if(lower===0)
        {this.setState({lower:char})}
      
      else if(lower!==0)
        {this.setState({lower:`${lower }${char}`})}
      
    }
    else if(isNaN(char) && char!=='.' && char!=='=' && char!=='CE'){
      this.setState({upper:`${lower}${char}`})
      this.setState({lower:0})
    }
    else if(char === '.'){
      this.setState({lower: lower + '.'})
    }
    else if(isNaN(char) && char === 'CE'){
      if(lower !== 0){
        this.setState({lower: (lower).toString().slice(0, -1) ===''?'0': (lower).toString().slice(0, -1)})
      }
      else {
        this.setState({lower: 0})
      }
    }
    else if(char === '='){
      const optr = upper.charAt(upper.length-1)
      const val1 = upper.slice(0, -1)
      const val2 = lower
      

      if(optr === '+'){
        const result = +val1 + +val2
        this.setState({lower: result})
        this.setState({upper: val1 + optr + val2})
        
      }
      else if(optr === '-'){
        const result = +val1 - +val2
        this.setState({lower: result})
        this.setState({upper: val1 + optr + val2})
        
      } 
      else if(optr === '*'){
        const result = +val1 * +val2
        this.setState({lower: result})
        this.setState({upper: val1 + optr + val2})
      }
      else if(optr === '/'){
        const result = +val1 / +val2
        this.setState({lower: result})
        this.setState({upper: val1 + optr + val2})
      }
      else if(optr === '%'){
        const result = +val1 / 100
        this.setState({lower: result})
        this.setState({upper: val1 + optr})
      }
    }
}
    render() {
        return (
          <div className="container">
          <div className="header">Calculator</div>
          
          <div className="textFieldWrapper">
            <div className="history">
            {this.state.upper}
            </div>
            <div className="total">
             {this.state.lower}

            </div>
          </div>

          <div className="zero-row">
            <button className="global" type="button" value="C"  onClick={()=>{this.setState({lower:0, upper:''})}}>C</button>
            <button className="global" type="button" value="CE" onClick={(e)=>{this.btnHandler(e.target.value)}}>CE</button>
            <button className="global" type="button" value="%"  onClick={(e)=>{this.btnHandler(e.target.value)}}>%</button>
            <button className="global" type="button" value="/"  onClick={(e)=>{this.btnHandler(e.target.value)}}>/</button>
          </div>
          <div className="first-row">
            <button className="global" type="button" value="7"  onClick={(e)=>{this.btnHandler(e.target.value)}}>7</button>
            <button className="global" type="button" value="8"  onClick={(e)=>{this.btnHandler(e.target.value)}}>8</button>
            <button className="global" type="button" value="9"  onClick={(e)=>{this.btnHandler(e.target.value)}}>9</button>
            <button className="global" type="button" value="*"  onClick={(e)=>{this.btnHandler(e.target.value)}}>*</button>
          </div>
          <div className="second-row">
            <button className="global" type="button" value="4"  onClick={(e)=>{this.btnHandler(e.target.value)}}>4</button>
            <button className="global" type="button" value="5"  onClick={(e)=>{this.btnHandler(e.target.value)}}>5</button>
            <button className="global" type="button" value="6"  onClick={(e)=>{this.btnHandler(e.target.value)}}>6</button>
            <button className="global" type="button" value="-"  onClick={(e)=>{this.btnHandler(e.target.value)}}>-</button>
          </div>
          <div className="third-row">
              <button className="global" type="button" value="1"  onClick={(e)=>{this.btnHandler(e.target.value)}}>1</button>
              <button className="global" type="button" value="2"  onClick={(e)=>{this.btnHandler(e.target.value)}}>2</button>
              <button className="global" type="button" value="3"  onClick={(e)=>{this.btnHandler(e.target.value)}}>3</button>
              <button className="global" type="button" value="+"  onClick={(e)=>{this.btnHandler(e.target.value)}}>+</button>
          </div>
          <div className="fourth-row">
              <button className="global" type="button" value="0"    onClick={(e)=>{this.btnHandler(e.target.value)}}>0</button>
              <button className="global" type="button" value="."    onClick={(e)=>{this.btnHandler(e.target.value)}}>.</button>
              <button className="green expand" type="button" value="=" onClick={(e)=>{this.btnHandler(e.target.value)}}>=</button>

          </div>
        </div>
        );
    }
}


export default KeyPadComponent;
