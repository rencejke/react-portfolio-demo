import React from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import { Formik, Form } from 'formik'
import { InputText } from '../../../../helpers/FormInputs'
import SpinnerButton from '../../../../partials/spinners/SpinnerButton'
import { setError, setIsAdd, setMessage, setSuccess } from '../../../../../store/StoreAction'
import { StoreContext } from '../../../../../store/StoreContext'
import * as Yup from 'yup'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { queryData } from '../../../../helpers/queryData'
import ModalWrapper from '../../../../partials/ModalWrapper'

const ModalAddExp = ({itemEdit}) => {
    const {store, dispatch} = React.useContext(StoreContext)
    const handleClose = () => dispatch(setIsAdd(false));

    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (values) =>
        queryData(
            itemEdit ? `/v1/exp/${itemEdit.exp_aid}` :`/v1/exp`,
            itemEdit ? "put" : "post",
            values
        ),
   
        onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["exp"] });
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
          exp_image : itemEdit ? itemEdit.exp_image : "",
          exp_image_animation : itemEdit ? itemEdit.exp_image_animation : "",
     }
       

     const yupSchema = Yup.object({
        exp_image: Yup.string().required("Required"),
        exp_image_animation: Yup.string().required("Required"),
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
          
                                {/* edit here */}

                        <div className="input-wrap">
                        <InputText
                                label="Image"
                                type="text"
                                name="exp_image"
                            />
                        </div>

                        <div className="input-wrap">
                        <InputText
                                label="Animation"
                                type="text"
                                name="exp_image_animation"
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

export default ModalAddExp