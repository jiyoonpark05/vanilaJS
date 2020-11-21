## 📖 개념 정리 
-  `setInterval(fn, milisecond)`: 첫 번쨰 인자로 실행할 함수를 받고, 두 번째 인자는 실행할 시간의 간격
- `Document.querySelector()`:  css 선택자로, 제공한 선택자 또는 선택 뭉치와 일치하는 문서 내 첫 번째 `element`를 반환
- `localStorage`:key와 value를 string으로 저장해 준다 . (sessionStorage와 비슷함)
- `function loadName()` 에서는 현재 입력받은 값을 currentUser로 저장
```jsx
const USER_LS = "currentUser",
SHOWING_CN = "showing";

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`
}

function loadName() {
    const currentUser  = localStorage.getItem(USER_LS);

    if (currentUser === null) {
        askForName()
    } else {
        paintGreeting(currentUser);
    }
}
```

- currentUser가 있으면 `paintGreeting(currentUser)`

    → form.classList.remove(SHOWING_CN) : css상에서 input box block 처리한 것을 remove

    →text를 greeting.classList.add

    →들어온 text를 `greeting.innerText = `Hello ${text}`` 에 넣음


```jsx
function handleSubmit(event) {
    event.preventDefault();

    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);

}
```
- handleSubmit(event)

    →prevent.default :  엔터를 누르면 값이 어디론가 가는 것을 방지  

    →paintGreeting(currentValue); 이름이 들어간 greeting이 나오지만 새로고침 하면 날라감 

    →saveName(currentValue); 와 새로운 function `saveName(name){...}` 을 만들어줌 

    →새로고침해도 기억함 (f12 application에서 동작을 죽이면 다시 쓸 수 있음)
    
```jsx
const API_KEY = "66f338f28a22d4a4ca769dd4d47162fe";

    function getWeather(lat, lon) {
		 fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    }
```

- 네트워크에 API 끌고 온 걸 볼 수 있음
- `.then()`은 데이터가 완전히 들어온 다음 호출
