import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import moment from "moment";
export default function NativePicker() {
  let tomorrow = moment().add(1, "days");
  var testTmr = `${tomorrow}T09:00`;

  return (
    <Stack component="form" noValidate spacing={3}>
      <TextField
        id="datetime-local"
        label="Next appointment"
        type="datetime-local"
        defaultValue={testTmr}
        sx={{ width: 250 }}
        // minTime={new Date(0, 0, 0, 9)}
        // maxTime={new Date(0, 0, 0, 18, 45)}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Stack>
  );
}
