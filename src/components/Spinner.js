import React from "react";

const Spinner= (props)=> {
    return (
      <div className="text-center">
        <div className="spinner-border text-light" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
}

export default Spinner;
