@echo off
echo Building Next.js project...
call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo Build failed!
    exit /b 1
)

echo Deploying to Firebase...
firebase deploy --only hosting

if %ERRORLEVEL% NEQ 0 (
    echo Deployment failed!
    exit /b 1
)

echo Deployment successful!

