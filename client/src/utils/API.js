import axios from 'axios';

export default {
	getUnits: function(user_id){
		return axios.post("api/books/", user_id);
	}
}