
import ReactGA from 'react-ga';
import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (

            <section class="col-12">
                <div class="mx-auto">
                    <div class="container">
                        <header class="text-center">
                            <h2 class="text-uppercase">Contact Me</h2>
                            <hr className="normal-hr"></hr>
                        </header> 
                        <div className="container-fluid">
                        <div className="row">
                            <div className="text-muted col-md-4 text-left mt-5">
                                <i class="fas fa-phone fa-sm"></i>&nbsp;Mobile No: +254708197333<br></br>
                                <i class="far fa-envelope fa-sm"></i>&nbsp;Email: savalijey@gmail.com
                            </div>
                            <div className="col-md-4 text-md-center mt-5">
                                <a href="https://github.com/dev-jey"  onClick={()=>ReactGA.event({
                                                                        category: 'Viewing',
                                                                        action: 'Github Profile on footer' })}
                                target="_blank" rel="noopener noreferrer" className="text-dark"><i class="fab fa-github fa-2x p-1"></i></a>

                                <a href="https://www.linkedin.com/in/devjey/" onClick={()=>ReactGA.event({
                                                                        category: 'Viewing',
                                                                        action: 'LinkedIn Profile on footer' })}
                                 target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin fa-2x p-1"></i></a>
                                <a href="https://stackoverflow.com/users/10687724/jey-savali/" onClick={()=>ReactGA.event({
                                                                        category: 'Viewing',
                                                                        action: 'StackOverflow Profile on footer' })}
                                 target="_blank" rel="noopener noreferrer"><i class="fab fa-stack-overflow fa-2x p-1" style={{color:'orange'}}></i></a>
                                 </div>
                            <div className="text-left text-muted col-md-4 mt-5">
                                <i>"The harder you work for something, the greater you'll feel when you achieve it."<br></br>
                                -- Anonymous</i>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="text-center text-muted">&copy; 2019. James Savali</div>
                <br></br>
            </section>
        )
    }
}

export default Contact
