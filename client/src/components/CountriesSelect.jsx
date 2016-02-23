var React = require('react');

var CountriesSelect = React.createClass({

  handleChange: function(e){
    e.preventDefault();
    var newIndex = e.target.value;
    var newCountry = this.props.countriesForSelect[newIndex];
    this.props.onChooseCountry(newCountry);
  },

  render: function(){

    var countryOptions = this.props.countriesForSelect.map(function(country, index){
      return(
        <option value={index} key={country.alpha3Code}>{country.name}</option>
      );
    }.bind(this));

    return(
      <div>
      <select onChange={this.handleChange}>
      <option>Choose a country: </option>
      {countryOptions}
      </select>
      </div>
    )
  }
});

module.exports = CountriesSelect;