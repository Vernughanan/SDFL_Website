import { useState, useEffect } from "react";
import TrainingCard from "../../components/TrainingCard";
import { programmes } from "../../data/programmes";
import { Search } from "lucide-react";

function TrainingProgrammes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12;

  // Reset page to 1 whenever search term or category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const filteredProgrammes = programmes.filter((programme) => {
    const matchesSearch = programme.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      programme.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredProgrammes.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProgrammes = filteredProgrammes.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Change page
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main>
      <div className="training-filters">
        <div className="search-box">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Search training programmes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="category-filter">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Accounts, Finance and Audit">Accounts</option>
            <option value="Soft Skills Development">SoftSkills</option>
            <option value="Administration">Administration</option>
            <option value="Consultation and Policy Development">Consultation and Policy</option>
            <option value="OutStation 1">OutStation 1</option>
            <option value="OutStation 2">OutStation 2</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Information Technology">IT</option>
            <option value="Language">Language</option>
            <option value="Examination">Examination</option>
          </select>
        </div>

        <button
          className="clear-filters"
          onClick={() => {
            setSearchTerm("");
            setSelectedCategory("All");
            setCurrentPage(1);
          }}
        >
          Clear Filters
        </button>
      </div>

      <div className="training-grid">
        {currentProgrammes.map((programme) => (
          <TrainingCard
            key={programme.id}
            id={programme.id}
            title={programme.title}
            image={programme.images[0]}
            category={programme.category}
            duration={programme.duration}
          />
        ))}
      </div>

      {filteredProgrammes.length === 0 && (
        <p className="no-results">No training programmes found.</p>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="pagination-btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <span className="page-info">
            Page {currentPage} of {totalPages}
          </span>

          <button
            className="pagination-btn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

      {/* Programme count */}
      {filteredProgrammes.length > 0 && (
        <p className="programme-count">
          Showing {startIndex + 1}–
          {Math.min(startIndex + itemsPerPage, filteredProgrammes.length)} of{" "}
          {filteredProgrammes.length} programmes
        </p>
      )}
    </main>
  );
}

export default TrainingProgrammes;