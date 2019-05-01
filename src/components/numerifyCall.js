import React from 'react';

const API_KEY = `${process.env.REACT_APP_NUMVERIFY_API_KEY}`


class NumerifyCall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resp: []
    };
  }

  fetchFirst(phoneQuery){
    let that = this;
    if (phoneQuery){
      fetch('http://apilayer.net/api/validate?access_key='+API_KEY+'&number='+phoneQuery+'&country_code=&format=1').then(function (response){
        return response.json();
      }).then(function (result){
        console.log(result)
      });
    }
  }

  componentWillMount() {
    this.fetchFirst(19144839583)
  }

    render() { 
      return <span > API call here < /span>
    }
}

export default NumerifyCall;