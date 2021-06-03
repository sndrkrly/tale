/*
    Created by Sándor Király on 30/04/21.

    Copyright (c) OMEGA Magyarország Kft.
    All rights reserved.
*/

import { HeaderController } from '../display/HeaderController';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';

import Button from '../ui/Button';
import Input from '../ui/Input';
import Axios from 'axios';

export const Register = () => {
    const [ email, setEmail ] = useState('');
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ password, setPassword ] = useState('');

    const [ errors, setErrors ] = useState<any>({});
    const router = useRouter();

    const submitRegistration = async (event: FormEvent) => {
        event.preventDefault();

        try {
            await Axios.post('/auth/register', {
                email, 
                password, 
                firstName,
                lastName,
            });

            router.push('/login');
        } catch(err) {
            setErrors(err.response.data);
        };
    };

    return (
        <>
            <HeaderController embed = {{}} title = 'Regisztráció' />
            
            <main className = 'bg-white dark:bg-coolGray-900 flex grid w-full h-full'>
                <div className = 'flex items-center justify-center min-w-screen min-h-screen'>
                    <div className = 'flex m-auto flex-col p-6 gap-5 sm:rounded-8 z-10 sm:w-400 w-400'>
                        <div className = 'flex gap-2 flex-col text-center'>
                            <h1 className = 'font-extrabold text-black dark:text-coolGray-100 sm:text-3xl mb-4'>
                                Regisztráció.
                            </h1>

                            <p className = 'text-gray-500 dark:text-coolGray-100 flex-wrap text-base'>
                                Tovább lépve elfogadja az&nbsp;

                                <a
                                    href = '/privacy-policy.html'
                                    className = 'text-blue-400'
                                >
                                    adatvédelmi irányelveinket
                                </a>

                                &nbsp;és a&nbsp;

                                <a 
                                    href = '/terms.html' 
                                    className = 'text-blue-400'
                                >
                                    szolgáltatási feltételeinket
                                </a>
                                .
                            </p>
                        </div>

                        <form onSubmit = {submitRegistration}>
                            <div className = 'flex flex-col gap-4'>
                                <Input 
                                    type = 'text'
                                    value = { firstName }
                                    setValue = { setFirstName }
                                    placeholder = 'Keresztnév'
                                    error = { errors.firstName }
                                />

                                <Input 
                                    type = 'text'
                                    value = { lastName }
                                    setValue = { setLastName }
                                    placeholder = 'Vezetéknév'
                                    error = { errors.lastName }
                                />

                                <Input 
                                    type = 'email'
                                    value = { email }
                                    setValue = { setEmail }
                                    placeholder = 'E-mail cím'
                                    error = { errors.email }
                                />

                                <Input 
                                    type = 'password'
                                    value = { password }
                                    setValue = { setPassword }
                                    placeholder = 'Jelszó'
                                    error = { errors.password }
                                />

                                <Button value = 'Regisztráció' />
                            </div>
                        </form>

                        <small className = 'text-gray-500 dark:text-coolGray-100'>
                            Van már felhasználója?

                            <Link href = '/login'>
                                <a className = 'ml-1 text-blue-500'>
                                    Jelentkezzen be!
                                </a>
                            </Link>
                        </small>                        
                    </div>
                </div>
            </main>
        </>
    );
};