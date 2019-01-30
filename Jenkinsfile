node {
  try {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
      sh 'docker -v'
      sh 'printenv'
    }
    stage('Build Docker test'){
      //sh 'docker build -t react-test -f Dockerfile.test --no-cache . '
      echo "THIS STEP IS SUPPOSE TO BUILD DOCKER TEST"
    }
    stage('Docker test'){
      //sh 'docker run --rm react-test'
      echo "THIS STEP IS SUPPOSE TO RUN DOCKER TEST"
    }
    stage('Clean Docker test'){
      //sh 'docker rmi react-test'
      echo "THIS STEP IS SUPPOSE TO CLEAN DOCKER TEST"
    }
    stage('Deploy'){
        echo "DEPLOY STAGE: ${env.BRANCH_NAME}"
      if(env.BRANCH_NAME == 'master'){
        //sh 'docker build -t react-app --no-cache .'
        //sh 'docker tag react-app localhost:5000/react-app'
        echo "THIS STEP IS SUPPOSE TO PUSH DOCKER IMAGE TO ARTIFACTORY"
        //sh 'docker push localhost:5000/react-app'
        //sh 'docker rmi -f react-app localhost:5000/react-app'
      }
    }
  }
  catch (err) {
    throw err
  }
}