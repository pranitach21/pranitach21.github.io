import React from "react";
import '../assets/styles/Project.scss';

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>DevOps Projects</h1>
      <div className="projects-grid">

        {/* Project 1: NGINX HA Load Balancer */}
        <div className="project">
          <h2>High Availability NGINX Load Balancer on AWS</h2>
          <div className="video-wrapper">
            <video className="zoom" controls width="100%">
              <source src="/project1_1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video className="zoom" controls width="100%">
              <source src="/project1_2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p>
            Implemented a fault-tolerant, highly available load balancer setup using NGINX and Keepalived with EIP failover. Deployed on AWS EC2 instances and provisioned via Terraform, featuring backend health checks and seamless failover across two front-end nodes.
          </p>
        </div>

        {/* Project 2: Resume Analyzer */}
        <div className="project">
          <h2>Resume Analyzer with Python & Streamlit</h2>
          <div className="video-wrapper">
            <video className="zoom" controls width="100%">
              <source src="/project2_1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p>
            Built a smart resume analyzer using Streamlit and Python to parse resumes, extract key details, and match candidate skills with job descriptions using NLP. Deployed on AWS with CI/CD automation.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Project;
