---
title: Obsidian과 Hexo를 활용한 자동화된 블로그 퍼블리싱 시스템 구축하기
date: 2025-09-17 16:38:25
tags: [Obsidian, Hexo, GitHub-Actions, 자동화, 정적사이트생성기, 블로그]
categories: [Development, Automation]
---

## 🎯 프로젝트 목표

개발자로서 블로그를 운영하면서 겪는 가장 큰 고민 중 하나는 "어떻게 하면 글쓰기에만 집중할 수 있을까?"입니다. 이 프로젝트는 **Obsidian에서 편하게 글을 작성하면, 자동으로 Hexo 블로그로 변환되어 GitHub Pages에 배포되는 완전 자동화 시스템**을 구축하는 것을 목표로 합니다.

### 핵심 장점

1. **컨텍스트 스위칭 최소화**: Obsidian에서 글쓰기와 지식 관리를 동시에
2. **버전 관리와 백업**: Git을 통한 자동 버전 관리
3. **프라이버시 보장**: 개인 볼트는 비공개, 블로그 컨텐츠만 공개
4. **완전 자동화**: Push 한 번으로 블로그 배포까지 완료

## 🏗️ 시스템 아키텍처

이 시스템은 3단계로 구성됩니다:

1. **Obsidian Vault**: 모든 개인 노트와 블로그 글 원본 저장 (Private Repo)
2. **Hexo Blog**: 정적 사이트 생성 및 NexT 테마 적용 (Public Repo)
3. **GitHub Actions**: Cross-Repository 자동 동기화 및 배포

## 🛠️ 기술 스택

- **콘텐츠 작성**: Obsidian (Knowledge Management)
- **정적 사이트 생성**: Hexo 7.3.0
- **테마**: NexT 8.25.0
- **CI/CD**: GitHub Actions
- **호스팅**: GitHub Pages
- **변환 스크립트**: Node.js

이 시스템의 핵심은 **Obsidian의 강력한 지식 관리 기능**과 **Hexo의 깔끔한 정적 사이트 생성**을 결합하여, 개발자에게 최적화된 블로그 운영 환경을 제공한다는 점입니다.

다음 포스트에서는 실제 구현 과정과 자세한 설정 방법을 다룰 예정입니다!
