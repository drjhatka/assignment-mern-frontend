import { useGetOrdersQuery } from '../../redux/api/orderApi'
import { RootState } from '../../redux/store'
import { JWTTokenUser, Order } from '../../types/types'
import OrderCard from './OrderCard'
import { useSelector } from 'react-redux'

const MyOrders = () => {
  //retrieve all orders for the current user...
  const userState: JWTTokenUser | null = useSelector(
    (state: RootState) => state.auth.user
  ) as JWTTokenUser
  const { data: orders, isLoading } = useGetOrdersQuery(userState.email)
  return (
    <div>
      <div className='overflow-x-auto'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr className='text-blue-500'>
              <th>
              {userState.role==='admin' &&
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
                }
              </th>
              <th>Order ID</th>
              <th>Order Date</th>
              <th>Total Price</th>
              <th>Status</th>
              {
                userState.role==='admin' &&
                  <th className='text-center'>Ordered By</th>

              }
              {
                userState.role==='admin' && <th>
                    Actions
                </th>
              }
            </tr>
          </thead>
          <tbody>
            {!isLoading &&
              orders.data.map((order: Order) => (
                <OrderCard key={Math.random() * 4000} order={order}></OrderCard>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyOrders
