import React from "react";
import { VISIBILITY_TYPES } from "../const";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

const { ALL, ACTIVE, COMPLETED } = VISIBILITY_TYPES;

function getButtonVariant(visibilityType, currentVisibilityType) {
  return visibilityType === currentVisibilityType ? "dark" : "outline-dark";
}

const VisibilityToolbar = ({ visibilityType, onVisibilityChange }) => {
  return (
    <ToggleButtonGroup
      type="radio"
      name="visibility"
      defaultValue={ALL}
      onChange={onVisibilityChange}
      className="mt-3"
    >
      <ToggleButton
        value={ALL}
        variant={getButtonVariant(visibilityType, ALL)}
        size="sm"
      >
        All
      </ToggleButton>
      <ToggleButton
        value={ACTIVE}
        variant={getButtonVariant(visibilityType, ACTIVE)}
        size="sm"
      >
        Active
      </ToggleButton>
      <ToggleButton
        value={COMPLETED}
        variant={getButtonVariant(visibilityType, COMPLETED)}
        size="sm"
      >
        Completed
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default VisibilityToolbar;
