pipeline {
    agent any

    environment {
        NODEJS_VERSION = '20'  // Use Node.js 20
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
                    def nodeInstalled = sh(script: 'node -v || true', returnStdout: true).trim()
                    if (!nodeInstalled) {
                        error "Node.js is not installed! Please install Node.js ${NODEJS_VERSION} on Jenkins."
                    }
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Linter') {
            steps {
                sh 'npm run lint'
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
}
