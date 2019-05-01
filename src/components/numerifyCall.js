import React from 'react';

const API_KEY = `${process.env.REACT_APP_NUMVERIFY_API_KEY}`
let phoneQuery = 9144839583

class NumerifyCall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resp: []
    };
  }

  fetchFirst(url){
    let that = this;
    if (url){
      fetch('http://apilayer.net/api/validate+?access_key='+API_KEY+'&number='+phoneQuery+'&country_code=&format=1').then(function (response){
        return response.json();
      }).then(function (result){
        console.log(result.data.children)
      });
    }
  }

    render() { 
      return <span > API call here < /span>
    }
}

export default NumerifyCall;