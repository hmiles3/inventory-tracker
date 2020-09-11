import axios from "axios";

export default {
  getMenu: function(){
    return axios.get("https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?xml=")
  },
  getDataBase: function(){
    return axios.get("/data");
  },
  getDataPoint: function(id){
    return axios.get("/data/" + id)
  }
}
