import { faBiking, faCartArrowDown, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import AdminButtons from "./AdminButtons"
import SectionTitle from "../../components/SectionTitle"
import BreadCrumb from "../../components/ui/BreadCrumb"

const AdminDashboard = ()=>{
   return (
    <div className="">
        <SectionTitle title="Admin Menus" description=""></SectionTitle>
        <BreadCrumb
          links={[
            { link: '/', title: 'Home' }
          ]}
        ></BreadCrumb>
        <div className="mt-10  grid lg:grid-cols-3 md:grid-cols-2">
            <AdminButtons icon={faBiking} link={'/bikes/manage-bikes'} title={'Manage Bikes'}></AdminButtons>
            <AdminButtons icon={faUserGroup} link={'/users/manage-user'} title={'Manage User'}></AdminButtons>
            <AdminButtons icon={faCartArrowDown} link={'/orders/view-orders'} title={'View Orders'}></AdminButtons>
        </div>
    </div>
   )
}

export default AdminDashboard
