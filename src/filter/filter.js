import React, { Component } from 'react';
import './filter.css';
import Requests from '../api/requests';
import ApiEndpoints from '../api/endpoints';

const getCoctails = () => {

  const requests = new Requests();
  const url = requests.getPath(ApiEndpoints.FILTERS);

  return fetch(url)
    .then(request => request.json())
    .then(result => result);
}


function RenderFilters(props) {
  const filters = props.filters;
  const items = filters.map((filter, index) =>
    <label key={index}>
      <input className="checkbox" type="checkbox" checked />{filter}
    </label>);
  
  return (<div>{items}</div>)
}

class Filter extends Component {

  state = {
    filters: [],
    activeFiltersIndexes: []
  }

  strCategory(array) {
    const list = array.drinks;
    if (list && list !== null) {
      return list.map(element => element.strCategory);
    } 
    return [];
  }

  componentDidMount() {
    const promise = getCoctails();
    const filtersPromise = promise.then(this.strCategory);
    filtersPromise.then((filters) => {
      this.setState({filters: filters})
    })
  }


  render() {
    const { filters } = this.state;

    return (
      <div className="filter">
        <div className="checkboxes">     
          <RenderFilters filters={filters} />
        </div>
        
        <button>Apply</button>
        
      </div>
    )
  }
}

export default Filter;