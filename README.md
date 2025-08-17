# kans-jenkins-docker-k8s — Jenkins + Docker + Kubernetes CI/CD

## Description
This project demonstrates a complete CI/CD pipeline using Jenkins, Docker, and Kubernetes. It uses a simple Node.js "Hello World" application that is:
- Built and containerized with Docker
- Pushed to Docker Hub
- Deployed on a Kubernetes cluster
- Fully automated via a Jenkins pipeline

This project showcases modern DevOps practices suitable for professional portfolios. It is designed to demonstrate end-to-end automation and deployment skills.

## Features
- Declarative Jenkins pipeline for CI/CD
- Docker containerization for consistent builds
- Kubernetes deployment and service setup
- Modular folder structure for clarity and professionalism
- Easy to follow and replicate for portfolio purposes

## Folder Structure
kans-jenkins-docker-k8s/
├── app/           # Demo application
│   └── src/       # Source code
├── docker/        # Dockerfile for containerization
├── k8s/           # Kubernetes manifests (Deployment + Service)
├── jenkins/       # Jenkins pipeline (Jenkinsfile)
├── README.md      # Project documentation
└── .gitignore     # Ignore node_modules, logs, etc.

## Application Overview
- Language: Node.js
- Framework: Express.js
- Port: 3000
- Route: `/` returns "Hello World from Project 2!"

## Prerequisites
- Docker installed and running
- Kubernetes cluster (minikube/kind/any cluster)
- Jenkins server with Docker credentials configured
- kubectl configured to access your cluster

## Steps to Run Locally
1. Clone the repository:
   git clone https://github.com/kans-devops/kans-jenkins-docker-k8s.git
   cd kans-jenkins-docker-k8s
2. Install app dependencies:
   cd app
   npm install
3. Build Docker image:
   docker build -t demo-app ./docker
4. Run Docker container locally:
   docker run -p 3000:3000 demo-app
5. Apply Kubernetes manifests:
   kubectl apply -f k8s/deployment.yaml
   kubectl apply -f k8s/service.yaml
6. Access the application:
   http://<node-ip>:<node-port>

## Jenkins Pipeline Overview
- Build Stage: Builds Docker image
- Push Stage: Pushes image to Docker Hub
- Deploy Stage: Applies Kubernetes manifests

All steps are automated via jenkins/Jenkinsfile for a full CI/CD demonstration.

##  Author
**Muhammed Kans**  
- GitHub: [kans-devops](https://github.com/kans-devops)  
- Repo: [kans-docker-ansible](https://github.com/kans-devops/kans-docker-ansible)  
- Email: kans.devops.engineer@gmail.com

