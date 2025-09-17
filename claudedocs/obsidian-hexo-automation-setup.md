# Obsidian과 Hexo를 활용한 자동화된 블로그 퍼블리싱 시스템 구축하기

## 🎯 프로젝트 목표

개발자로서 블로그를 운영하면서 겪는 가장 큰 고민 중 하나는 "어떻게 하면 글쓰기에만 집중할 수 있을까?"입니다. 이 프로젝트는 **Obsidian에서 편하게 글을 작성하면, 자동으로 Hexo 블로그로 변환되어 GitHub Pages에 배포되는 완전 자동화 시스템**을 구축하는 것을 목표로 합니다.

### 왜 이런 시스템이 필요한가?

1. **컨텍스트 스위칭 최소화**: Obsidian에서 글쓰기와 지식 관리를 동시에
2. **버전 관리와 백업**: Git을 통한 자동 버전 관리
3. **프라이버시 보장**: 개인 볼트는 비공개, 블로그 컨텐츠만 공개
4. **완전 자동화**: Push 한 번으로 블로그 배포까지 완료

## 🏗️ 시스템 아키텍처

```mermaid
graph LR
    A[Obsidian Vault<br/>Private Repo] -->|GitHub Actions<br/>Sync Workflow| B[Hexo Blog<br/>Public Repo]
    B -->|GitHub Actions<br/>Build & Deploy| C[GitHub Pages<br/>seolcoding.com]

    style A fill:#f9f,stroke:#333,stroke-width:2px
    style B fill:#bbf,stroke:#333,stroke-width:2px
    style C fill:#bfb,stroke:#333,stroke-width:2px
```

### 핵심 구성 요소

1. **Obsidian Vault (MainVault)**:
   - 모든 개인 노트와 블로그 글 원본 저장
   - Private GitHub Repository로 관리
   - `50_publish/51_blog/` 폴더에 블로그 글 작성

2. **Hexo Blog (seolcoding.com)**:
   - 정적 사이트 생성기 Hexo 사용
   - NexT 테마 적용
   - Public Repository로 GitHub Pages 호스팅

3. **자동화 파이프라인**:
   - GitHub Actions를 활용한 Cross-Repository 동기화
   - Obsidian 문법을 Hexo 문법으로 자동 변환
   - Push 트리거 자동 빌드 및 배포

## 🛠️ 기술 스택

- **콘텐츠 작성**: Obsidian (Knowledge Management)
- **정적 사이트 생성**: Hexo 7.3.0
- **테마**: NexT 8.25.0
- **CI/CD**: GitHub Actions
- **호스팅**: GitHub Pages
- **변환 스크립트**: Node.js
- **버전 관리**: Git

## 📋 구축 과정

### Step 1: Hexo 프로젝트 초기 설정

먼저 Hexo 프로젝트를 생성하고 기본 설정을 진행합니다.

```bash
# Hexo 프로젝트 생성
cd ~/Dev/seolcoding.com
hexo init

# 의존성 설치
npm install

# NexT 테마 설치
npm install hexo-theme-next
```

### Step 2: Hexo 설정 파일 구성

`_config.yml` 파일을 수정하여 블로그 기본 정보를 설정합니다:

```yaml
# Site
title: SeolCoding
subtitle: 'Tech Blog'
description: 'Software Engineering & Development Blog'
keywords: programming, development, tech, coding
author: Donghun Seol
language: ko
timezone: ''

# URL
url: https://seolcoding.com
permalink: :year/:month/:day/:title/

# Writing
post_asset_folder: true  # 포스트별 리소스 폴더 활성화

# Theme
theme: next
```

NexT 테마 설정을 위해 `_config.next.yml` 파일을 생성:

```bash
# NexT 테마 설정 파일 복사
cp node_modules/hexo-theme-next/_config.yml _config.next.yml
```

### Step 3: Obsidian-Hexo 변환 스크립트 작성

Obsidian의 WikiLinks, 이미지 경로, 해시태그 등을 Hexo 형식으로 변환하는 스크립트를 작성합니다.

