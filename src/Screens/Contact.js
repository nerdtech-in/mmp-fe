import React from 'react'
import { Images } from '../Constants/Images'
export default function Contact() {
    const [data, setData] = React.useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        rooms: ''
    })
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div className='bg-[#EEEEEE] mt-20'>
            <img className='object-cover w-full h-[200px] lg:h-[350px]' src={Images.city} />
            <div className='flex flex-col lg:flex-row justify-evenly items-start py-10'>
                <div className='flex flex-wrap justify-evenly items-center w-full lg:w-[60%]'>
                    <input
                        value={data.name}
                        onChange={(text) => {
                            setData({ ...data, name: text.target.value })
                        }}
                        className='w-[92%] outline-none lg:w-[44%]  h-[50px] bg-white rounded-lg mb-2 lg:mb-5 px-2' placeholder='Name' />
                    <input
                        value={data.email}
                        onChange={(text) => {
                            setData({ ...data, email: text.target.value })
                        }}
                        className='w-[92%] outline-none lg:w-[44%] h-[50px] bg-white rounded-lg mb-2 lg:mb-5 px-2' placeholder='Email' />
                    <input value={data.phone}
                        onChange={(text) => {
                            setData({ ...data, phone: text.target.value })
                        }} className='w-[92%] outline-none lg:w-[44%] h-[50px] bg-white rounded-lg mb-2 lg:mb-5 px-2' placeholder='Phone' />
                    <select value={data.rooms}
                        onChange={(text) => {
                            setData({ ...data, rooms: text.target.value })
                        }} className='w-[92%] outline-none lg:w-[44%] h-[50px] bg-white rounded-lg mb-2 lg:mb-5 px-2'>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                    </select>
                    <textarea value={data.message}
                        onChange={(text) => {
                            setData({ ...data, message: text.target.value })
                        }} className='w-[92%] outline-none lg:w-[92%] h-[100px] px-2 bg-white rounded-lg mb-2 lg:mb-5' placeholder='Message' />
                    <button
                        onClick={() => {
                            console.log(data)
                        }}
                        className='w-[92%] lg:w-[34%] h-[50px] bg-[#5444e4] text-lg rounded-lg text-white font-bold my-5 lg:mb-5 hover:bg-[#5444e490]'>Send Enquiry</button>
                </div>
                <div className='flex flex-col items-center justify-center w-full lg:w-[40%]'>
                    <h1 className='lg:text-4xl w-[88%] text-start text-3xl font-black text-[#5444e4] tracking-widest'>Get In Touch</h1>
                    <p className='text-start w-[88%] mt-5 text-gray-500'>Drop your requirments we will get back to you as soon as possible.</p>
                    <div className='flex flex-row items-start justify-start w-[88%] mt-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        <div className='flex flex-col items-start justify-start ml-2'>
                            <h1 className='text-start font-black text-gray-500'>Drop A Mail</h1>
                            <h3 className='text-start ml-2 text-gray-500'>contact@mmp.com</h3>
                        </div>
                    </div>
                    <div className='flex flex-row items-start justify-start w-[88%] mt-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <div className='flex flex-col items-start justify-start ml-2'>
                            <h1 className='text-start font-black text-gray-500'>Call Us</h1>
                            <h3 className='text-start ml-2 text-gray-500'>+91 9876543210</h3>
                        </div>
                    </div>

                </div>
            </div>
            <div className='flex flex-col items-center self-center justify-center pb-8'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.958146718312!2d73.76152907520806!3d20.010271221979554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb91ba094e0f%3A0x4db062f92da39292!2sKBT%20Circle!5e0!3m2!1sen!2sin!4v1704819032832!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-[95%] self-center  h-[400px] lg:h-[500px]'></iframe>
            </div>
        </div>
    )
}
