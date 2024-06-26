import React from 'react'
import TableLoader from '../../../../partials/TableLoader'
import NoData from '../../../../partials/NoData'
import { LiaEdit, LiaHistorySolid, LiaTrashAltSolid } from 'react-icons/lia'
import { PiArchive } from 'react-icons/pi'
import SpinnerFetching from '../../../../partials/spinners/SpinnerFetching'
import ModalDelete from '../../../../partials/modals/ModalDelete'
import { StoreContext } from '../../../../../store/StoreContext'
import { setIsActive, setIsAdd, setIsDelete } from '../../../../../store/StoreAction'
import ModalConfirmed from '../../../../partials/modals/ModalConfirmed'


const AboutTable = ({setItemEdit, isLoading, isFetching, about}) => {
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
        setId(item.about_aid);
        setIsArchiving(0);
    }
    const handleRestore = (item) => {
        dispatch(setIsActive(true));
        setId(item.about_aid);
        setIsArchiving(1);
    }

    const handleDelete = (item) => {
        dispatch(setIsDelete(true));
        setId(item.about_aid);
    }

  return (
    <>
          <div className="table-wrapper relative overflow-y-scroll h-[600px]">
        {isFetching && <SpinnerFetching/>}
                    <table>
                        <thead className='sticky top-0 relative z-10 bg-primary'>
                            <tr>
                                <th className='w-[20px]'>#</th>
                                <th className='w-[150px]'>Title</th>
                                <th className='w-[150px]'>Description 1</th>  
                                <th className='w-[150px]'>Description 2</th>  
                                <th className='w-[80px]'>Image</th>
                                <th className='w-[80px]'>Button Title</th>
                                <th className='w-[100px]'>Action</th>
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

                {about?.data.length === 0 && (
                    <tr>
                        <td colSpan={9}>
                            <NoData/>
                        </td>
                    </tr>
                )}
                    {about?.data.map((item, key) => (
                        <tr key={key}>
                        <td>{counter++}</td>
                        <td>{item.about_title}</td>
                        <td>{item.about_description_1}</td>
                        <td>{item.about_description_2}</td>
                        <td>{item.about_image}</td>
                        <td>{item.about_btn_title}</td>
                        
                        
                        <td className='table-action'>
                        <ul>
                            {item.about_is_active ? (
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

                {store.isActive && <ModalConfirmed position="center"  queryKey="about" endpoint={`/v1/about/active/${id}`} isArchiving={isArchiving}/>}

                {store.isDelete && <ModalDelete position="center"  queryKey="about" endpoint={`/v1/about/${id}`} />} 
    </>
  )
}

export default AboutTable
