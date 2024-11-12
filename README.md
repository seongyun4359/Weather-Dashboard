1️⃣ 프로젝트 생성

Vite 공식 문서: https://ko.vite.dev/guide/

Vite 프로젝트 생성 코드: VS Code 터미널에서 하단 명령어 입력 후 엔터 (Node.js 최신 LTS 버전을 반드시 설치)

​

cd desktop 명령어는 터미널 또는 커맨드 프롬프트에서 현재 작업 디렉터리를 "desktop"이라는 하위 디렉터리로 변경하는 명령입니다. 여기서 cd는 "change directory"의 약어로, 디렉터리(폴더)를 변경하는 기능을 합니다.

1. cd desktop
2. npm create vite@latest
3. Project name: » vite-project (프로젝트 이름은 본인이 원하는 이름으로 생성)
4. Select a framework: » React
5. Select a variant: » TypeScript
6. cd 생성한 프로젝트명
7. npm install
8. code . -r
전체 과정을 보면 다음과 같습니다.


이렇게 프로젝트를 생성해 보았습니다.

마지막의 code . -r 명령어는 현재 디렉터리를 기존의 Visual Studio Code 창에서 열도록 지시하는 것입니다. 이렇게 하면 새 창이 열리지 않고, 작업 중인 환경을 유지하면서 필요한 파일을 편집할 수 있습니다.

​

code : VS Code를 실행하는 명령어입니다. 이 명령어를 입력하면 Visual Studio Code가 실행됩니다.

. : 현재 디렉터리를 지정합니다. 즉, code .는 현재 작업 중인 디렉터리를 VS Code로 열겠다는 의미입니다.

-r : "reuse window"의 약어로, 이미 열려 있는 VS Code 창에서 현재 디렉터리를 새로 열겠다는 뜻입니다. 이 옵션을 사용하면 새로운 인스턴스가 아닌 기존 창을 재사용하여 파일을 열 수 있습니다.
[출처] [스나이퍼 팩토리] 04. 리액트 프로젝트 스타터(프로젝트 생성)|작성자 개발자 9Diin

---------------------------

0️⃣ 우리가 만들어 볼 프로젝트 예제


우리는 앞으로 Shadcn UI라는 디자인 시스템을 사용하여 UI 개발을 진행할 예정이기 때문에 Shadcn UI 공식 문서를 살펴보며 하나하나 프로젝트 환경설정을 먼저 해보도록 하겠습니다.

​

1️⃣ Shadcn UI 설치

Shadcn UI 공식 문서 링크: https://ui.shadcn.com/

Vite + Shadcn UI 설치방법 링크: https://ui.shadcn.com/docs/installation/vite

​

공식 문서는 꼭 한 번 들어가셔서 어떤 컴포넌트를 제공하고 있는지, theme, color, example 예제들을 보면서 어떻게 활용할 수 있는지 한 번씩 참고해 보시길 꼭 추천드립니다! 굉장히 잘 만든 디자인 시스템이기 때문에 실무에서도 활용도가 굉장히 높답니다.

​

Shadcn UI 초기 환경설정 같은 경우에는 공식 문서에 아주 잘 설명되어 있으니 따라서 설치하는데 어려움은 없으실 거예요. 해당 포스팅을 보고 이해가 안 되시면 공식 문서를 참고해 주세요!

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
위 코드 두 줄을 VS Code 터미널에서 입력하고 설치를 진행해 주세요. 그런 다음 우리가 생성한 리액트 프로젝트에서 index.css 파일로 가셔서 다음 코드를 추가해 주세요. VS Code 이미지를 참고해 주세요.

@tailwind base;
@tailwind components;
@tailwind utilities;
[index.css]


위 과정을 마치셨으면, tailwind.config.js 파일로 가줍니다. 그리고 해당 코드를 통해 세팅을 해줍니다.

​

[tailwind.config.js]


이 코드는 Tailwind CSS의 설정 파일인 tailwind.config.js를 정의하는 JavaScript 코드입니다. 각 부분의 의미는 다음과 같습니다.

​

module.exports: 이 부분은 이 설정 파일을 다른 파일에서 사용할 수 있도록 내보내는 역할을 합니다.

content: Tailwind CSS가 어떤 파일에서 클래스를 찾을지를 지정합니다. 여기서는 ./index.html과 ./src 디렉터리 내의 모든. ts, .tsx, .js, .jsx 파일을 포함하도록 설정되어 있습니다. 이 설정에 따라 Tailwind는 사용된 클래스만 포함하여 최종 CSS 파일을 생성합니다.

theme: Tailwind CSS의 테마를 설정하는 부분입니다. 여기서는 extend 객체가 비어 있어서 기본 테마를 그대로 사용한다는 의미입니다. 필요에 따라 사용자 정의 스타일을 추가할 수 있습니다.

plugins: Tailwind CSS의 플러그인을 추가할 수 있는 배열입니다. 현재는 비어 있으므로 기본 플러그인만 사용합니다.

결론적으로, 이 설정 파일은 Tailwind CSS를 프로젝트에 통합하고, 어떤 파일에서 스타일을 사용할지를 정의하며, 기본 테마와 플러그인을 사용하도록 설정된 것입니다.

​

다음으로는 tsconfig.json 파일과 tsconfig.app.json 파일을 수정해 주도록 하겠습니다. 해당 작업은 상대 경로를 보다 간단한 키워드를 통해 관리하기 위함입니다. Alias 설정을 진행해 줍니다.

​

[tsconfig.json]


​

[tsconfig.app.json]


​

그렇게 타입 스크립트 설정까지 해주었다면 마지막으로 vite.config.ts에 적용해 봅시다. 터미널을 열고 다음 명령어를 통해 라이브러리 하나를 설정해 줍니다.

# (so you can import "path" without error)
npm i -D @types/node
/** [vite.config.ts] */

import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
마지막으로 Shadcn UI 라이브러리 설치를 해주고 마무리해줍니다. Shadcn UI를 설치함에 있어 여러 조건들을 물어볼 텐데, 처음 사용하시는 분들은 모두 '엔터'를 입력하여 설치를 진행해 주세요.

npx shadcn@latest init
​ 

------------


1️⃣ 날씨 조회 대시보드 만들기 프로젝트에서 사용될 라이브러리 설치

1. 프로젝트 생성: npm create vite@lastest
2. Tailwind CSS 설치:
- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p
3. (so you can import "path" without error) : npm i -D @types/node
4. Shadcn UI 설치 : npx shadcn@latest init
여기까지는 우리가 이미 작업했던 과정이죠?

바로 이어서, 페이지 라우팅 작업을 도와줄 리액트 라우터를 설치해 보도록 하겠습니다.

5. 리액트 라우터 설치 :
- npm install react-router-dom
- npm install localforage match-sorter sort-by
6. SASS 설치: npm install sass --save-dev
7. React Kakao Map 참고 문서:
- https://react-kakao-maps-sdk.jaeseokim.dev/
- npm install react-kakao-maps-sdk
8. HTTP 통신을 위한 라이브러리 설치: npm install axios
9. 중앙집중식 상태관리 라이브러리 설치: npm install jotai
이렇게 9가지 라이브러리 및 플러그인을 설치해 주시면 됩니다.

​
