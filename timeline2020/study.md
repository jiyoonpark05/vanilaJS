## 📖 개념 정리

### viewport

: viewport는 웹페이지가 사용자에게 보여지는 영역을 말함. 평소에 html을 쓸 때 자주 쓰는 meta 태그 역시 모바일 기기에서 실제 렌더링 되는 영역과 뷰포트의 크기를 조절할 수 있도록하는 설정

```jsx
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

- width=device-width : 페이지의 너비를 기기의 스크린 너비르로 설정. 렌더링 영역을 기기의 뷰포트의 크기와 같게 만들어 줌
- initial-scale=1.0 : 처음 페이지 로딩 시 확데/축소가 되지 않은 원래의 크기를 사용하도록 함 (범위: 0~10)
- minimum-scale : 줄일 수 있는 최소 크기를 지정(0~10)
- maximum-scale : 늘릴 수 있는 최대 크기를 지정(0~10)
- user-scalable : yes/no 값을 가지며. 사용자가 화면을 확대/축소 할 수 있는지 지정.
  => 위의 줌 레벨은 1이 원래크기. 0.5라면 50% 축소를 의미한다

### use strict ?

이번 클론코딩에 나온 js파일에 usestrict가 나와서 검색 </br>
: javascript의 제한된 버전을 선택해 암묵적인 느슨모드(sloppy mode)를 해제하기 위한 방법.

- 기존에는 조용히 무시되던 에러를 throwing
- js 엔진의 최적화 작업을 어렵게 만드는 실수를 바로잡음
- 엄격 모드는 ecmascript 차기 버전들에서 정의 될 문법을 금지
- 엄격모드는 전체 스크립트 또는 부분 함수에 적용 가능 {}로 묶인 블럭문에서는 적용되지 않음. </br>

```jsx
// Non-strict code...

(function () {
  "use strict";

  // Define your library strictly...

})();

// Non-strict code...
```

=> strict mode는 파일 전체에 적용시킬 수도. 특정한 함수 안에서만 적용시킬 수도 있음. 예전 레거시 코드와 새 코드가 한 파일에 섞여 있을 떄 도움이 될 것

### Element.getBoundingClient-Rect()

: 엘리먼트의 크기와 위치를 알고 싶을 때 사용. js 상에서 상대위치를 구할 때 사용함. viewport를 기준으로 상대위치를 잦을 때 getBoundingClientRect라는 api를 사용 </br>

```jsx
const target = document.getElementById("target"); //요소의 id 값이 target이라고 가정
const clientRect = target.getBoundingClientRect(); //DomRect구하기 (각종 좌표값이 들어있는 객체 )
const relativeTop = clientRect.top; //Viewport의 시작지점을 기준으로 한 상대좌표 y값
```
