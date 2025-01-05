pipeline {
    agent any

    stages {
        stage('Install deps'){
            steps {
                echo 'Installing deps'
                script {
                    if(isUnix()){
                        sh 'npm install'
                    }else{
                        bat 'npm install'
                    }
                }
                
            }
        }
        stage('Running the tests'){
            steps {
                echo 'Running the tests'
                script {
                    if(isUnix()){
                        sh 'npm run test'
                    }else{
                        bat 'npm run test'
                    }
                }
            }
        }
        stage('Publiishing the report'){
            steps {
                echo 'Publish report'
                publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'reports', reportFiles: 'report.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
            }
        }
    }
}
