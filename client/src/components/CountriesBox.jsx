var React = require('react');
var CountriesSelect = require('./CountriesSelect.jsx');
var RegionSelect = require('./RegionSelect.jsx');
var CountryDisplay = require('./CountryDisplay.jsx');
var BordersDisplay = require('./BordersDisplay.jsx');


var CountriesBox = React.createClass({

  getInitialState: function(){
    return { countries: [], currentCountry: null, regions: [], regionCountries: [] };
  },

  componentDidMount: function(){
    var url = "https://restcountries.eu/rest/v1/all";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      var data = JSON.parse(request.responseText);
      var regions = [];

      for(var country of data){
        var region = country.region;
        if(country.region === ""){
          region = "Other";
        }
        if(!regions.includes(region)){
          regions.push(region);
        }
      }

      this.setState({countries: data, regions: regions, regionCountries: data})
    }.bind(this);
    request.send(null);
  },

  changeCountry: function(country){
    this.setState({currentCountry: country});
  },

  changeRegion: function(region){
    var newCountryList = [];
    if(region === "Other"){
      region = ""
    }
    
    if(region == "Filter by region:"){
      newCountryList = this.state.countries;
    }
    else {
      for(var country of this.state.countries){
        if(country.region === region){
          newCountryList.push(country);
        }
      }
    }

    this.setState({regionCountries: newCountryList})
  },

  render: function(){
    return(
      <div>
      <h3>Countries Box</h3>
      <RegionSelect regions={this.state.regions} onChooseRegion={this.changeRegion}></RegionSelect>
      <CountriesSelect countries={this.state.countries} countriesForSelect={this.state.regionCountries} onChooseCountry={this.changeCountry}></CountriesSelect>
      <CountryDisplay country={this.state.currentCountry}></CountryDisplay>
      <BordersDisplay countries={this.state.countries} country={this.state.currentCountry} onButtonClick={this.changeCountry}></BordersDisplay>
      </div>
      );
  }
});

module.exports = CountriesBox;