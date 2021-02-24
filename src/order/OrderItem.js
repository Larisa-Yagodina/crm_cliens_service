import React, {useState} from 'react';
import {Label, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import OrderDeleteModal from "./OrderDeleteModal";
import OrderUpdateModal from "./OrderUpdateModal";

export default function OrderItem(props) {

    const {order} = props;
    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);
    const [modalUpdate, setModalUpdate] = useState(false);
    const openModalUpdate = () => setModalUpdate(!modalUpdate)
    const [modalDelete, setModalDelete] = useState(false);
    const openModalDelete = () => setModalDelete(!modalDelete);

    return (
        <tr>
            <th scope="row">{order.orderNumber}</th>
            <th scope="row">{order.clientName}</th>
            <td>
                <b>{order.service.job}</b>
                <br/>
                ({order.service.employee})
            </td>
            <td>{order.service.price}</td>
            <td>{order.paid.payment}</td>
            <td>{order.paid.debt}</td>
            <td>{order.service.createAt}</td>
            <td>
                <div>
                    <Label check>
                        In progress: {order.sentToDo.status ? '✓' : null}
                    </Label>
                </div>
                <div>
                    <Label check>
                        Job completed: {order.completed.status ? '✓' : null}
                    </Label>
                </div>
                <div>
                    <Label check>
                        Say to client: {order.sayToClient.status ? '✓' : null}
                    </Label>
                </div>

                <div>
                    <Label check>
                        Client received: {order.clientReceived.status ? '✓' : null}
                    </Label>
                </div>

                <div>
                    <Label check>
                        Paid: {order.paid.status ? '✓' : null}
                    </Label>
                </div>
            </td>
            <td>
                <div>
                    <Label check>
                        {order.sentToDo.date}
                    </Label>
                </div>
                <div>
                    <Label check>
                        {order.completed.date}
                    </Label>
                </div>
                <div>
                    <Label check>
                        {order.sayToClient.date}
                    </Label>
                </div>

                <div>
                    <Label check>
                        {order.clientReceived.date}
                    </Label>
                </div>

                <div>
                    <Label check>
                        {order.paid.date}
                    </Label>
                </div>
            </td>

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
                <OrderUpdateModal
                    order={order}
                    modal={modalUpdate}
                    setModal={setModalUpdate}
                    updateOrder={props.updateOrder}
                />
                <OrderDeleteModal
                    deleteOrder={props.deleteOrder}
                    order={order}
                    modal={modalDelete}
                    setModal={setModalDelete}
                />
            </td>
        </tr>
    )
}