import {
  Avatar,
  Button,
  Box,
  Typography,
  Container
} from '@mui/material'
import { Navbar } from './'
import { useState, useEffect } from 'react'
import API from '../api/axios'

export const Welcome = () => {

  const [ visible, setVisible ] = useState(true)
  const [ name, setName ] = useState('')
  const [ version, setVersion ] = useState('')

  const handleVisible = () => {
    setVisible(false)
  }

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const [ getVersion, getUser ] = await Promise.all([
      API.get('/version/'),
      API.get('/users/')
    ])
    setVersion(getVersion.data.data.version)
    setName(getUser.data.data.name)
  }

  return (
    <>
      {visible &&
        <Container
          style={{
            background: '#f2f6fc'
          }}
          maxWidth="xs"
          sx={{
            marginTop: '100px',
            boxShadow: 3
          }}>
          <Navbar></Navbar>
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar
              alt="e-Commerce Gapsi"
              src="/vite.svg"
              sx={{
                width: 56,
                height: 56,
                mb: 3
              }}
            />
            <Typography
              component="h1"
              variant="h5"
            >
              {name}
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
            >
              <Button
                onClick={handleVisible}
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 10
                }}
              >
                Continuar
              </Button>
            </Box>
          </Box>
          <Typography
            align="right"
            variant="body2"
          >
            version {version}
          </Typography>
        </Container>
      }
    </>
  )
}