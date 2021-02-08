import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductsComponenet() {
    return (<div className="card shadow">
                <div className="card-header py-3">
                    <p className="text-primary m-0 font-weight-bold">Products</p>
                </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6 text-nowrap">
                        <Link to="/adminMain/new-product"  className="btn btn-success" ><i className="fas fa-plus-circle"></i> new product</Link>
                    </div>
                    <div className="col-md-6">
                        <div className="text-md-right dataTables_filter" id="dataTable_filter"><label><input type="search" className="form-control form-control-sm" aria-controls="dataTable" placeholder="Search"/></label></div>
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
    )
}