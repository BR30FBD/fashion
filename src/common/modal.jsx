import React from "react";

const Modal = ({ bgImg }) => {
 
  return (
    <>
      <div style={{ zIndex: "10000000" }}>
        <div
          className="modal fade bg-transparent container-fluid
 "
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div
              className="modal-content"
              style={{ background: "transparent", border: "none" }}
            >
              <div className="modal-body ">
                <button
                  type="button"
                  className="close "
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true" className="float-right text-white ">
                    &times;
                  </span>
                </button>
                <img src={bgImg} alt="hftdtd" style={{ width: "80%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;