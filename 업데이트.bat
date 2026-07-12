@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo ==========================================
echo    시애틀은혜장로교회 사이트 업데이트
echo ==========================================
echo.

set /p msg=무엇을 바꿨나요? (그냥 엔터 눌러도 됨):
if "%msg%"=="" set msg=사이트 수정

echo.
echo [1/4] 빌드 검사 중... (30초쯤 걸려요, 오류 없나 확인)
call npm.cmd run build
if errorlevel 1 (
  echo.
  echo ==========================================
  echo   [!] 빌드 실패 - 코드에 오류가 있어요.
  echo       사이트는 그대로 두었습니다. 안전합니다.
  echo       오류를 고친 뒤 다시 실행하세요.
  echo ==========================================
  echo.
  pause
  exit /b 1
)

echo.
echo [2/4] 변경사항 담는 중...
git add -A

echo [3/4] 기록 중...
git commit -m "%msg%"

echo [4/4] GitHub에 올리는 중...
git push

echo.
echo ==========================================
echo   완료! 1~3분 뒤 사이트에 반영됩니다.
echo   https://seattlegracechurch.org
echo ==========================================
echo.
pause