`/MainVault/90_settings/95_hexo_scripts/convert-obsidian-to-hexo.js`:

```javascript
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

/**
 * Obsidian 마크다운을 Hexo 형식으로 변환
 * 주요 변환 사항:
 * 1. WikiLinks [[]] -> Markdown links
 * 2. Obsidian 이미지 경로 -> Hexo 이미지 경로
 * 3. 해시태그 -> Hexo 태그
 * 4. Front matter 변환
 */

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s가-힣]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// WikiLinks 변환: [[링크]] -> [링크](../slug/)
function convertWikiLinks(content) {
  // 별칭이 있는 WikiLink: [[링크|표시텍스트]]
  content = content.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, (match, link, text) => {
    const slug = slugify(link);
    return `[${text}](../${slug}/)`;
  });

  // 일반 WikiLink: [[링크]]
  content = content.replace(/\[\[([^\]]+)\]\]/g, (match, link) => {
    const slug = slugify(link);
    return `[${link}](../${slug}/)`;
  });

  return content;
}

// 이미지 경로 변환
function convertImagePaths(content, postName) {
  // Obsidian 이미지: ![[image.png]] -> ![](postname/image.png)
  content = content.replace(/!\[\[([^\]]+)\]\]/g, (match, imageName) => {
    return `![](${postName}/${imageName})`;
  });

  // 첨부 파일 경로 변환
  content = content.replace(/!\[\]\(attachments\/([^)]+)\)/g, (match, imagePath) => {
    const fileName = path.basename(imagePath);
    return `![](${postName}/${fileName})`;
  });

  return content;
}

// 해시태그를 Hexo 태그로 변환
function convertHashtags(content, frontMatter) {
  const hashtags = new Set(frontMatter.tags || []);

  // #태그 형식 추출
  const tagMatches = content.match(/#[\w가-힣]+/g) || [];
  tagMatches.forEach(tag => {
    hashtags.add(tag.substring(1));
  });

  // 본문에서 해시태그 제거 (선택사항)
  content = content.replace(/#([\w가-힣]+)/g, '$1');

  return { content, tags: Array.from(hashtags) };
}

// Front matter 변환
function convertFrontMatter(data) {
  const hexoFrontMatter = {
    title: data.title || 'Untitled',
    date: data.date || new Date().toISOString(),
    tags: data.tags || [],
    categories: data.categories || []
  };

  // Obsidian 특수 속성 제거
  delete hexoFrontMatter.aliases;
  delete hexoFrontMatter.cssclass;

  return hexoFrontMatter;
}

// 메인 변환 함수
function convertObsidianToHexo(filePath, outputPath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const { data, content: body } = matter(content);

  const postName = path.basename(filePath, '.md');

  // 변환 과정
  let convertedContent = body;
  convertedContent = convertWikiLinks(convertedContent);
  convertedContent = convertImagePaths(convertedContent, postName);

  const { content: finalContent, tags } = convertHashtags(convertedContent, data);

  // Front matter 업데이트
  const hexoFrontMatter = convertFrontMatter(data);
  hexoFrontMatter.tags = [...new Set([...hexoFrontMatter.tags, ...tags])];

  // 최종 파일 생성
  const output = matter.stringify(finalContent, hexoFrontMatter);
  fs.writeFileSync(outputPath, output);

  console.log(`✅ Converted: ${path.basename(filePath)}`);
}

// 디렉토리 내 모든 마크다운 파일 변환
function convertDirectory(inputDir, outputDir) {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const files = fs.readdirSync(inputDir);

  files.forEach(file => {
    if (path.extname(file) === '.md') {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, file);
      convertObsidianToHexo(inputPath, outputPath);
    }
  });
}

// 스크립트 실행
if (require.main === module) {
  const inputDir = process.argv[2] || './input';
  const outputDir = process.argv[3] || './output';

  convertDirectory(inputDir, outputDir);
  console.log('🎉 변환 완료!');
}

module.exports = { convertObsidianToHexo, convertDirectory };
```

