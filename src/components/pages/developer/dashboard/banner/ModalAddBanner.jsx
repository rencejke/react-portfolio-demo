import React from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import { Formik, Form } from 'formik'
import { InputText, InputTextArea } from '../../../../helpers/FormInputs'
import SpinnerButton from '../../../../partials/spinners/SpinnerButton'
import { setError, setIsAdd, setMessage, setSuccess } from '../../../../../store/StoreAction'
import { StoreContext } from '../../../../../store/StoreContext'
import * as Yup from 'yup'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { queryData } from '../../../../helpers/queryData'
import ModalWrapper from '../../../../partials/ModalWrapper'

const ModalAddBanner = ({itemEdit}) => {
    const {store, dispatch} = React.useContext(StoreContext)
    const handleClose = () => dispatch(setIsAdd(false));

    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (values) =>
        queryData(
            itemEdit ? `/v1/banner/${itemEdit.banner_aid}` :`/v1/banner`,
            itemEdit ? "put" : "post",
            values
        ),
   
        onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["banner"] });
        if (data.success) {
            dispatch(setIsAdd(false));
            dispatch(setSuccess(true));
            dispatch(setMessage(`Successfuly updated.`));
        } else {
            dispatch(setError(true));
            dispatch(setMessage(data.error));
        } 
        },
    });

    
     const initVal  = {
          banner_title_1 : itemEdit ? itemEdit.banner_title_1 : "",
          banner_title_2 : itemEdit ? itemEdit.banner_title_2 : "",
          banner_image : itemEdit ? itemEdit.banner_image : "",
          banner_description : itemEdit ? itemEdit.banner_description : "", 
          banner_btn_title : itemEdit ? itemEdit.banner_btn_title : "",
        
     }
       

     const yupSchema = Yup.object({
       
        banner_title_1: Yup.string().required("Required"),
        banner_title_2: Yup.string().required("Required"),
        banner_image: Yup.string().required("Required"),
        banner_description: Yup.string().required("Required"),
        banner_btn_title: Yup.string().required("Required"),
        

     })


  return (
    <div>
      <ModalWrapper>
      <div className="main-modal w-[300px] bg-secondary text-content h-full">
                <div className="modal-header p-4 relative">
                    <h2>New Student</h2>
                    <button className='absolute top-[25px] right-4' onClick={handleClose}><LiaTimesSolid/></button>
                </div>
                <div className="modal-body p-4">
                    <Formik
                        initialValues={initVal}
                        validationSchema={yupSchema}
                        onSubmit={async (values) => {
                            mutation.mutate(values)
                        }}
                    >
                        {(props) => {
                            return (
                            <Form  className='flex flex-col h-[calc(100vh-110px)]'>
                        <div className='grow overflow-y-auto'>
                            
                        <div className="input-wrap">
                            <InputText
                                label="Title 1"
                                type="text"
                                name="banner_title_1"
                            />
                        </div>

                        <div className="input-wrap">
                            <InputText
                                label="Title 2"
                                type="text"
                                name="banner_title_2"
                            />
                        </div>
                                
                                {/* edit here */}
                       

                        <div className="input-wrap">
                        <InputText
                                label="Image"
                                type="text"
                                name="banner_image"
                            />
                        </div>

                        <div className="input-wrap">
                        <InputTextArea
                                label="Description"
                                type="text"
                                name="banner_description"
                                className='h-[10rem] resize-none'
                            />
                        </div>

                        <div className="input-wrap">
                        <InputText
                                label="Button Title"
                                type="text"
                                name="banner_btn_title"
                            />
                        </div>

                        </div>

                        <div className='form-action'>
                            <button className='btn btn-form btn--accent' type="submit"> {mutation.isPending ? <SpinnerButton/> : "Add"}</button>
                            <button className='btn btn-form btn--cancel' type="button" onClick={handleClose} >Cancel</button>
                        </div>
                    </Form>)}}
                    
                    </Formik>
                </div>
        </div>
    </ModalWrapper>
    </div>
  )
}

export default ModalAddBanner
