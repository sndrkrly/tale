/*
    Created by Sándor Király on 01/05/21.

    Copyright (c) OMEGA Magyarország Kft.
    All rights reserved.
*/

// More styles ?

import classNames from 'classnames';

interface InputProps {
    className?: string
    type: string
    placeholder: string
    value: string
    error: string | undefined
    setValue: (str: string) => void
};

const Input: React.FC<InputProps> = ({
    className,
    type,
    placeholder,
    value,
    error,
    setValue
}) => {
    return (
        <input 
            className = {
                classNames('p-3 bg-white dark:bg-coolGray-800 border text-black dark:text-coolGray-100 focus:outline-none focus:ring transition duration-200 ease-in-out hover:border-blue-300 dark:border-coolGray-700 rounded-8', 
                {'transition duration-200 ease-in-out hover:border-red-300': error}
            )}
            placeholder = { placeholder }
            type = { type }
            value = { value }
            onChange = {e => setValue(e.target.value)}
        />
    );
};

export default Input;