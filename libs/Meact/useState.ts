import { rendering } from "../../src/main";

type UseStateReturn<T> = [T, (newState: T) => void];

type CurrentState<T> = {
  value: T;
  setState: (newState: T) => void;
};

let stateIndex = 0;
const stateArr: CurrentState<unknown>[] = [];
export const useState = <T extends {}>(initState: T): UseStateReturn<T> => {
  if (stateArr.length === stateIndex) {
    const state = {
      value: initState,
      setState(newValue) {
        state.value = newValue;
        stateIndex = 0;
        rendering();
      },
    };

    stateArr.push(state);
  }

  const currentState = stateArr[stateIndex];
  stateIndex += 1;

  return [currentState.value as T, currentState.setState];
};
