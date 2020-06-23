import React, { Component } from "react";
import Cv from "./Cv";
import { PDFExport } from "@progress/kendo-react-pdf";
import ReactGA from "react-ga";
import Loader from "../Loader/Loader";
import certReact from "./Certificates/react.png";
import certAgile from "./Certificates/agile.png";
import certNode from "./Certificates/node.png";
import certData from "./Certificates/databases.png";
import certCloud from "./Certificates/cloudintro.png";
import certCloudcore from "./Certificates/cloudcore.png";
import certCloudtool from "./Certificates/azuretools.png";
import certNet from "./Certificates/net.png";
import certAzuese1 from "./Certificates/azuese2.png";
import certAzuese2 from "./Certificates/azuese1.png";
import certRest from "./Certificates/restapi.png";
import certFullstack from "./Certificates/fullstack.png";
import cloudCert from "./Certificates/coreCert.png";
import certAngular from "./Certificates/angular.png";
import advCl from "./Certificates/advancedcloudconcept.png";
import certDatasci from "./Certificates/datascience.png";
import { Slide, Zoom } from "react-slideshow-image";

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 1500));
}
export class About extends Component {
  state = {
    loading: true,
    numPages: null,
    pageNumber: 1,
  };

  exportPDFWithComponent = () => {
    ReactGA.event({
      category: "Downloads",
      action: "Downloaded my CV",
    });
    this.pdfExportComponent.save();
  };

  componentDidMount() {
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }

  render() {
    const certificates = [
      certReact,
      certAngular,
      certNode,
      certNet,
      certRest,
      certData,
      certAgile,
      certFullstack,
      certCloud,
      certAzuese1,
      certAzuese2,
      cloudCert,
      advCl,
      certCloudtool,
      certCloudcore,
      certDatasci,
    ];
    const zoomOutProperties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      scale: 0.4,
      arrows: true,
    };
    const { loading, pageNumber, numPages } = this.state;
    if (loading) {
      return <Loader />;
    }
    return (
      <section className="about-me container-fluid" id="about-me">
        <br></br>
        <div className="text-center">
          <h2 style={{ textTransform: "uppercase" }}>RESUME</h2>
          <hr className="normal-hr"></hr>
        </div>
        <br></br>
        <br></br>
        <div className="row">
          <div className="card about-info col-md-6">
            <div className="row">
              <h2 className="title col-md-4">Details</h2>
              <button
                className="btn btn-warning col-md-4 d-block ml-auto mt-3"
                onClick={this.exportPDFWithComponent}
              >
                Download Resume
              </button>
            </div>
            <hr className="normal-hr"></hr>
            <br></br>
            <PDFExport
              paperSize={"A4"}
              margin="1.5cm"
              forcePageBreak=".page-break"
              scale={0.7}
              fileName="franklin_magoba.pdf"
              title=""
              subject=""
              keywords=""
              ref={(component) => (this.pdfExportComponent = component)}
            >
              <Cv />
            </PDFExport>
          </div>
          <div className="col-md-5">
            <h2 className="title col-md-4">Certifications</h2>

            <img
              src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/illus_kftyh4.png"
              alt=""
              width="100%"
              style={{ paddingTop: "3%", top: "0", position: "sticky" }}
            />
            <div className="slide-container">
              <Zoom {...zoomOutProperties}>
                {certificates.map((each, index) => (
                  <img key={index} style={{ width: "100%" }} src={each} />
                ))}
              </Zoom>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
