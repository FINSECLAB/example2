@echo off
echo ========================================
echo    연구소 웹사이트 실행 스크립트
echo ========================================
echo.

echo [1단계] 프로젝트 폴더로 이동...
cd /d "%~dp0"

echo [2단계] Node.js 설치 확인...
node --version >nul 2>&1
if errorlevel 1 (
    echo 오류: Node.js가 설치되지 않았습니다.
    echo.
    echo Node.js를 설치해야 합니다:
    echo 1. https://nodejs.org 에서 Node.js LTS 버전을 다운로드
    echo 2. 설치 프로그램을 실행하여 설치
    echo 3. 설치 후 이 스크립트를 다시 실행
    echo.
    pause
    exit /b 1
) else (
    echo Node.js가 설치되어 있습니다.
    node --version
)

echo.
echo [3단계] 패키지 설치 확인...
if not exist "node_modules" (
    echo node_modules 폴더가 없습니다. 패키지를 설치합니다...
    npm install
    if errorlevel 1 (
        echo 오류: 패키지 설치에 실패했습니다.
        pause
        exit /b 1
    )
    echo 패키지 설치가 완료되었습니다.
) else (
    echo 패키지가 이미 설치되어 있습니다.
)

echo.
echo [4단계] 이미지 파일 확인...
if not exist "public\걸어서고대속으로2-01.jpg" (
    if exist "걸어서고대속으로2-01.jpg" (
        echo 이미지 파일을 public 폴더로 복사합니다...
        copy "걸어서고대속으로2-01.jpg" "public\"
        echo 이미지 파일 복사 완료!
    ) else (
        echo 경고: 걸어서고대속으로2-01.jpg 파일을 찾을 수 없습니다.
        echo 이미지 파일을 프로젝트 루트에 배치해주세요.
    )
) else (
    echo 이미지 파일이 이미 public 폴더에 있습니다.
)

echo.
echo [5단계] 개발 서버 시작...
echo.
echo ========================================
echo 브라우저에서 http://localhost:3000 으로 접속하세요.
echo 서버를 종료하려면 Ctrl+C를 누르세요.
echo ========================================
echo.
npm start
