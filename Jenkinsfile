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
                sh 'docker build -t myapp-demo:latest .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker rm -f myapp-demo || true'
                sh 'docker run -d -p 5000:80 --name myapp-demo myapp-demo:latest'
            }
        }
    }

    post {
        failure {
            echo 'Pipeline failed.'
        }
    }
}
