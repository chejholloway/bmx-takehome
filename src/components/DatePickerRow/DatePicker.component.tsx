import React, { useState } from "react";
import Datepicker from "tailwind-datepicker-react";

import { options } from "./DataPickerOptions";

import {
  DatePickerStyles,
  LessThanSign,
  GreaterThanSign,
} from "../../styles/styles.component";

function DatePickerRow() {
  const [show, setShow] = useState(false);

  const handleChange = (selectedDate: Date) => {
    console.log(selectedDate);
  };

  const handleClose = (state: boolean) => {
    setShow(state);
  };

  const datePickerStyles = "date-picker col pr-4";

  return (
    <DatePickerStyles data-testid="datepicker">
      <LessThanSign>&lt;</LessThanSign>
      <Datepicker
        classNames={datePickerStyles}
        options={options}
        onChange={handleChange}
        show={show}
        setShow={handleClose}
      />
      <GreaterThanSign>&gt;</GreaterThanSign>
    </DatePickerStyles>
  );
}

export default DatePickerRow;
