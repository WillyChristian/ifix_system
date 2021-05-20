import { makeStyles } from "@material-ui/core";

const SearchStyle = makeStyles({
  main:{
    display:"flex",
    flexDirection:"column",
    width:"100%"
  },
  header: {
    height: "5rem",
    width: "100%",
    padding:"1rem",
    margin:"1rem",
    display:"flex",
    flexDirection:"column",
    justifyContent: "space-around",
    alignItems:"center"
  },
  container:{
    width: "95%",
    padding:"1rem",
    margin:"1rem",
    display:"flex",
    flexDirection:"column",
    justifyContent: "space-around",
    alignItems:"center"
  },

});

export default SearchStyle;