### Step 4: GitHub Actions 워크플로우 설정

#### 4.1 MainVault 동기화 워크플로우

Obsidian Vault에서 블로그 컨텐츠를 Hexo 저장소로 동기화하는 워크플로우를 생성합니다.

`/MainVault/.github/workflows/sync-to-seolcoding.yml`:

```yaml
name: Sync Blog to seolcoding.com

on:
  push:
    branches: [ main ]
    paths:
      - '50_publish/51_blog/**'
  workflow_dispatch:

jobs:
  sync-blog:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout MainVault (sparse)
      uses: actions/checkout@v4
      with:
        sparse-checkout: |
          50_publish/51_blog
          90_settings/95_hexo_scripts
        sparse-checkout-cone-mode: false

    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'

    - name: Install dependencies
      run: |
        cd 90_settings/95_hexo_scripts
        npm install gray-matter

    - name: Checkout seolcoding.com
      uses: actions/checkout@v4
      with:
        repository: sdh/seolcoding.com
        token: ${{ secrets.SEOLCODING_PAT }}
        path: seolcoding

    - name: Convert and sync content
      run: |
        # 변환 스크립트 실행
        node 90_settings/95_hexo_scripts/convert-obsidian-to-hexo.js \
          50_publish/51_blog \
          seolcoding/source/_posts

        # 첨부 파일 복사
        if [ -d "50_publish/51_blog/attachments" ]; then
          cp -r 50_publish/51_blog/attachments/* seolcoding/source/images/
        fi

    - name: Commit and push changes
      run: |
        cd seolcoding
        git config user.name "GitHub Actions Bot"
        git config user.email "actions@github.com"

        git add .
        if git diff --staged --quiet; then
          echo "No changes to commit"
        else
          git commit -m "Sync blog content from MainVault"
          git push
        fi

    - name: Trigger Hexo build
      uses: peter-evans/repository-dispatch@v2
      with:
        token: ${{ secrets.SEOLCODING_PAT }}
        repository: sdh/seolcoding.com
        event-type: build-hexo
        client-payload: '{"ref": "${{ github.ref }}"}'
```

#### 4.2 Hexo 빌드 및 배포 워크플로우

Hexo 저장소에서 빌드와 GitHub Pages 배포를 처리하는 워크플로우입니다.

`/seolcoding.com/.github/workflows/build-and-deploy.yml`:

```yaml
name: Build and Deploy Hexo

on:
  push:
    branches: [ main ]
  repository_dispatch:
    types: [build-hexo]
  workflow_dispatch:

jobs:
  build-deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout repository
      uses: actions/checkout@v4

    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Build Hexo site
      run: |
        npm run clean
        npm run build

    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./public
        publish_branch: gh-pages
        force_orphan: true
        cname: seolcoding.com
```

### Step 5: GitHub 설정

#### 5.1 Personal Access Token (PAT) 생성

Cross-repository 접근을 위한 토큰 생성:

1. GitHub Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. 권한 설정:
   - `repo` (전체 저장소 접근)
   - `workflow` (GitHub Actions 실행)
4. 토큰 복사 후 안전하게 보관

#### 5.2 Repository Secrets 설정

MainVault 저장소에서:
1. Settings → Secrets and variables → Actions
2. New repository secret
3. Name: `SEOLCODING_PAT`
4. Value: 생성한 PAT 토큰

#### 5.3 GitHub Pages 설정

seolcoding.com 저장소에서:
1. Settings → Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages` / `root`
4. Custom domain: `seolcoding.com` (선택사항)

### Step 6: 프로젝트 구조 완성

최종 프로젝트 구조는 다음과 같습니다:

```
MainVault/ (Private Repository)
├── 50_publish/
│   └── 51_blog/           # 블로그 글 작성 폴더
│       ├── my-first-post.md
│       └── attachments/    # 이미지 및 첨부파일
├── 90_settings/
│   └── 95_hexo_scripts/   # 변환 스크립트
│       └── convert-obsidian-to-hexo.js
└── .github/
    └── workflows/
        └── sync-to-seolcoding.yml

