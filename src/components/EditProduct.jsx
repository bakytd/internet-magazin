import { Button, TextField } from '@material-ui/core';
import React, { useState, useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { adminContext } from '../contexts/AdminContext';

const EditProduct = () => {
    const { productToEdit, getProductToEdit, saveEditedProduct } = useContext(adminContext)

    const [editMangaCleaner, setEditMangaCleaner] = useState()

    const { id } = useParams()

    const history = useHistory()

    useEffect(() => {
        setEditMangaCleaner(productToEdit)
    }, [productToEdit])

    useEffect(() => {
        getProductToEdit(id)
    }, [])

    const handleInputs = (e) => {
        let obj = {
            ...editMangaCleaner,
            [e.target.name]: e.target.value,
        }
        setEditMangaCleaner(obj)
    }

    return (
        <div>
            {
                editMangaCleaner ? (
                    <div className="add-inputs">
                        <form>
                            <TextField id="standard-basic" label="Название пылесоса" value={editMangaCleaner.title} name="title" onChange={handleInputs} />
                            <TextField id="standard-basic" label="Описание пылесоса" value={editMangaCleaner.description} name="description" onChange={handleInputs} />
                            <TextField type="number" id="standard-basic" label="Цена пылесоса" value={editMangaCleaner.price} name="price" onChange={handleInputs} />

                            <TextField id="standard-basic" label="Цвет пылесоса" value={editMangaCleaner.color} name="color" onChange={handleInputs} />
                            <TextField id="standard-basic" label="Фото пылесоса" value={editMangaCleaner.photo} name="photo" onChange={handleInputs} />
                            <TextField id="standard-basic" label="Студия манги" value={editMangaCleaner.modal} name="modal" onChange={handleInputs} />
 

                            <Button onClick={(e) => {
                                e.preventDefault()
                                if (
                                    !editMangaCleaner.title.trim() ||
                                    !editMangaCleaner.description.trim() ||
                                    !editMangaCleaner.price.toString().trim() ||
                                    !editMangaCleaner.color.trim() ||
                                    !editMangaCleaner.photo.trim() ||
                                    !editMangaCleaner.modal.trim() 
                                   
                                ) {
                                    alert('Заполните все поля!')
                                    return
                                }
                                saveEditedProduct(editMangaCleaner)
                                history.push('/admin')
                            }}
                                variant="outlined"
                                color="primary">
                                Сохранить
                            </Button>
                        </form>
                    </div>
                ) : (
                    <h2>Loading...</h2>
                )
            }
        </div>
    );
};

export default EditProduct;