import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { fetchByCity as fetchForecast } from '../../actions/forecast';
import { fetchAll as fetchCities } from '../../actions/city';
import { averageBy, averageByDate } from '../../selectors/weather_prep';

class WeatherWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 5,
      selectedCity: null
    }
  }

  componentWillMount() {
    this.props.fetchCities();
  }

  handleDays = (e) => {
    e.persist();
    this.setState(() => ({ days: parseInt(e.target.value, 10) }));
  }

  handleCity = (e) => {
    e.persist();
    this.setState(() => ({ selectedCity: e.target.value }));
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.fetchForecast(this.state.selectedCity);
  }

  render() {    
    const { cities, forecast } = this.props;
    const {selectedCity }= this.state;    
    const prep = forecast.length>0 && averageByDate(forecast);
    console.log(prep);
    return (
      <div>
        <form className="form form--inline" onSubmit={this.onSubmit}>
          <select
            className="select"
            onChange={this.handleCity}
          >
            <option>Select City</option>
            {cities.length > 0 && cities.map((elm, _) => (
              <option key={_} value={elm.name + ',' + elm.country}>{elm.name}</option>
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
          <button className="button">Get Forecast</button>
        </form>
        <h4>{selectedCity && selectedCity}</h4>
        <div className="list-header">            
            {prep && Object.keys(prep).map((val)=>(
              <div>{val}</div>
            ))}                        
        </div>        
        <div className="list-body">
        
          {prep && prep.map((elm)=>(
            <div>{elm.temp}</div>
          ))}
        
        </div>
      </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(WeatherWidget);