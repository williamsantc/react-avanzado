import { useState, useEffect } from 'react'

export function useFetch () {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window
      .fetch('https://petgram-server-6n9nt0iey.now.sh/categories')
      .then((res) => res.json())
      .then((response) => {
        setLoading(false)
        setData(response)
      })
  }, [])

  return [data, loading]
}
