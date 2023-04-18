let basicData = {
  count: 10,
  min: 1,
  max: 10,
  divideNumber: 5,
};
// console.log(typeof basicData.count);
let rndNums = [
  Number(Math.random() * 100),
  Number(Math.random() * 100),
  Number(Math.random() * 100),
  Number(Math.random() * 100),
  Number(Math.random() * 100),
  Number(Math.random() * 100),
];
// console.log(typeof rndNums[0]);
function exampleOne(count, min, max) {
  //위의 basicData 참고하여 매개변수를 작성하세요
  let exampleArr = [];
  //매개변수 count는 랜덤함수를 실행하는 횟수를 의미합니다.
  //랜덤함수를 실행하는 횟수만큼 반복문을 실행합니다.
  //랜덤함수가 실행되어 도출된 결과값을 배열에 추가하고
  //배열을 리턴하는 로직을 작성하세요
  for (let i = 0; i < count; i++) {
    let a = (Math.random() * (max - 0.99) + min).toFixed(2);

    exampleArr.push(a);
  }
  //실수(float)로 도출된 난수, 소숫점 두자리까지 표현된 값을 배열에 추가합니다.

  return exampleArr;
}
function exampleTwo(array, divideNumber) {
  let exampleObject = {
    a: [],
    b: [],
  };

  //0번째 매개변수 array는 숫자(실수)로 이루어진 배열입니다.
  //1번째 매개변수는 정수만을 입력하도록 타입을 제어하고,
  //매개변수 divideNumber보다 작은수는 a배열에, 큰 수는 b배열에 추가하는 로직을 작성하세요
  //divideNumber는 basicData객체의 divideNumber 속성값을 사용합니다.

  for (let i in array) {
    if (Math.floor(array[i]) < divideNumber) {
      exampleObject.a.push(Math.floor(array[i]));
    } else if (Math.floor(array[i]) > divideNumber) {
      exampleObject.b.push(Math.floor(array[i]));
    }
  }
  return exampleObject;
}
function exampleThree(array) {
  //매개변수 array의 모든 매개변수를 더하는 로직을 작성하세요
  let value = 0; //더한 결과값을 저장하는 변수입니다

  for (let i in array) {
    value += array[i];
  }
  return value;
}
function exampleFour(object) {
  //매개변수 object의 프로퍼티가 배열인지를 검사한 후,
  //배열의 요소가 모두 숫자형태인지 검사하는 로직을 작성하세요
  let value = false; //지역변수에 검사결과를 boolean 타입으로 할당 후 리턴하세요
  if (Array.isArray(object)) {
    value = true;
    for (let i = 0; i < object.length; i++) {
      if (typeof object[i] !== "number") {
        value = false;
        break;
      }
    }
  }
  return value;
}
function exampleFive(objectOne, objectTwo) {
  //objectOne매개변수는 최상단 basicData 객체가 인자로 들어올 것을 가정합니다.
  //objectTwo는 exampleTwo 함수의 리턴값이 인자로 들어올 것을 가정합니다.
  let value = 0;
  //objectOne, objectTwo 모두 각각 프로퍼티의 값을 더한 뒤,
  //위의 지역변수 value에 총합을 생성하여 리턴하는 로직을 작성하세요
  for (let i in objectOne) {
    value += objectOne[i];
  }
  for (let i in objectTwo) {
    for (let j in objectTwo[i]) {
      value += objectTwo[i][j];
    }
  }
  return value;
}
console.log(exampleOne(basicData.count, basicData.min, basicData.max));

console.log(
  exampleTwo(
    [1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9, 10.1],
    basicData.divideNumber
  )
);
console.log(exampleThree(rndNums).toFixed(2));
console.log(exampleFour(rndNums));
console.log(
  exampleFive(
    basicData,
    exampleTwo(
      exampleOne(basicData.count, basicData.min, basicData.max),
      basicData.divideNumber /* exampleOne 함수의 리턴값 및 구성 */
    )
  )
);
