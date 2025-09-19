# 설코딩 개발 블로그 (seolcoding.com) - Claude 작업 가이드

## 프로젝트 개요
- **타입**: Hexo 7.3.0 기반 한국어 기술 블로그
- **테마**: NexT 8.25.0 (Gemini 스킴)
- **언어**: 한국어 (ko), 타임존: Asia/Seoul
- **자동화**: Obsidian → GitHub Actions → Hexo 배포 파이프라인

## 핵심 아키텍처

### 자동화 워크플로
```
Obsidian 노트 작성 → GitHub 푸시 → Actions 실행 → Hexo 생성 → 배포
```
- 크로스 리포지터리 동기화 시스템
- 자동화된 포스트 퍼블리싱
- GitHub Actions 기반 CI/CD

### 현재 설정 상태
- ✅ 페이지네이션: 5개 포스트/페이지
- ✅ 자동 발췌문: 200자 제한 + "더 보기" 버튼
- ✅ 사이드바 카테고리 네비게이션
- ✅ 태그/카테고리 페이지 활성화
- ✅ NexT Gemini 스킴 적용

## 중요 설정 파일

### _config.yml (Hexo 메인 설정)
```yaml
# 사이트 정보
title: 설코딩의 개발 이야기
language: ko
timezone: 'Asia/Seoul'

# 페이지네이션
per_page: 5
index_generator:
  per_page: 5

# 자동 발췌문
auto_excerpt:
  enable: true
  length: 200
```

### _config.next.yml (NexT 테마 설정)
```yaml
# 스킴
scheme: Gemini

# 사이드바
sidebar:
  display: always
  sidebar: source/_data/sidebar.njk

# 발췌문 표시
excerpt_description: true
read_more_btn: true
```

### 커스텀 파일
- `source/_data/sidebar.njk`: 카테고리 위젯
- `source/_data/styles.styl`: 커스텀 CSS
- `source/tags/index.md`: 태그 페이지
- `source/categories/index.md`: 카테고리 페이지

## 일반적인 작업

### 빌드 및 서버
```bash
npm run clean && npm run build  # 정적 파일 생성
npm run server                  # 로컬 서버 실행
```

### 포스트 작성
- 포스트에 `<!-- more -->` 태그 추가로 발췌문 구분
- Front matter에 categories와 tags 필수 포함

### 테마 커스터마이징
- 스타일 변경: `source/_data/styles.styl`
- 사이드바 수정: `source/_data/sidebar.njk`
- NexT 설정: `_config.next.yml`

## 문제 해결

### 흔한 이슈
1. **Nunjucks 템플릿 오류**: 복잡한 파이프 연산자 사용 시 오류 발생 → 단순한 문법으로 수정
2. **발췌문 미작동**: `_config.next.yml`에서 `excerpt_description: true`, `read_more_btn: true` 확인
3. **카테고리/태그 404**: `source/categories/index.md`, `source/tags/index.md` 파일 존재 확인

### 디버깅 순서
1. `hexo clean` → 캐시 정리
2. `hexo generate` → 빌드 로그 확인
3. 설정 파일 문법 검증
4. Nunjucks 템플릿 구문 확인

## 최근 변경 사항
- NexT Gemini 스킴 적용
- 페이지네이션 5개 포스트로 설정
- 자동 발췌문 기능 활성화 (200자)
- 사이드바 카테고리 네비게이션 추가
- 태그/카테고리 페이지 생성
- 커스텀 CSS로 반응형 카테고리 위젯 구현

## 추천 작업 순서
1. 변경 전 `git status` 확인
2. 테스트용 브랜치 생성
3. 설정 변경
4. `hexo clean && hexo generate`로 빌드 테스트
5. 로컬 서버로 확인 (`hexo server`)
6. 정상 작동 시 메인 브랜치 병합