
import { useMemo, useRef, useState } from "react";

import {
  Search,
  X,
  SlidersHorizontal,
  GraduationCap,
  Users,
  ArrowUpDown,
  RotateCcw,
  BookOpen,
  ChevronLeft,
  ArrowRight,
} from "lucide-react";

import "./ResourcePool.css";

/* ==========================================
   SDFL RESOURCE PERSONS
   DATA PROVIDED BY SDFL
========================================== */

const staffData = [
  ["R.K.N.D. Darshani", "PhD"],
  ["R.H.M.D. Premasiri", "Master's Degree"],
  ["E.M.C.T. Edirisinghe", "Master's Degree"],
  ["L.H. Nihal", "First Degree"],
  ["Prof. W.R. Rohini Chandralatha", "PhD"],
  ["L. Katagodage", "Master's Degree"],
  ["S.T. Bulathsinhala", "Master's Degree"],
  ["A.D.I. Mendis", "Master's Degree"],
  ["C.P. Lokugalappaththi", "Master's Degree"],
  ["A. H. Pushpamala", "Master's Degree"],
  ["C.A.K. Paranamana", "First Degree"],
  ["M.P.R. Zoysa", "Postgraduate Diploma"],
  ["JAYATHILAKA I D R", "PhD"],
  ["K. Easwaralingam", "Postgraduate Diploma"],
  ["L.G.S.U. Sandaruwan", "Master's Degree"],
  ["D M N P DEEGALLA", "First Degree"],
  ["P.A.S.J. Kumara", "Master's Degree"],
  ["K.p.c.p.karunanayaka", "First Degree"],
  ["Chathuranga Ediribandana", "First Degree"],
  ["M.A.T. Senarath", "Master's Degree"],
  ["K .T. S. P. Gunathilaka", "Master's Degree"],
  ["D.M.C. Nalaka Dissanayaka", "Master's Degree"],
  ["P M Dharmaraja", "Master's Degree"],
  ["C J Gurusinghe", "Master's Degree"],
  ["S.R.A.V.L. Samarathunga", "Postgraduate Diploma"],
  ["I. Ravikumar", "Master's Degree"],
  ["I.A.D.S.M. Illeperuma", "Master's Degree"],
  ["GSK Samarathunga", "Master's Degree"],
  ["W.A.S. Upananda", "Master's Degree"],
  [
    "A.K. Arunoda",
    "BSc (Hons) Network Technology and Cybersecurity",
  ],
  ["L I S De Silva", "Master's Degree"],
  ["D.G.R.T. Panduka", "Master's Degree"],
  ["K.B.V.D.N. Muthugala", "Master's Degree"],
  ["K.P. Chandith", "Master's Degree"],
  ["S H KALUARACHCHI", "Master's Degree"],
  ["Mrs. H.W.N.P Jayasekara", "Master's Degree"],
  ["G D R A Kumara", "Master's Degree"],
  ["K.B.N. Dissanayake", "First Degree"],
  ["A.D.P.I Prasanna", "Master's Degree"],
  ["W.T. Madushani", "Master's Degree"],
  ["T T B Tennekoon", "Postgraduate Diploma"],
  ["JBWeerasinghe", "Diploma"],
  ["D M K Wijesinghe", "Diploma"],
  ["K. W. K. de Silva", "Diploma"],
  ["S S Samaraweera", "Master's Degree"],
  ["DESHAPRIYA, R.D.D.", "Postgraduate Diploma"],
  ["A.D.S. Senadheera", "Other"],
  ["H A D P Gunawardena", "Master's Degree"],
  ["S. Partheepan", "Master's Degree"],
  ["S. Arunkumar", "Master's Degree"],
  ["S.S. Katugampala", "Master's Degree"],
  ["W J T Shayami Lakmini Fernando", "Master's Degree"],
];

/* ==========================================
   QUALIFICATION CATEGORIES
========================================== */

const getCategory = (qualification) => {
  if (qualification === "PhD") {
    return "PhD";
  }

  if (qualification === "Master's Degree") {
    return "Master's Degree";
  }

  if (qualification === "Postgraduate Diploma") {
    return "Postgraduate Diploma";
  }

  if (
    qualification === "First Degree" ||
    qualification.startsWith("BSc")
  ) {
    return "First Degree / Bachelor's";
  }

  if (qualification === "Diploma") {
    return "Diploma";
  }

  return "Other";
};

const resourcePeople = staffData.map(
  ([name, qualification], index) => ({
    id: index + 1,
    name,
    qualification,
    category: getCategory(qualification),
  })
);

const ALL_CATEGORY = "All Resource Persons";

const categories = [
  ALL_CATEGORY,
  "PhD",
  "Master's Degree",
  "Postgraduate Diploma",
  "First Degree / Bachelor's",
  "Diploma",
  "Other",
];

const ITEMS_PER_PAGE = 10;

/* ==========================================
   RESOURCE POOL COMPONENT
========================================== */

