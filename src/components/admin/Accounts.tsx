import React from 'react'
import { AccountsProps } from '../../interfaces/interface'
import Dataview from './UI/Dashboard'
import SidePanel from './UI/SidePanel'
import styles from './UI/Dashboard.module.css'

const AccountsWrapper
  = ({ children }: AccountsProps) => {
    return (
      <div className={`row ${styles.container}`}>
        <div className='col-md-2'>
          <SidePanel />
        </div>
        <div className='col-md-10'>
          <Dataview>{children}</Dataview>
        </div>
      </div>
    )
  }

export default AccountsWrapper
