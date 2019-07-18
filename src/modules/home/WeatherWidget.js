import React from 'react';
import { connect } from 'react-redux';
import {fetchByCity as fetchForecast } from '../../actions/forecast';
import {fetchAll as fetchCities } from '../../actions/city';

class WeatherWidget extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      days: 5,
      selectedCity: null
    }
  }

  componentWillMount (){
    this.props.fetchCities();
  }

  handleDays = (e)=>{
    e.persist();
    this.setState(()=>({days: e.target.value}));
  }
  
  handleCity = (e)=>{
    e.persist();
    this.setState(()=>({selectedCity: e.target.value}));
  }
  
  render(){   
    console.log(this.state); 
    const {cities} = this.props;
    return (
      <form className="form" >
        <select
          className="select"    
          onChange={this.handleCity}
        >
          <option>Select City</option>
          {cities.length > 0 && cities.map((elm,_)=>(
            <option key={_}>{elm.name +','+ elm.country}</option>
          ))} 
        </select>
        <select
          className="select"   
          onChange={this.handleDays}
        >
          <option value={1}>1</option>          
          <option value={2}>2</option>          
          <option value={3}>3</option>          
          <option value={4}>4</option>          
          <option value={5}>5</option>          
        </select>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  forecast: state.forecast.entities,
  cities: state.city.entities
})

const mapDispatchToProps = {
  fetchForecast,
  fetchCities
};

export default  connect(mapStateToProps, mapDispatchToProps)(WeatherWidget);