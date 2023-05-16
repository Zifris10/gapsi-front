import { Route, Routes } from 'react-router-dom'
import MuiLayout from '../components/Layouts/MuiLayout'
import Error from '../pages/Errors'
import { EErrorTypes } from '../types/errors'
import Main from '../pages/Main'
import { HOME_TABLE } from './paths'
import HomeTable from '../pages/HomeTable'

const Navigation = () => {
  return (
    <Routes>
      <Route path='/' element={<MuiLayout />}>
        <Route index element={<Main />} />
        <Route path={HOME_TABLE} element={<HomeTable />} />
        <Route path='*' element={<Error type={EErrorTypes.NOT_FOUND} />} />
      </Route>
    </Routes>
  )
}

export default Navigation
