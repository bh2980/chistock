/**
 * tailwind width 클래스 구분용 타입
 *
 * string이 단순히 w-로 시작하는지 체크
 *
 * @example
 * w-auto, w-full, w-[123rem] -> ok
 * ws-auto, h-full, wisdom-hello -> error
 */
export type TailwindWidthClassType = `w-${string}`;

/**
 * tailwind height 클래스 구분용 타입
 *
 * string이 단순히 h-로 시작하는지 체크
 *
 * @example
 * h-auto, h-full, h-[123rem] -> ok
 * hs-auto, w-full, hello-wisdom -> error
 */
export type TailwindHeightClassType = `h-${string}`;
