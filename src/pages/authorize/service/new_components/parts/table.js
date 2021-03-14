import React from "react";
import {
	TableContainer,
	Table,
	TableBody,
	TableHead,
	TableRow,
	TableCell,
	Typography,
    Container
} from "@material-ui/core";

function ListTable({...props}) {
    const {values} = props

	return (
		<div>
			<TableContainer component={Container}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell align='center'>
								<Typography>#</Typography>
							</TableCell>
							<TableCell align='center'>
								<Typography>ID da peça</Typography>
							</TableCell>
							<TableCell align='center'>
								<Typography>Quantidade</Typography>
							</TableCell>
							<TableCell align='center'>
								<Typography>Preço</Typography>
							</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{
                            values.parts?.map( (element, id) => {
                                return(
                                    <TableRow>
                                        <TableCell align='center'>
                                            <Typography>{id}</Typography>
                                        </TableCell>
                                        <TableCell align='center'>
                                            <Typography>{element.partId}</Typography>
                                        </TableCell>
                                        <TableCell align='center'>
                                            <Typography>{element.qtd}</Typography>
                                        </TableCell>
                                        <TableCell align='center'>
                                            <Typography>{element.preco}</Typography>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
					</TableBody>
				</Table>

			</TableContainer>
            
		</div>
	);
}

export default ListTable;
