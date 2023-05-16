import MainView from './MainView'
import { useNavigate } from 'react-router-dom'
import { HOME_TABLE } from '../../navigation/paths'
import { useEffect, useState } from 'react'
import API from '../../api/axios'

const Main = () => {

  const [ name, setName ] = useState('')

  const navigate = useNavigate()

  const onContinueClick = () => {
    navigate(HOME_TABLE)
  }

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const getProviders = await API.get('/users')
    setName(getProviders.data.data.name)
  }

  return <MainView name={name} onContinueClick={onContinueClick} />
}

export default Main
