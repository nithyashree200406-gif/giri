import HTMLFlipBook from "react-pageflip";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/gallery.css";

const galleryImages = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
  "/gallery7.jpg",
  "/gallery8.jpg",
];

function GalleryPage() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Gallery Section */}
      <div className="gallery-book-container">

        <h1 className="gallery-title">
          Our Event Gallery
        </h1>

        <div className="book-wrapper">

          <HTMLFlipBook
            width={360}
            height={500}
            minWidth={260}
            maxWidth={360}
            minHeight={380}
            maxHeight={500}
            size="fixed"
            showCover={true}
            mobileScrollSupport={true}
            drawShadow={true}
            flippingTime={900}
          >

            {/* Cover Page */}
         {/* Cover Page */}

<div className="page cover">

  <img
    src="/front.png"
    alt="Book Cover"
    className="cover-image"
  />

</div>

            {/* Gallery Pages */}
            {galleryImages.map((img, index) => (
              <div className="page gallery-page" key={index}>

                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                />

                <h3>
                  Event {index + 1}
                </h3>

              </div>
            ))}

            {/* Last Page */}
           {/* Back Cover */}

<div className="page back-cover">

  <img
    src="/back.png"
    alt="Back Cover"
    className="back-cover-image"
  />

</div>

          </HTMLFlipBook>

        </div>

      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default GalleryPage;