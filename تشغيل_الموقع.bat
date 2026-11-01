@echo off
chcp 65001 > nul
echo ========================================================
echo   جاري تشغيل الموقع الرسمي لـ تعاونية عمّتا...
echo ========================================================
echo.
echo سيتم فتح الموقع تلقائياً في المتصفح على الرابط:
echo http://localhost:4173/
echo.
start http://localhost:4173/
call npm.cmd run preview -- --port 4173
pause

