// src/components/Manager.jsx

import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const [form, setForm] = useState(() => {
        const savedForm = localStorage.getItem('form');
        return savedForm ? JSON.parse(savedForm) : { site: "", username: "", password: "" };
    });

    const [passwordArray, setPasswordArray] = useState(() => {
        const savedPasswords = localStorage.getItem('passwords');
        return savedPasswords ? JSON.parse(savedPasswords) : [];
    });

    const [passwordVisibility, setPasswordVisibility] = useState('visibility');
    const [errors, setErrors] = useState({ site: "", username: "", password: "" });

    useEffect(() => {
        localStorage.setItem('form', JSON.stringify(form));
    }, [form]);

    useEffect(() => {
        localStorage.setItem('passwords', JSON.stringify(passwordArray));
    }, [passwordArray]);

    const showPassword = () => {
        setPasswordVisibility(prevVisibility =>
            prevVisibility === 'visibility' ? 'visibility_off' : 'visibility'
        );
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };



    const copyText = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                toast.success('Copied !!!', {
                    position: "top-right",
                    autoClose: 2500,
                    hideProgressBar: true,
                    // if you want  the time progress bar to not show write this  hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    };

    const deletePassword = (id) => {
        console.log("Deleting password with id: ", id);
        let confirmation = confirm(`Are you sure you want to delete this password?, This password will be deleted Permanently!`);
        if (confirmation) {
            const updatedPasswordArray = passwordArray.filter((item) => item.id !== id);
            setPasswordArray(updatedPasswordArray);
            toast.success('Password deleted successfully !!!', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: true,
                // if you want  the time progress bar to not show write this  hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };

    const editPassword = (id) => {
        console.log("Editing password with id: ", id);
        const passwordToEdit = passwordArray.find(item => item.id === id);
        setForm(passwordToEdit);

        // Do not remove the password from the list until editing is confirmed
        setPasswordArray(passwordArray.filter(item => item.id !== id));
        toast.success('Password edited successfully !!!', {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: true,
            // if you want  the time progress bar to not show write this  hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };
    const savePassword = () => {
        let newErrors = {};
        if (!form.site) newErrors.site = "Website name cannot be empty";
        if (!form.username) newErrors.username = "Username cannot be empty";
        if (!form.password) newErrors.password = "Password cannot be empty";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const updatedPasswordArray = [...passwordArray, { ...form, id: uuidv4() }];
        localStorage.setItem('passwords', JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]));
        setPasswordArray(updatedPasswordArray);

        toast.success('Password saved successfully!', {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: true,
            // write   hideProgressBar: false, to show progressbar also
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

        setForm({ site: "", username: "", password: "" });
    };

    return (
        <>

            <ToastContainer />
            <div className="absolute top-0 z-[-2] h-[100vh] w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">

            </div>
            <div className=" mx-auto lp:bg-slate-800 p-4 mt-5 lp:px-40 lp:py-16  lp:w-[70%] font-semibold lp:mt-[1%] lp:mb-[1%] md:flex lp:justify-center lp:items-center">
                <h1 className='text-4xl text-center'>
                    <span className='text-[#00ff00]'>&lt;</span>
                    <span>Pass</span>
                    <span className='text-[#00ff00]'> OP</span>
                    <span className='text-[#00ff00]'>/&gt;</span>
                </h1>
                <p className='text-[#3ac43a] text-center text-1xl mb-5'>Your Own Password Manager</p>
                <div className=' text-white flex flex-col md:flex-row p-4 gap-4  w-full md:w-[50%]'>
                    <input
                        value={form.site}
                        onChange={handleChange}
                        placeholder='Enter Website Name'
                        className="rounded-full md:w-full w-[90%] mx-auto border-2 px-5 py-2 mt-2 border-[#00ff00] outline-[#000] flex justify-start items-center lp:py-1 lp:px-5 lp:mt-6 text-black"
                        type="text"
                        name="site"
                    />

                    {errors.site && <p className="text-red-500 text-sm mt-1">{errors.site}</p>}

                    <div className='flex lp:flex-row flex-col justify-evenly gap-4 lp:gap-16 mb-6'>
                        <div className='w-[100%] lp:w-[60%]'>
                            <input
                                value={form.username}
                                onChange={handleChange}
                                placeholder='Enter Username'
                                className="rounded-full  w-[90%] mx-auto border-2 px-5 py-2 mt-2 border-[#00ff00] outline-[#000] flex justify-start items-center lp:py-1 lp:px-5 lp:mt-2 lp:mx-auto  text-black"
                                type="text"
                                name='username'
                                id='username'
                            />
                            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
                        </div>

                        <div className='relative '>
                            <input
                                value={form.password}
                                onChange={handleChange}
                                placeholder='Enter Password'
                                className="rounded-full relative lp:relative w-[90%] mx-auto border-2 px-5 py-2 mt-2 border-[#00ff00] outline-[#000] flex justify-start items-center lp:py-1 lp:px-5 lp:mt-2 lp:mx-auto  text-black"
                                type={passwordVisibility === 'visibility' ? 'password' : 'text'}
                                name='password'
                                id='password'
                            />

                            <span className='absolute lp:absolute top-2.5 right-3 lp:top-2.5 lp:right-0 lp:py-1 lp:px-6 text-[#000] items-center py-2 px-9'>
                                <span className="material-symbols-outlined cursor-pointer" onClick={showPassword}>
                                    {passwordVisibility}
                                </span>
                            </span>

                            {/* <input
                                value={form.password}
                                onChange={handleChange}
                                placeholder='Enter Password'
                                className="rounded-full border-2 text-black border-[#00ff00] outline-[#000] py-1 px-5 w-full"
                                type={passwordVisibility === 'visibility' ? 'text' : 'password'}
                                name='password'
                                id='password'
                            />
                            <span className='absolute right-0 top-1/2 transform -translate-y-1/2 text-[#000] flex items-center pr-3'>
                                <span className="material-symbols-outlined cursor-pointer" onClick={showPassword}>
                                    {passwordVisibility}
                                </span>
                            </span> */}

                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                        </div>
                    </div>

                    <button onClick={savePassword} className='flex justify-center gap-2 font-bold mx-auto text-1.5xl border-2 border-black text-[#000000] bg-[#0bff0b] rounded-full items-center w-fit py-2 px-3 hover:bg-[#00bd00]'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover"
                        >
                        </lord-icon>
                        Save Password
                    </button>
                </div>
            </div>
            <div className="passwordscontainer  w-screen bg-[#00000074] lp:mt-[2%] lp:mb-[1%] pb-[3%] bg-black">
                <div className='yourpasswords inline-flex'>
                    <h2 className='relative flex justify-start items-start bg-slate-900 text-[#000] font-extrabold text-2xl lp:text-3xl pl-[100px] p-[5px]'>Your Passwords</h2>
                    <span className='relative flex justify-start items-center bg-slate-900 text-[white] font-extrabold text-2xl lp:text-3xl pl-[70px] p-[5px]'>
                        <lord-icon className="invert absolute cursor-pointer bg-slate-900 text-[white]"
                            src="https://cdn.lordicon.com/whtfgdfm.json"
                            trigger="hover"
                        >
                        </lord-icon>
                    </span>
                </div>
                <div className="passwordstable lp:w-[80%] w-[100%] lp:mx-auto mx-auto pt-[2%] ">
                    {passwordArray.length === 0 && (
                        <div className="text-white pb-[3%]">No Passwords To show</div>
                    )}
                    {passwordArray.length !== 0 && (
                        <table className="table-auto w-full overflow-hidden ">
                            <thead className="bg-[#00ff00b9] text-white font-bold lp:text-[18px] text-[14px]">
                                <tr>
                                    <th className="rounded-tl-lg lp:py-3 py-2.5 border-r-2 border-b-2 border-[black]">Site</th>
                                    <th className="lp:py-3 py-2.5 border-r-2 border-b-2 border-[black]">Username</th>
                                    <th className="lp:py-3 py-2.5 pr-4 border-r-2 border-b-2 border-[black]">Password</th>
                                    <th className="rounded-tr-lg lp:py-3 py-2.5 border-b-2 border-[black]">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-green-300 text-black">
                                {passwordArray.map((item, index) => (
                                    <tr key={index} className="border-b-2 border-black">
                                        <td className="py-4 text-sm lp:text-lg text-center relative border-r-2 border-black border-b-3 rounded-bl-md">
                                            <a href={item.site} target="_blank" rel="noopener noreferrer">{item.site}</a>
                                            <div className="flex justify-center tb:absolute mt-2 cursor-pointer tb:top-2 top-7 lp:top-3 tb:right-3" onClick={() => copyText(item.password)}>
                                                <div className="relative inline-block">
                                                    <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 text-sm opacity-100 transition-opacity duration-300 hover:opacity-100">Copy</div>
                                                    <lord-icon
                                                        style={{ width: "25px", height: "25px" }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover"
                                                    ></lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 text-sm lp:text-lg text-center relative border-r-2 border-black border-b-3">
                                            {item.username}
                                            <div className="flex justify-center tb:absolute mt-2 cursor-pointer tb:top-2 top-7 lp:top-3 tb:right-3" onClick={() => copyText(item.username)}>
                                                <div className="relative inline-block">
                                                    <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 text-sm opacity-100 transition-opacity duration-300 hover:opacity-100">Copy</div>
                                                    <lord-icon
                                                        style={{ width: "25px", height: "25px" }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover"
                                                    ></lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 text-sm lp:text-lg text-center relative border-r-2 border-black border-b-3">
                                            {item.password}
                                            <div className="flex justify-center tb:absolute mt-2 cursor-pointer tb:top-2 top-7 lp:top-3 tb:right-3" onClick={() => copyText(item.password)}>
                                                <div className="relative inline-block">
                                                    <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 text-sm opacity-100 transition-opacity duration-300 hover:opacity-100">Copy</div>
                                                    <lord-icon
                                                        style={{ width: "25px", height: "25px" }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover"
                                                    ></lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3 lp:py-4 text-sm lp:text-lg text-center relative flex flex-col gap-3 tb:flex-row justify-center border-r-2 border-black border-b-3 rounded-br-md">
                                            <span className="relative mx-auto" onClick={() => { editPassword(item.id) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/gwlusjdu.json"
                                                    trigger="hover"
                                                ></lord-icon>
                                                <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 text-sm opacity-100 transition-opacity duration-300 hover:opacity-100">Edit</div>
                                            </span>
                                            <span className="lp:ml-11 relative mx-auto" onClick={() => deletePassword(item.id)}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/skkahier.json"
                                                    trigger="hover"
                                                ></lord-icon>
                                                <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 text-sm opacity-100 transition-opacity duration-300 hover:opacity-100">Delete</div>
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

            </div>
        </>
    );
};

export default Manager;














// Till 1:46:00 of CWH React Project Password Manager
// write localstorage.clear() in console to clear local storage means to clearing all the data of passwords,username,website name and other all permanently
// write in vs code terminal : npm run dev
