'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import Input from './Input'
import { useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { FiPhoneCall } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import CountrySelect from './CountrySelect'
import UserSelector from './UserSelector'
import CallingTimeSelector from './CallingTimeSelector'



const FaqForm = () => {

    const [isLoading, setIsLoading] = useState(false)


    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: {
            errors
        },
        reset
    } = useForm()


    const location = watch('location')
    const role = watch('role');
    const cTime = watch('cTime');

    const onSubmit = (data) => {
        setIsLoading(true);
        const formData = setTimeout(() => {
            console.log(data);
        }, 400)


        setIsLoading(false);
        reset();
    }

    const setCustomValue = (id, value) => {

  
        setValue(id, value, {
            shouldDirty: true,
            shouldValidate: true,
            shouldTouch: true
        })
    }


    return (
        <form className='w-full flex flex-col gap-4  '>
            <Input
                id="name"
                label="name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
                requireMessage={"Please Enter the name."}
                icon={<BsPerson size={30} />}
            />

            <div className='grid grid-cols-5 gap-4'>
                <div className='col-span-2 bg-white z-10'>


                    <CountrySelect
                        id="location"
                        errors={errors}
                        required
                        register={register}
                        value={location}
                        requireMessage={"Please Enter the contry code."}
                        onChange={(value) => setCustomValue('location', value)}
                    />

                </div>

                <div className='col-span-3'>
                    <Input
                        id="phone"

                        label="Mobile Number"
                        type='number'
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                        requireMessage={"Please Enter Mobile Nubmer"}
                        icon={<FiPhoneCall size={30} />}
                    />

                </div>


            </div>
            <Input
                id="email"
                label="Email ID"
                type='email'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
                pattern={/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}
                requireMessage={'Enter valid email'}
                icon={<AiOutlineMail size={30} />}
            />

            <UserSelector
                value={role}
                id={'role'}
                required
                register={register}
                requireMessage={"Pleae fill this field."}
                errors={errors}
                onChange={(value) => setCustomValue('role', value)}
            />

            <div className='grid grid-cols-5 gap-4'>

                <div className='col-span-3'>

                    <CallingTimeSelector
                        value={cTime}
                        id={'cTime'}
                        required
                        register={register}
                        requireMessage={"Pleae fill this field."}
                        errors={errors}
                        onChange={(value) => setCustomValue('cTime', value)}
                    />

                </div>
                <div className='col-span-2'>
                    <button

                        disabled={isLoading}
                        className='w-full bg-[#1981c3]
                    hover:bg-sky-400
                    text-white font-medium h-full rounded-lg text-center'

                        onClick={handleSubmit(onSubmit)}
                    >
                        Submit
                    </button>

                </div>


            </div>

        </form>
    )
}

export default FaqForm
