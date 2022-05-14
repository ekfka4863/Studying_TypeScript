---
date: 2022-05-14-Saturday
---

# Type Basics

## 타입 지정 
- 타입스크립트는 일반 변수, 매개 변수, 객체 속성 등에: TYPE과 같은 형태로 타입을 지정할 수 있다.
- e.g.       
  ```ts 
    let a: string = 'text'; // 문자열
    let b: number = 0; // 숫자형
    let c: boolean = true; // 논리형
    let d: any = true; // 어떤 타입이 올지 모를 때
    let e: string | number = '0'; // 문자열이나 숫자가 올 때
  ```

## 타입 에러 
- 만약 위와 같이 타입을 선언했는데 선언한 타입과 다른 타입의 값을 대입하면 에러를 발생시킨다.

## 타입 선언
- 타입스크립트는 ES5, ES6의 상위 확장 언어(cf. superset)이므로 자바스크립트의 타입을 그대로 사용하며, 이외에도 타입스크립트의 고유의 타입이 추가로 제공된다. 

  |**Type**|JS|TS|_Description_|
  |:--:|:--:|:--:|:--:|
  |**boolean**|◯|◯|_true/false_|
  |**null**|◯|◯|_값이 없다는 것을 명시_|
  |**undefined**|◯|◯|_값을 할당하지 않은 변수의 초깃값_|
  |**number**|◯|◯|_숫자 (정수와 실수, Infinity, NaN)_|
  |**string**|◯|◯|_문자열_|
  |**symbol**|◯|◯|_고유하고 수정 불가능한 데이터 타입이며 주로 객체 프로퍼티들의 식별자로 사용 (ES6+)_|
  |**object**|◯|◯|_객체형(참조형)_|
  |**array**|◯|◯|_배열_|
  |**tuple**||◯|_고정된 요소수 만큼의 타입을 미리 선언 후 배열을 표현_|
  |**enum**||◯|_열거형. 숫자값 집합에 이름을 지정한 것_|
  |**any**||◯|_타입 추론(type inference)를 할 수 없거나 타입 체크가 필요없는 변수에 사용, var 키워드로 선언한 변수와 같이 어떤 타입의 값이라도 할당 가능_|
  |**void**||◯|_일반적으로 함수에서 반환값이 없을 경우 사용_|
  |**never**||◯|_결코 발생하지 않는 값_|

<br /> 

> 논리형 (Boolean)
- e.g.        
```ts
  let boolVal1: boolean = true;
  let boolVal2: boolean = false;
```

<br />

> 숫자형 (Number)
- e.g.        
```ts
  let numVal1: number = 5;
  let numVal2: number = 3.14;
  let numVal3: number = NaN;
```

<br />

> 문자열 (String)
- e.g.        
```ts
  let strVal1: string = 'text';
  let strVal2: string = `my name is ${val}`;   // cf. ES6의 템플릿 문자열도 지원
```

<br />

> 배열 (Array)
- 배열은 두가지 방법으로 타입 선언 가능 
- e.g.        
```ts
  // 문자열만 가지는 배열
  let arrVal1: string[] = ['a', 'b', 'c'];
  let arrVal2: Array<string> = ['a', 'b', 'c'];

  // 숫자형만 가지는 배열
  let arrVal3: number[] = [1, 2, 3];
  let arrVal4: Array<number> = [1, 2, 3];

  // Union 타입(다중 타입)의 문자열과 숫자를 동시에 가지는 배열
  let arrVal5: (string | number)[] = [1, 'a', 2, 'b', 'c', 3];
  let arrVal6: Array<string | number> = [1, 'a', 2, 'b', 'c', 3];

  // 배열이 가지는 값의 타입을 추측할 수 없을 때 any를 사용할 수 있다.
  let arrVal7: (any)[] = [1, 'a', 2, 'b', 'c', 3];
  let arrVal8: Array<any> = [1, 'a', 2, 'b', 'c', 3];
```

<br />

> 함수 (Function)
- 함수에 타입을 선언할 경우, () 안에 오는 매개변수에 각각 타입을 선언해주며, 매개변수 우측에는 해당 함수의 리턴값의 타입도 선언해주면 된다. 
- e.g.        
```ts
  function sum(parameter1: number, parameter2: number): number {
    return parameter1 + parameter2;
  }
  console.log(sum(2, 3)); // 5
  // cf. 만약 리턴값을 숫자형으로 선언했는데 다른 타입의 값이 리턴되면 에러가 난다 
```

<br />

