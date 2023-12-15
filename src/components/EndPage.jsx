import { Link } from "react-router-dom";

function EndPage(props) {
    return (
        <div>
            <Link to={"/"}>
                <h1>Click here to return</h1>
            </Link>
            <h2>End Page</h2>
        </div>
    );
}

export default EndPage;