seolcoding.com/ (Public Repository)
├── _config.yml             # Hexo 설정
├── _config.next.yml        # NexT 테마 설정
├── source/
│   ├── _posts/            # 변환된 블로그 글
│   └── images/            # 이미지 파일
├── themes/
│   └── next/              # NexT 테마
└── .github/
    └── workflows/
        └── build-and-deploy.yml
```

## 🎯 시스템의 장점

### 1. 완전한 자동화
- Obsidian에서 글 작성 → Git push → 자동 변환 → 자동 배포
- 수동 개입 없이 전체 프로세스 자동화

### 2. 프라이버시 보호
- Sparse checkout으로 블로그 컨텐츠만 동기화
- 개인 볼트는 Private, 블로그만 Public
- 민감한 정보 노출 위험 최소화

### 3. 유연한 확장성
- 변환 스크립트 커스터마이징 가능
- 다양한 Hexo 테마 적용 가능
- 추가 자동화 기능 확장 용이

### 4. 버전 관리
- 모든 컨텐츠가 Git으로 버전 관리
- 변경 이력 추적 가능
- 필요시 롤백 가능

### 5. 개발자 친화적
- 코드로 모든 설정 관리
- CI/CD 파이프라인 구축
- Infrastructure as Code 원칙 적용

## 🚀 사용 방법

### 글 작성 및 배포

1. **Obsidian에서 글 작성**
   ```markdown
   # MainVault/50_publish/51_blog/my-awesome-post.md
   ---
   title: My Awesome Post
   date: 2025-01-17
   tags: [development, hexo, obsidian]
   ---

   오늘은 [[Obsidian]]과 Hexo를 연동하는 방법을 알아보겠습니다.

   ![[screenshot.png]]

   #hexo #obsidian #automation
   ```

2. **Git 커밋 및 푸시**
   ```bash
   git add .
   git commit -m "Add new blog post"
   git push origin main
   ```

3. **자동 배포 확인**
   - GitHub Actions 탭에서 워크플로우 실행 확인
   - 약 2-3분 후 블로그에 자동 반영

### 로컬 테스트

```bash
# Hexo 로컬 서버 실행
cd ~/Dev/seolcoding.com
hexo server

# http://localhost:4000에서 확인
```

## 🔧 트러블슈팅

### 일반적인 문제와 해결책

1. **변환 스크립트 실행 실패**
   - Node.js 버전 확인 (v18 이상)
   - gray-matter 패키지 설치 확인
   - 파일 경로 확인

2. **GitHub Actions 실패**
   - PAT 토큰 만료 확인
   - Repository secrets 설정 확인
   - 워크플로우 권한 확인

3. **이미지 표시 안됨**
   - post_asset_folder 설정 확인
   - 이미지 파일명에 특수문자 없는지 확인
   - 경로 대소문자 확인

## 📝 마무리

이 시스템을 구축하면서 가장 큰 수확은 **"글쓰기에만 집중할 수 있는 환경"**을 만들었다는 것입니다. Obsidian의 강력한 노트 작성 기능과 Hexo의 깔끔한 블로그 생성 기능을 결합하여, 개발자에게 최적화된 블로그 운영 시스템을 구축할 수 있었습니다.

앞으로 이 시스템을 기반으로 다음과 같은 기능들을 추가할 예정입니다:
- 자동 SEO 최적화
- 이미지 자동 압축 및 최적화
- 소셜 미디어 자동 공유
- 댓글 시스템 통합

이 글이 비슷한 고민을 하는 개발자들에게 도움이 되기를 바랍니다!

---

**GitHub Repositories**:
- [MainVault (Private)](https://github.com/yourusername/MainVault)
- [seolcoding.com (Public)](https://github.com/yourusername/seolcoding.com)

**Keywords**: #Obsidian #Hexo #GitHub-Actions #자동화 #정적사이트생성기 #블로그