import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const UDetails = useLoaderData();
    return (
        <div>
            <h3>User Name : {UDetails.name}</h3>
            <h3>Phone Number : {UDetails.phone}</h3>
        </div>
    );
};

export default UserDetails;