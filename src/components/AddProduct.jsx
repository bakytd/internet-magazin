import { TextField, Button } from '@material-ui/core';
import { React, useContext, useState } from 'react';
import { adminContext } from '../contexts/AdminContext';
import 'date-fns'
import { useHistory } from 'react-router';
import '../index.css'



const AddProduct = () => {
    const [mangaCleaner, setMangaCleaner] = useState({
        title: '',
        description: '',
        price: '',
        color: '',
        photo: '',
        modal: ''
    })
    const history = useHistory()

    const { createProduct } = useContext(adminContext)
    console.log(createProduct)


    console.log(createProduct)
    function handleInputs(e) {
        let newProduct = {
            ...mangaCleaner,
            [e.target.name]: e.target.value
        }
        setMangaCleaner(newProduct)
    }

    return (
        <div>
            <div className="add-inputs">
                <form>
                    <TextField className="add-inputs1" id="standard-basic" label="Название манги" value={mangaCleaner.title} name="title" onChange={handleInputs} />
                    <TextField className="add-inputs1" id="standard-basic" label="Описание манги" value={mangaCleaner.description} name="description" onChange={handleInputs} />
                    <TextField className="add-inputs1" type="number" id="standard-basic" label="Цена манги" value={mangaCleaner.price} name="price" onChange={handleInputs} />

                    <TextField  className="add-inputs1" id="standard-basic" label="Цвет манги" value={mangaCleaner.color} name="color" onChange={handleInputs} />
                    <TextField className="add-inputs1" id="standard-basic" label="Фото манги" value={mangaCleaner.photo} name="photo" onChange={handleInputs} />

                    <TextField className="add-inputs1" id="standard-basic" label="Бренд манги" value={mangaCleaner.modal} name="modal" onChange={handleInputs} />
                    <Button onClick={(e) => {
                        e.preventDefault()
                        if (
                            !mangaCleaner.title.trim() ||
                            !mangaCleaner.description.trim() ||
                            !mangaCleaner.price.trim() ||
                            !mangaCleaner.color.trim() ||
                            !mangaCleaner.photo.trim() ||
                            !mangaCleaner.modal.trim()

                        ) {
                            alert('Заполните все поля!')
                            return
                        }
                        createProduct({
                            title: mangaCleaner.title.trim(),
                            description: mangaCleaner.description.trim(),
                            price: mangaCleaner.price.trim(),

                            color: mangaCleaner.color.trim(),
                            photo: mangaCleaner.photo.trim(),

                            modal: mangaCleaner.modal.trim(),





                        })
                    }}
                        variant="outlined"
                        color="primary"
                        className="add-inputs1">
                        Создать
                    </Button>
                    <Button className="add-inputs1" onClick={() => {
                        history.push("/")
                    }}>Back</Button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;