# Simple React Typescript example app with function components only
![image](https://user-images.githubusercontent.com/25844355/164511907-d4de067e-8233-4cdd-bfea-ea365f8262ee.png)

The component tree is as follows:
- `App` (contains the current user)
  - `Navbar` (gets current user as prop)
    - `Menu` (just a dummy)
    - `LoginInfo` (gets current user as prop and displays it)
  - `Main` (gets current user as prop)
    - `Greeting` (gets current user as prop and displays it)
    - `MainText` (just some gibberish text)

The props for each component that takes props are type hinted using an interface e.g.:
```typescript
interface GreetingProps {
    user: string
}
const Greeting = (props: GreetingProps) => {
    return (
            <h1>Hello {props.user}</h1>
    )
}

export default Greeting
```
