@echo off
set GIT="C:\Program Files\Git\cmd\git.exe"
%GIT% add .
%GIT% commit -m "%~1"
%GIT% push
echo.
echo === DONE ===
