# wanted-codestates-project-7-5-1

## 프로젝트 실행 방법

- 배포 사이트

- 로컬

1. `git clone https://github.com/Pre-Onboarding-FE-Team07/wanted-codestates-project-7-5-1.git`
2. `yarn`
3. `yarn run start`

---

## 프로젝트 구조

```
--📁 src
  ---📁 assets ➡ 이미지 공간
  ---📁 component ➡ 화면 컴포넌트
  ---📁 pages ➡ 화면 공간
  -- 📁 hooks ➡ 검색 시 어떤 데이터를 저장할 지에 대한 공간
  ---📁 utilities ➡ 로딩된 데이터는 메모리에 캐시한 공간
```

---

## 팀 멤버

| 이름                                       | 직책 | 역할                                         |
| ------------------------------------------ | ---- | -------------------------------------------- |
| [✨김정훈](https://github.com/jeonghun10)  | 팀장 | 영역을 처음부터 설정하는 기능                |
| [⚡️박진용](https://github.com/jinyongp)   | 팀원 | 영역을 추가하는 기능                         |
| [🎨문선경](https://github.com/dev-seomoon) | 팀원 | (image_url 또는 product_code) 검색 결과 기능 |
| [🚀심채윤](https://github.com/Lela12)      | 팀원 | 로딩 중에 대한 기능                          |
| [✏️예효은](https://github.com/ye-yo)       | 팀원 | 검색기능                                     |
| [🔨이예지](https://github.com/Lee-ye-ji)   | 팀원 | (keyword) 검색 결과 기능                     |
| [🚚최민우](https://github.com/exxocism)    | 팀원 | 에러에 대한 기능 & 페이지 기능               |

---

## 구현한 기능 목록

<details>	
  <summary><b>공통</b></summary>
  <br/>
  <ul>
    <li>url에 검색 쿼리에 사용한 데이터가 직관적으로 보여야함</li>
    <li>PXL 로고를 클릭 시에 첫 페이지로 돌아와야 함</li>
    <li>반응형으로 구현</li>
    <li>+)검색어 강조</li>
   </ul>
</details>
<details>	
  <summary><b>1. 검색기능</b></summary>
  <br/>
  <ul>
    <li>전체적인 검색 페이지 화면 개발</li>
    <li>검색 시 검색 데이터 호출하는 로직 작성</li>
    <li>검색 후 데이터 사용자가 어떤 걸 입력했는것 까지 구현</li>
   </ul>
</details>
<details>	
  <summary><b>2. (keyword) 검색 결과 기능</b></summary>
  <br/>
  <ul>
    <li>Card 컴포넌트 만드는 화면 개발</li>
    <li>매핑 기준을 설정해 image_urls의 값에 있는 이미지를 화면에 출력</li>
    <li>이미지는 클릭 시에 image_url로 라우팅 되도록 처리</li>
    <li>출력하는 정보는 ‘name’, ‘price’, ‘image_url’의 이미지</li>
   </ul>
</details>
<details>	
  <summary><b>3. (image_url 또는 product_code) 검색 결과 기능</b></summary>
  <br/>
  <ul>
    <li>Card 컴포넌트 만드는 화면 개발</li>
    <li>검색 결과 페이지 구현</li>
    <li>좌측의 ATTRIBUTES 정보 출력, ITEMS 정보 출력</li>
    <li>우측의 ‘name’, ‘price’, ‘image_url’의 이미지 출력 및 product_url의 정보로 라우팅</li>
   </ul>
</details>
<details>	
  <summary><b>4. 로딩 중에 대한 기능</b></summary>
  <br/>
  <ul>
    <li>데이터가 로딩 중인 경우, 로딩 중임을 알리는 UI 만들기</li>
    <li>로딩 중에는 별도 액션이 일어나는 것 막기</li>
    <li>+) 한번 로딩된 데이터는 메모리에 캐시하고, 새로고침 시에는 http요청을 하지 말고 캐시된 데이터를 불러와 랜더링</li>
   </ul>
</details>
<details>	
  <summary><b>5. 에러에 대한 기능 & 페이지 기능</b></summary>
  <br/>
  <ul>
    <li>에러 처리</li>
    - 호출 중 에러가 발생했을 때의 처리를 한 경우
    - 오류가 발생한 경우를 체크하는 경우
    - 오류가 발생했음을 사용자에게 인지 시킨 경우(오류 발생했다는 화면 구현)
    <li>페이지 네이션 or More 버튼 UI 구현</li>
    - 데이터를 자른 후 사용자 요청에 맞게 데이터가 보일 수 있도록 구현
   </ul>
</details>

---

## 문선경

#### 구현한 방법

#### 어려웠던 점 (에러 핸들링)

## 심채윤

#### 구현한 방법

#### 어려웠던 점 (에러 핸들링)

## 예효은

#### 구현한 방법

#### 어려웠던 점 (에러 핸들링)

## 이예지

#### 구현한 방법

- 카드 컴포넌트 구현

  ```
  <Card name={"text"} price={30} imageUrl={"someurl"} onClickEvent={someMethod} />
  ```

  카드 컴포넌트에 props가 전달되게 끔 코드를 짜서 `KeywordPage.jsx`, `Recommends.jsx` 에서 재사용할 수 있게 작성하였습니다.

- contextAPI를 이용해서 `KeywordPage.jsx`에서 사용자가 검색에 일치하는 데이터를 받아와 빈 배열이라면 에러메시지를 띄워주고, 아닌 경우에는 데이터가 잘 출력될 수 있도록 작성하였습니다.
- `product.json`에서 키워드가 매핑되는 조건 즉, 검색 알고리즘 구현을 검색한 키워드와 카테고리를 비교하여 유사한 데이터이면 해당되는 값 들이 출력될 수 있도록 작성하였습니다.
  ex) `상의` keyword 입력 시 -> `자켓`, `조끼`, `블라우스` 등 연관된 데이터

#### 어려웠던 점 (에러 핸들링)

- `product.json`에서 키워드가 매핑되는 조건 즉, 검색 알고리즘 구현을 할 때의 부분이 어려웠습니다. 한글로 입력된 input의 값을 영어로 바꾸어서 카테고리 배열에 있는 지 확인 해야했었습니다. 우선 사용자가 `드레스`라고 입력하면 카테고리 배열에 `dresses`로 변경해주기 위해 switch-case문을 이용해서 키워드에 대한 이름을 변경해주었고, 카테고리 배열에 변경 된 `dresses`값 있는 데이터들을 다시 출력해서 새로운 데이터 배열을 만들어주어야 했었습니다. `filter()` 함수와 `for-of`문 을 이용하여 category 배열에 담겨 있는 값들에 접근 할 수 있었습니다. 그 뒤에 영문으로 바꾸어진 단어가 카테고리 배열에 있는 값이라면 그 전체 데이터가 나올 수 있게 return 시켜주었고, 전에 팀원 분께서 작성되었던 로직과 합쳐주니 성공적으로 검색 부분에 대한 출력 값을 변경할 수 있었습니다.

## 최민우

#### 구현한 방법

#### 어려웠던 점 (에러 핸들링)
