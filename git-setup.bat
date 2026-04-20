@echo off
set GIT="C:\Program Files\Git\cmd\git.exe"
%GIT% init
%GIT% config user.email "user@veridianaitech.com"
%GIT% config user.name "Veridianaitech"
%GIT% add .
%GIT% commit -m "Initial commit: Veridianaitech AI Solutions Inc. website"
echo.
echo === DONE: Repo initialized and committed ===
echo === Now paste your GitHub remote URL below ===
