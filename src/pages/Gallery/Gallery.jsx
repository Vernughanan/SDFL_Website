
import { useEffect, useRef, useState } from "react";
import "./Gallery.css";

// =====================================
// GOOGLE DRIVE IMAGES
// =====================================

const driveImageIds = [
  "1wi3eeRLvnqNdszza2P5nSaqxmPEL4c5a",
  "1X9DweviGe4NuCHrAhcG0m2iDxRe35ap9",
  "1Mu2A1w7NV2mR-6tRwYMS4YSAhBdhFQZs",
  "1xjD32QLM_LDQDlpA75ZYAroNLrcSc-wc",
  "1i6duo38xACXGbguMOWvVtyH42WIurX2X",
  "1V6qV17eOYB8JR0-KfAMeIsieNgYK9FyZ",
  "1i8vVMdOhYI_B5mkB4WI5KeNoY5ggblQR",
  "1KJxhYAnOTnOXL9f9NhUCE9F9nCT-QAYt",
  "1RJ20DBi8dJTwhZexVNpz509p26ub4Cwz",
  "1T5PUnOHE_g_sJDxbOytrr_qr9zTmlQ9-",
  "1PMW_UiV16DS5_MakG5_9XkMNl-403EHX",
  "1YixFSHZziUo98d_p0ayYhhYDu6JgD3P1",
  "1LiXtNL3RSOnCKn8Zv-PcTDInhr8lMvXv",
  "1TY7ft1KG1WQFKQzcod6_81Iak8j9Y-NL",
  "1nSJm3ifZD5ILJNWvNzLl6inIPiTvuyUf",
  "1SjcFJiXDbGudmVm44ruUr4Dn67jDYKJ8",
];

const IMAGES_PER_PAGE = 9;

const getDriveThumbnail = (id, width = 800) =>
  `https://drive.google.com/thumbnail?id=${encodeURIComponent(
    id
  )}&sz=w${width}`;

const getDriveLink = (id) =>
  `https://drive.google.com/file/d/${id}/view`;

const galleryImages = driveImageIds.map((id, index) => ({
  id,
  title: `SDFL Gallery Photo ${index + 1}`,
  thumbnail: getDriveThumbnail(id, 800),
  fullImage: getDriveThumbnail(id, 1600),
  driveLink: getDriveLink(id),
}));

// =====================================
// GALLERY IMAGE CARD
// =====================================

