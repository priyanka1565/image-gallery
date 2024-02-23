import React from 'react'
import ImageCard from '../ImageCard/ImageCard'
import "./Gallery.css"
const Gallery = () => {
    const galleryData = [
        { id: 1, imageUrl: 'https://images.pexels.com/photos/697259/pexels-photo-697259.jpeg?cs=srgb&dl=pexels-hi%E1%BA%BFu-ho%C3%A0ng-697259.jpg&fm=jpg', title: 'Image 1', price: 19.99 },
        { id: 2, imageUrl: 'https://images.pexels.com/photos/697259/pexels-photo-697259.jpeg?cs=srgb&dl=pexels-hi%E1%BA%BFu-ho%C3%A0ng-697259.jpg&fm=jpg', title: 'Image 2', price: 24.99 },
        { id: 3, imageUrl: 'https://images.pexels.com/photos/697259/pexels-photo-697259.jpeg?cs=srgb&dl=pexels-hi%E1%BA%BFu-ho%C3%A0ng-697259.jpg&fm=jpg', title: 'Image 3', price: 29.99 },
        { id: 4, imageUrl: 'https://images.pexels.com/photos/697259/pexels-photo-697259.jpeg?cs=srgb&dl=pexels-hi%E1%BA%BFu-ho%C3%A0ng-697259.jpg&fm=jpg', title: 'Image 4', price: 14.99 },
        { id: 5, imageUrl: 'https://images.pexels.com/photos/697259/pexels-photo-697259.jpeg?cs=srgb&dl=pexels-hi%E1%BA%BFu-ho%C3%A0ng-697259.jpg&fm=jpg', title: 'Image 5', price: 34.99 },
        { id: 6, imageUrl: 'https://images.pexels.com/photos/697259/pexels-photo-697259.jpeg?cs=srgb&dl=pexels-hi%E1%BA%BFu-ho%C3%A0ng-697259.jpg&fm=jpg', title: 'Image 6', price: 22.99 },
        { id: 7, imageUrl: 'https://images.pexels.com/photos/697259/pexels-photo-697259.jpeg?cs=srgb&dl=pexels-hi%E1%BA%BFu-ho%C3%A0ng-697259.jpg&fm=jpg', title: 'Image 7', price: 27.99 },
        { id: 8, imageUrl: 'https://images.pexels.com/photos/697259/pexels-photo-697259.jpeg?cs=srgb&dl=pexels-hi%E1%BA%BFu-ho%C3%A0ng-697259.jpg&fm=jpg', title: 'Image 8', price: 19.99 },
        { id: 9, imageUrl: 'https://images.pexels.com/photos/697259/pexels-photo-697259.jpeg?cs=srgb&dl=pexels-hi%E1%BA%BFu-ho%C3%A0ng-697259.jpg&fm=jpg', title: 'Image 9', price: 32.99 },
        { id: 10, imageUrl: 'https://images.pexels.com/photos/697259/pexels-photo-697259.jpeg?cs=srgb&dl=pexels-hi%E1%BA%BFu-ho%C3%A0ng-697259.jpg&fm=jpg', title: 'Image 10', price: 39.99 },
        { id: 11, imageUrl: 'https://images.pexels.com/photos/697259/pexels-photo-697259.jpeg?cs=srgb&dl=pexels-hi%E1%BA%BFu-ho%C3%A0ng-697259.jpg&fm=jpg', title: 'Image 5', price: 34.99 },
        { id: 12, imageUrl: 'https://images.pexels.com/photos/697259/pexels-photo-697259.jpeg?cs=srgb&dl=pexels-hi%E1%BA%BFu-ho%C3%A0ng-697259.jpg&fm=jpg', title: 'Image 6', price: 22.99 },
        { id: 13, imageUrl: 'https://images.pexels.com/photos/697259/pexels-photo-697259.jpeg?cs=srgb&dl=pexels-hi%E1%BA%BFu-ho%C3%A0ng-697259.jpg&fm=jpg', title: 'Image 7', price: 27.99 },
        { id: 14, imageUrl: 'https://images.pexels.com/photos/697259/pexels-photo-697259.jpeg?cs=srgb&dl=pexels-hi%E1%BA%BFu-ho%C3%A0ng-697259.jpg&fm=jpg', title: 'Image 8', price: 19.99 },
        { id: 15, imageUrl: 'https://images.pexels.com/photos/697259/pexels-photo-697259.jpeg?cs=srgb&dl=pexels-hi%E1%BA%BFu-ho%C3%A0ng-697259.jpg&fm=jpg', title: 'Image 9', price: 32.99 },
        { id: 16, imageUrl: 'https://images.pexels.com/photos/697259/pexels-photo-697259.jpeg?cs=srgb&dl=pexels-hi%E1%BA%BFu-ho%C3%A0ng-697259.jpg&fm=jpg', title: 'Image 10', price: 39.99 },
    ]
  return (
      <div className="gallery-container">
          {galleryData.map((item) => (
              <ImageCard key={item.id} imageUrl={item.imageUrl} title={item.title} price={item.price} />
          ))}
      </div>
  )
}

export default Gallery