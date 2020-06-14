import { useState, useEffect } from 'react'
import { ROOT_URL } from '../constants'

export function useFetch (url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window
      .fetch(`${ROOT_URL}${url}`)
      .then((res) => res.json())
      .then((response) => {
        setLoading(false)
        setData(response)
      })
  }, [])

  return [data, loading]
}
