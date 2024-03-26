import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Oops!!</h1>
            <h4>Data Not found..</h4>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/"><button>Go Back Home</button></Link>

        </div>
    );
};

export default ErrorPage;