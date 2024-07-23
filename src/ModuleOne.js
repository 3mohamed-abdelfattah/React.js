function Heading(props) {
    return (
        <h1>Hello, {props.firstName}</h1>
    )
}
export default Heading;


export function Bag(props) {
    const bag = {
        padding: "20px",
        border: "1px solid gray",
        background: "#fff",
        margin: "20px 0"
    }
    return (
        <div style={bag}>
            {props.children}
        </div>
    )
}


export function Apples(props) {
    return (
        <div className="promo-section">
            <div>
                <h2>These apples are: {props.color}</h2>
            </div>
            <div>
                <h3>There are {props.number} apples.</h3>
            </div>
        </div>
    )
}


export function Pears(props) {
    return (
        <h2>I don't like pears, but my friend, {props.friend}, does</h2>
    )
}


export function Promo(props) {
    return (
        <div className="promo-section">
            <div>
                <h1 style={{ color: "tomato", fontSize: "40px", fontWeight: "bold" }}>
                    {props.heading}
                </h1>
            </div>
            <div>
                <h2 style={{ color: 'navy', fontSize: "40px", fontWeight: "bold" }}>{props.promoSubHeading}</h2>
            </div>
        </div>
    );
}


export const Nav = props => {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}


export function Example() {
    return (
        <div className="heading">
            <h1>{Math.random() >= 0.5 ? "Over 0.5" : "Under 0.5"}</h1>
        </div>
    );
};