import React, { Component } from 'react';
import calculatorImg from "../../calculator.png";

class Calculator extends Component {
  constructor() {
    super();
  
    this.state = {
      header: "Calculator",
      display: '0',
      operator: '',
      temp: 0,
      resetDisplay: false
    }
  }

  updateHeader(val) {
    this.setState({
      header: val
    })
  }

  setDisplay(num) {
    var display;
    (this.state.display === '0') ? (display = num) : (display = this.state.display + num);
    this.setState({
      display: (this.state.display.length < 13 ? display : this.state.display)
    })
  }

  setOperator(operator) {
    if (!this.state.operator) {
      this.setState({
        operator: operator,
        temp: parseInt(this.state.display),
        display: "0"
      })
    }
  }

  calculate() {
    if (!this.state.operator) {
      return;
    }

    var result;

    switch(this.state.operator) {
      case ('+'):
        result = this.state.temp + parseInt(this.state.display, 10);
        break;
      case ('-'):
        result = this.state.temp - parseInt(this.state.display, 10);
        break;
      case ('*'):
        result = this.state.temp * parseInt(this.state.display, 10);
        break;
      case ('/'):
        result = this.state.temp / parseInt(this.state.display, 10);
        break;
      default:
        break;
    }
  
    this.setState({
      display: result
    });
  }

  clearDisplay() {
    this.setState({
      header: "Calculator",
      display: '0',
      operator: '',
      temp: 0,
      resetDisplay: false
    });
  }

  render() {
    return (
        <div id="calculator-container">
        <input onChange={ (e)=> this.updateHeader(e.target.value) } id="header-input"/>
        <h1 id="header"> {this.state.header} </h1>
        <img className="remove-highlight" src={calculatorImg} alt="calculator" />
        <div id="calculator-mask" className="remove-highlight">
          <div className="output">
            <span className="total">{this.state.display}</span>
          </div>
    
          <div onClick={(e)=> this.clearDisplay()}className="btn clear"></div>
    
          <div onClick={(e)=> this.setDisplay('0')} className="btn zero"></div>
          <div onClick={(e)=> this.setDisplay('1')} className="btn one"></div>
          <div onClick={(e)=> this.setDisplay('2')} className="btn two"></div>
          <div onClick={(e)=> this.setDisplay('3')} className="btn three"></div>
          <div onClick={(e)=> this.setDisplay('4')} className="btn four"></div>
          <div onClick={(e)=> this.setDisplay('5')} className="btn five"></div>
          <div onClick={(e)=> this.setDisplay('6')} className="btn six"></div>
          <div onClick={(e)=> this.setDisplay('7')} className="btn seven"></div>
          <div onClick={(e)=> this.setDisplay('8')} className="btn eight"></div>
          <div onClick={(e)=> this.setDisplay('9')} className="btn nine"></div>
    
          <div onClick={(e)=> this.calculate()} className="btn equal"></div>
          <div onClick={(e)=> this.setOperator('*')} className="btn multiply"></div>
          <div onClick={(e)=> this.setOperator('/')} className="btn divide"></div>
          <div onClick={(e)=> this.setOperator('-')} className="btn subtract"></div>
          <div onClick={(e)=> this.setOperator('+')} className="btn add"></div>
        </div>
      </div>
    );
  }
}

export default Calculator;