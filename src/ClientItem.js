import React, {useState} from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ClientUpdateModal from "./ClientEditModal";



export default function ClientItem(props) {


    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);
    const [modalUpdate, setModalUpdate] = useState(false);
    const openModalUpdate = () => setModalUpdate(!modalUpdate)

    console.log(modalUpdate)

    const { client } = props;

    return (
        <tr>
            <th scope="row">{client.name}</th>
            <td>{client.address}</td>
            <td>{client.phoneNumber}</td>
            <td>{client.createAt}</td>
            <td>
                <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle outline color="secondary" caret>
                        {''}
                    </DropdownToggle>
                    <DropdownMenu container="body">
                        <DropdownItem onClick={openModalUpdate}>Update</DropdownItem>
                        <DropdownItem>Delete</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
                <ClientUpdateModal
                    client={client}
                    modal={modalUpdate}
                    setModal={setModalUpdate}
                    updateClient={props.updateClient}
                />
            </td>
        </tr>
    )
}

