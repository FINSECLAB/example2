@echo off
echo ========================================
echo    연구소 웹사이트 빌드 스크립트
echo ========================================
echo.

echo [1단계] 프로젝트 폴더로 이동...
cd /d "%~dp0"

echo [2단계] Node.js 설치 확인...
node --version >nul 2>&1
if errorlevel 1 (
    echo 오류: Node.js가 설치되지 않았습니다.
    echo https://nodejs.org 에서 Node.js를 다운로드하여 설치해주세요.
    pause
    exit /b 1
)

echo [3단계] 패키지 설치 확인...
if not exist "node_modules" (
    echo node_modules 폴더가 없습니다. 패키지를 설치합니다...
    npm install
    if errorlevel 1 (
        echo 오류: 패키지 설치에 실패했습니다.
        pause
        exit /b 1
    )
)

echo [4단계] 이미지 파일 확인...
if not exist "public\걸어서고대속으로2-01.jpg" (
    if exist "걸어서고대속으로2-01.jpg" (
        echo 이미지 파일을 public 폴더로 복사합니다...
        copy "걸어서고대속으로2-01.jpg" "public\"
    ) else (
        echo 경고: 걸어서고대속으로2-01.jpg 파일을 찾을 수 없습니다.
    )
)

echo [5단계] 프로젝트 빌드...
echo.
echo 배포용 파일을 생성합니다...
npm run build

if errorlevel 1 (
    echo 오류: 빌드에 실패했습니다.
    pause
    exit /b 1
) else (
    echo.
    echo ========================================
    echo 빌드가 완료되었습니다!
    echo build 폴더에 배포용 파일이 생성되었습니다.
    echo ========================================
)

pause
