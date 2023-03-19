import React, {useState} from "react";
import Flatpickr from "react-flatpickr";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  DateTimePicker,
  
} from "@mui/x-date-pickers/DateTimePicker";
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';
import "./Calendar.scss";
import Icon from "../icon/Icon"

function Calendar() {
  const [value, setValue]=useState('');
  return (
<>
<LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateTimePicker"]}>
          <DateTimeField
          size={'small'}
                     label="Controlled field"
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </DemoContainer>
      </LocalizationProvider> 
</>
  );
}

export default Calendar;
  