import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Salary(props) {
  const [isSalary, setSalary] = React.useState(null);
  const [values, setValues] = React.useState({
    amount: "",
    // firstName: "",
    // lastName: "",
    // proposalQuestion: "",
    // proposalDescription: "",
    // email: "",
  });

  //   const handleChange = (event) => {
  //     // setValues({ ...values, [prop]: event.target.value });
  //     setSalary(event.target.value);
  //     props.parentCallback(isSalary);
  //   };

  const handleChange = (prop) => (event) => {
    try {
      setValues({ ...values, [prop]: event.target.value });
    } catch (err) {
      console.log("Error modifying the properties.");
    }
  };

  const handleSubmit = (evt) => {
    // setSalary(values.amount);
    props.parentCallback(values.amount);
    evt.preventDefault();

    // /alert(`Submitting Name ${firstName} ${lastName}`);
  };

  //   const handleClickShowPassword = () => {
  //     setValues({
  //       ...values,
  //       showPassword: !values.showPassword,
  //     });
  //   };

  //   const handleMouseDownPassword = (event) => {
  //     event.preventDefault();
  //   };

  return (
    <div align="center">
      <form onSubmit={handleSubmit}>
        <Box sx={{ 
            justifyContent: "space-around",
            display: "flex",
            flexWrap: "wrap", margin: "normal", align:"center"}}>
          <div className="userTxt" align="center">
            Wie hoch ist Ihr monatliches Bruttogehalt?
            <span>
              <FormControl
                fullWidth
                sx={{ m: 1, align: "center" }}
                variant="standard"
              >
                <InputLabel htmlFor="standard-adornment-amount">
                  Monatliches Bruttogehalt
                </InputLabel>
                <Input
                  id="amount"
                  name="amount"
                  //standard-adornment-amount
                  value={values.amount}
                  onChange={handleChange("amount")}
                  endAdornment={
                    <InputAdornment position="end">€</InputAdornment>
                  }
                />
              </FormControl>
              <button className="button" onChange={handleChange}>
                Weiter{" "}
              </button>
            </span>
          </div>
        </Box>
      </form>
    </div>
  );
}
