import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { UserInfo } from '../App'

export default function Profile() {
    let contextInfo = useContext(UserInfo)
  return (
    <div>
     <h2> user: {contextInfo.oneUser.name} {contextInfo.oneUser.surname}</h2>
      <Button variant="outlined" onClick={contextInfo.logout}> Log out</Button>
    </div>
  )
}