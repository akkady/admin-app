import React  from 'react'; 
import CategorieService from '../Api/Service';

class AddCategorie extends React.Component{

    categorie  = {
        nomCategorie :'',
        slag :'',
    }
    constructor(props) {
        super(props);
        this.state = {
          item: this.categorie
        };
        this.AddCategorie = this.AddCategorie.bind(this);
      }
      AddCategorie = (e) => {
        e.preventDefault();
        let categorie = {nomCategorie: this.state.nomCategorie, slag: this.state.slag};
        CategorieService.addCategorie(categorie)
            .then(res => {
                
                this.props.history.push('AdminMain/categories');
            });

    }
    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });
      render(){
        const {item} = this.state;

      return (
        <div className="card ">
       <div className="card shadow mb-3">
          <div className="card-header py-3">
              <p className="text-primary m-0 font-weight-bold">Ajouter Categorie</p>
          </div>
          <div className="card-body">
              <form>
                  <div className="form-row">
                      <div className="col">
                          <div className="form-group">
                            <label htmlFor="cateroriername"><strong>Categorie Name</strong></label><input className="form-control" type="text" placeholder="categorie.name" name="nomCategorie" value={this.state.nomCategorie} onChange={this.onChange}/>
                          </div>
                      <div>
                          <div className="form-group"><label htmlFor="Slag"><strong>Slag</strong></label><input className="form-control" type="text" placeholder="Slag" name="slag" value={this.state.slag} onChange={this.onChange}/></div>
                        
                       </div>
                       <div></div>
                      </div>
                  </div>
                  <div className="form-group"><button className="btn btn-primary btn-sm" type="submit"  onClick={this.AddCategorie}>Ajout</button></div>
              </form>
          </div>
       </div>
      
       </div>
      );
    }
    }
    export default AddCategorie;
   
