
import axios from 'axios'

const get_all = 'http://localhost:8080/AdminMain/categories';
const ajout = 'http://localhost:8080/AdminMain/new-categorie';
const delt  = 'http://localhost:8080/AdminMain/categories';
const updat  = 'http://localhost:8080/AdminMain/profile';
const search = 'http://localhost:8080/AdminMain/categories';

class CategorieService {

    getAllCategorie(){
        return axios.get(get_all);
    }
    addCategorie(data) {
        return axios.post(ajout, data);
      }
      deleteCategorie(id){
       return  axios.delete(delt + '/' + id); 
      }
     afichePhoto(){
          return axios.get(updat );
      }
      updatePohtoAdmin(data,id){
          return axios.put(updat + '/' + id);
      }
     
      getPhoto(data, id){
         
          return axios.get( updat + '/' + id);
      }

}

 
 export default new CategorieService();