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
    const { loading, pageNumber, numPages } = this.state;
    if (loading) {
      return <Loader />;
    }
    return (
      <section className="about-me container-fluid" id="about-me">
        <br></br>
        <div className="text-center">
          <h2 style={{ textTransform: "uppercase" }}>Resume</h2>
          <hr className="normal-hr"></hr>
        </div>
        <br></br>
        <br></br>
        <div className="row">
          <div className="card about-info col-md-12">
            <div className="row">
              <h2 className="title col-md-2">Details</h2>
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
              fileName="franklin_magoba_resume.pdf"
              title=""
              subject=""
              keywords=""
              ref={(component) => (this.pdfExportComponent = component)}
            >
              <Cv />
            </PDFExport>
          </div>
          <div className="col-md-8 mx-auto">
            <h2 className="title col-md-4">Certifications</h2>
            <img
              src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/illus_kftyh4.png"
              alt=""
              width="100%"
              // style={{ paddingTop: "3%", top: "0", position: "sticky" }}
            />
            <div className="row">
              <div className="col-md-6">
                <img src={certReact} alt="" width="100%" />
                <hr className="normal-hr-2"></hr>
              </div>
              <div className="col-md-6">
                {" "}
                <img src={certNet} alt="" width="100%" />
                <hr className="normal-hr-2"></hr>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <img src={certNode} alt="" width="100%" />
                <hr className="normal-hr-2"></hr>
              </div>
              <div className="col-md-6">
                {" "}
                <img src={certData} alt="" width="100%" />
                <hr className="normal-hr-2"></hr>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <img src={certCloud} alt="" width="100%" />
                <hr className="normal-hr-2"></hr>
              </div>
              <div className="col-md-6">
                {" "}
                <img src={certCloudcore} alt="" width="100%" />
                <hr className="normal-hr-2"></hr>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <img src={certCloudtool} alt="" width="100%" />
                <hr className="normal-hr-2"></hr>
              </div>
              <div className="col-md-6">
                {" "}
                <img src={certAgile} alt="" width="100%" />
                <hr className="normal-hr-2"></hr>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <img src={certAzuese1} alt="" width="100%" />
                <hr className="normal-hr-2"></hr>
              </div>
              <div className="col-md-6">
                {" "}
                <img src={certAzuese2} alt="" width="100%" />
                <hr className="normal-hr-2"></hr>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <img src={certRest} alt="" width="100%" />
                <hr className="normal-hr-2"></hr>
              </div>
              <div className="col-md-6">
                {" "}
                {/* <img src={certAzuese2} alt="" width="100%" />
                <hr className="normal-hr-2"></hr> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
