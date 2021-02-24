
import React, { useState }  from 'react'; 
import { useHistory } from 'react-router-dom';
import CategorieService from './CategorieService';

function AddCategorie () {

    const history=useHistory();
    const [unsaved,setUnsaved]= useState(false)

    const [nomCategory, setNomCategory] = useState('')
    const [slag, setSlag ] = useState('')
    
    const formData = new FormData();
    formData.append("nomCategorie",nomCategory);
    formData.append("slag",slag);

    const saveProduct=()=>{
        CategorieService.addCategorie(formData)
        .then(history.push('/adminMain/categories'))
        .catch(err=>setUnsaved(true))
    }
    
      return (
        <div className="card ">
       <div className="card shadow mb-3">
          <div className="card-header py-3">
              <p className="text-primary m-0 font-weight-bold">Add Categorie</p>
          </div>
          <div className="card-body">
                <div className="form-row">
                    <div className="col">
                        <div className="form-group">
                        <label htmlFor="cateroriername"><strong>Categorie Name</strong></label><input className="form-control" type="text" placeholder="category name" name="nomCategorie" onChange={(event)=>setNomCategory(event.target.value)} />
                        </div>
                    <div>
                        <div className="form-group"><label htmlFor="Slag"><strong>Slag</strong></label><input className="form-control" type="text" placeholder="Slag" onChange={(event)=>setSlag(event.target.value)}/></div>                    
                    </div>
                    <div>
                    { unsaved && <div className='alert alert-warning' > Something goes wrong please check your inputs </div>}  
                    </div>
                    </div>
                </div>
                <div className="form-group"><button className="btn btn-primary btn-sm" type="button" >save</button></div>
          </div>
       </div>
      
       </div>
      );
}
    export default AddCategorie;
   
