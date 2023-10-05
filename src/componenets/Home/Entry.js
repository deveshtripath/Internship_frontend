import React from "react";
import { ImAttachment } from "react-icons/im";
import { AiOutlineLink } from "react-icons/ai";

const Entry = () => {
  return (
    <div>
      <div className="data_enter">
        <div className="data_attach">
          <div>
            {" "}
            <ImAttachment />{" "}
          </div>
          
          <div>
            {" "}
            <AiOutlineLink />{" "}
          </div>
          <div></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Entry;
