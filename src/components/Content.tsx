"use client"

import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useState } from 'react'
import Modal from '../components/Modal';

const Content = () => {

    const [open, setOpen] = useState<boolean>(false);
    return (
        <div>
            <br />
            <table className="min-w-full border-collapse border border-gray-400">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2"><Icon icon="system-uicons:checkbox-empty" /></th>
                        <th className="border border-gray-300 px-4 py-2">Date Created</th>
                        <th className="border border-gray-300 px-4 py-2">Transaction ID</th>
                        <th className="border border-gray-300 px-4 py-2">Customer</th>
                        <th className="border border-gray-300 px-4 py-2">Amount</th>
                        <th className="border border-gray-300 px-4 py-2 flex justify-center"><span>Status</span><span className='pt-1'><Icon icon="akar-icons:arrow-down" /></span></th>
                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2 center"><Icon icon="system-uicons:checkbox-empty" /></td>
                        <td className="border border-gray-300 px-4 py-2 text-center">May 1, 2023, 9:00AM</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">7GJ17321HASD....1313</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Owolu Opeyemi</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">800</td>
                        <td className="border border-gray-300 px-4 py-2 text-green-600 text-center">Success</td>
                        <td className="border border-gray-300 px-4 py-3 flex justify-center"><span className='pr-1'><Icon icon="weui:eyes-on-outlined" /></span>
                            <span><button
                                className='' onClick={() => setOpen(true)}><Icon icon="ic:outline-cloud-download" /></button></span></td>
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
                            </table>
                        </Modal>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2 center"><Icon icon="system-uicons:checkbox-empty" /></td>
                        <td className="border border-gray-300 px-4 py-2 text-center">May 1, 2023, 9:00AM</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">7GJ17321HASD....1313</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Owolu Opeyemi</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">800</td>
                        <td className="border border-gray-300 px-4 py-2 text-green-600 text-center">Success</td>
                        <td className="border border-gray-300 px-4 py-3 flex justify-center"><span className='pr-1'><Icon icon="weui:eyes-on-outlined" /></span><span><Icon icon="ic:outline-cloud-download" /></span></td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2 center"><Icon icon="system-uicons:checkbox-empty" /></td>
                        <td className="border border-gray-300 px-4 py-2 text-center">May 1, 2023, 9:00AM</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">7GJ17321HASD....1313</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Owolu Opeyemi</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">800</td>
                        <td className="border border-gray-300 px-4 py-2 text-green-600 text-center">Success</td>
                        <td className="border border-gray-300 px-4 py-3 flex justify-center"><span className='pr-1'><Icon icon="weui:eyes-on-outlined" /></span><span><Icon icon="ic:outline-cloud-download" /></span></td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2 center"><Icon icon="system-uicons:checkbox-empty" /></td>
                        <td className="border border-gray-300 px-4 py-2 text-center">May 1, 2023, 9:00AM</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">7GJ17321HASD....1313</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Owolu Opeyemi</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">800</td>
                        <td className="border border-gray-300 px-4 py-2 text-green-600 text-center">Success</td>
                        <td className="border border-gray-300 px-4 py-3 flex justify-center"><span className='pr-1'><Icon icon="weui:eyes-on-outlined" /></span><span><Icon icon="ic:outline-cloud-download" /></span></td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2 center"><Icon icon="system-uicons:checkbox-empty" /></td>
                        <td className="border border-gray-300 px-4 py-2 text-center">May 1, 2023, 9:00AM</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">7GJ17321HASD....1313</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Owolu Opeyemi</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">800</td>
                        <td className="border border-gray-300 px-4 py-2 text-green-600 text-center">Success</td>
                        <td className="border border-gray-300 px-4 py-3 flex justify-center"><span className='pr-1'><Icon icon="weui:eyes-on-outlined" /></span><span><Icon icon="ic:outline-cloud-download" /></span></td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2 center"><Icon icon="system-uicons:checkbox-empty" /></td>
                        <td className="border border-gray-300 px-4 py-2 text-center">May 1, 2023, 9:00AM</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">7GJ17321HASD....1313</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Owolu Opeyemi</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">800</td>
                        <td className="border border-gray-300 px-4 py-2 text-green-600 text-center">Success</td>
                        <td className="border border-gray-300 px-4 py-3 flex justify-center"><span className='pr-1'><Icon icon="weui:eyes-on-outlined" /></span><span><Icon icon="ic:outline-cloud-download" /></span></td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2 center"><Icon icon="system-uicons:checkbox-empty" /></td>
                        <td className="border border-gray-300 px-4 py-2 text-center">May 1, 2023, 9:00AM</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">7GJ17321HASD....1313</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Owolu Opeyemi</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">20,000</td>
                        <td className="border border-gray-300 px-4 py-2 text-red-600 text-center">failed</td>
                        <td className="border border-gray-300 px-4 py-3 flex justify-center"><span className='pr-1'><Icon icon="weui:eyes-on-outlined" /></span><span><Icon icon="ic:outline-cloud-download" /></span></td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2 center"><Icon icon="system-uicons:checkbox-empty" /></td>
                        <td className="border border-gray-300 px-4 py-2 text-center">May 1, 2023, 9:00AM</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">7GJ17321HASD....1313</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Owolu Opeyemi</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">50,000</td>
                        <td className="border border-gray-300 px-4 py-2 text-green-600 text-center">Success</td>
                        <td className="border border-gray-300 px-4 py-3 flex justify-center"><span className='pr-1'><Icon icon="weui:eyes-on-outlined" /></span><span><Icon icon="ic:outline-cloud-download" /></span></td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2 center"><Icon icon="system-uicons:checkbox-empty" /></td>
                        <td className="border border-gray-300 px-4 py-2 text-center">May 1, 2023, 9:00AM</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">7GJ17321HASD....1313</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Owolu Opeyemi</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">800</td>
                        <td className="border border-gray-300 px-4 py-2 text-green-600 text-center">Success</td>
                        <td className="border border-gray-300 px-4 py-3 flex justify-center"><span className='pr-1'><Icon icon="weui:eyes-on-outlined" /></span><span><Icon icon="ic:outline-cloud-download" /></span></td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2 center"><Icon icon="system-uicons:checkbox-empty" /></td>
                        <td className="border border-gray-300 px-4 py-2 text-center">May 1, 2023, 9:00AM</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">7GJ17321HASD....1313</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Owolu Opeyemi</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">800</td>
                        <td className="border border-gray-300 px-4 py-2 text-green-600 text-center">Success</td>
                        <td className="border border-gray-300 px-4 py-3 flex justify-center"><span className='pr-1'><Icon icon="weui:eyes-on-outlined" /></span><span><Icon icon="ic:outline-cloud-download" /></span></td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2 center"><Icon icon="system-uicons:checkbox-empty" /></td>
                        <td className="border border-gray-300 px-4 py-2 text-center">May 1, 2023, 9:00AM</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">7GJ17321HASD....1313</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Owolu Opeyemi</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">500,000</td>
                        <td className="border border-gray-300 px-4 py-2 text-green-600 text-center">Success</td>
                        <td className="border border-gray-300 px-4 py-3 flex justify-center"><span className='pr-1'><Icon icon="weui:eyes-on-outlined" /></span><span><Icon icon="ic:outline-cloud-download" /></span></td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2 center"><Icon icon="system-uicons:checkbox-empty" /></td>
                        <td className="border border-gray-300 px-4 py-2 text-center">May 1, 2023, 9:00AM</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">7GJ17321HASD....1313</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Owolu Opeyemi</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">800</td>
                        <td className="border border-gray-300 px-4 py-2 text-green-600 text-center">Success</td>
                        <td className="border border-gray-300 px-4 py-3 flex justify-center"><span className='pr-1'><Icon icon="weui:eyes-on-outlined" /></span><span><Icon icon="ic:outline-cloud-download" /></span></td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2 center"><Icon icon="system-uicons:checkbox-empty" /></td>
                        <td className="border border-gray-300 px-4 py-2 text-center">May 1, 2023, 9:00AM</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">7GJ17321HASD....1313</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Owolu Opeyemi</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">800</td>
                        <td className="border border-gray-300 px-4 py-2 text-green-600 text-center">Success</td>
                        <td className="border border-gray-300 px-4 py-3 flex justify-center"><span className='pr-1'><Icon icon="weui:eyes-on-outlined" /></span><span><Icon icon="ic:outline-cloud-download" /></span></td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2 center"><Icon icon="system-uicons:checkbox-empty" /></td>
                        <td className="border border-gray-300 px-4 py-2 text-center">May 1, 2023, 9:00AM</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">7GJ17321HASD....1313</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Owolu Opeyemi</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">800</td>
                        <td className="border border-gray-300 px-4 py-2 text-green-600 text-center">Success</td>
                        <td className="border border-gray-300 px-4 py-3 flex justify-center"><span className='pr-1'><Icon icon="weui:eyes-on-outlined" /></span><span><Icon icon="ic:outline-cloud-download" /></span></td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2 center"><Icon icon="system-uicons:checkbox-empty" /></td>
                        <td className="border border-gray-300 px-4 py-2 text-center">May 1, 2023, 9:00AM</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">7GJ17321HASD....1313</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Owolu Opeyemi</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">800</td>
                        <td className="border border-gray-300 px-4 py-2 text-red-600 text-center">Failed</td>
                        <td className="border border-gray-300 px-4 py-3 flex justify-center"><span className='pr-1'><Icon icon="weui:eyes-on-outlined" /></span><span><Icon icon="ic:outline-cloud-download" /></span></td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2 center"><Icon icon="system-uicons:checkbox-empty" /></td>
                        <td className="border border-gray-300 px-4 py-2 text-center">May 1, 2023, 9:00AM</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">7GJ17321HASD....1313</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Owolu Opeyemi</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">800</td>
                        <td className="border border-gray-300 px-4 py-2 text-green-600 text-center">Success</td>
                        <td className="border border-gray-300 px-4 py-3 flex justify-center"><span className='pr-1'><Icon icon="weui:eyes-on-outlined" /></span><span><Icon icon="ic:outline-cloud-download" /></span></td>
                    </tr>
                </tbody>
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
    )
}

export default Content