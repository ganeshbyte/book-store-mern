import React from "react";

interface IPaginationProp {
  prev?: boolean;
  next?: boolean;
}
const Pagination = ({ prev, next }: IPaginationProp) => {
  prev = prev || false;
  next = next || false;
  return (
    <div>
      {prev && <button>Prev</button>}
      {next && <button>Next</button>}
    </div>
  );
};

export default Pagination;
