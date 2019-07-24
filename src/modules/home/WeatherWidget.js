import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { fetchByCity as fetchForecast } from '../../actions/forecast';
import { fetchAll as fetchCities } from '../../actions/city';
import { avgForecast } from '../../selectors/weather_prep';

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
    const { selectedCity } = this.state; 
    let forecastPrep = null;
    if (forecast.length > 0) {
      forecastPrep = avgForecast(forecast)
      forecastPrep.data= forecastPrep.data.slice(0,this.state.days)
      forecastPrep.header= forecastPrep.header.slice(0,this.state.days)
    }

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
            value={this.state.days}
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
          {forecastPrep ? (forecastPrep.header.map((val) => (
            <div>{val}</div>
          ))):(<div>No city selected</div>)}
        </div>
        <div className="list-body">
          <div className="list-item">
            {forecastPrep ? (Object.values(forecastPrep.data).map((elm, _) => (
              <div>
              <div key={_}><b>Temp</b> {elm.temp.toFixed(2)} °C</div>
              <div key={"max"+_}><b>Max</b> {elm.temp_max.toFixed(2)} °C</div>
              <div key={"min"+_}><b>Min</b> {elm.temp_min.toFixed(2)} °C</div>
              </div>
            ))) : (<div>{"Select a city to get the weather"}</div>)}
          </div>
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
