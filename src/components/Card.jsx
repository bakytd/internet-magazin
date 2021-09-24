import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Truncate from 'react-truncate';
import { clientContext } from '../contexts/ClientContext';

const useStyles = makeStyles({
    root: {
        maxWidth: 250,
        margin: '0 10px 10px 10px',
        minWidth: 240,
        height: 390,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    media: {
        height: 140,
        backgroundSize: 'contain'
    },
});

export default function MediaCard({ item }) {
    const classes = useStyles();
    const { addAndDeleteProductInCart, checkProductInCard } = useContext(clientContext)

    return (
            <div className="bar-item">
        <Card className={classes.root}>
                <CardActionArea>

                    <CardMedia
                        className={classes.media}
                        image={item.photo}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography variant="h6" component="h2" noWrap>
                            {item.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <Truncate lines={3} ellipsis={<span>... <a href='/link/to/article'>Подробнее</a></span>}>
                                {item.description}
                            </Truncate>
                            <span style={{ display: 'block', fontSize: "16px" }}>Цена:{item.price} $</span>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={() => addAndDeleteProductInCart(item)}>
                    <ShoppingCartIcon color={checkProductInCard(item.id) ? "primary" : "secondary"} />
                </Button>
                <Button size="small" color="primary">
                    Подробнее
                </Button>
            </CardActions>
        </Card>

            </div>
    );
}
