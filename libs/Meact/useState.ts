import { rendering } from "../../src/main"

type UseStateReturn<T> = [T, (newState: T) => void]

let stateIndex = 0
const stateArr:unknown[] = []
export const useState = <T extends {}>(initState:T):UseStateReturn<T>=> {
    const index = stateIndex
    if(stateArr[index] === undefined) {
        stateArr[index] = initState
    }
    const state = stateArr[stateIndex]

    const setState = (newState:T) => {
        stateArr[stateIndex] = newState;
        rendering();
    }

    stateIndex += 1
    
    return [stateArr[index] as T, setState]
}

/*
현재 문제점
1. setState 사용시에 강제로 렌더링이 되는 것을 확인 해야 한다. 그래야 이후 작업을 진행 할 수 있음
그러나 강제 렌더링을 하는 방법을 알 수가 없다.
*/