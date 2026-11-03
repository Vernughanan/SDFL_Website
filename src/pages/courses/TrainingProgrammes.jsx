
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import TrainingCard from "../../components/TrainingCard";
import { programmes } from "../../data/programmes";
import { Search } from "lucide-react";

const itemsPerPage = 12;

function TrainingProgrammes() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  // Read page number from the URL.
  // Example: /courses?page=5
  const requestedPage = Number(searchParams.get("page"));

  const urlPage =
    Number.isInteger(requestedPage) && requestedPage > 0
      ? requestedPage
      : 1;

  // Filter programmes
  const filteredProgrammes = programmes.filter((programme) => {
    const matchesSearch = programme.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      programme.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Pagination
  const totalPages = Math.ceil(
    filteredProgrammes.length / itemsPerPage
  );

  const currentPage = Math.min(
    urlPage,
    Math.max(1, totalPages)
  );

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentProgrammes = filteredProgrammes.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Scroll to top when arriving on this page,
  // including when returning from course details.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Update the page in the URL
  const updatePage = (page, replace = false) => {
    setSearchParams(
      (previousParams) => {
        const nextParams = new URLSearchParams(
          previousParams
        );

        if (page <= 1) {
          nextParams.delete("page");
        } else {
          nextParams.set("page", String(page));
        }

        return nextParams;
      },
      { replace }
    );
  };

  // Reset pagination when search or category changes
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    updatePage(1, true);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    updatePage(1, true);
  };

  // Clear filters
  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    updatePage(1, true);
  };

  // Change pagination page
  const handlePageChange = (page) => {
    if (
      page < 1 ||
      page > totalPages ||
      page === currentPage
    ) {
      return;
    }

    updatePage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Generate visible pagination numbers
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(
      1,
      currentPage - Math.floor(maxVisiblePages / 2)
    );

    let endPage = Math.min(
      totalPages,
      startPage + maxVisiblePages - 1
    );

    if (
      endPage - startPage + 1 <
      maxVisiblePages
    ) {
      startPage = Math.max(
        1,
        endPage - maxVisiblePages + 1
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <main>
      {/* SEARCH AND FILTERS */}

      <div className="training-filters">
        <div className="search-box">
          <Search
            size={20}
            className="search-icon"
          />

          <input
            type="text"
            placeholder="Search training programmes..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        <div className="category-filter">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="All">
              All Categories
            </option>

            <option value="Accounts, Finance and Audit">
              Accounts
            </option>

            <option value="Soft Skills Development">
              SoftSkills
            </option>

            <option value="Administration">
              Administration
            </option>

            <option value="Consultation and Policy Development">
              Consultation and Policy
            </option>

            <option value="OutStation 1">
              OutStation 1
            </option>

            <option value="OutStation 2">
              OutStation 2
            </option>

            <option value="Human Resources">
              Human Resources
            </option>

            <option value="Information Technology">
              IT
            </option>

            <option value="Language">
              Language
            </option>

            <option value="Examination">
              Examination
            </option>
          </select>
        </div>

        <button
          type="button"
          className="clear-filters"
          onClick={handleClearFilters}
        >
          Clear Filters
        </button>
      </div>

      {/* TRAINING CARDS */}

      <div className="training-grid">
        {currentProgrammes.map((programme) => (
          <TrainingCard
            key={programme.id}
            id={programme.id}
            title={programme.title}
            image={programme.images[0]}
            category={programme.category}
            duration={programme.duration}
            currentPage={currentPage}
          />
        ))}
      </div>

      {/* NO RESULTS */}

      {filteredProgrammes.length === 0 && (
        <p className="no-results">
          No training programmes found.
        </p>
      )}

      {/* PAGINATION */}

      {totalPages > 1 && (
        <div className="pagination">
          {/* PREVIOUS */}

          <button
            type="button"
            className="pagination-btn"
            onClick={() =>
              handlePageChange(currentPage - 1)
            }
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {/* FIRST PAGE + ELLIPSIS */}

          {pageNumbers[0] > 1 && (
            <>
              <button
                type="button"
                className="pagination-number"
                onClick={() => handlePageChange(1)}
              >
                1
              </button>

              {pageNumbers[0] > 2 && (
                <span className="pagination-ellipsis">
                  ...
                </span>
              )}
            </>
          )}

          {/* PAGE NUMBERS */}

          {pageNumbers.map((page) => (
            <button
              key={page}
              type="button"
              className={`pagination-number ${
                currentPage === page ? "active" : ""
              }`}
              onClick={() => handlePageChange(page)}
              aria-current={
                currentPage === page
                  ? "page"
                  : undefined
              }
            >
              {page}
            </button>
          ))}

          {/* LAST PAGE + ELLIPSIS */}

          {pageNumbers[pageNumbers.length - 1] <
            totalPages && (
            <>
              {pageNumbers[pageNumbers.length - 1] <
                totalPages - 1 && (
                <span className="pagination-ellipsis">
                  ...
                </span>
              )}

              <button
                type="button"
                className="pagination-number"
                onClick={() =>
                  handlePageChange(totalPages)
                }
              >
                {totalPages}
              </button>
            </>
          )}

          {/* NEXT */}

          <button
            type="button"
            className="pagination-btn"
            onClick={() =>
              handlePageChange(currentPage + 1)
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

      {/* PROGRAMME COUNT */}

      {filteredProgrammes.length > 0 && (
        <p className="programme-count">
          Showing {startIndex + 1}–
          {Math.min(
            startIndex + itemsPerPage,
            filteredProgrammes.length
          )}{" "}
          of {filteredProgrammes.length} programmes
        </p>
      )}
    </main>
  );
}

export default TrainingProgrammes;
