function Paginate({
  postPerPage,
  totalPages,
  paginate,
  currentPage,
  next,
  prev,
}) {
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPages / postPerPage); i++) {
    pageNumbers.push(i);
    // pageNumbers.push(i + currentPage)
  }

  let pageButtonList = pageNumbers.map((page) => {
    return (
      <li key={page}>
        <button onClick={() => paginate(page)}>{page}</button>
      </li>
    );
  });
  return (
    <div>
      <button onClick={prev}>prev</button>
      {pageButtonList}
      <button onClick={next}>next</button>
    </div>
  );
}

export default Paginate;
