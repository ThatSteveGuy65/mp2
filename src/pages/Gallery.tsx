import { useEffect, useState } from 'react'
import { getPhotos } from '../api/unsplash'
import type { Photo } from '../types/Photo'
import { Link } from 'react-router-dom'
import '../App.css'

function Gallery() {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [filter, setFilter] = useState('all')

  useEffect(function () {
    async function loadPhotos() {
      const data = await getPhotos()
      setPhotos(data)
    }

    loadPhotos()
  }, [])
  
let filteredPhotos = photos

if (filter === 'landscape') {
  filteredPhotos = photos.filter(function (photo) {
    return photo.width > photo.height
  })
}

if (filter === 'portrait') {
  filteredPhotos = photos.filter(function (photo) {
    return photo.height > photo.width
  })
}

return (
    <div>
      <h1>Photo Gallery View</h1>
    <div>
        


  <button  className='Gallerybuttons' onClick={function () { setFilter('all') }}>
    All
  </button>


  <button className='Gallerybuttons' onClick={function () { setFilter('landscape') }}>
    Landscape
  </button>


  <button className='Gallerybuttons' onClick={function () { setFilter('portrait') }}>
    Portrait
  </button>


</div>

      <div className='imagesInPhotoGallery'>
        {filteredPhotos.map(function (photo) {
          return (
            <div key={photo.id}>
                <Link to={`/photos/${photo.id}`}>
              <img className='ImagesGallery'
            src={photo.urls.small}
            
            /> </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Gallery