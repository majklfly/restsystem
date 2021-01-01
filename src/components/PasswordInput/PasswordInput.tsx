import React, { useState } from "react";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLowVision } from "@fortawesome/free-solid-svg-icons";

const Button = styled.button`
  margin: 0;
`;

export const PasswordInput = ({ ...props }) => {
  const [passwordVisible, setPasswordVisible] = useState<"password" | "text">(
    "password"
  );

  return (
    <div className="input-group">
      <input
        className="form-control"
        type={passwordVisible}
        placeholder="Password"
      />
      <span className="input-group-append">
        <Button className="btn border border-left-0" type="button">
          <FontAwesomeIcon
            className="playIcon"
            icon={faLowVision}
            onClick={() =>
              setPasswordVisible(
                passwordVisible === "password" ? "text" : "password"
              )
            }
          />
        </Button>
      </span>
    </div>
  );
};
