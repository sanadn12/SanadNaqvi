pipeline {
    agent any

    environment {
        NODEJS_VERSION = '20' // Using Node.js 20
    }

    tools {
        nodejs 'NodeJS' // Ensure Node.js is installed via Jenkins tools
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'master', url: 'https://github.com/sanadn12/SanadNaqvi.git'
            }
        }

        stage('Set Up Node.js') {
            steps {
                script {
                    def nodeVersion = sh(script: 'node -v', returnStdout: true).trim()
                    echo "Using Node.js version: ${nodeVersion}"
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci' // `npm ci` is faster and ensures clean installs
            }
        }

        stage('Run Linter') {
            steps {
                sh 'npm run lint || echo "Linting warnings found!"'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test || echo "Tests failed!"' // Add a test stage
            }
        }

        stage('Build Project') {
            steps {
                sh 'npm run build'
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
            echo "Build succeeded! ✅"
        }
        failure {
            echo "Build failed! ❌ Check logs for errors."
        }
    }
}
