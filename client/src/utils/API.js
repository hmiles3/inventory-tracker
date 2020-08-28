import axios from "axios";

export default {
  getMenu: function(){
    return axios.get("https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?xml=")
  }
}