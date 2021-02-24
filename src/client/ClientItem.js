import React, {useState} from 'react';
import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import ClientUpdateModal from "./ClientEditModal";
import ClientDeleteModal from "./ClientDeleteModal";


export default function ClientItem(props) {


    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);
    const [modalUpdate, setModalUpdate] = useState(false);
    const openModalUpdate = () => setModalUpdate(!modalUpdate)
    const [modalDelete, setModalDelete] = useState(false);
    const openModalDelete = () => setModalDelete(!modalDelete)

    const {client} = props;

    return (
        <tr>
            <th scope="row">{client.name}</th>
            <td>{client.address}</td>
            <td>{client.phoneNumber ? '+' : null}{client.phoneNumber}</td>
            <td>{client.createAt}</td>
            <td>
                <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle outline color="secondary" caret>
                        {''}
                    </DropdownToggle>
                    <DropdownMenu container="body">
                        <DropdownItem onClick={openModalUpdate}>Update</DropdownItem>
                        <DropdownItem onClick={openModalDelete}>Delete</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
                <ClientUpdateModal
                    client={client}
                    modal={modalUpdate}
                    setModal={setModalUpdate}
                    updateClient={props.updateClient}
                />
                <ClientDeleteModal
                    client={client}
                    modal={modalDelete}
                    setModal={setModalDelete}
                    deleteClient={props.deleteClient}
                />
            </td>
        </tr>
    )
}

