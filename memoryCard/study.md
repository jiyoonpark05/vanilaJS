## memory card

- for each 
: 오직 Array 객체에서만 사용가능한 메서드
``` javascript
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
```
getCardsData()함수를 통해 localStorage에 저장했던 card 데이터를 cardsData에 담아 <br>
forEach문으로 배열요소를 꺼낸다<br>

``` javascript
function createCards() {
  cardsData.forEach((data, index) => createCard(data, index));
}
```
<br>

- JSON.stringify() 
:JavaScript 값이나 객체를 JSON 문자열로 변환 <br>
``` javascript
function setCardsData(cards) {
  localStorage.setItem("cards", JSON.stringify(cards));
  window.location.reload();
}
```

- classList
:클래스를 조작하는 다양한 메서드를 쓸 수 있음. `classList.add`는 클래스를 삽입 할 때 씀 <br>
지울 때는 `classList.remove`로 지울 수 있다. <br>
``` javascript
function createCard(data, index) {

  const card = document.createElement("div");
  card.classList.add("card");
  
  // 첫번째 카드인 경우 "card active"
  if (index === 0) {
    card.classList.add("active");
  }
```
<br>
classList.toggle은 클래스명 뒤에 추가/삭제 (토글창처럼) <br>
그래서 active 상태인 card를 클릭하면 card active show-answer 이 되는데 

``` javascript
transform: rotateX(180deg);
```
css에서 해당 효과로 카드를 180도 돌리는 효과를 적용 <br>
(https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateX())