export default function ResourcePool() {
  const [search, setSearch] = useState("");

  const [activeCategory, setActiveCategory] = useState(
    ALL_CATEGORY
  );

  const [sortOrder, setSortOrder] = useState("default");

  const [currentPage, setCurrentPage] = useState(1);

  const listStartRef = useRef(null);

  /* ========================================
     SEARCH + FILTER + SORT
  ======================================== */

  const filteredPeople = useMemo(() => {
    const query = search.trim().toLowerCase();

    const results = resourcePeople.filter((person) => {
      const matchesSearch =
        person.name.toLowerCase().includes(query) ||
        person.qualification.toLowerCase().includes(query) ||
        person.category.toLowerCase().includes(query);

      const matchesCategory =
        activeCategory === ALL_CATEGORY ||
        person.category === activeCategory;

      return matchesSearch && matchesCategory;
    });

    if (sortOrder === "az") {
      results.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    if (sortOrder === "za") {
      results.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }

    return results;
  }, [search, activeCategory, sortOrder]);

  /* ========================================
     PAGINATION
  ======================================== */

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPeople.length / ITEMS_PER_PAGE)
  );

  const safePage = Math.min(currentPage, totalPages);

  const visiblePeople = filteredPeople.slice(
    (safePage - 1) * ITEMS_PER_PAGE,
    safePage * ITEMS_PER_PAGE
  );

  const startItem =
    filteredPeople.length === 0
      ? 0
      : (safePage - 1) * ITEMS_PER_PAGE + 1;

  const endItem = Math.min(
    safePage * ITEMS_PER_PAGE,
    filteredPeople.length
  );

  const progress = filteredPeople.length
    ? (endItem / filteredPeople.length) * 100
    : 0;

  /* ========================================
     EVENT HANDLERS
  ======================================== */

  const handleSearch = (value) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleCategory = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSort = (value) => {
    setSortOrder(value);
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setSearch("");
    setActiveCategory(ALL_CATEGORY);
    setSortOrder("default");
    setCurrentPage(1);
  };

  const scrollToList = () => {
    if (!listStartRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const top =
      listStartRef.current.getBoundingClientRect().top +
      window.scrollY -
      110;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  const changePage = (page) => {
    if (
      page < 1 ||
      page > totalPages ||
      page === safePage
    ) {
      return;
    }

    setCurrentPage(page);

    requestAnimationFrame(() => {
      requestAnimationFrame(scrollToList);
    });
  };

  /* ========================================
     PAGE CONTENT
  ======================================== */

  return (
    <section className="rp-page">
      {/* HERO */}

      <div className="rp-hero">
        <div className="rp-hero-content">
          <span className="rp-eyebrow">
            SDFL / RESOURCE PERSONS
          </span>

          <h1>
            Meet Our <span>Resource Persons</span>
          </h1>

          <p>
            Explore our network of experienced resource
            persons, their professional expertise, and
            educational qualifications, contributing to
            skills development across Sri Lanka.
          </p>

          <div className="rp-hero-stats">
            <div className="rp-stat">
              <Users size={23} />

              <div>
                <strong>{resourcePeople.length}</strong>
                <span>Resource Persons</span>
              </div>
            </div>

            <div className="rp-stat-divider" />

            <div className="rp-stat">
              <BookOpen size={23} />

              <div>
                <strong>{categories.length - 1}</strong>
                <span>Qualification Categories</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="rp-hero-decoration"
          aria-hidden="true"
        >
          <div className="rp-deco-circle rp-circle-one" />
          <div className="rp-deco-circle rp-circle-two" />

          <GraduationCap
            size={110}
            strokeWidth={1}
          />
        </div>
      </div>

      {/* DIRECTORY */}

      <div className="rp-directory">
        {/* SIDEBAR */}

        <aside className="rp-sidebar">
          <div className="rp-sidebar-header">
            <SlidersHorizontal size={20} />
            <h2>Browse Qualifications</h2>
          </div>

          <p className="rp-sidebar-description">
            Filter resource persons by their highest
            educational qualification.
          </p>

          <div className="rp-category-list">
            {categories.map((category) => {
              const count =
                category === ALL_CATEGORY
                  ? resourcePeople.length
                  : resourcePeople.filter(
                      (person) =>
                        person.category === category
                    ).length;

              return (
                <button
                  key={category}
                  type="button"
                  className={`rp-category ${
                    activeCategory === category
                      ? "rp-category-active"
                      : ""
                  }`}
                  onClick={() =>
                    handleCategory(category)
                  }
                  aria-pressed={
                    activeCategory === category
                  }
                >
                  <span>{category}</span>

                  <span className="rp-category-count">
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            className="rp-reset-button"
            onClick={resetFilters}
          >
            <RotateCcw size={16} />
            Reset All Filters
          </button>
        </aside>

        {/* MAIN DIRECTORY */}

        <div className="rp-main">
          {/* SEARCH AND SORT */}

          <div className="rp-toolbar">
            <div className="rp-search">
              <Search size={21} />

              <input
                type="search"
                placeholder="Search by name or qualification..."
                value={search}
                onChange={(e) =>
                  handleSearch(e.target.value)
                }
                aria-label="Search resource persons"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => handleSearch("")}
                  aria-label="Clear search"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            <div className="rp-sort">
              <ArrowUpDown size={17} />

              <select
                value={sortOrder}
                onChange={(e) =>
                  handleSort(e.target.value)
                }
                aria-label="Sort resource persons"
              >
                <option value="default">
                  Default Order
                </option>

                <option value="az">
                  Name: A to Z
                </option>

                <option value="za">
                  Name: Z to A
                </option>
              </select>
            </div>
          </div>

          {/* RESOURCE PERSON LIST */}

          <div
            ref={listStartRef}
            className="rp-list-start"
          >
            <div className="rp-results-heading">
              <div>
                <span className="rp-section-label">
                  RESOURCE PERSON DIRECTORY
                </span>

                <h2>
                  {activeCategory === ALL_CATEGORY
                    ? "All Resource Persons"
                    : activeCategory}
                </h2>
              </div>

              <span
                className="rp-results-count"
                aria-live="polite"
              >
                {filteredPeople.length} of{" "}
                {resourcePeople.length} Resource Persons
              </span>
            </div>

            {visiblePeople.length > 0 ? (
              <div className="rp-expert-list">
                {visiblePeople.map(
                  (person, index) => (
                    <article
                      className="rp-expert-row"
                      key={person.id}
                    >
                      <div className="rp-expert-number">
                        {String(
                          (safePage - 1) *
                            ITEMS_PER_PAGE +
                            index +
                            1
                        ).padStart(2, "0")}
                      </div>

                      <div className="rp-expert-info">
                        <h3>{person.name}</h3>

                        <p>
                          {person.qualification}
                        </p>
                      </div>

                      <div
                        className="rp-expert-icon"
                        aria-hidden="true"
                      >
                        <GraduationCap size={22} />
                      </div>
                    </article>
                  )
                )}
              </div>
            ) : (
              <div className="rp-empty">
                <Search size={38} />

                <h3>No Resource Persons Found</h3>

                <p>
                  No resource persons match your search
                  or selected qualification category.
                </p>

                <button
                  type="button"
                  onClick={resetFilters}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          {/* PAGINATION */}

          {filteredPeople.length >
            ITEMS_PER_PAGE && (
            <nav
              className="rp-pagination"
              aria-label="Resource persons pagination"
            >
              <div className="rp-pagination-top">
                <div className="rp-pagination-info">
                  <span className="rp-pagination-label">
                    DIRECTORY PROGRESS
                  </span>

                  <p>
                    Showing{" "}
                    <strong>
                      {startItem}–{endItem}
                    </strong>{" "}
                    of{" "}
                    <strong>
                      {filteredPeople.length}
                    </strong>{" "}
                    Resource Persons
                  </p>
                </div>

                <div className="rp-pagination-fraction">
                  <strong>
                    {String(safePage).padStart(
                      2,
                      "0"
                    )}
                  </strong>

                  <span>/</span>

                  <span>
                    {String(totalPages).padStart(
                      2,
                      "0"
                    )}
                  </span>
                </div>
              </div>

              <div
                className="rp-pagination-track"
                role="progressbar"
                aria-label="Directory browsing progress"
                aria-valuemin={0}
                aria-valuemax={
                  filteredPeople.length
                }
                aria-valuenow={endItem}
              >
                <div
                  className="rp-pagination-progress"
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>

              <div className="rp-pagination-actions">
                <button
                  type="button"
                  className="rp-page-navigation rp-page-prev"
                  onClick={() =>
                    changePage(safePage - 1)
                  }
                  disabled={safePage === 1}
                >
                  <ChevronLeft size={20} />
                  <span>Previous</span>
                </button>

                <div className="rp-page-numbers">
                  {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1
                  ).map((page) => (
                    <button
                      key={page}
                      type="button"
                      className={`rp-page-number ${
                        safePage === page
                          ? "rp-page-number-active"
                          : ""
                      }`}
                      onClick={() =>
                        changePage(page)
                      }
                      aria-label={`Go to page ${page}`}
                      aria-current={
                        safePage === page
                          ? "page"
                          : undefined
                      }
                    >
                      {String(page).padStart(
                        2,
                        "0"
                      )}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  className="rp-page-navigation rp-page-next"
                  onClick={() =>
                    changePage(safePage + 1)
                  }
                  disabled={
                    safePage === totalPages
                  }
                >
                  <span>Next</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </nav>
          )}

          {/* DIRECTORY FOOTER */}

          <div className="rp-directory-footer">
            <span>
              Showing {startItem}–{endItem} of{" "}
              {filteredPeople.length} Resource Persons
            </span>

            <span>
              Skill Development Fund Limited
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
