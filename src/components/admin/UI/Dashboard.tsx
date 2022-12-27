import { DashboardProps } from '../../../interfaces/interface'
import styles from './Dashboard.module.css'

function Dataview({ children }: DashboardProps) {
  return (
    <div className={styles.dataview}>
      {children}
    </div>
  )
}

export default Dataview