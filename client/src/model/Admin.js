import Service from '../service/Service'

// Model for interacting with service. Handles admin authentication
class Admin {
	static loginAdmin(username, password){
    var route = '/login'
    const data = {
      username,
      password
    }
    return Service.post(route, data).then(function(user){
      return user
		})
	}
}

export default Admin
