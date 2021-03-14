import React, { useState } from "react";
import {
	InputLabel,
	Select,
	TextField,
	MenuItem,
	Button,
} from "@material-ui/core";

import ListTable from "./table";
import { oldlace } from "color-name";

function PartsContent({ ...props }) {
	const { handleChange, values, setFields, prod, update, part } = props;
	const [enterPart, setEnterPart] = useState();
    const [partList, setPartList] = useState( [] )

    const setPart = (event) =>{
        const {value, name} = event.target
        setEnterPart({
            ...enterPart,
            [name]:value
        })
    }

    const updateList = () => {
        const actualArr = partList
        actualArr.push({...enterPart})
        setPartList(actualArr)        
        setFields( "parts", partList)
    }

	return (
		<div>
			<div id='divisor'>
				<div id='sub-divisor'>
					<InputLabel id='select-part'>Peça</InputLabel>
					<Select id='selected' labelId='partId' name='partId' onChange={setPart}>
						{prod?.map((p) => {
							return (
								<MenuItem
									name='partId'
									value={p._id}
								>
									{p.full_name}
								</MenuItem>
							);
						})}
					</Select>
				</div>

				<div id='sub-divider'>
					<InputLabel htmlFor='preco'>Valor</InputLabel>
					<TextField name='preco' onChange={setPart} />
				</div>
				<div id='sub-divider'>
					<InputLabel htmlFor='qtd'>Quantidade</InputLabel>
					<TextField name='qtd' onChange={setPart} />
				</div>
			</div>

			 <div id='divisor'>
				<Button onClick={() => updateList()}>Cadastrar</Button>
			</div> 

			<ListTable values={values} />
		</div>
	);
}

export default PartsContent;
