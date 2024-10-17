"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import Modal from "./Modal";
// Define the type for each data item
interface User {
    date: string;
    id: string;
    customer: string;
    amount: number;
    status: string;
}

// Define the props type for the table component if needed
interface TableComponentProps {
    data: User[];
}

const Contents: React.FC<TableComponentProps> = ({ data }) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div className="overflow-x-auto pt-4">
            <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2"><Icon icon="system-uicons:checkbox-empty" /></td>
                        <th className="border border-gray-300 px-4 py-2 text-center">Date Created</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Customer</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Amount</th>
                        <th className="border border-gray-300 px-4 py-2 text-left flex justify-center"><span>Status</span><span className='pt-1'><Icon icon="akar-icons:arrow-down" /></span></th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Action</th>
                    </tr>
                </thead>
                <thead>
                    {data.map((user) => (
                        <tr key={user.id}>
                            <td className="border border-none px-4 py-2 text-center"><Icon icon="system-uicons:checkbox-empty" /></td>
                            <td className="border border-none px-4 py-2 text-center">{user.id}</td>
                            <td className="border border-none px-4 py-2 text-center">{user.customer}</td>
                            <td className="border border-none px-4 py-2 text-center">{user.amount}</td>
                            <td className="border border-none px-4 py-2 text-center text-green-600">{user.status}</td>
                            <td className="border border-none px-4 py-2 justify-center flex"><span className="pt-1"><Icon icon="weui:eyes-on-outlined" /></span><button
                                className='' onClick={() => setOpen(true)}><Icon icon="ic:outline-cloud-download" /></button></td>
                            <Modal open={open} onClose={() => setOpen(false)}>
                                <h1>Transaction Details</h1>
                                <table className="min-w-full border-collapse border-none">
                                    <thead>
                                        <tr>
                                            <th className="border border-none px-4 py-2">Date Created</th>
                                            <th className="border border-none px-4 py-2">Transaction ID</th>
                                            <th className="border border-none px-4 py-2">Customer</th>
                                        </tr>
                                    </thead>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet asperiores consectetur quaerat ea iusto, esse eum voluptates inventore, magnam ipsum saepe nesciunt necessitatibus nihil, ratione autem doloribus! Corrupti, error delectus!</p>

                                </table>
                            </Modal>
                        </tr>
                    ))}
                </thead>
            </table>
            <div className='flex justify-between w-full pt-4'>
                <span className='border flex left'>
                    <span className='pt-1'><Icon icon="ooui:arrow-previous-ltr" /></span><span>Previous</span>
                </span>
                <span className='border flex right'>
                    <span>Next</span><span className='pt-1'><Icon icon="ooui:arrow-previous-rtl" /></span>
                </span>
            </div>
        </div>
    );
};

export default Contents;
