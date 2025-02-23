import { Link } from 'react-router-dom'

const BreadCrumb = ({links}:{links:{title:string, link:string}[]}) => {
  return (
    <div>
      <div className='breadcrumbs text-md px-10 underline text-red-600  lg:w-2/5 md:2/3'>
        <ul className='font-semibold'>
            {
                links.map((link)=>(<li key={Math.random()*100000}>
                     <Link   to={link.link}>{link.title}</Link> 
                  </li>))
            }
            <span className='font-bold'></span>
        </ul>
      </div>
    </div>
  )
}

export default BreadCrumb
