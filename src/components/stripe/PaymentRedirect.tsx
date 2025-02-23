import {Link, useParams } from "react-router-dom";

const PaymentRedirect = () => {
    const amount = useParams().amount
    return (
        <div className="flex items-center py-4 flex-col justify-center">
            <h1 className="mt-4 text-center text-3xl font-bold text-red-400">Thanks for your purchase of ${amount}</h1>
            <div className=" flex gap-10">
            <Link className="btn w-44 mt-4 btn-warning text-white " to={'/'}>Home</Link>
            <Link className="btn w-44 mt-4 btn-info text-white " to={'/'}>Keep Shopping</Link>

            </div>
        </div>
    );
};

export default PaymentRedirect;