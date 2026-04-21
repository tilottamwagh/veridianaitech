@echo off
set GIT="C:\Program Files\Git\cmd\git.exe"
%GIT% remote remove origin 2>nul
%GIT% remote add origin https://github.com/tilottamwagh/veridianaitech.git
%GIT% branch -M main
%GIT% push -u origin main
echo.
echo === PUSH COMPLETE ===
