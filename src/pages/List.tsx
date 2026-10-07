import { getPhotos } from '../api/unsplash'
import type { Photo } from '../types/Photo'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
function List() {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('likes')
  const [sortOrder, setSortOrder] = useState('asc')
 

  useEffect(function () {
    async function loadPhotos() {
      const data = await getPhotos()
      setPhotos(data)
    }

    loadPhotos()
  }, [])

const filteredPhotos = photos.filter(function (photo) {
  return (
    photo.description?.toLowerCase().includes(search.toLowerCase()) ||
    photo.alt_description?.toLowerCase().includes(search.toLowerCase()) ||
    photo.user.name.toLowerCase().includes(search.toLowerCase())
  )
})


const sortedPhotos = [...filteredPhotos].sort(function (a, b) {
  if (sortBy === 'likes') {
    if (sortOrder === 'asc') {
      return a.likes - b.likes
    } else {
      return b.likes - a.likes
    }
  }



  if (sortOrder === 'asc') {
    return a.user.name.localeCompare(b.user.name)
  } else {
    return b.user.name.localeCompare(a.user.name)
  }
})


  return (
    <div>
      <h1>List View of Photos</h1>

    <input className='searchbar'
    
    placeholder="Type here to search"
    
    value={search}
    onChange={function (event) {
    setSearch(event.target.value)
        }}
        />



 <select
 className='ListSort'
  value={sortBy}
  onChange={function (event) {
    setSortBy(event.target.value)
  }}
>
  <option value="likes">Likes</option>
  <option value="name">Photographer</option>
</select>


<select
className='ListSort'
  value={sortOrder}
  onChange={function (event) {
    setSortOrder(event.target.value)
  }}
>
  <option value="asc">Ascending</option>
  <option value="desc">Descending</option>
</select>

        


      {sortedPhotos.map(function (photo) {
        return (
          <div key={photo.id}>
            <Link to={`/photos/${photo.id}`}>
            <img className='ImageOnList'
              src={photo.urls.small}
            />
            </Link>

            <h2>{photo.description || 'no title'}</h2>
            <p>Photographer: {photo.user.name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default List