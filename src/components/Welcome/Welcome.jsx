import React, { Component } from 'react';
import './Welcome.css';
import ReactGA from 'react-ga';

export class Welcome extends Component {
    render() {
        return (
            <section className="intro text-center" id="title-section">
                <div className="title-text col-sm-10 col-sm-12 col-lg-12">
                    <div>
                        <img src="https://res.cloudinary.com/dw675k0f5/image/upload/v1586256481/storo/imageedit_1_2747973192.png"
                            width="200"
                            height="200"
                            className="mx-auto d-block img-responsive"
                            alt="" />
                        <div class="rank-label-container">
                            <label htmlFor="file-upload" class="rank-label">
                                <img src="https://res.cloudinary.com/dw675k0f5/image/upload/v1570648506/flag.png" width="20" alt="" />
                            </label>
                        </div>
                    </div>
                    <i>Oh! Hello, Nice to meet you</i>
                        <div className="col-md-4 text-center mt-2 mx-auto">
                                <h4>James Savali</h4>
                                <i className="fas fa-phone fa-sm"></i>&nbsp;Mobile No: +254708197333<br></br>
                                <i class="far fa-envelope fa-sm"></i>&nbsp;Email: savalijey@gmail.com
                            </div>
                        <div className="col-md-4 text-center mt-2 mx-auto">
                                <a href="https://github.com/dev-jey" onClick={()=>ReactGA.event({
                                                                        category: 'Viewing',
                                                                        action: 'Github Profile' })}
                                  target="_blank" rel="noopener noreferrer" className="text-dark"><i class="fab fa-github-square fa-4x p-2" style={{color: 'silver'}}></i></a>

                                <a href="https://www.linkedin.com/in/devjey/"  onClick={()=>ReactGA.event({
                                                                        category: 'Viewing',
                                                                        action: 'LinkedIn Profile' })}
                                target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin fa-4x p-2"></i></a>
                                <a href="https://stackoverflow.com/users/10687724/jey-savali/" onClick={()=>ReactGA.event({
                                                                        category: 'Viewing',
                                                                        action: 'StackOverflow Profile' })} 
                                  target="_blank" rel="noopener noreferrer"><i class="fab fa-stack-overflow fa-4x p-2"  style={{color: 'orange'}}></i></a>
                                
                            </div>

                    <h4 className="title ">
          <label class="typewrite" data-period="2000" data-type='[ "Innovative", "passionate", "Creative" ]'>
                            <span class="wrap"></span>
                        </label></h4>
                </div>
            </section>
        )
    }
}

export default Welcome
