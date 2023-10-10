import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxVisiblePages = currentPage;
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const startPage =
    pages - Math.floor(maxVisiblePages / 2) > 0
      ? pages - Math.floor(maxVisiblePages / 2)
      : 1;
  const endPage =
    startPage + maxVisiblePages - 1 <= totalPages
      ? startPage + maxVisiblePages - 1
      : totalPages;

  return (
    <ul className="pagination">
      {currentPage > 1 && (
        <li className="page-item">
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
          >
            Previous
          </button>
        </li>
      )}

      {pages.slice(startPage - 1, endPage).map((page) => (
        <li key={page + 1}>
          <button className="page-link" onClick={() => onPageChange(page + 1)}>
            {page}
          </button>
        </li>
      ))}

      {currentPage < totalPages && (
        <li className="page-item">
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage)}
          >
            Next
          </button>
        </li>
      )}
    </ul>
  );
};

export default Pagination;
