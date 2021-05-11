/*
    Created by Sándor Király on 03/05/21.

    Copyright (c) OMEGA Magyarország Kft.
    All rights reserved.
*/

import classNames from 'classnames';

interface ButtonProps {
    className?: string
    value: string
};

const Button: React.FC<ButtonProps> = ({
    className,
    value,
}) => {
    return (
        <button className = {classNames('bg-blue-500 dark:bg-blue-600 sm:rounded-8 py-3 mt-2 text-white text-base font-normal transition duration-200 ease-in-out hover:bg-blue-600 dark:hover:bg-blue-700')}>
            {value}
        </button>
    );
};

export default Button;