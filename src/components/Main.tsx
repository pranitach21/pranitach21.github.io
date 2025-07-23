import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/* Replace with your actual image URL or put an image in /public and reference it as /pranita.jpg */}
          <img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/pranita_circle.jpg" alt="Pranita Avatar" />
        </div>

        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/pranitach21" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/pranitachaudhary" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>

          <h1>Pranita</h1>
          <p>DevOps Engineer | AWS | Terraform | Kubernetes | CI/CD | Observability</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/pranitach21" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/pranitachaudhary" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
