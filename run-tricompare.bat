@echo off
:: ===============================
::  TriCompare (ChatGPT + DeepSeek + Gemini)
::  Startup Script
:: ===============================

cd /d "%~dp0"

echo --------------------------------------
echo Launching TriCompare Browser App...
echo --------------------------------------

:: Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
)

:: Start the Electron app
echo Starting Electron app...
call npm start

pause
