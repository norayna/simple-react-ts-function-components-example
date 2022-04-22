import Greeting from "./Greeting";
import MainText from "./MainText";

interface MainProps {
    user: string
}

const Main = (props: MainProps): JSX.Element => {
    return (
        <main>
            <Greeting user={props.user} />
            <MainText />
        </main>
    )
}

export default Main