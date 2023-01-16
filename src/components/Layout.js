import React, { useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import { Link, Outlet, useNavigate } from 'react-router-dom'

let useStyles = createUseStyles({  

  div: {
      height: 60,
      backgroundColor: [210, 215, 211],
      backgroundColor: '#bfbfbf',
      display: 'flex',
      justifyContent: 'end',
      
      '& :hover': {
          backgroundColor: 'white',
          color: 'grey',
          border: [1, 'black', 'solid'],
          textDecorationLine: 'underline' ,
          textDecorationStyle: 'wavy'
      },
  },
  link: {
      height: 50,
      fontSize: 24,
      letterSpacing: 1,
      lineHeight: 2,
      textDecorationLine: 'none', 
      backgroundColor: 'grey',
      color: 'white',
      padding: 5,
      border: [1, 'white', 'solid'],
  },
 
})

export default function Layout() {
  let classes = useStyles()
  let navigate = useNavigate()
    useEffect(() => {
        if(!localStorage.length) {
           navigate('/signin')
        }
      }, [localStorage.length])
    

  return (
    <div> 
        <nav className={classes.navigate}> 
              <div className={classes.div}>
                 <Link to='/' className={classes.link}> Home </Link> 
                 <Link to='/about' className={classes.link}> About </Link>
                 <Link to='/createpost' className={classes.link}> Create Post </Link> 
                 <Link to='/profile' className={classes.link}>  My Profile </Link>
              </div>
        </nav>

        <Outlet />
    </div>
  )
} 