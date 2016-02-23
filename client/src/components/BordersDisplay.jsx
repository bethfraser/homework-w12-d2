var React = require('react');

var BordersDisplay = React.createClass({

  handleClick: function(event){
    var countryCode = event.target.innerText;

    for(var country of this.props.countries){
      if(country.alpha3Code === countryCode){
        var newCountry = country;
      }
    }

    this.props.onButtonClick(newCountry);
  },

  render: function(){

    var bordersView = function(){
      return( <p>None</p> );
    }

    var title;

    if(this.props.country != null && this.props.country.borders.length > 0){

      title = "Borders";
      var borders = this.props.country.borders;

      bordersView = borders.map(function(border, index){
        return(
          <li key={index}><button onClick={this.handleClick}>{border}</button></li>
          )
      }.bind(this))

    }



    return(
      <section>
      <h4>{title}</h4>
      <ul>
      {bordersView}
      </ul>
      </section>
      )
  }
});


module.exports = BordersDisplay;