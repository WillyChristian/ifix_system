import { makeStyles } from "@material-ui/core";

const newServiceStyle = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1) / 2,
      "& 	.Mui-focused": {
        color: "#000",
      },
    },
  },
  main: { display: "flex" },
  fieldset: {
    margin: "1rem 0.5rem",
    borderRadius: "15px",
    border: "2px solid",
    padding: "1rem",
  },
  btn: {
    margin: "0rem 1rem",
  },
}));

export default newServiceStyle;
