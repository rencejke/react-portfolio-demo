import React from 'react'
import TableLoader from '../../../../partials/TableLoader'
import NoData from '../../../../partials/NoData'
import { LiaEdit, LiaHistorySolid, LiaTrashAltSolid } from 'react-icons/lia'
import { PiArchive } from 'react-icons/pi'
import SpinnerFetching from '../../../../partials/spinners/SpinnerFetching'
import { StoreContext } from '../../../../../store/StoreContext'
import { setIsActive, setIsAdd, setIsDelete } from '../../../../../store/StoreAction'
import ModalServicesConfirmed from '../../../../partials/modalServices/ModalServicesConfirmed'
import ModalDeleteServices from '../../../../partials/modalServices/ModalDeleteServices'

const ServicesTable = ({setItemEdit, isLoading, isFetching, services}) => {
    const {store, dispatch} = React.useContext(StoreContext)
    const [isArchiving, setIsArchiving] = React.useState(0);
    const [id, setId] = React.useState('');

   

    let counter = 1;

    const handleEdit = (item) => {
        dispatch(setIsAdd(true));
        setItemEdit(item);
    }

    // archive is here
    const handleActive = (item) => {
        dispatch(setIsActive(true));
        setId(item.services_aid);
        setIsArchiving(0);
    }
    const handleRestore = (item) => {
        dispatch(setIsActive(true));
        setId(item.services_aid);
        setIsArchiving(1);
    }

    const handleDelete = (item) => {
        dispatch(setIsDelete(true));
        setId(item.services_aid);
    }

  return (
    <>
          <div className="table-wrapper relative overflow-y-scroll h-[600px]">
        {isFetching && <SpinnerFetching/>}
                    <table>
                        <thead className='sticky top-0 relative z-10 bg-primary'>
                            <tr>
                                <th className='w-[20px]'>#</th>
                                <th className='w-[80px]'>Type</th>
                                <th className='w-[80px]'>Image</th>
                                <th className='w-[80px]'>Description</th>
                                <th className='w-[80px]'>Button Title</th>
                                <th className='w-[120px]'>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                        {isLoading && ( 
                <tr>
                    <td colSpan={9}>
                        <TableLoader count="20" cols="4"/>
                    </td>
                </tr>)
                }

                {services?.data.length === 0 && (
                    <tr>
                        <td colSpan={9}>
                            <NoData/>
                        </td>
                    </tr>
                )}
                    {services?.data.map((item, key) => (
                        <tr key={key}>
                        <td>{counter++}</td>
                        <td>{item.services_type}</td>
                        <td>{item.services_image}</td>
                        <td>{item.services_description}</td>
                        <td>{item.services_btn_title}</td>
                        
                        
                        <td className='table-action'>
                        <ul>
                            {item.services_is_active ? (
                                <>
                                    <li><button className="tooltip" data-tooltip="Edit" onClick={()=>handleEdit(item)}><LiaEdit/></button></li>
                                    <li><button className="tooltip" data-tooltip="Archive" onClick={()=>handleActive(item)}><PiArchive /></button></li>
                                </>
                            ) : (
                                <>
                                <li><button className="tooltip" data-tooltip="Restore" onClick={()=>handleRestore(item)}><LiaHistorySolid/></button></li>
                                <li><button className="tooltip" data-tooltip="Delete" onClick={()=>handleDelete(item)} ><LiaTrashAltSolid/></button></li></>
                            )}
                        </ul>
                        </td>
                    </tr>
                    ))}
                        
                   

                        </tbody>
                    </table>
                </div>

                {store.isActive && <ModalServicesConfirmed position="center"  queryKey="services" endpoint={`/v1/services/active/${id}`} isArchiving={isArchiving}/>}

                {store.isDelete && <ModalDeleteServices position="center"  queryKey="services" endpoint={`/v1/services/${id}`} />} 
    </>
  )
}

export default ServicesTable
