import React, {Component} from 'react';
import './conversor.css';

export default class Conversor extends Component {
  constructor(props){
  	super(props);

  	this.state = {
  		moedaA_valor: "",
  		moedaB_valor: 0,
  	}

  	this.converter = this.converter.bind(this);
  }

  converter(){
  	let de_para = `${this.props.moedaA}_${this.props.moedaB}`;

  	let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=9b4651e1db416fa60080`;

  	fetch(url).then(res=>{
  		return res.json();
  	}).then(json=>{
  		let cotacao = json[de_para];
  		let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2);
  		this.setState({moedaB_valor});
  	})
  }

  render(){
    return (
      <div className="conversor">
      	<h2>{this.props.moedaA} para {this.props.moedaB}</h2>
      	<input type="text" onChange={(event)=>{this.setState({moedaA_valor:event.target.value})}} placeholder="Entre com o valor"></input>
      	<button type="button" onClick={this.converter}>Converter</button>
      	<h2>Valor convertido: {this.state.moedaB_valor}</h2>
      </div>
    );    
  }
}