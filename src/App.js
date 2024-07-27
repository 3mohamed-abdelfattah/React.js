import Heading, { Apples, Bag, Example, Nav, Pears, Promo } from "./ModuleOne";
import { Audio, MyVideo } from "./ModuleThree";
import AppTwo from "./ModuleTwo";

const bool = false;
const str1 = "just";

export function Example2(props) {
    return (
        <div>
            <h2>
                The value of the toggleBoolean prop is:{props.toggleBoolean.toString()}
            </h2>
            <p>The value of the math prop is: <em>{props.math}</em></p>
            <p>The value of the str prop is: <em>{props.str}</em></p>
        </div>
    );
};

function App() {
    return (
        //Passing props
        <div>
            <h1 style={{ textAlign: 'center', color: 'navy', fontSize: '90px' }}>ModuleOne</h1>
            <Nav first="Home" />
            <Heading firstName="Ramy" />
            <Heading firstName="Any name other than Ramy" />
            <Heading firstName="Mohamed" />
            <Bag children={<Apples color="yellow" number="5" />} />
            <Bag children={<Pears friend="Peter" />} />
            <Bag>
                <Apples color="yellow" number="5" />
            </Bag>
            <Bag>
                <Pears friend="Peter" />
            </Bag>
            <Promo heading="Hi" promoSubHeading="Mohamed" />
            <Example />
            <Example2 toggleBoolean={!bool}
                math={(10 + 20) / 3}
                str={str1 + ' another ' + 'string'} />
            <h1 style={{ textAlign: 'center', color: 'navy', fontSize: '90px' }}>ModuleTwo</h1>
            <hr style={{ border: "5px solid black" }} />
            <AppTwo />
            <h1 style={{ textAlign: 'center', color: 'navy', fontSize: '90px' }}>ModuleThree</h1>
            <hr style={{ border: "5px solid black" }} />
            <MyVideo url='https://youtu.be/7vfsv6Vm7AA?si=4vodHQ1M3g4KVnlZ' />
            <MyVideo url='https://www.youtube.com/shorts/r8t1krtDCnE' />
            <MyVideo url='https://youtu.be/qpvFXPhzzFU?si=IiE9xuHjCzFOkEzD' />
            <MyVideo url='https://youtu.be/pVjdMQ_iAh0?si=bo-UfUVsaaEOfwZZ' />
            <Audio />
        </div>
    );
};

export default App;
