
import { Link } from "react-router-dom"
import ManageProduct from "./ManageProduct"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons"
import SectionTitle from "../../components/SectionTitle"

const AdminDashboard = ()=>{
   return (
    <div className="">
        <div>
          <SectionTitle title="Manage Bikes" description=""></SectionTitle>
        </div>
        <div className="fixed flex justify-end  w-full">
          <Link className="btn rounded-none bg-green-700 -mb-10 lg:w-56 text-white" to={``}><FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon> Add Bike</Link>
        </div>
        <div className="mt-10">
          <ManageProduct></ManageProduct>
        </div>
      
    </div>
   )
}

export default AdminDashboard
