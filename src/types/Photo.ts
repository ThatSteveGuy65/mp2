export interface Photo {
  id: string
  description: string | null
  alt_description: string | null
  likes: number
  width: number
  height: number
  urls: {
    regular: string
    small: string
    thumb: string
  }
  user: {
    name: string
    username: string
  }
}