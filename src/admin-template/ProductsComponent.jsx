import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductsComponenet() {
    return (
        <div className="container-fluid">
             <h3 className="page-title row"> Products</h3>
                <div className="row">
                        <div className="col-md-12">
                        <div className="navbar navbar-light bg-light">
                                <div className="container-fluid">
                                 <Link to="/new-product"  className="btn btn-success" >Add New Product</Link>
                                        <form className="d-flex" >
                                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                                <button className="btn btn-outline-success" type="submit">Search</button>
                                        </form>
                                </div>
                                </div>
                <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                    <table className="table my-0" id="dataTable">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>details</th>
                                <th>price</th>
                                <th>image</th>        
                           </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td >TV 1</td>
                                <td>50 inch screen, Smart TV, 4K</td>
                                <td>$867.99</td>
                                <td> <img src="assets/img/PRODUCT/1.jpg" width="100" height="100"alt='product img'></img></td>
                                <td>
                                    <Link to="" className="btn btn-sm btn-primary">
                                    <span className="hidden-xs hidden-sm">View</span></Link>
                                </td>
                            </tr>  
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>details</th>
                                <th>price</th>
                                <th>image</th> 
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="row">
                    <div className="col-md-6 align-self-center">
                        <p id="dataTable_info" className="dataTables_info" role="status" aria-live="polite">Showing 1 to 10 of 27</p>
                    </div>
                    <div className="col-md-6">
                        <nav className="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                            <ul className="pagination">
                                <li className="page-item disabled"><Link className="page-link" to="/#" aria-label="Previous"><span aria-hidden="true">&#171;</span></Link></li>
                                <li className="page-item active"><Link className="page-link" to="/#">1</Link></li>
                                <li className="page-item"><Link className="page-link" to="/#">2</Link></li>
                                <li className="page-item"><Link className="page-link" to="/#">3</Link></li>
                                <li className="page-item"><Link className="page-link" to="/#" aria-label="Next"><span aria-hidden="true">&#188;</span></Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>          
             </div>        
        </div>
    )
}