function GalleryImage({ image, onClick }) {
  const [status, setStatus] = useState("loading");

  return (
    <div className="sdfl-gallery-card">
      {status === "loading" && (
        <div className="sdfl-gallery-loading">
          <div className="sdfl-gallery-spinner" />
          <span>Loading image...</span>
        </div>
      )}

      {status === "error" ? (
        <div className="sdfl-gallery-error">
          <span className="sdfl-gallery-error-icon">!</span>
          <p>Image unavailable</p>
          <a
            href={image.driveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Drive
          </a>
        </div>
      ) : (
        <button
          type="button"
          className="sdfl-gallery-image-button"
          onClick={onClick}
          aria-label={`View ${image.title}`}
        >
          <img
            src={image.thumbnail}
            alt={image.title}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onLoad={() => setStatus("loaded")}
            onError={() => {
              setStatus("error");
              console.error(
                "[SDFL Gallery] Failed to load:",
                image.thumbnail
              );
            }}
          />

          {status === "loaded" && (
            <div className="sdfl-gallery-card-overlay">
              <span className="sdfl-gallery-zoom-icon">
                ⤢
              </span>
            </div>
          )}
        </button>
      )}
    </div>
  );
}

// =====================================
// MAIN GALLERY COMPONENT
// =====================================

function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [fullImageFailed, setFullImageFailed] = useState(false);

  const galleryRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  const totalPages = Math.ceil(
    galleryImages.length / IMAGES_PER_PAGE
  );

  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;

  const currentImages = galleryImages.slice(
    startIndex,
    startIndex + IMAGES_PER_PAGE
  );

  const selectedImage =
    selectedIndex !== null
      ? galleryImages[selectedIndex]
      : null;

  // =====================================
  // PAGINATION
  // =====================================

  const changePage = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) {
      return;
    }

    setCurrentPage(page);
    setSelectedIndex(null);

    galleryRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // =====================================
  // LIGHTBOX FUNCTIONS
  // =====================================

  const openLightbox = (index) => {
    previousFocusRef.current = document.activeElement;
    setFullImageFailed(false);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    setFullImageFailed(false);
    setSelectedIndex((current) =>
      (current + 1) % galleryImages.length
    );
  };

  const previousImage = () => {
    setFullImageFailed(false);
    setSelectedIndex((current) =>
      (current - 1 + galleryImages.length) %
      galleryImages.length
    );
  };

  // =====================================
  // KEYBOARD NAVIGATION
  // =====================================

  useEffect(() => {
    if (selectedIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowRight") {
        setFullImageFailed(false);
        setSelectedIndex((current) =>
          (current + 1) % galleryImages.length
        );
      }

      if (event.key === "ArrowLeft") {
        setFullImageFailed(false);
        setSelectedIndex((current) =>
          (current - 1 + galleryImages.length) %
          galleryImages.length
        );
      }

      if (event.key === "Tab") {
        const dialog = document.querySelector(
          ".sdfl-gallery-lightbox"
        );

        const focusable = Array.from(
          dialog?.querySelectorAll("button, a[href]") || []
        );

        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (
          event.shiftKey &&
          document.activeElement === first
        ) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex === null) {
      previousFocusRef.current?.focus?.();
    }
  }, [selectedIndex]);

  // =====================================
  // JSX
  // =====================================

  return (
    <main className="sdfl-gallery-page">
      {/* HERO SECTION */}

      <section className="sdfl-gallery-hero">
        <span className="sdfl-gallery-eyebrow">
          OUR MEMORIES
        </span>

        <h1>SDFL Gallery</h1>

        <p>
          Explore memorable moments from our training
          programmes, events, workshops, and journey.
        </p>
      </section>

      {/* PHOTO COLLECTION */}

      <section
        className="sdfl-gallery-section"
        ref={galleryRef}
      >
        <div className="sdfl-gallery-container">
          <div className="sdfl-gallery-section-heading">
            <div>
              <span className="sdfl-gallery-subtitle">
                PHOTO COLLECTION
              </span>
              <h2>Moments That Matter</h2>
            </div>

            <span className="sdfl-gallery-count">
              {galleryImages.length} Photos
            </span>
          </div>

          {/* IMAGE GRID */}

          <div className="sdfl-gallery-grid">
            {currentImages.map((image, index) => (
              <GalleryImage
                key={image.id}
                image={image}
                onClick={() =>
                  openLightbox(startIndex + index)
                }
              />
            ))}
          </div>

          {/* PAGINATION */}

          {totalPages > 1 && (
            <nav
              className="sdfl-gallery-pagination"
              aria-label="Gallery pagination"
            >
              <button
                type="button"
                className="sdfl-page-arrow"
                onClick={() =>
                  changePage(currentPage - 1)
                }
                disabled={currentPage === 1}
                aria-label="Previous page"
              >
                &#10094;
              </button>

              {Array.from(
                { length: totalPages },
                (_, index) => index + 1
              ).map((page) => (
                <button
                  key={page}
                  type="button"
                  className={`sdfl-page-number ${
                    currentPage === page ? "active" : ""
                  }`}
                  onClick={() => changePage(page)}
                  aria-label={`Go to page ${page}`}
                  aria-current={
                    currentPage === page
                      ? "page"
                      : undefined
                  }
                >
                  {page}
                </button>
              ))}

              <button
                type="button"
                className="sdfl-page-arrow"
                onClick={() =>
                  changePage(currentPage + 1)
                }
                disabled={currentPage === totalPages}
                aria-label="Next page"
              >
                &#10095;
              </button>
            </nav>
          )}

          {/* BACK TO ABOUT */}

          <div className="sdfl-gallery-back-wrapper">
            <a
              href="/about"
              className="sdfl-gallery-back-btn"
            >
              <span aria-hidden="true">&#8592;</span>
              Back to About
            </a>
          </div>
        </div>
      </section>

      {/* FULL SCREEN IMAGE VIEWER */}

      {selectedImage && (
        <div
          className="sdfl-gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="SDFL Photo Viewer"
          onClick={closeLightbox}
        >
          <button
            ref={closeButtonRef}
            type="button"
            className="sdfl-gallery-close"
            onClick={closeLightbox}
            aria-label="Close image viewer"
          >
            &times;
          </button>

          <button
            type="button"
            className="sdfl-gallery-nav sdfl-gallery-prev"
            onClick={(event) => {
              event.stopPropagation();
              previousImage();
            }}
            aria-label="Previous image"
          >
            &#10094;
          </button>

          <div
            className="sdfl-gallery-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            {fullImageFailed ? (
              <div className="sdfl-gallery-full-error">
                <p>Unable to load the larger image.</p>

                <a
                  href={selectedImage.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open original on Google Drive
                </a>
              </div>
            ) : (
              <img
                key={selectedImage.id}
                src={selectedImage.fullImage}
                alt={selectedImage.title}
                referrerPolicy="no-referrer"
                onError={() =>
                  setFullImageFailed(true)
                }
              />
            )}

            <div className="sdfl-gallery-lightbox-caption">
              <h3>{selectedImage.title}</h3>

              <span>
                {selectedIndex + 1} /{" "}
                {galleryImages.length}
              </span>
            </div>
          </div>

          <button
            type="button"
            className="sdfl-gallery-nav sdfl-gallery-next"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
          >
            &#10095;
          </button>
        </div>
      )}
    </main>
  );
}

export default Gallery;
