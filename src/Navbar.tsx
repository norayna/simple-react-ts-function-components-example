import Menu from "./Menu";
import LoginInfo from './LoginInfo'

interface NavbarProps {
    user: string
}

const Navbar = (props: NavbarProps): JSX.Element => {
    return (
        <nav>
            <Menu />
            <LoginInfo user={props.user} />
        </nav>
    )
}

export default Navbar