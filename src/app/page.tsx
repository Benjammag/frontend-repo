import NavBar from "../components/NavBar";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import Contents from "@/components/Contents";

const userData = [
  { date: "May 1, 2023, 9:00AM", id: "7GJ17321HASD....1313", customer: "Owolu Opeyemi", amount: 800, status: "Success" },
  { date: "May 1, 2023, 9:00AM", id: "7GJ17321HASD....1313", customer: "Owolu Opeyemi", amount: 800, status: "Success" },
  { date: "May 1, 2023, 9:00AM", id: "7GJ17321HASD....1313", customer: "Owolu Opeyemi", amount: 800, status: "Success" },
  { date: "May 1, 2023, 9:00AM", id: "7GJ17321HASD....1313", customer: "Owolu Opeyemi", amount: 800, status: "Success" },
  { date: "May 1, 2023, 9:00AM", id: "7GJ17321HASD....1313", customer: "Owolu Opeyemi", amount: 800, status: "Success" },
  { date: "May 1, 2023, 9:00AM", id: "7GJ17321HASD....1313", customer: "Owolu Opeyemi", amount: 800, status: "Success" },
  { date: "May 1, 2023, 9:00AM", id: "7GJ17321HASD....1313", customer: "Owolu Opeyemi", amount: 800, status: "Success" },
  { date: "May 1, 2023, 9:00AM", id: "7GJ17321HASD....1313", customer: "Owolu Opeyemi", amount: 800, status: "Success" },
  { date: "May 1, 2023, 9:00AM", id: "7GJ17321HASD....1313", customer: "Owolu Opeyemi", amount: 800, status: "Success" },
  { date: "May 1, 2023, 9:00AM", id: "7GJ17321HASD....1313", customer: "Owolu Opeyemi", amount: 800, status: "Success" },
  { date: "May 1, 2023, 9:00AM", id: "7GJ17321HASD....1313", customer: "Owolu Opeyemi", amount: 800, status: "Success" },
  { date: "May 1, 2023, 9:00AM", id: "7GJ17321HASD....1313", customer: "Owolu Opeyemi", amount: 800, status: "Success" },
  { date: "May 1, 2023, 9:00AM", id: "7GJ17321HASD....1313", customer: "Owolu Opeyemi", amount: 800, status: "Success" },
  { date: "May 1, 2023, 9:00AM", id: "7GJ17321HASD....1313", customer: "Owolu Opeyemi", amount: 800, status: "Success" },
  { date: "May 1, 2023, 9:00AM", id: "7GJ17321HASD....1313", customer: "Owolu Opeyemi", amount: 800, status: "Success" },
  { date: "May 1, 2023, 9:00AM", id: "7GJ17321HASD....1313", customer: "Owolu Opeyemi", amount: 800, status: "Success" },
  { date: "May 1, 2023, 9:00AM", id: "7GJ17321HASD....1313", customer: "Owolu Opeyemi", amount: 800, status: "Success" },
  { date: "May 1, 2023, 9:00AM", id: "7GJ17321HASD....1313", customer: "Owolu Opeyemi", amount: 800, status: "Success" },
  { date: "May 1, 2023, 9:00AM", id: "7GJ17321HASD....1313", customer: "Owolu Opeyemi", amount: 800, status: "Success" },

];

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <div className="font-bold">Payments</div>
      <div className="">
        <div className="mt-5 flex items-center w-full">
          <div className="flex items-center w-[70%]">Transaction History</div>
          <div className="flex items-center w-[30%]">
            <ul className='flex items-center gap-[4vw]'>
              <li className="border rounded"><a className='hover:text-gray-500' href=""><div className="flex items-center w-1/2"><span><Icon icon="ic:round-add" /></span> <span className="pl-2 whitespace-nowrap">Add Payment</span></div></a></li>
              <li className="border rounded"><a className='hover:text-gray-500' href=""><div className="flex items-center w-1/2 ml-2"><span><Icon icon="ic:outline-cloud-download" /></span><span className="pl-1">Export</span></div></a></li>
            </ul>
          </div>
        </div>
      </div>
      <NavBar />
      <Contents data={userData} />
    </div>
  );
}
