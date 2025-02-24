
import { useGetAllUserOrdersQuery } from '../../redux/api/orderApi'
import { JWTTokenUser, Order } from '../../types/types'
import OrderCard from '../orders/OrderCard'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import BreadCrumb from '../../components/ui/BreadCrumb'
import SectionTitle from '../../components/SectionTitle'

const ViewOrders = () => {
  const { data: orders, isLoading } = useGetAllUserOrdersQuery({})
   //retrieve all orders for the current user...
   const userState: JWTTokenUser | null = useSelector(
    (state: RootState) => state.auth.user
  ) as JWTTokenUser
  return (
    <div>
        <SectionTitle title='Manage Orders' description=''></SectionTitle>
        <div className='mb-4 border-2 bg-slate-200'>
            <BreadCrumb links={[{link:'/', title:'Home'}, {link:'/orders/view-orders', title:'Manage Orders'}]}></BreadCrumb>

        </div>

      <div className='overflow-x-auto'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr className='text-blue-500'>
              <th>
                {userState.role === 'admin' && (
                  <label>
                    <input type='checkbox' className='checkbox' />
                  </label>
                )}
              </th>
              <th>Order ID</th>
              <th>Order Date</th>
              <th>Total Price</th>
              <th>Status</th>
              <th className='text-center'>Ordered By</th>
              {userState.role === 'admin' && <th>Actions</th>}
            </tr>
          </thead>
          <tbody >
            {!isLoading &&
              orders.data.map((order: Order) => (
                <OrderCard order={order} key={order._id}></OrderCard>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewOrders
