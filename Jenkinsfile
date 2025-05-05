pipeline {
    agent any

    environment {
        IMAGE_NAME = "webinar-dev-app"
        CONTAINER_NAME = "webinar-dev-container"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/vishal00121/devops.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker rm -f $CONTAINER_NAME || true'
                sh 'docker run -d -p 5173:5173 --name $CONTAINER_NAME $IMAGE_NAME'
            }
        }
    }
}
