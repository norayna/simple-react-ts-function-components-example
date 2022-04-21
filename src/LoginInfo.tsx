interface LoginInfoProps {
    user: string
}

const LoginInfo = (props: LoginInfoProps): JSX.Element => {
    return (
        <span>Logged in as {props.user}</span>
    )
}

export default LoginInfo