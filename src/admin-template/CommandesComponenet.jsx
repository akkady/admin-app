import React from 'react';
import { Link } from 'react-router-dom';

export default function CommandesComponenet() {
    return (<div className="card shadow">
                <div className="card-header py-3">
                    <p className="text-primary m-0 font-weight-bold">Commandes</p>
                </div>
            <div className="card-body">
               
                <div className="row">
                    <div></div>
                    <div className="col-md-6">
                        <div className="text-md-right dataTables_filter" id="dataTable_filter"><label><input type="search" className="form-control form-control-sm" aria-controls="dataTable" placeholder="Search"/></label></div>
                    </div>
                </div>
                <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                    <table className="table my-0" id="dataTable">
                        <thead>
                            <tr>
                                <th>id_Command</th>
                                <th>id_Client</th>
                                <th>email_Client</th>  
                                <th>numero_Cart</th>
                                <th>id_produit</th>
                                <th>qunatité</th>
                                <th>prix $</th>
                                <th>action</th>        
                           </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>23</td>
                                <td> raou@tech.uhp</td>
                                <td>1213343454545</td>
                                <td>65</td>
                                <td>2</td>
                                <td>234</td>
                                <td>
                                    <Link to="/accept" className="btn btn-sm btn-primary">
                                    <span className="hidden-xs hidden-sm">Accept</span></Link><br/>
                                    <Link to="/refuse" className="btn btn-danger">
                                    <span className="hidden-xs hidden-sm">Refuse</span></Link>
                                </td>
                            </tr>  
                            <tr>
                                <td>2</td>
                                <td>3</td>
                                <td> raou@tech.uhp</td>
                                <td>1213343454545</td>
                                <td>22</td>
                                <td>45</td>
                                <td>5678</td>
                                <td>
                                    <Link to="/accept" className="btn btn-sm btn-primary">
                                    <span className="hidden-xs hidden-sm">Accept</span></Link><br/>
                                    <Link to="/refuse" className="btn btn-danger">
                                    <span className="hidden-xs hidden-sm">Refuse</span></Link>
                                </td>
                            </tr>  
                            <tr>
                                <td>4</td>
                                <td>3</td>
                                <td> raou@tech.uhp</td>
                                <td>1213343454545</td>
                                <td>3</td>
                                <td>87</td>
                                <td>897</td>
                                <td>
                                    <Link to="/accept" className="btn btn-sm btn-primary">
                                    <span className="hidden-xs hidden-sm">Accept</span></Link><br/>
                                    <Link to="/refuse" className="btn btn-danger">
                                    <span className="hidden-xs hidden-sm">Refuse</span></Link>
                                </td>
                            </tr>  
                        </tbody>
                        <tfoot>
                            <tr>
                               <th>id_Command</th>
                                <th>id_Client</th>
                                <th>email_Client</th>  
                                <th>numero_Cart</th>
                                <th>id_produit</th>
                                <th>qunatité</th>
                                <th>prix $</th>
                                <th>action</th>  
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
