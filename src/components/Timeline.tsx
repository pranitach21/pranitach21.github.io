import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Aug 2021 – Present"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">DevOps Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Faridabad, Haryana, India</h4>
            <p>
              Designed, automated, and maintained cloud infrastructure using AWS, Terraform, and Kubernetes. Integrated CI/CD pipelines with Jenkins and Azure DevOps, and implemented monitoring with CloudWatch, Prometheus, and Grafana.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2021 – Jul 2021"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">DevOps Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <p>
              Worked on containerization using Docker and Kubernetes, built CI/CD pipelines, and assisted in migrating legacy systems to the cloud using Terraform on AWS.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 – 2021"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Cloud & Automation Trainee</h3>
            <h4 className="vertical-timeline-element-subtitle">Training Program</h4>
            <p>
              Trained on CI/CD, Terraform, AWS services, Git, Jenkins, shell scripting, and Kubernetes fundamentals. Developed sample projects with EKS and infrastructure provisioning.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;