> 객체 (Object)
- 기본적으로 typeof 연산자가 object로 반환하는 모든 타입을 의미한다.     
~~여러 타입의 상위 타입이기 때문에 많이 사용이 안 될 수도있음!~~ 
- e.g.        
```ts
  let obj: object = {};
  let arr: object = [];
  let func: object = function() {};
  let date: object = new Date();
```
- 여러타입을 아울러서 타입 선언을 하는 것이 아니라, 보다 정확한 타입지정을 원하면 아래와 같이 객체 속성들에 대한 타입을 개별적으로 지정하면 된다. 
- e.g. 
```ts
  let user: { name: string, age: number } = {
    name: 'a',
    age: 20
  };
  console.log(user); // {name: "a", age: 20}
```

<br />

> 튜플 (Tuple)
- 배열과 유사하다. 차이점은 배열의 요소의 갯수만큼의 타입을 미리 순서에 맞게 선언해 줘야한다.      
만약 정해진 요소의 순서와 개수가 다르면 에러를 출력한다. 
- e.g.        
```ts
  let tuple: [string, number];
  tuple = ['a', 0];
  
  console.log(tuple); // ["a", 0]

  // cf. 
  // tuple = [0, 'a']; // error
  // tuple = ['a', 0, 1]; // error
```
- 값으로 타입을 대신 지정할 수도 있다.    
다만, 처음 선언한 때의 값과 다른 값이 할당되면 에러가 출력된다.     
- e.g.      
```ts 
  let user: ['a', number];
  user = ['a', 20]; // ["a", 20]
  user = ['a', 30]; // ["a", 30]

  // cf. 
  // user = ['b', 30]; // error
```
- 튜플은 정해진 타입과 고정된 길이의 배열이지만, 값을 "할당할 때만 해당"된다.          
**push나 splice와 같은 메서드를 통해 값을 넣는건 막을 수 없다.**       
- e.g.     
```ts 
  let user: [string, number];
  user = ['a', 20]
  console.log(user); // ["a", 20]
  user.push(30);
  console.log(user); // ["a", 20, 30]
```

<br />

> 열거형 (Enum)
- enum은 enumerated type (열거형) 타입을 의미.     
숫자 혹은 문자열 값 집합에 이름을 부여하고 이를 사용할 수 있게한다.    
값의 종류가 일정한 범위로 정해져 있는 경우 유용한다.    
기본적으로 0부터 시작하며, 값은 1씩 증가한다.          
- e.g.        
```ts
  enum obj {
    a,
    b,
    c,
    d,
    e
  }
  console.log(obj);
  // 0: "a"
  // 1: "b"
  // 2: "c"
  // 3: "d"
  // 4: "e"
  // a: 0
  // b: 1
  // c: 2
  // d: 3
  // e: 4
```
- 수동으로 값을 변경할 수 있으며, 변경한 부분부터 다시 1씩 증가한다.      
- e.g.        
```ts
  enum obj {
    a,
    b = 10,
    c,
    d,
    e
  }
  console.log(obj.b); // 10
  console.log(obj.c); // 11
```

<br />

> 모든타입 (Any)
- Any는 모든 타입을 의미한다.    
기존의 자바스크립트 변수와 마찬가지로 어떠한 타입의 값도 할당할 수 있다.       
불가피하게 타입을 선언할 수 없는 경우 사용가능.      
- e.g.        
```ts
  let any:any = 'String';
  any = 0;
  console.log(any); // 0
  any = true;
  console.log(any); // true
```

<br />

> 빈 타입 (Void)
- void는 리턴값이 없는 함수에서 사용된다.    
리턴값의 타입을 명시하는 곳에 작성하며, 리턴값이 없는 함수는 undefined를 반환한다.    
- e.g.        
```ts
  function hello(): void {
    console.log("hello");
  }
  console.log(hello()); // undefined
```

<br />

> never 
- 타입스크립트에서 never 타입은 값의 공집합이다.    
never 타입은 절대 발생할 수 없는 타입을 나타낸다.        
예를 들어, 아래에서 errorMessage 함수는 오류를 발생시키기 떄문에, null와 undefined를 포함한 어떠한 값도 반환하지 않는 것을 알 수 있다.     
이런 경우 never 타입을 사용한다.      
- e.g.        
```ts
  function errorMessage() {
    throw new Error("Test Error to see what is type never in TypeScript!");
  }
  console.log(errorMessage()); // Uncaught Error: Test Error to see what is type never in TypeScript!
```

<br />
<br />


---
- reference: 
  - https://velog.io/@recordboy/타입스크립트TypeScript-타입-선언
  - https://sambalim.tistory.com/142
  - https://ui.toast.com/weekly-pick/ko_20220323
---
