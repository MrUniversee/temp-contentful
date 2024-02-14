import { createClient } from 'contentful'
import { useState, useEffect } from 'react'

const useFetchProjects = () => {
  const client = createClient({
    space: 'm98p92hh6brc',
    environment: 'master',
    accessToken: import.meta.env.VITE_API_KEY,
  })
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])

  const fetchProjects = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' })
      const projects = response.items.map((item) => {
        const { title, url } = item.fields
        const { id } = item.sys
        const img = item.fields?.image?.fields?.file?.url
        return { title, url, id, img }
      })
      setProjects(projects)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])
  return { projects, loading }
}

export default useFetchProjects
