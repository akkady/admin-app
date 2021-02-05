import React, { Component } from 'react'

export default class LoginComponent extends Component {

    render (){
        return (
        <>
        <div className="bg-gradient-primary" style={{width:'100%' , height:'100'}}>
            <div className="container" style={{width:'100%' , height:'100'}}>
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-12 col-xl-10">
                        <div className="card shadow-lg o-hidden border-0 my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-flex">
                                        <div className="flex-grow-1 bg-login-image" style={{backgroundImage:" url(assets/img/dogs/image3.jpeg)"}}></div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h4 className="text-dark mb-4">Welcome Back!</h4>
                                            </div>
                                            <form className="user" action="/adminMain" >
                                                <div className="form-group"><input className="form-control form-control-user" type="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." name="email" /></div>
                                                <div className="form-group"><input className="form-control form-control-user" type="password" id="exampleInputPassword" placeholder="Password" name="password" /></div>
                                                <hr/>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <div className="form-check"><input className="form-check-input custom-control-input" type="checkbox" id="formCheck-1" /><label className="form-check-label custom-control-label" htmlFor="formCheck-1">Remember Me</label></div>
                                                    </div>
                                                </div>
                                                <hr/>
                                                <button className="btn btn-primary btn-block text-white btn-user" type="submit">Login</button>
                                            </form>
                                            <hr/>
                                            <div className="text-center"><a className="small" href="/forgot-password">Forgot Password?</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer className="bg-white sticky-footer">
            <div className="container my-auto">
                <div className="text-center my-auto copyright"><span>Copyright © BaloukiChop 2021</span></div>
            </div>
        </footer>
        </>
        )
    }
}