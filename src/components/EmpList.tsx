import React, {FC} from 'react'
import { IUser } from '../types/types'

interface ListProps {
    employes: IUser[]
}

const EmpList: FC<ListProps> = ({employes}) => {
  return (
    <div>
        {employes.map(employ => <div key = {employ.id}>
                {employ.name} {employ.age} {employ.status}
        </div>)}
        
    </div>
  )
}

export default EmpList