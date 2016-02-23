var React = require('react');

var RegionSelect = React.createClass({

  getInitialState: function(){
    return {selectedIndex: null}
  },

  handleChange: function(e){
    e.preventDefault();
    var newRegion = e.target.value;
    this.props.onChooseRegion(newRegion);
  },

  render: function(){

    var regionOptions = this.props.regions.map(function(region, index){
      return(
        <option key={index}>{region}</option>
      );
    }.bind(this));

    return(
      <div>
      <select value={this.state.selectedIndex} onChange={this.handleChange}>
      <option>Filter by region: </option>
      {regionOptions}
      </select>
      </div>
    )
  }
});

module.exports = RegionSelect;