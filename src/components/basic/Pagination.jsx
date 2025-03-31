import React from "react";

const Pagination = ({currentPage, maxPages, onPageChange}) => {
  const generatePagination = () => {
    const pages = [];

    for (let i = 1; i <= maxPages; i++) {
      if (i === currentPage) {
        pages.push(
          <option key={i} value={i} disabled selected>Page {i}</option>
        );
      } else {
        pages.push(
          <option key={i} value={i}>Page {i}</option>
        );
      }
    }

    return pages;
  };

  return (
    <select onChange={(e) => onPageChange(e.target.value)}
            className="select border border-slate-700 mt-5 select-sm max-w-xs bg-transparent">
      {generatePagination()}
    </select>
  )
};

export default Pagination;
