pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/alchemist240/myapp-demo.git'
            }
        }

        stage('Build Docker Image') {
    steps {
        bat 'docker build -t myapp-demo:latest .'
    }
}

stage('Run Docker Container') {
    steps {
        bat 'docker rm -f myapp-demo || echo Container not present'
        bat 'docker run -d -p 5000:80 --name myapp-demo myapp-demo:latest'
    }
}
    }

    post {
        failure {
            echo 'Pipeline failed.'
        }
    }
}