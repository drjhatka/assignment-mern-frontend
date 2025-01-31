import { useNavigate, useParams } from "react-router-dom";
import { useGetBikeQuery } from "../redux/api/bikeApi";
import Spinner from "./Spinner";
import SectionTitle from "./SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faMoneyBill, faMoneyBill1Wave } from "@fortawesome/free-solid-svg-icons";

const ViewDetails = () => {
    const params =useParams()
    const navigate = useNavigate()
        const {data, isLoading}= useGetBikeQuery(params.productId)
        //if(!isLoading){
            const {_id,image, name, description, price }= data.data
        //}
        console.log(data)

    return (
        <div>
            {
                isLoading?<Spinner></Spinner>: <div>
                        <SectionTitle title={name} description={description}></SectionTitle>
                    <div className="mt-4 px-4 flex flex-col items-center mb-2">
                        <img src={image} alt="" />
                    <div className="text-red-700 mt-4 px-4 shadow-lg border-b-2 bg-slate-100 font-bold flex gap-5  justify-around border-2 items-center ">
                        <span>Price:</span> 
                        <FontAwesomeIcon  icon={faMoneyBill1Wave} className="text-green-600 text-lg p-0 mt-1" ></FontAwesomeIcon> 
                        <span>${price}</span>
                        
                    </div>
                    <div>
                        
                        <button onClick={()=>navigate('/order/'+_id)} className='btn bg-red-700 text-white shadow-md rounded-none px-10 hover:bg-red-400 mt-3'><FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon> Buy Now </button>
                    </div>
                    </div>
                    
                </div>
            }
        </div>
    );
};

export default ViewDetails;