import React ,{Component } from 'react';
import {BrowserRouter as Router ,Link , NavLink, Route ,Switch } from 'react-router-dom';
import AddProductComponent from './AddProductComponent';
import CategorieProductComponent from './CategorieProductComponent';
import ClientsTableComponent from './ClientsTableComponent';


import DashboardComponent from './DashboardComponent';
import ProductsComponenet from './ProductsComponent';
import ProfileComponent from './ProfileCcomponent'

export default class AdminMain extends Component {

    
    render(){
        
        return (
            <Router>
            <div id="page-top">
            <div id="wrapper">
                <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
                    <div className="container-fluid d-flex flex-column p-0"><a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="/adminMain">
                            <div className="sidebar-brand-icon rotate-n-15"><i className="fas fa-laugh-wink"></i></div>
                            <div className="sidebar-brand-text mx-3"><span>Balouki-Chop</span></div>
                        </a>
                        <hr className="sidebar-divider my-0"/>
                        <ul className="nav navbar-nav text-light" id="accordionSidebar">
                            <li className="nav-item"><NavLink className="nav-link" to="/dashboard"><i className="fas fa-tachometer-alt"></i><span>Dashboard</span></NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/profile"><i className="fas fa-user"></i><span>Profile</span></NavLink ></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/clients"><i className="far fa-user-circle"></i><span>Users</span></NavLink ></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/product"><i className="fas fa-shopping-basket"></i><span>Products</span></NavLink ></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/categories"><i className="fas fa-cubes"></i><span>Categories</span></NavLink ></li>
                        </ul>
                        <div className="text-center d-none d-md-inline"><button className="btn rounded-circle border-0" id="sidebarToggle" type="button"></button></div>
                    </div>
                </nav>
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
                            <div className="container-fluid"><button className="btn btn-link d-md-none rounded-circle mr-3" id="sidebarToggleTop" type="button"><i className="fas fa-bars"></i></button>
                                <form className="form-inline d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                    <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..."/>
                                        <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search"></i></button></div>
                                    </div>
                                </form>
                                <ul className="nav navbar-nav flex-nowrap ml-auto">
                                    <li className="nav-item dropdown d-sm-none no-arrow"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="/#"><i className="fas fa-search"></i></a>
                                        <div className="dropdown-menu dropdown-menu-right p-3 animated--grow-in" aria-labelledby="searchDropdown">
                                            <form className="form-inline mr-auto navbar-search w-100">
                                                <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..."/>
                                                    <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search"></i></button></div>
                                                </div>
                                            </form>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown no-arrow mx-1">
                                        <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="/#"><span className="badge badge-danger badge-counter">3+</span><i className="fas fa-bell fa-fw"></i></a>
                                            <div className="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in">
                                                <h6 className="dropdown-header">alerts center</h6><a className="d-flex align-items-center dropdown-item" href="/#">
                                                    <div className="mr-3">
                                                        <div className="bg-primary icon-circle"><i className="fas fa-file-alt text-white"></i></div>
                                                    </div>
                                                    <div><span className="small text-gray-500">December 12, 2019</span>
                                                        <p>A new monthly report is ready to download!</p>
                                                    </div>
                                                </a><a className="d-flex align-items-center dropdown-item" href="/#">
                                                    <div className="mr-3">
                                                        <div className="bg-success icon-circle"><i className="fas fa-donate text-white"></i></div>
                                                    </div>
                                                    <div><span className="small text-gray-500">December 7, 2019</span>
                                                        <p>$290.29 has been deposited into your account!</p>
                                                    </div>
                                                </a><a className="d-flex align-items-center dropdown-item" href="/#">
                                                    <div className="mr-3">
                                                        <div className="bg-warning icon-circle"><i className="fas fa-exclamation-triangle text-white"></i></div>
                                                    </div>
                                                    <div><span className="small text-gray-500">December 2, 2019</span>
                                                        <p>Spending Alert: We've noticed unusually high spending for your account.</p>
                                                    </div>
                                                </a><a className="text-center dropdown-item small text-gray-500" href="/#">Show All Alerts</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown no-arrow mx-1">
                                        <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="/#"><i className="fas fa-envelope fa-fw"></i><span className="badge badge-danger badge-counter">7</span></a>
                                            <div className="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in">
                                                <h6 className="dropdown-header">alerts center</h6><a className="d-flex align-items-center dropdown-item" href="/#">
                                                    <div className="dropdown-list-image mr-3" ><img className="rounded-circle" src="assets/img/avatars/avatar4.jpeg" alt="gg" />
                                                        <div className="bg-success status-indicator"></div>
                                                    </div>
                                                    <div className="font-weight-bold">
                                                        <div className="text-truncate"><span>Hi there! I am wondering if you can help me with a problem I've been having.</span></div>
                                                        <p className="small text-gray-500 mb-0">Emily Fowler - 58m</p>
                                                    </div>
                                                </a><a className="d-flex align-items-center dropdown-item" href="/#">
                                                    <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="assets/img/avatars/avatar2.jpeg"alt="gg"/>
                                                        <div className="status-indicator"></div>
                                                    </div>
                                                    <div className="font-weight-bold">
                                                        <div className="text-truncate"><span>I have the photos that you ordered last month!</span></div>
                                                        <p className="small text-gray-500 mb-0">Jae Chun - 1d</p>
                                                    </div>
                                                </a><a className="d-flex align-items-center dropdown-item" href="/#">
                                                    <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="assets/img/avatars/avatar3.jpeg" alt="gg"/>
                                                        <div className="bg-warning status-indicator"></div>
                                                    </div>
                                                    <div className="font-weight-bold">
                                                        <div className="text-truncate"><span>Last month's report looks great, I am very happy with the progress so far, keep up the good work!</span></div>
                                                        <p className="small text-gray-500 mb-0">Morgan Alvarez - 2d</p>
                                                    </div>
                                                </a><a className="d-flex align-items-center dropdown-item" href="/#">
                                                    <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="assets/img/avatars/avatar5.jpeg" alt="gg"/>
                                                        <div className="bg-success status-indicator"></div>
                                                    </div>
                                                    <div className="font-weight-bold">
                                                        <div className="text-truncate"><span>Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</span></div>
                                                        <p className="small text-gray-500 mb-0">Chicken the Dog · 2w</p>
                                                    </div>
                                                </a><a className="text-center dropdown-item small text-gray-500" href="/#">Show All Alerts</a>
                                            </div>
                                        </div>
                                        <div className="shadow dropdown-list dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown"></div>
                                    </li>
                                    <div className="d-none d-sm-block topbar-divider"></div>
                                    <li className="nav-item dropdown no-arrow">
                                        <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="/#"><span className="d-none d-lg-inline mr-2 text-gray-600 small">Valerie Luna</span><img className="border rounded-circle img-profile" src="./assets/img/avatars/avatar1.jpeg" alt="gg" /></a>
                                            <div className="dropdown-menu shadow dropdown-menu-right animated--grow-in"><Link className="dropdown-item" to="/profile" ><i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Settings</Link>
                                                <div className="dropdown-divider"></div><a className="dropdown-item" href="/#"><i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Logout</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    <div className="container-fluid">
                        <Switch>
                            <Route path = "/dashboard" component = {DashboardComponent} />
                            <Route path = "/profile" component = {ProfileComponent} />
                            <Route path = "/clients" component = {ClientsTableComponent} />
                            <Route path = "/product" component = {ProductsComponenet} />
                            <Route path = "/new-product" component = {AddProductComponent} /> 
                            <Route path = "/categories" component = {CategorieProductComponent} />
                        </Switch>
                    </div>
            </div>
                    <footer className="bg-white sticky-footer">
                        <div className="container my-auto">
                            <div className="text-center my-auto copyright"><span>Copyright © Brand 2021</span></div>
                        </div>
                    </footer>
                     </div><a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up"></i></a>
            </div>  
        </div>
        </Router>
        )
    }

}