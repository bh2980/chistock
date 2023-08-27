module.exports = {
  disableEmoji: false,
  format: "{type}: {emoji}{subject}",
  list: [
    "feat",
    "fix",
    "fixTypo",
    "docs",
    "style",
    "design",
    "refactor",
    "test",
    "chore",
    "ci",
  ],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ["type", "subject", "body", "breaking", "issues"],
  scopes: [],
  types: {
    feat: {
      description: "새로운 기능 추가",
      emoji: "✨",
      value: "feat",
    },
    fix: {
      description: "버그 픽스",
      emoji: "🐛",
      value: "fix",
    },
    fixTypo: {
      description: "오타 수정",
      emoji: "✏️",
      value: "fix typo",
    },
    docs: {
      description: "문서 수정",
      emoji: "📝",
      value: "docs",
    },
    style: {
      description: "코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우",
      emoji: "🎨",
      value: "style",
    },
    design: {
      description: "CSS 등 디자인 작업",
      emoji: "💄",
      value: "design",
    },
    refactor: {
      description: "코드 리팩토링, 구조 변경",
      emoji: "♻️",
      value: "refactor",
    },
    test: {
      description: "테스트 코드, 리팩토링 테스트 코드 추가",
      emoji: "✅",
      value: "test",
    },
    chore: {
      description: "빌드 업무 수정, 패키지 매니저 수정, 기타 잡무",
      emoji: "🐋",
      value: "chore",
    },
    ci: {
      description: "CI 관련 변경",
      emoji: "👷",
      value: "ci",
    },
  },
  messages: {
    type: "커밋 유형을 선택하세요:",
    subject: "짧은 단언문으로 간단한 설명을 작성하세요:\n",
    body: "필요할 경우 추가적인 설명을 작성하세요:\n ",
    breaking: "Breaking Change인가요?",
    issues: "이 커밋으로 종료되는 이슈(예: #123):",
  },
};
