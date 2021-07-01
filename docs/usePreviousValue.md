# usePreviousValue hooks

## 구현 정의

**Stores the previous state or props.**
Create a custom hook that takes a value.
Use the useRef() hook to create a ref for the value.
Use the useEffect() hook to remember the latest value.

## [Code](../react_code/src/hooks/usePreviousValue.js)

## Reflection

usePreviousValue hooks를 만드는 것 자체는 어렵지 않았다. 문제는 이것을 실제로 적용하는 것이 문제였다. 이전 값을 갖는 훅스라고 하면 쉽게 생각하면 계산기 혹은 카운터 같은 곳에서 쓸모 있을 수 있을 것이다. 30Second 사이트에서 적용한 것 역시 카운터 였다. 그래서 나는 약간 업그레이드 시킨 `input을 통해서 입력받은 값을 더하는 카운터`에 적용하고자 하였다. 그런데 생각처럼 잘 되지않았다. 그 이유는 input값을 state로 관리해야하는데, onChange에 의해서 리랜더링될 때마다 훅스를 다시 불러오기 때문에 내가 원하는대로 이전값을 출력할 수 없었다. 여러가지 방법을 생각했지만 우선 현재 구현한 간단한 훅스로는 해결이 안될 것으로 이라는 판단하에 조금은 쉬운 예제인 일반적인 카운터로 구현하였다. 업그레이드 버전 카운터 훅스는 나의 TODO리스트로 남겨놓고 조만간 해결해야겠다.

- [ ] input을 통해서 입력받은 값을 더하는 카운터에 usePreviousValue 적용하기
