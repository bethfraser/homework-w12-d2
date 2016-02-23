var React = require('react');

var CountryDisplay = React.createClass({

  render: function(){

    var countryView = function(){
      return
    }

    if(this.props.country != null){

      var country = this.props.country

      countryView = function(){
        return(
          <div>
          <h3>{country.name}</h3>
          <ul>
          <li>Capital: {country.capital}</li>
          <li>Population: {country.population}</li>
          <li>Region: {country.region}</li>
          </ul>
          </div>
          )
      }
    }

    return(
      <section>
      {countryView()}
      </section>
      )
  }
});


module.exports = CountryDisplay;