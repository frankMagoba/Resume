import React, { Component } from 'react';
import './Skills.css';

export class Skills extends Component {
    render() {
        return (
            <section class="col-12">
                <div class="mx-auto">
                    <div class="container">
                        <header class="mb-5 text-center">
                            <h2 class="text-uppercase">My Skills</h2>
                            <hr className="normal-hr"></hr>
                        </header>
                        <div class="row text-center mx-auto">
                            <div class="col-lg-3 col-md-6 ">
                                <div class="icon mb-3 mt-5"><i class="fab fa-python fa-5x"></i></div>
                                <h4 class="text-uppercase">Python</h4>
                                <p class="text-muted">I am proficient in python web frameworks, data analysis and general algorithms.</p>
                                Django
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                                Flask
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                                Data Science
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                                Data Scraping/mining
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 ">
                                <div class="icon mb-3 mt-5"><i class="fab fa-js fa-5x"></i></div>
                                <h4 class="text-uppercase">Javascript</h4>
                                <p class="text-muted">Am a PEAN full stack js developer. I have experience in both front and backend development.</p>
                                Node-Express
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                                React
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                                Angular
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                                Jquery and Vanilla Js
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "96%" }} aria-valuenow="96" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 ">
                                <div class="icon mb-3 mt-5"><i class="fab fa-java fa-5x"></i></div>
                                <h4 class="text-uppercase">Java</h4>
                                <p class="text-muted">Am well informed in OOP, and I can comfortably create a stand-alone app using java swing.</p>
                                Java
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 ">
                                <div class="icon mb-3 mt-5"><i class="fas fa-database fa-5x"></i></div>
                                <h4 class="text-uppercase">Database</h4>
                                <p class="text-muted">I have worked with both relational and non-relational database management systems.</p>
                                PostgreSQL
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "97%" }} aria-valuenow="97" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                                MySQL & SQLite
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                                MongoDB
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mx-auto text-center">
                            <div class="col-lg-3 col-md-6">
                                <div class="icon mb-3 mt-5"><i class="fab fa-aws fa-5x"></i></div>
                                <h4 class="text-uppercase">DevOps</h4>
                                <p class="text-muted">I have some substantial knowledge in server management, web hosting and maintenance.</p>
                                AWS
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                                GCP
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 ">
                                <div class="icon mb-3 mt-5"><i class="fab fa-bootstrap fa-5x"></i></div>
                                <h4 class="text-uppercase lined lined-compact">UI &amp; UX</h4>
                                <p class="text-muted">I have a lot of experience in developing user-friendly UIs, and using common templating engines.</p>
                                HTML
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "98%" }} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                                CSS & SASS
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "97%" }} aria-valuenow="97" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                                Templating engines
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "98%" }} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                                CSS frameworks(Bootstrap, Material & Semantic UI)
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "98%" }} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 ">
                                <div class="icon mb-3 mt-5"><i class="fas fa-users-cog fa-5x"></i></div>
                                <h4 class="text-uppercase lined lined-compact">Collaboration</h4>
                                <p class="text-muted">Using collaboration tools such as github, am able to work
                                 in a team amicably and develop a product under the agile methodology.</p>

                                Team work
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "97%" }} aria-valuenow="97" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>

                                CI/CD(Continous Integration/ Deployment)
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "98%" }} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>

                                Communication
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "96%" }} aria-valuenow="96" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 ">
                                <div class="icon mb-3 mt-5"><i class="fas fa-cube fa-5x"></i></div>
                                <h4 class="text-uppercase lined lined-compact">Testing, Linting & Debugging</h4>
                                <p class="text-muted">I write clean, linted and well tested code. I ensure
                                 I have a good maintenability rate, and a high test coverage.</p>
                                 Test Coverage
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                                Linting
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "94%" }} aria-valuenow="94" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                                Bug fixing
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Skills
