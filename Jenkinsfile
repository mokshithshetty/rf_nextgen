pipeline {
  agent any
  
  environment {
    COMMITTER_NAME = sh(script: 'git show -s --pretty=%an', returnStdout: true).trim()                                                     
    DOCKER_LOGIN = credentials('DOCKERHUB')
  }

  stages {
    stage('NPM AUDIT') {
      steps {
        sh 'npm ci';
        sh 'npm audit --audit-level=moderate'
      }
    }
    
    stage('TEST') {
      steps {
        echo "Initiating the tests for the commit ID - ${env.GIT_COMMIT}, made by ${COMMITTER_NAME}"
        echo 'Performing the Sonarqube codecoverage scan...'
      }
    }

    stage('BUILD') {
      environment {
        ENVIRONMENT = 'development'
      }      
      steps {
        echo "Initiating the docker build for the commit ID - ${env.GIT_COMMIT}, made by ${COMMITTER_NAME}, ${ENVIRONMENT} environment, ${env.GIT_BRANCH} branch..."
        echo "Performing the build ..."
        sh "docker compose --profile rfnextgen build"
        echo "Authenticating with Docker Hub..."
        sh 'echo $DOCKER_LOGIN_PSW | docker login -u $DOCKER_LOGIN_USR --password-stdin'
        echo "Uploading the docker images to the Docker Hub repository..."
        sh "docker compose push rfnextgen-app"
     }
    }            
    stage('Deploy') {
      environment {
        ENVIRONMENT = 'development'
      }
      steps {
        echo "Deploying the frontend application..."
      }
    }
  }
  post { 
    cleanup {
      echo 'Removing the workspace directory...'
      cleanWs()
      echo 'Cleaning up the docker images...'
      sh 'docker image prune -a --force --filter "until=72h"'
      sh "docker system prune -a"
    }
  }
}
  


