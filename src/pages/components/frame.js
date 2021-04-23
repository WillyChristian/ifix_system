import React from "react";
import { makeStyles } from "@material-ui/core";

const style = makeStyles({
  frame: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    height: "150vh",
    backgroundColor: "#efefef",
  },
});

export default function Frame({ children }) {
  const frameStyle = style();
  return <div className={frameStyle.frame}>{children}</div>;
}
