import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});



/* 
    ESSA FUNÇÃO CRIA OS DADOS QUE SERÃO INSERIDOS 
    EM CADA LINHA, COM BASE NOS DADOS PASSADOS EM CADA
    PARÂMETRO
    O CONTEÚDO DO PARÂMETRO 'HISTORY' É ESTÁTICO MAS
    SERÁ ALTERADO PARA DINÂMICO, ASSIM COMO OS DEMAIS 
*/
function createData(name, calories, fat, carbs, tecnico) {
  return {
    name,
    calories,
    fat,
    carbs,
    tecnico,
    history: [
      { date: '2020-01-05', funcionario: 'Funny', conteudo: "O cliente deixou CHIP e gaveta" },
      { date: '2020-01-02', funcionario: 'Mayara', conteudo: "Devolvido com CHIP Tim e gaveta" },
    ],
  };
}

/*
    FUNÇÃO GERADORA DAS LINHAS DA TABELA
*/

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();



  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="center">{row.calories}</TableCell>
        <TableCell align="center">{row.fat}</TableCell>
        <TableCell align="center">{row.carbs}</TableCell>
        <TableCell align="center">{row.tecnico}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Histórico
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Data</TableCell>
                    <TableCell>Funcionário</TableCell>
                    <TableCell align="center">Conteúdo</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>

                    {
                        /* 
                            Função responsável por mapear os dados do array history 
                        */
                    }
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.funcionario}</TableCell>
                      <TableCell align="center">{historyRow.conteudo}</TableCell>
  
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        conteudo: PropTypes.number.isRequired,
        funcionario: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    tecnico: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData(5955, "Jose da Silva", "Fechado", "Roberto", "Willy"),

];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Numero OS</TableCell>
            <TableCell align="center">Cliente</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Atendente</TableCell>
            <TableCell align="center">Técnico</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}