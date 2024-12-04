import { rendering } from "../../src/main";

type UseStateReturn<T> = [T, (newState: T) => void];

let stateIndex = 0; // 현재 렌더링에서 참조할 상태의 인덱스
const stateArr: unknown[] = []; // 상태를 저장하는 배열

let isRenderingScheduled = false;

export const useState = <T>(initState: T): UseStateReturn<T> => {
  // 현재 상태 배열에서 값 가져오기, 없으면 초기화
  if (stateArr[stateIndex] === undefined) {
    stateArr[stateIndex] = initState;
  }

  // 상태 배열에서 현재 상태를 가져오기
  const currentIndex = stateIndex; // 클로저로 현재 인덱스를 캡처
  const currentState = stateArr[currentIndex] as T;

  // 상태 업데이트 함수
  const setState = (newState: T) => {
    stateArr[currentIndex] = newState; // 해당 인덱스의 상태를 업데이트
    if (!isRenderingScheduled) {
      isRenderingScheduled = true;
      setTimeout(() => { // 비동기로 렌더링 처리
        isRenderingScheduled = false;
        stateIndex = 0;
        rendering(); // 렌더링 트리거
      }, 0);
    }
  };

  // 다음 상태 참조를 위해 인덱스 증가
  stateIndex += 1;
  return [currentState, setState];
};

export const resetStateIndex = () => {
  stateIndex = 0;
};
