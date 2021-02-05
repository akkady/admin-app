
import React  from 'react'; 

export default  function AddProductComponent  (){

   
      return (
        <div className="card ">
       <div className="card shadow mb-3">
          <div className="card-header py-3">
              <p className="text-primary m-0 font-weight-bold">Ajout Produit</p>
          </div>
          <div className="card-body">
              <form>
                  <div className="form-row">
                      <div className="col">
                          <div className="form-group">
                            <label htmlFor="username"><strong>Name</strong></label><input className="form-control" type="text" placeholder="user.name" name="name"/>
                          </div>
                      <div>
                          <div className="form-group"><label htmlFor="détails"><strong>Détails</strong></label><input className="form-control" type="text" placeholder="détails" name="détails"/></div>
                          <div className="form-group"><label htmlFor="description"><strong>description</strong><br/></label><textarea className="form-control" rows="3" name="description"></textarea></div>
                          <div className="form-group"><label htmlFor="Image"><strong>Image</strong></label><input className="form-control" type="file" placeholder="img" name="img"/>
                          
                          </div>
                          <div className="form-group"><label htmlFor="Quantity"><strong>Quantity</strong></label><input className="form-control" type="text" placeholder="5" name="last_name"/></div>
                       </div>
                       <div></div>
                      </div>
                  </div>
                  <div className="form-group"><button className="btn btn-primary btn-sm" type="submit">Ajout</button></div>
              </form>
          </div>
       </div>
      
       </div>
      );
    }
