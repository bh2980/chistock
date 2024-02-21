export const getRelativeTime = (timestamp: number) => {
  const now = new Date().getTime();
  const targetDate = new Date(timestamp).getTime();

  // 밀리초로 계산된 차이
  const timeDifference = now - targetDate;

  // 시간 차이 계산
  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));

  // 일 수 차이 계산
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  // 주 수 차이 계산
  const weeksDifference = Math.floor(daysDifference / 7);

  // 상대적인 시간 문자열 생성
  if (hoursDifference < 1) {
    return "방금 전";
  } else if (hoursDifference < 24) {
    return `${hoursDifference}시간 전`;
  } else if (daysDifference < 7) {
    return `${daysDifference}일 전`;
  } else {
    return `${weeksDifference}주 전`;
  }
};
