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

#### 어려웠던 점 (에러 핸들링)

## 최민우

#### 구현한 방법

#### 어려웠던 점 (에러 핸들링)
