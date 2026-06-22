import { useState } from "react";
import "../styles/gallery.css";

function Gallery() {

  const images = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg"
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="gallery" id="gallery">

      <div className="section-header">
        <span>GALLERY</span>
        <h2>Our Event Highlights</h2>
      </div>

      <div className="gallery-grid">

        {images.map((img, index) => (
          <div
            className="gallery-card"
            key={index}
            onClick={() => setSelectedImage(img)}
          >
            <img src={img} alt="" />
          </div>
        ))}

      </div>

     {selectedImage && (
  <div className="lightbox">

    <span
      className="close-btn"
      onClick={() => setSelectedImage(null)}
    >
      ✕
    </span>

    <img
      src={selectedImage}
      alt=""
      className="lightbox-image"
    />

  </div>
)}

    </section>
  );
}

export default Gallery;