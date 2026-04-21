@echo off
set GIT="C:\Program Files\Git\cmd\git.exe"
%GIT% branch -M main
%GIT% status
%GIT% log --oneline -5
