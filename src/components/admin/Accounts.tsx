import React from 'react'
import { AccountsProps } from '../../interfaces/interface'
import Dataview from './UI/Dashboard'
import SidePanel from './UI/SidePanel'

const Accounts = ({ children }: AccountsProps) => {
  return (
    <div className='container'>
      <SidePanel />
      <Dataview>
        {children}
      </Dataview>
    </div>
  )
}

export default Accounts