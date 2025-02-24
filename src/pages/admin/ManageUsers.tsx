
import SectionTitle from '../../components/SectionTitle'
import BreadCrumb from '../../components/ui/BreadCrumb'
import { useGetUsersQuery } from '../../redux/api/customerApi'

import { TUser } from '../../types/types'
import UserCard from './UserCard'

const ManageUsers = () => {
  const { data, isLoading } = useGetUsersQuery({})
  //console.log('user data -->', data)
  return (
    <div>
      <div>
        <SectionTitle title='Manage Users' description=''></SectionTitle>

        <BreadCrumb
          links={[
            { link: '/', title: 'Home' },
            { link: '/users/manage-user', title: 'Manage Users' }
          ]}
        ></BreadCrumb>
      </div>

      <div className='mt-4  bg-slate-200 mb-4 flex flex-col gap-6 md:justify-center items-center'>
         {!isLoading &&
          data.data.map((user: TUser & { _id: string }) => {
            return (

              <UserCard key={user._id} user={user}></UserCard>
            )
          })}
      </div>
    </div>
  )
}

export default ManageUsers
