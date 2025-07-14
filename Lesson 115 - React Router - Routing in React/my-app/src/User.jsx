import { useParams } from "react-router";

// Dynamic routing 

export default function User() {
    const params = useParams()
    return (
        <div>
            I am user {params.username}
        </div>

        // <div className="p-6">
        //   <h2 className="text-2xl font-semibold text-blue-700">About User</h2>
        //   <p className="mt-2 text-gray-700">
        //     This is the About page of your React app.
        //   </p>
        // </div>
    );
}