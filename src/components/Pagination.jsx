







const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const maxVisiblePages = 5;
    let startPage, endPage;
  
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total pages is less than or equal to maxVisiblePages
      startPage = 1;
      endPage = totalPages;
    } else {
      // Calculate start and end pages for the pagination display
      if (currentPage <= Math.ceil(maxVisiblePages / 2)) {
        startPage = 1;
        endPage = maxVisiblePages;
      } else if (currentPage + Math.floor(maxVisiblePages / 2) >= totalPages) {
        startPage = totalPages - maxVisiblePages + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - Math.floor(maxVisiblePages / 2);
        endPage = currentPage + Math.floor(maxVisiblePages / 2);
      }
    }
  
    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav className="flex justify-center my-4">
        <ul className="inline-flex space-x-2">
          <li>
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded-md ${
                currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              Previous
            </button>
          </li>
          <li>
          <button
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-md ${
              currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            First
          </button>
        </li>
          {pageNumbers.map((number) => (
            (number != 1 && number != totalPages) &&
            <li key={number}>
              <button
                onClick={() => onPageChange(number)}
                className={`px-3 py-1 rounded-md ${
                  currentPage === number
                    ? 'bg-blue-500 text-white font-bold'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {number}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => onPageChange(totalPages)}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded-md ${
                currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              Last
            </button>
          </li>
          <li>
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded-md ${
                currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    );
  };
  export default Pagination;