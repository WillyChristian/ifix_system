import { makeStyles } from "@material-ui/core";

const SearchStyle = makeStyles({
  main: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  header: {
    height: "5rem",
    width: "100%",
    padding: "1rem",
    margin: "1rem",
    display: "flex",
    justifyContent: "center",
    margin: "2px",
    alignItems: "center",
    "& > .inpt": {
      margin: "10px",
    },
  },
  container: {
    width: "95%",
    padding: "1rem",
    margin: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  sub_header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "3rem",
  },
});

export default SearchStyle;
