import React from "react";

const Pagination = ({ slice, setSliceIndex, currentIndex }) => {
  return (
    <>
      <div className="col-lg-12 text-center">
        <div className="pagination__option">
          {slice.length > 0 &&
            slice.map((product, index) => (
              <>
                <a href="#/"  onClick={() => setSliceIndex(index)}>
                  {index + 1}
                </a>
              </>
            ))}

          {currentIndex ===slice.length && (
            <a href="#/">
              <i className="fa fa-angle-right"></i>
              
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default Pagination;