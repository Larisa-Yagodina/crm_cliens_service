import React, {useState} from 'react';
import {ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import ServiceDeleteModal from "./ServiceDeleteModal";
import ServiceUpdateModal from "./ServiseUpdateModal";

export default function ServicesItem(props) {

    const {job} = props;
    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);
    const [modalUpdate, setModalUpdate] = useState(false);
    const openModalUpdate = () => setModalUpdate(!modalUpdate)
    const [modalDelete, setModalDelete] = useState(false);
    const openModalDelete = () => setModalDelete(!modalDelete)

    return (
        <tr>
            <th scope="row">{job.job}</th>
            <td>{job.price}</td>
            <td>{job.employee}</td>
            <td>{job.primeCost}</td>
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
                <ServiceUpdateModal
                    job={job}
                    modal={modalUpdate}
                    setModal={setModalUpdate}
                    updateJob={props.updateJob}
                />
                <ServiceDeleteModal
                    job={job}
                    modal={modalDelete}
                    setModal={setModalDelete}
                    deleteJob={props.deleteJob}
                />
            </td>
        </tr>
    )
}