import NotFound from './NotFound'
import { EErrorTypes } from '../../types/errors'

interface Props {
  type: EErrorTypes
}

const errorPagesDictionary = {
  [EErrorTypes.NOT_FOUND]: <NotFound />
}

const Error = ({ type }: Props) => {
  return <>{errorPagesDictionary[type]}</>
}

export default Error
