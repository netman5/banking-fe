import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Dashboard.module.css'
import { HiOutlineHome } from 'react-icons/hi'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineUser } from 'react-icons/ai'
import { IoWalletOutline } from 'react-icons/io5'
import { sideLinksType } from '../../../types/appTypes'

const sideLinks: sideLinksType = [
  { icons: <HiOutlineHome />, link: '/accounts', text: 'Accounts' },
  { icons: <IoWalletOutline />, link: '/accounts/new', text: 'Create Account' },
  { icons: <FiUsers />, link: '/users', text: 'Users' },
  { icons: <AiOutlineUser />, link: '#', text: 'Admins' },
]

function SidePanel() {
  return (
    <div className={styles.sidePanel}>
      <ul className={styles.sideLinks}>
        {sideLinks.map((link, index) => (
          <li key={index}>
            {link.icons} <Link to={link.link}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SidePanel