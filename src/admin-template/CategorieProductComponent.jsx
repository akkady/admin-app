import React from 'react';
import { Link } from 'react-router-dom';

export default function CategorieProductComponent(){

    return(
         <div className="card shadow">
            <div className="card-header ">
                <p className="text-primary m-0 font-weight-bold">Employee Info</p>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6 text-nowrap">
                        <div id="dataTable_length" className="dataTables_length" aria-controls="dataTable"><label>Show&nbsp;<select className="form-control form-control-sm custom-select custom-select-sm">
                                    <option value="10" defaultValue="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select>&nbsp;</label></div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-md-right dataTables_filter" id="dataTable_filter"><label><input type="search" className="form-control form-control-sm" aria-controls="dataTable" placeholder="Search"/></label></div>
                    </div>
                </div>
                <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                    <table className="table my-0" id="dataTable">
                        <thead>
                            <tr>
                                <th>ID Categorie </th>
                                <th>Categorie Name</th>
                                <th>Slug</th> 
                                 
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Laptop</td>
                                <td>laptop</td>                
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Descktop</td>
                                <td>descktop</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Mobile Phone</td>
                                <td>mobile-phone </td>                            
                            </tr>
                        
                        </tbody>                                                       
                        <tfoot>
                            <tr>
                                <td><strong>ID</strong></td>
                                <td><strong>Name</strong></td>
                                <td><strong>Slug</strong></td>
                                
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