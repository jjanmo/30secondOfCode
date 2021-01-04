# ToCall Component

## 무엇을 구현??

> [Code](react_code/src/components/CallTo.js)

Renders a link formatted to call a phone number(tel: link).

Use `phone` to create a `<a>` element with an appropriate href attribute.

Render the link with children as its content.

<br />

### `children`

어떤 컴퍼넌트 안에 무엇이 들어올지 모를 때, 혹은 컴퍼넌트에 레이아웃정도만을 만들고 그 안의 내용은 그 컴퍼넌트를 재사용해서 만들고자 할 때 `props.children` 을 사용한다.

```JSX
function Layout({ color, children }) {
    return (
        <div className={`bg${color}`}>
            {children}
        </div>
    );
}
```

```JSX
function Item({message}) {
    return(
        <Layout color="tomato">
            <h1>Hello World</h1>
            <p>{message}</p>
        </Layout>
    )
}
```

> Item 컴퍼넌트는 기존의 Layout 컴퍼넌트를 사용하여 재구성하였다. 이 때 Layout 컴퍼넌트 내부에 있는, `h1, p` 가 Layout 컴퍼넌트의 `props.children`으로 넘어가게 된다.

> 위처럼 children을 사용해서 큰 틀만 만들고 그 안의 내용은 children이라는 프로퍼티를 이용해서 재구성할 수 있다. 이 부분은 <u>많이 사용하다보면</u> 어느 상황에서 어떻게 사용할지에 대해서 알게 될 것이라고 생각한다.

<br/>

### `<a href='tel:전화번호' />`

HTML a 태그를 통해서 `콜링크를 만들 수 있다는 사실`을 오늘 처음 알았다. 위에서 처럼 href 속성의 값으로 `tel:전화번호`를 문자열로 넣어주면 된다. 이 링크를 클릭하게 되면 브라우저가 가능한 전화서비스로 연결해준다.

이걸 몰랐으니 a 태그에 tel을 넣으라는 말을 알아들을 수가 없는 것은 당연지사...🤪
