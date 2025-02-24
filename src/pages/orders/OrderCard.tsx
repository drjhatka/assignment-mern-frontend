import { useSelector } from 'react-redux'
import { useGetSingleUserQuery } from '../../redux/api/customerApi'
import { JWTTokenUser, Order } from '../../types/types'
import { RootState } from '../../redux/store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const OrderCard = ({ order }: { order: Partial<Order> }) => {
  const userState: JWTTokenUser | null = useSelector(
    (state: RootState) => state.auth.user
  ) as JWTTokenUser
  const { _id,  createdAt, totalPrice, status } = order
  // Format the timestamp to date and time
  const formattedDateTime = new Date(createdAt as string).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  })
  const { data: currentUser } = useGetSingleUserQuery(userState.email)

  return (
    <tr className=' border-2 border-green-500 rounded-lg shadow-lg'>
      <th>
        {userState.role === 'admin' && (
          <label>
            <input type='checkbox' className='checkbox' />
          </label>
        )}
      </th>
      <td>
        <div className='flex items-center gap-3'>
          <div>{_id}</div>
        </div>
      </td>
      <td>
        <span className='text-red-500 font-semibold'>{formattedDateTime}</span>
      </td>
      <td>
        <span className='text-green-500 font-bold'>$</span>
        <span className='text-red-500 font-semibold'>{totalPrice}</span>
      </td>
      <td
        className={
          status === 'Completed' ? 'text-green-700 font-bold' : 'text-red-700'
        }
      >
        {status}
      </td>
      <td>
        {
          userState.role === 'admin' &&
          <div className='text-white flex  items-center w-32 gap-5 bg-red-600 px-5 py-2  rounded-md'>
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            <span className='text-xs'>{currentUser.data.name}</span>
          </div>
        }
      </td>
      <td className=''>
        {userState.role === 'admin' && (
          <div className='flex gap-3'>
            <button className='btn btn-success btn-circle text-white '>
              View
            </button>
            <button className='btn btn-error btn-circle text-white '>
              Delete
            </button>
          </div>
        )}
      </td>
    </tr>
  )
}

export default OrderCard
