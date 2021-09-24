import { Button, Container } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import CardTable from '../components/CardTable';
import Navbar from '../components/Navbar'

const CardPage = () => {
    return (
        <>
            <Navbar />
            <div className="rott">

            <Container>
                <div className="card">
                    <h3 className="card-title">Ваша корзина</h3>

                    <CardTable />

                </div>
                <Link to="/buy">
                    <Button>Оплата</Button>
                </Link>

            </Container>
            </div>

        </>
    );
};

export default CardPage;