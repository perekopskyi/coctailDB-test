class Requests {

  _domain = 'https://www.thecocktaildb.com/api/json/v1/1/';

  getPath(item) {
    return `${this._domain}${item}`;
  }
}

export default Requests;