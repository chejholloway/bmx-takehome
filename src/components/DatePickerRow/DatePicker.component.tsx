import React, { useState } from "react";
import Datepicker from "tailwind-datepicker-react";

import {
  DatePickerStyles,
  LessThanSign,
  GreaterThanSign,
} from "../../styles/styles.component";

function DatePickerRow() {
  const [show, setShow] = useState(false);

  const options = {
    title: "Bright MX",
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    clearBtnText: "Clear",
    maxDate: new Date("2030-01-01"),
    minDate: new Date("1950-01-01"),
    theme: {
      background: "bg-white",
      todayBtn: "",
      clearBtn: "",
      icons: "",
      text: "center",
      disabledText: "bg-red-500",
      input: "",
      inputIcon: "",
      selected: "",
    },
    icons: {
      // () => ReactElement | JSX.Element
      prev: () => <span>Previous</span>,
      next: () => <span>Next</span>,
    },
    datepickerClassNames: "top-12",
    defaultDate: new Date("2023-09-20"),
    language: "en",
    disabledDates: [],
    weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    inputNameProp: "date",
    inputIdProp: "date",
    inputPlaceholderProp: "Select Date",
  };

  const handleChange = (selectedDate: Date) => {
    console.log(selectedDate);
  };

  const handleClose = (state: boolean) => {
    setShow(state);
  };

  return (
    <DatePickerStyles data-testid="datepicker">
      <LessThanSign>&lt;</LessThanSign>
      <Datepicker
        classNames="date-picker col relative right-10"
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
