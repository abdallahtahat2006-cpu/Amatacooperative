@echo off
start http://localhost:4173/
call npm.cmd run preview -- --port 4173
pause

