pipeline {
    agent any

    environment {
        NODEJS_VERSION = '20'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'master', url: 'https://github.com/sanadn12/SanadNaqvi.git'
            }
        }

        stage('Check Node.js Installation') {
            steps {
                script {
                    def nodeVersion = bat(script: 'node -v', returnStdout: true).trim()
                    if (!nodeVersion.contains("v")) {
                        error "Node.js is not installed on Jenkins! Please install Node.js ${NODEJS_VERSION}."
                    } else {
                        echo "Using Node.js version: ${nodeVersion}"
                    }
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci' // Clean install for consistency
            }
        }

        stage('Run Linter') {
            steps {
                bat 'npm run lint || echo "Lint warnings detected!"'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test || echo "Some tests failed!"'
            }
        }

        stage('Build Project') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Archive Build Artifacts') {
            steps {
                archiveArtifacts artifacts: '.next/**', fingerprint: true
            }
        }
    }

    post {
        always {
            echo "Pipeline execution completed."
        }
        success {
            echo "Build succeeded! "
        }
        failure {
            echo "Build failed!  Check logs for errors."
        }
    }
}
