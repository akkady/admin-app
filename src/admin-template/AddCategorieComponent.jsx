
import React  from 'react'; 

export default  function AddCategorieComponent (){

   
      return (
        <div className="card ">
       <div className="card shadow mb-3">
          <div className="card-header py-3">
              <p className="text-primary m-0 font-weight-bold">New Categorie</p>
          </div>
          <div className="card-body">
              <form>
                  <div className="form-row">
                      <div className="col">
                          <div className="form-group">
                            <label htmlFor="username"><strong>id</strong></label><input className="form-control" type="number" placeholder="id categorie" name="idCategorie"/>
                          </div>
                      <div>
                          <div className="form-group"><label htmlFor="détails"><strong>name</strong></label><input className="form-control" type="text" placeholder="categorie name" name="categorie"/></div>
                          <div className="form-group"><label htmlFor="Quantity"><strong>slug</strong></label><input className="form-control" type="text" placeholder="slug" name="slug"/></div>
                       </div>
                       <div></div>
                      </div>
                  </div>
                  <div className="form-group"><button className="btn btn-primary btn-sm" type="submit">save</button></div>
              </form>
          </div>
       </div>
      
       </div>
      );
    }
