interface GreetingProps {
    user: string
}
const Greeting = (props: GreetingProps) => {
    return (
            <h1>Hello {props.user}</h1>
    )
}

export default Greeting