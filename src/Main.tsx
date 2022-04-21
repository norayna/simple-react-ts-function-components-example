import Greeting from "./Greeting";
import MainText from "./MainText";

interface MainProps {
    user: string
}

const Main = (props: MainProps) => {
    return (
        <main>
            <Greeting user={props.user} />
            <MainText />
        </main>
    )
}

export default Main