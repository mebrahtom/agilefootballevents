
// Module that sends requests to the backend
class Service {
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  // Get request that takes a route as parmeter (same as specified in backend for desired router)
  // Will return JSON file that is received from the associated router in the backend
  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT')
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST')
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE')
  }

  static xhr(route, params, verb) {
    const host = 'http://127.0.0.1:8000'
    const url = `${host}${route}`
    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );
    options.headers = Service.headers()
    return fetch(url,options).then((response) => {
      let json = response.json()
      if(response.ok) {
        return json
      }
      return json.then(err => {throw err})
    })
  }
}

export default Service
