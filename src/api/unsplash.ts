
import type { Photo } from '../types/Photo'

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY

export async function getPhotos(): Promise<Photo[]> {
  const response = await fetch(
    `https://api.unsplash.com/photos?client_id=${ACCESS_KEY}&per_page=30`
  )

  if (!response.ok) {
    throw new Error('Failed to fetch photos')
  }

  return response.json()
}

export async function getPhoto(id: string): Promise<Photo> {
  const response = await fetch(
    `https://api.unsplash.com/photos/${id}?client_id=${ACCESS_KEY}&per_page=30`
  )

  if (!response.ok) {
    throw new Error('Failed to fetch photo')
  }

  return response.json()
}