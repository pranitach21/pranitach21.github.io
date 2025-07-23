import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws, faJenkins, faLinux } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

// Section 1: Cloud & Infrastructure
const labelsFirst = [
  "AWS", "Terraform", "Kubernetes", "VPC", "Route53", "NAT Gateway", "VPN", "EC2", "EBS", "S3", "CloudFront"
];

// Section 2: CI/CD & DevOps
const labelsSecond = [
  "Azure DevOps", "Jenkins", "GitLab CI", "Git", "GitHub", "Docker", "Bash", "Python", "Artifactory", "Cognito"
];

// Section 3: Monitoring & Observability
const labelsThird = [
  "Prometheus", "Grafana", "CloudWatch", "Dynatrace", "ELK Stack", "Datadog", "MongoDB", "PostgreSQL", "Linux"
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          
          <div className="skill">
            <FontAwesomeIcon icon={faAws} size="3x" />
            <h3>Cloud & Infrastructure</h3>
            <p>Hands-on experience in designing, automating, and managing scalable, secure, and highly available infrastructure on AWS using Terraform, Kubernetes, and core AWS services.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faJenkins} size="3x" />
            <h3>CI/CD & DevOps Automation</h3>
            <p>Implemented efficient DevOps pipelines and automation strategies using Jenkins, Azure DevOps, and GitLab. Skilled in automating deployments, secrets management, and containerization with Docker.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faLinux} size="3x" />
            <h3>Monitoring & Observability</h3>
            <p>Experienced in implementing end-to-end observability using Prometheus, Grafana, Dynatrace, and AWS CloudWatch. Ensured high system availability, alerting, and automated diagnostics across production environments.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Expertise;
