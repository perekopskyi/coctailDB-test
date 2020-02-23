import React, { Component } from 'react';
import './content.css';
import Requests from '../api/requests';
import ApiEndpoints from '../api/endpoints';

const getcoctailList = () => {
  const request = new Requests();
  const url = request.getPath(ApiEndpoints.COCTAILS);

  return fetch(url)
    .then(request => request.json())
    .then(result => result)
}

function Coctail(props) {
  const drinks = props.coctails;

  return (
    <div className="coctails">
      {
        drinks.map(drink =>
          <div key={drink.idDrink} className="card">
            <img src={drink.strDrinkThumb} />
            <p>{drink.strDrink}</p> 
          </div>
        )
      }
    </div>
  )
}

class Content extends Component {

  state = {
    coctails: []
  }

  componentDidMount() {
    const list = getcoctailList();
    console.log('list: ', list);

    list.then(drinksList => {
      const coctailsList = drinksList.drinks;
      if (coctailsList && coctailsList !== null) {
        this.setState({
          coctails: coctailsList
        })
      }
    })
    
  }

  render() {
    const {coctails} = this.state;

    return (
      <div className="content">
        <h2 className="category_title">Ordinary Drink</h2>
        <Coctail coctails={coctails} />
      </div>
    )
  }
}

export default Content;