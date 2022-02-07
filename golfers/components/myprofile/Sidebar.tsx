import {
  MdLogout,
  MdSettings,
  MdAccessibility,
  MdPeople,
  MdAccountCircle,
} from 'react-icons/md'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <nav className='sidebar__nav'>
        <ul className='sidebar__nav-list'>
          <li className='sidebar__nav-list--item'>
            <MdAccountCircle fontSize={30} /> <span>Min profil</span>
          </li>
          <li className='sidebar__nav-list--item'>
            <MdPeople fontSize={30} /> <span>Grupper</span>
          </li>
          <li className='sidebar__nav-list--item'>
            {' '}
            <MdAccessibility fontSize={30} /> <span>Vänner</span>
          </li>
          <li className='sidebar__nav-list--item'>
            <MdSettings fontSize={30} />
            <span>Inställningar</span>
          </li>
          <li className='sidebar__nav-list--item'>
            <MdLogout fontSize={30} /> <span>Logout</span>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
