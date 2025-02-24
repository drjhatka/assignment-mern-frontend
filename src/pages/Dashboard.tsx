import { useSelector } from "react-redux"
import { JWTTokenUser } from "../types/types"
import { RootState } from "../redux/store"
import AdminDashboard from "./admin/AdminDashboard"
import CustomerDashboard from "./customers/CustomerDashboard"

const Dashboard = () => {
  const user : JWTTokenUser|null = useSelector((state: RootState) => state.auth.user) as JWTTokenUser

  return (
    <div>
        {user?.role=='admin'?<AdminDashboard></AdminDashboard>:<CustomerDashboard></CustomerDashboard>}
    </div>
  )
}

export default Dashboard
