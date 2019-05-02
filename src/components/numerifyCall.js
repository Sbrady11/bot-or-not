import React from 'react';
import logoSub from '../assets/logo-sub.svg'

const API_KEY = `${process.env.REACT_APP_NUMVERIFY_API_KEY}`


class NumerifyCall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resp: [],
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit(this);
  }

  fetchFirst(phoneQuery){
    let that = this;
    if (phoneQuery){
      fetch('http://apilayer.net/api/validate?access_key='+API_KEY+'&number='+phoneQuery+'&country_code=&format=1').then(function (response){
        return response.json();
      }).then(function (result){
        that.setState({
          resp: result
          })
        console.log(that.state.resp)        
      });
    }
  }

  handleChange(event){
    this.setState({value: event.target.value})
  }

  handleSubmit(event){
    console.log('sent')    
    this.fetchFirst(this.state.value)
  }

  componentWillMount() {
    this.fetchFirst(19144839583)
  }

    render() { 
      return (
      <div className="numverifyResponse">
        <img src={logoSub} alt="logo-sub"/>
        <div>
          With more and more bots making phonecalls, you can never be too careful. With Bot or Not, verify the caller information before even answering!
        </div>

        <ul>
          <li>{this.state.resp.valid}</li>
          <li>{this.state.resp.number}</li>
          <li>{this.state.resp.carrier}</li>
          <li>{this.state.resp.line_type}</li>
          <li>{this.state.resp.country_code}</li>
        </ul>
        <div className="input">
          <form onSubmit={this.handleSubmit}>
            <label>
              <input className="textBox" type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input className="submit" type="submit" value="SEARCH" />
            </form>
        </div>
      </div>
      );
    }
}

export default NumerifyCall;