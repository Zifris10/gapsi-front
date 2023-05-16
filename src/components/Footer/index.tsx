import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import API from '../../api/axios'
import './index.css'

const Footer = () => {

  const [ version, setVersion ] = useState('')

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const getVersion = await API.get('/version')
    setVersion(getVersion.data.data.version)
  }

  return (
    <footer className="footer">
      <Typography sx={{ color: "#777777" }} variant="body1">
        Versión {version}
      </Typography>
    </footer>
  )
}

export default Footer
