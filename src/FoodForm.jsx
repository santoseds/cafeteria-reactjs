import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as formik from 'formik';
import * as yup from 'yup';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import useFoodContext from './hook/useFoodContext';

export function FoodForm(){
    const {selectedFood, showFoodForm, toggleFoodForm, typeFoodForm, handleSubmitFoodForm} = useFoodContext();
    
    const { Formik } = formik;
    const schema = yup.object().shape({
        name: yup.string().required('Preencher campo').typeError('Escrever texto').min(2, 'Duas letras no mínimo'),
        image: yup.string().url('Endereço inválido').required('Preencher campo').typeError('Escrever url da imagem')
    })
    
    return(
        <>
        <Modal show={showFoodForm} onHide={toggleFoodForm}>
          <Modal.Header closeButton>
            <Modal.Title as="h5">
              {typeFoodForm === 'create'? 'New' : 'Update'} Food
            </Modal.Title>
          </Modal.Header>
        <Formik
          validationSchema={schema}
          onSubmit={handleSubmitFoodForm}
          initialValues={{
            name: selectedFood.name,
            image: selectedFood.image
          }}
          enableReinitialize = {true}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Modal.Body>
                <Form.Group controlId="formFoodName">
                  <Form.Label>Name:</Form.Label>
                  <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    name="name"
                    value={values.name}
                    placeholder="Hamburger"
                    onChange={handleChange}
                    isValid={touched.name && !errors.name}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group controlId="formFoodImage">
                  <Form.Label>Image:</Form.Label>
                  <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    name="image"
                    placeholder="http://www.example.com/image/"
                    value={values.image}
                    onChange={handleChange}
                    isValid={touched.image && !errors.image}
                    isInvalid={!!errors.image}  
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.image}
                  </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={toggleFoodForm}>
                      Close
                </Button>
                <Button type="submit">
                  {typeFoodForm === 'create'? 'Create' : 'Update'}
                </Button>
              </Modal.Footer>
            </Form>)}
          </Formik>
        </Modal>
      </>
    )
}
