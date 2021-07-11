import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

export default function PaginationLink({page}) {
  const [pageNumber, setPageNumber] = React.useState(page.numberPage);
  const handleChange = (event, value) => {
    setPageNumber(value);
  };

  return (
    <Pagination count={page.totalPages} page={pageNumber ?? ""} onChange={handleChange} />
  );
}