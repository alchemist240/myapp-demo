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
                script {
                    // build and keep reference if needed
                    def img = docker.build('myapp-demo:latest', '--pull .') 
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    if (isUnix()) {
                        // stop & remove old container if exists, then run
                        sh "docker rm -f myapp-demo || true"
                        sh "docker run -d -p 5000:80 --name myapp-demo myapp-demo:latest"
                    } else {
                        // Windows agent (cmd)
                        bat "docker rm -f myapp-demo || echo Container not present"
                        bat "docker run -d -p 5000:80 --name myapp-demo myapp-demo:latest"
                    }
                }
            }
        }
    }

    post {
        failure {
            echo 'Pipeline failed.'
        }
    }
}