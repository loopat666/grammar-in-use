# 매일 영어회화 5선 (Daily English Conversations)

날짜 기반으로 매일 5개의 일상 영어회화를 추천해주는 솔루션입니다.

## 특징

- **30개 대화 수록** — 인사, 카페, 쇼핑, 직장, 식당, 교통, 여행, 건강 등 다양한 상황
- **한/영 병기** — 모든 대화와 핵심 표현에 한국어 번역 제공
- **매일 다른 5개 추천** — 날짜를 시드로 사용하여 날마다 다른 조합을 선택
- **특정 날짜 지정 가능** — 원하는 날의 추천 목록을 확인 가능

## 사용 방법

### 오늘의 회화 보기

```bash
node en/daily-conversations/daily.js
```

### 특정 날짜 지정

```bash
node en/daily-conversations/daily.js 2026-04-01
```

### 프로그래밍 방식으로 사용

```js
const { getDailyConversations } = require('./daily');

const result = getDailyConversations(); // 오늘 날짜
// 또는
const result = getDailyConversations('2026-04-01'); // 특정 날짜

console.log(result.date);           // "2026년 4월 1일 수요일"
console.log(result.conversations);  // 5개 대화 배열
```

## 대화 카테고리

| 카테고리 | 상황 예시 |
|----------|-----------|
| 인사     | 직장 아침 인사, 처음 만나는 사람 |
| 카페     | 커피 주문 |
| 쇼핑     | 사이즈 문의, 환불/교환 |
| 직장     | 회의 일정, 도움 요청 |
| 식당     | 자리 안내, 주문 |
| 교통     | 길 안내, 택시 |
| 전화     | 비즈니스 통화 |
| 날씨     | 날씨 대화 |
| 건강     | 병원, 운동 |
| 여행     | 공항, 호텔 체크인 |
| 은행     | 계좌 개설 |
| 취미     | 여가 활동 이야기 |
| 음식     | 배달 주문, 요리 |
| 기술     | 컴퓨터 문제 해결 |
| 칭찬     | 칭찬하기 |
| 감사     | 감사 표현 |
| 약속     | 약속 확인 |
| 사과     | 사과하기 |
| 공부     | 수업, 스터디 |
| 집       | 이웃과 대화 |
| 취업     | 면접 스몰토크 |

## 데이터 구조 (`conversations.json`)

```json
{
  "conversations": [
    {
      "id": 1,
      "category": "카테고리",
      "title": "대화 제목",
      "dialogue": [
        { "speaker": "A", "en": "English sentence.", "ko": "한국어 번역." }
      ],
      "key_expressions": ["핵심 표현 1", "핵심 표현 2"]
    }
  ]
}
```
