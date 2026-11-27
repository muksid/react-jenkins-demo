pipeline {
    agent any

    tools {
        nodejs 'node24'
    }

    options {
        timestamps()
        disableConcurrentBuilds()
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Check Environment') {
            steps {
                sh '''
                    node --version
                    npm --version
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build React') {
            steps {
                sh 'npm run build'
                sh 'test -s dist/index.html'
            }
        }

        stage('Archive Artifact') {
            steps {
                archiveArtifacts(
                    artifacts: 'dist/**',
                    fingerprint: true
                )
            }
        }

        stage('Deploy Local PROD') {
            steps {
                sh '''
                    test -d /deploy/react-demo

                    cp -R dist/. /deploy/react-demo/

                    echo "React deployment completed!"
                '''
            }
        }
    }

    post {
        success {
            echo 'React CI/CD SUCCESS!'
        }

        failure {
            echo 'React CI/CD FAILED!'
        }
    }
}
