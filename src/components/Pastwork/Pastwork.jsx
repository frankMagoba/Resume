import React, { Component } from 'react';
import './Pastwork.css';
import ReactGA from 'react-ga';

export class Pastwork extends Component {
    render() {
        return (
            <div>
                <div class="p-5 p-work rounded mb-5">
                    <br></br><br></br>
                    <header class="mb-5 text-center">
                        <h2 class="text-uppercase">My Previous Works</h2>
                        <hr className="normal-hr"></hr>
                    </header>
                    <ul id="myTab2" role="tablist" class="nav nav-tabs nav-pills with-arrow lined flex-column flex-sm-row text-center">
                        <li class="nav-item flex-sm-fill">
                            <a id="home2-tab" data-toggle="tab" href="#home2" role="tab" aria-controls="home2" aria-selected="true" class="nav-link text-uppercase font-weight-bold mr-sm-3 rounded-0 active">Web Apps</a>
                        </li>
                        <li class="nav-item flex-sm-fill">
                            <a id="profile2-tab" data-toggle="tab" href="#profile2" role="tab" aria-controls="profile2" aria-selected="false" class="nav-link text-uppercase font-weight-bold mr-sm-3 rounded-0">Others</a>
                        </li>
                    </ul>
                    <div id="myTab2Content" class="tab-content">
                        <div id="home2" role="tabpanel" aria-labelledby="home-tab" class="tab-pane fade py-5 show active">
                            <div class="row">
                                <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
                                    <div class="bg-white rounded shadow-sm">
                                        <a href="https://res.cloudinary.com/dw675k0f5/image/upload/v1571825350/storo/fadhila.png">
                                            <img src="https://res.cloudinary.com/dw675k0f5/image/upload/v1571825350/storo/fadhila.png" alt="" class="img-fluid card-img-top" />
                                        </a>
                                        <div class="p-4">
                                            <h5 class="text-dark">Fadhila Network</h5>
                                            <p class="small"> A charity organization aimed at modernizing and improving how people help one another.</p>
                                            <p class="small text-muted mb-0">Key aspects</p>
                                            <ul class="small text-muted ml-3">
                                                <li>React, React apollo, apollo client</li>
                                                <li>Cloudinary, Bootstrap, Google places</li>
                                                <li>Postgres, Redis, Celery</li>
                                                <li>Django, API, graphene, graphql</li>
                                                <li>GCP compute engine</li>
                                                <li>Seperate admin portal</li>
                                            </ul>
                                            <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                                                <p class="small mb-0"><i class="fab fa-python mr-2"></i><i class="fab fa-react mr-2"></i> <span class="font-weight-bold">
                                                    <a href="https://github.com/dev-jey/fadhila/" onClick={() => ReactGA.event({
                                                        category: 'Visit Repo',
                                                        action: 'Fadhila Repo'
                                                    })}
                                                    >Github Repo</a>
                                                </span></p>
                                                <a href="https://fadhila.herokuapp.com" target="_blank" rel="noopener noreferrer" onClick={() => ReactGA.event({
                                                    category: 'Visit Site',
                                                    action: 'Fadhila Site'
                                                })}
                                                    class="badge badge-danger px-3 rounded-pill font-weight-normal">Visit Site</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
                                    <div class="bg-white rounded shadow-sm"><a href="https://res.cloudinary.com/dw675k0f5/image/upload/v1571825351/storo/Screenshot_from_2019-10-23_12-35-42.png">
                                        <img src="https://res.cloudinary.com/dw675k0f5/image/upload/v1571825351/storo/Screenshot_from_2019-10-23_12-35-42.png" alt="" class="img-fluid card-img-top" /></a>
                                        <div class="p-4">
                                            <h5 class="text-dark">Tembea</h5>
                                            <p class="small"> An application aimed at managing cabs and other travel needs at Andela.</p>
                                            <p class="small text-muted mb-0">Key aspects</p>
                                            <ul class="small text-muted ml-3">
                                                <li>Angular, angular-material</li>
                                                <li>Slack API</li>
                                                <li>External API integration</li>
                                                <li>Circle CI</li>
                                                <li>Rest API in express framework</li>
                                                <li>Node js, Redis, Postgres</li>
                                            </ul>
                                            <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                                                <p class="small mb-0"><i class="fab fa-angular mr-2"></i><i class="fab fa-node mr-2"></i><span class="font-weight-bold">
                                                    <a href="https://github.com/andela/tembea/" onClick={() => ReactGA.event({
                                                        category: 'Visit Repo',
                                                        action: 'Tembea Repo'
                                                    })}
                                                    >Private Repo</a>
                                                </span></p>
                                                <a href="https://tembea.andela.com/" target="_blank" rel="noopener noreferrer" onClick={() => ReactGA.event({
                                                    category: 'Visit Site',
                                                    action: 'Tembea Site'
                                                })}
                                                    class="badge badge-danger px-3 rounded-pill font-weight-normal">Visit Site</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
                                    <div class="bg-white rounded shadow-sm"><a href="https://res.cloudinary.com/dw675k0f5/image/upload/v1571825672/storo/Screenshot_from_2019-10-23_13-14-07.png">
                                        <img src="https://res.cloudinary.com/dw675k0f5/image/upload/v1571825672/storo/Screenshot_from_2019-10-23_13-14-07.png" alt="" class="img-fluid card-img-top" /></a>
                                        <div class="p-4">
                                            <h5 class="text-dark">Authors Haven</h5>
                                            <p class="small"> A platform whereby authors and article writers are able to express themselves freely and reach out to their target audience.</p>
                                            <p class="small text-muted mb-0">Key aspects</p>
                                            <ul class="small text-muted ml-3">
                                                <li>React, Redux</li>
                                                <li>Cloudinary, Semantic UI, Google places</li>
                                                <li>Postgres, Django, DRF</li>
                                                <li>PT, slack and github team collaboration</li>
                                                <li>CI/CD on travis & heroku</li>
                                            </ul>
                                            <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                                                <p class="small mb-0"><i class="fab fa-node mr-2"></i><i class="fab fa-react mr-2"></i> <span class="font-weight-bold">
                                                    <a href="https://github.com/andela/ah-the-phoenix/" onClick={() => ReactGA.event({
                                                        category: 'Visit Repo',
                                                        action: 'Authors Haven Site'
                                                    })}
                                                    >Github Repo</a>
                                                </span></p>
                                                <a href="https://indiana-ah-frontend.herokuapp.com/" target="_blank" rel="noopener noreferrer" onClick={() => ReactGA.event({
                                                    category: 'Visit Site',
                                                    action: 'Authors Haven'
                                                })}
                                                    class="badge badge-danger px-3 rounded-pill font-weight-normal">Visit Site</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
                                    <div class="bg-white rounded shadow-sm"><a href="https://res.cloudinary.com/dw675k0f5/image/upload/v1585542597/storo/Screen_Shot_2020-03-30_at_7.26.16_AM.png">
                                        <img src="https://res.cloudinary.com/dw675k0f5/image/upload/v1585542597/storo/Screen_Shot_2020-03-30_at_7.26.16_AM.png" alt="" class="img-fluid card-img-top" /></a>
                                        <div class="p-4">
                                            <h5 class="text-dark">Corona Count</h5>
                                            <p class="small"> A platform whereby one can access real-time information with regards to the spread of corona virus.</p>
                                            <p class="small text-muted mb-0">Key aspects</p>
                                            <ul class="small text-muted ml-3">
                                                <li>HTML/Scss, Mapbox</li>
                                                <li>Python Django, DRF</li>
                                                <li>Postgres</li>
                                                <li>Celery</li>
                                                <li>Selenium</li>
                                            </ul>
                                            <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                                                <p class="small mb-0"><i class="fab fa-python mr-2"></i> <span class="font-weight-bold">
                                                    <a href="https://github.com/dev-jey/coronacount-backend" onClick={() => ReactGA.event({
                                                        category: 'Visit Repo',
                                                        action: 'Corona Repo'
                                                    })}
                                                    >Github Repo</a>
                                                </span></p>
                                                <a href="https://coronacount.netlify.com/" target="_blank" rel="noopener noreferrer" onClick={() => ReactGA.event({
                                                    category: 'Visit Site',
                                                    action: 'Corona Site'
                                                })}
                                                    class="badge badge-danger px-3 rounded-pill font-weight-normal">Visit Site</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="profile2" role="tabpanel" aria-labelledby="profile-tab" class="tab-pane fade px-4 py-5">
                            {/* <div className="row">
                                <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
                                    <div class="bg-white rounded shadow-sm"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/cody-davis-253928-unsplash_vfcdcl.jpg" alt="" class="img-fluid card-img-top" />
                                        <div class="p-4">
                                            <h5> <a href="http://www.fadhilanetwork.com" class="text-dark">Blorange</a></h5>
                                            <p class="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                                            <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                                                <p class="small mb-0"><i class="fa fa-picture-o mr-2"></i><span class="font-weight-bold">PNG</span></p>
                                                <div class="badge badge-primary px-3 rounded-pill font-weight-normal">Trend</div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            {/* </div> */}
                            <p className="text-center">Check out more projects on my github account:
                            <br></br>
                                <a href="https://github.com/dev-jey" target="_blank" rel="noopener noreferrer" className="text-dark text-center mx-auto"><i class="fab fa-github-square fa-4x p-2 text-center"></i></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pastwork
