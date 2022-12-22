import * as React from "react";

import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import 'dayjs/locale/de';

// import { registerLocale, setDefaultLocale } from  "react-datepicker";
// import {de} from 'date-fns/esm/locale'
// registerLocale('de', de)
// store date in parent?
export default function BasicDatePickerStart(props) {
  const [locale, setLocale] = React.useState('de');
  const [value, setValue] = React.useState(null);

  const performcallback = () => {
    props.parentCallback(value)
  }

  return (
    <div>
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
      <DatePicker
        locale={locale}
        ampm={false}
        label="Datum auswählen"
        margin="normal"
        disableFuture
        openTo="year"
        views={["year", "month", "day"]}
        value={value}
        onChange={(value) => {
          setValue(value);
        }}
        renderInput={(params) => <TextField {...params} />}
        // inputFormat="Datum a"
      />
    </LocalizationProvider>
    <br></br>
    <br></br>
    {value != null && <button className="button" onClick={performcallback}> Weiter </button>}
    </div>
  );
}
