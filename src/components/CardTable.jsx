import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { Input } from '@material-ui/core';
import { clientContext } from '../contexts/ClientContext';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function CardTable() {
    const classes = useStyles();

    const { card, getCard, changeCountProduct } = useContext(clientContext)

    useEffect(() => {
        getCard()
    }, [])
    console.log(card);
    function handelChange(id, count) {
        if (count < 1) {
            return
        }
        changeCountProduct(count, id)

    }

    return (
        <>
            {
                card ? (
                    <TableContainer component={Paper} >
                        <Table className={classes.table} aria-label="caption table">
                            
                            <caption>{card.totalPrice}</caption>
                            <TableHead>
                                <TableRow>
                                    <TableCell>№</TableCell>
                                    <TableCell align="left">Название</TableCell>
                                    <TableCell align="left">Цена</TableCell>
                                    <TableCell align="left">Photo</TableCell>
                                    <TableCell align="left">Цвет</TableCell>
                                    <TableCell align="left">Kол</TableCell>
                                    <TableCell align="left">Общаяя Цена</TableCell>



                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {card.products.map((row, index) => (
                                    <TableRow key={row.product.name}>
                                        <TableCell component="th" scope="row">
                                            {index + 1}
                                        </TableCell>
                                        <TableCell align="left">{row.product.title}</TableCell>

                                        <TableCell align="left">{row.product.price}</TableCell>

                                        <TableCell align="left">
                                            <img width='100' src={row.product.photo} alt="#" />
                                        </TableCell>
                                        <TableCell align="left">{row.product.color}</TableCell>
                                        <TableCell align="left">
                                            <Input
                                                type="number"
                                                value={row.count}
                                                onChange={(e) => handelChange(row.product.id, e.target.value)}


                                            />

                                        </TableCell>
                                        <TableCell align="left">{row.subPrice}</TableCell>





                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                ) : (
                    <h2>Loading...</h2>
                )
            }
        </>
    );
}