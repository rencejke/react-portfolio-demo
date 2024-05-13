import React from 'react'
import { setError, setIsAdd, setMessage, setSuccess } from '../../../../../store/StoreAction'
import { StoreContext } from '../../../../../store/StoreContext'
import * as Yup from 'yup'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { queryData } from '../../../../helpers/queryData'
import { Formik, Form, useFormik } from 'formik'
import { InputText, InputTextArea } from '../../../../helpers/FormInputs'
import SpinnerButton from '../../../../partials/spinners/SpinnerButton'

const UiContact = () => {
  const {store, dispatch} = React.useContext(StoreContext)
  
  const queryClient = useQueryClient();
  const mutation = useMutation({
      mutationFn: (values) =>
      queryData(
          "/v1/contact",
          "post",
          values
      ),
 
      onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["contact"] });
      if (data.success) {
          dispatch(setSuccess(true));
          dispatch(setMessage(`Successfuly updated.`));
      } else {
          dispatch(setError(true));
          dispatch(setMessage(data.error));
      } 
      },
  });

  
   const initVal  = {
        contact_name : "",
        contact_email : "",
        contact_subject :"",
        contact_message : "", 
      
   }



   const yupSchema = Yup.object({
     
      contact_name: Yup.string().required("Required"),
      contact_email: Yup.string().required("Required").email("Invalid Email"),
      contact_subject: Yup.string().required("Required"),
      contact_message: Yup.string().required("Required"),

      

   })

  return (
    <div className='bg-[#222831] text-white'>
    <section className='contact p-12 mx-auto w-[50%] '>
    <div className="container bg-[#76ABAE] p-12 rounded-xl">
    <h4 className='text-[1.5rem] font-thicker uppercase mb-8'>Get in Touch</h4>
      <div className="wrapper">
     
        
       <Formik
           initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values) => {
              mutation.mutate(values)
          }}
       >

{(props) => {
   return (

    <Form>
      
      <div  className=' grid grid-cols-2 gap-2 mb-2'>
          <div className='flex flex-col'>
          <InputText 
             
             label="Name"
             type="text"
             name="contact_name"
             placeholder="Enter your Name"

          />
          </div>

          <div className='flex flex-col'>
          <InputText 
             
             label="Email"
             type="email"
             name="contact_email"
             placeholder="Enter your Email"

          />
          </div>
          </div>

          <div className='flex flex-col mb-2'>
          <InputText
             
             label="Subject"
             type="text"
             name="contact_subject"
             placeholder="Enter a Subject"

          />
          </div>

          <div className='flex flex-col mb-2'>
          <InputTextArea
             
             label="Message"
             type="text"
             name="contact_message"
             placeholder="Message"

          />
          </div>
         <div className='text-center'>
         <button className='btn bg-black mt-6 px-6 text-white' 
        

          
         type='submit'>{mutation.isPending ? <SpinnerButton/> : "Submit"} </button>
         </div>
      </Form>)}}
       </Formik> 
        



      </div>
    </div>

  </section>
  {/* <Footer /> */}
     

    </div>
  )
}

export default UiContact