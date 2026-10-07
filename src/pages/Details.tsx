
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getPhoto, getPhotos } from '../api/unsplash'
import type { Photo } from '../types/Photo'
import '../App.css'


function Details() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [photo, setPhoto] = useState<Photo | null>(null)
  const [photos, setPhotos] = useState<Photo[]>([])


   useEffect(function () {
    async function loadPhoto() {
      if (id) {
        const data = await getPhoto(id)
        setPhoto(data)
      }
        const allPhotos = await getPhotos()
        setPhotos(allPhotos)
    
    }

    loadPhoto()
    }, [id])

 
  const currentIndex = photos.findIndex(function (item) {
    return item.id === id
  })


//program will break withou this
  if (photo == null) {
    return 
  }




 return (
    <div>
      <h1>Photo Details</h1>
    <div>




 <button className="detail-but" disabled={currentIndex <= 0} onClick={function () {
    if (currentIndex > 0) {
      navigate(`/photos/${photos[currentIndex - 1].id}`)
    }
  }}
> Previous Image </button>




<button className="detail-but" disabled={currentIndex >= photos.length - 1} onClick={function () {
    if (currentIndex < photos.length - 1) {
      navigate(`/photos/${photos[currentIndex + 1].id}`)
    }
  }}
>
  Next Image </button>


</div>
    <img
        className="details-image"
        src={photo.urls.regular}
    />
     
    <p>Photographer: {photo.user.name}</p>
    <p>Username: @{photo.user.username}</p>
    <p>Likes: {photo.likes}</p>
    <p>Dimensions: {photo.width} × {photo.height}</p>
</div>
  )
}




export default Details