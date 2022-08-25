import { useParams, useSearchParams } from 'react-router-dom'
import './style.css'
export const Post = () => {
  const params = useParams()
  const { id } = params
  const [qs] = useSearchParams()   // poderia ser [qs] = useSearchParams()

  return <div>
    <h1>Post { `Param: ${id}` } {`QS: ${qs}`}</h1>
  </div>
} 

