import React, { useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useHistory } from 'react-router';
import { clientContext } from '../contexts/ClientContext';
import { Button } from '@material-ui/core';

const LeftSideBar = () => {
    const [price, setPrice] = React.useState('');
    const [modal, setModal] = React.useState('');
    const history = useHistory()
    const { getProducts, modals, getModals } = React.useContext(clientContext)



    const filterProduct = (key, value) => {
        let search = new URLSearchParams(history.location.search)
        search.set(key, value)
        let url = `${history.location.pathname}?${search.toString()}`
        history.push(url)
        setPrice(search.get("price_lte"))
        setModal(search.get("modal"))
        getProducts()


    }

    let search = new URLSearchParams(history.location.search)
    useEffect(() => {
        setPrice(search.get("price_lte"));
        setModal(search.get("modal"))
        getModals()


    }, [])
    const resetFilter = () => {
        setPrice('')
        setModal('')
        history.push('/')
        getProducts()
    }


    return (
        <div className="left-sidebar">

            <div className="cl-white">
                <FormControl component="fieldset">
                    <FormLabel component="legend" className="color-w">Modal</FormLabel>
                    <RadioGroup className="color-h" aria-label="gender" name="gender1" value={modal} onChange={(e) => filterProduct('modal', e.target.value)}>
                        {
                            modals.map(item => (
                                <FormControlLabel key={item} value={item} control={<Radio />} label={item} />

                            ))
                        }
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="leftbutton-cl">

            <Button className="color-b" onClick={resetFilter}>Reset</Button>
            </div>
        </div>
    );
};

export default LeftSideBar;