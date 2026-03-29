#!/usr/bin/env node

/**
 * Daily English Conversations Recommender
 * 매일 날짜 기반으로 5개의 일상 영어회화를 추천합니다.
 */

const fs = require('fs');
const path = require('path');

function getDailyConversations(dateStr) {
  const dataPath = path.join(__dirname, 'conversations.json');
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  const conversations = data.conversations;

  // Use date as seed for deterministic daily selection
  const date = dateStr ? new Date(dateStr) : new Date();
  const dateKey =
    date.getFullYear() * 10000 +
    (date.getMonth() + 1) * 100 +
    date.getDate();

  // Simple seeded shuffle to pick 5 unique conversations per day
  const seed = dateKey % conversations.length;
  const indices = [];
  let current = seed;
  while (indices.length < 5) {
    const idx = current % conversations.length;
    if (!indices.includes(idx)) {
      indices.push(idx);
    }
    current = (current * 1103515245 + 12345) & 0x7fffffff;
  }

  return {
    date: date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    }),
    conversations: indices.map((i) => conversations[i]),
  };
}

function printConversations(dateStr) {
  const result = getDailyConversations(dateStr);

  console.log('\n' + '='.repeat(60));
  console.log(`  오늘의 영어회화 5선 - ${result.date}`);
  console.log('='.repeat(60));

  result.conversations.forEach((conv, idx) => {
    console.log(`\n[${idx + 1}] ${conv.title}  #${conv.category}`);
    console.log('-'.repeat(60));

    conv.dialogue.forEach((line) => {
      console.log(`  ${line.speaker}: ${line.en}`);
      console.log(`     ${line.ko}`);
    });

    console.log('\n  ✦ 핵심 표현:');
    conv.key_expressions.forEach((expr) => {
      console.log(`    • "${expr}"`);
    });
  });

  console.log('\n' + '='.repeat(60) + '\n');
}

// Export for programmatic use
module.exports = { getDailyConversations };

// Run directly
if (require.main === module) {
  const dateArg = process.argv[2]; // optional: YYYY-MM-DD
  printConversations(dateArg);
}
