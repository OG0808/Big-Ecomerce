import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './checkout.css'

const validationSchema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  age: yup.number().positive('Age must be a positive number').integer('Age must be an integer').required('Age is required'),
});



const Checkout = () => {
  const { register, handleSubmit, formState: { errors }, control } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
   <section>

   
  <form onSubmit={handleSubmit(onSubmit)} className='formulario'>
      <div>
        <label>First Name:</label>
        <input {...register('firstName')} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>

      <div>
        <label>Last Name:</label>
        <input {...register('lastName')} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Age:</label>
        <Controller
          control={control}
          name="age"
          render={({ field }) => (
            <input {...field} />
          )}
        />
        {errors.age && <p>{errors.age.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
    </section>
 
  );
}

export default Checkout;
