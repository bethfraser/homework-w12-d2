var React = require('react');
var CountriesSelect = require('./CountriesSelect.jsx');
var CountryDisplay = require('./CountryDisplay.jsx');
var BordersDisplay = require('./BordersDisplay.jsx');


var CountriesBox = React.createClass({

  getInitialState: function(){
    return { countries: [], currentCountry: null };
  },

  componentDidMount: function(){
    var url = "https://restcountries.eu/rest/v1/all";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      var data = JSON.parse(request.responseText);
      this.setState({countries: data})
    }.bind(this);
    request.send(null);
  },

  changeCountry: function(country){
    this.setState({currentCountry: country});
  },

  render: function(){
    return(
      <div>
      <h3>Countries Box</h3>
      <CountriesSelect countries={this.state.countries} onChooseCountry={this.changeCountry}></CountriesSelect>
      <CountryDisplay country={this.state.currentCountry}></CountryDisplay>
      <BordersDisplay countries={this.state.countries} country={this.state.currentCountry} onButtonClick={this.changeCountry}></BordersDisplay>
      </div>
      );
  }

});




module.exports = CountriesBox;