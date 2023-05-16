import { useEffect, useState } from 'react'
import HomeTableView from './HomeTableView'
import { IData } from '../../types'
import API from '../../api/axios'

const HomeTable = () => {
  
  const [rows, setRows] = useState<IData[]>([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const getProviders = await API.get('/providers')
    setRows(getProviders.data.data)
  }

  return <HomeTableView {...{ rows }} />
}

export default HomeTable
