@echo off
cd /d "%~dp0"
echo Starting WOWLife local server on http://127.0.0.1:5173/
echo Keep this window open while testing.
node scripts\local-server.mjs
pause
