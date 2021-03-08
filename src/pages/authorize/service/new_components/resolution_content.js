import React, {useContext} from "react";
import { EmployeesContext } from "../../../components/context/employees";
import {
  Typography,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";

function ResolutionContent({ ...props }) {
  const {tec} = useContext(EmployeesContext);
  const { handleChange, values, setFields } = props;

  return (
    <div>
      <legend>
        <Typography variant={"h5"}>Resolução do problema</Typography>
      </legend>
      <div id="sub-divisor">
        <TextField
          name="solution"
          fullWidth
          multiline
          rows={5}
          variant="outlined"
          placeholder="Descrição sussinta e objetiva do que foi feito"
        />
        <div className="tec-responsible">
          <InputLabel htmlFor="tec-list">Técnico Responsável</InputLabel>
          <Select id="tec-list">
            {
                console.log(tec)
            /* {tec.map( t => {
                <MenuItem value={t.name}>{t.name}</MenuItem>
            })} */}
          </Select>
        </div>
      </div>
    </div>
  );
}

export default ResolutionContent;
