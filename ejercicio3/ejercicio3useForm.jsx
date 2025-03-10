import React from 'react';
import { useForm } from 'react-hook-form';

const FormularioDeContacto = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log('Formulario enviado:', data);
    reset();
  };

  return (
    <div>
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            {...register('nombre', { required: true })} 
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            {...register('email', { required: true })} 
            required
          />
        </div>
        <div>
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            {...register('mensaje', { required: true })}
            required
          />
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default FormularioDeContacto;
