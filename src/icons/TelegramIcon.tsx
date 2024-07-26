import { PropsWithClassName, PropsWithSize } from '@/shared/types';
import { FC } from 'react';

export const TelegramIcon: FC<PropsWithClassName<PropsWithSize>> = ({ className, width = 18, height = 18 }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M10.6652 16.223C9.78016 16.223 8.52766 15.6005 7.53766 12.623L6.99766 11.003L5.37766 10.463C2.40766 9.47298 1.78516 8.22048 1.78516 7.33548C1.78516 6.45798 2.40766 5.19798 5.37766 4.20048L11.7452 2.07798C13.3352 1.54548 14.6627 1.70298 15.4802 2.51298C16.2977 3.32298 16.4552 4.65798 15.9227 6.24798L13.8002 12.6155C12.8027 15.6005 11.5502 16.223 10.6652 16.223ZM5.73016 5.27298C3.64516 5.97048 2.90266 6.79548 2.90266 7.33548C2.90266 7.87548 3.64516 8.70048 5.73016 9.39048L7.62016 10.0205C7.78516 10.073 7.92016 10.208 7.97266 10.373L8.60266 12.263C9.29266 14.348 10.1252 15.0905 10.6652 15.0905C11.2052 15.0905 12.0302 14.348 12.7277 12.263L14.8502 5.89548C15.2327 4.74048 15.1652 3.79548 14.6777 3.30798C14.1902 2.82048 13.2452 2.76048 12.0977 3.14298L5.73016 5.27298Z'
                fill='#262626'
            />
            <path
                d='M7.58406 10.8C7.44156 10.8 7.29906 10.7475 7.18656 10.635C6.96906 10.4175 6.96906 10.0575 7.18656 9.84L9.87156 7.1475C10.0891 6.93 10.4491 6.93 10.6666 7.1475C10.8841 7.365 10.8841 7.725 10.6666 7.9425L7.98156 10.635C7.87656 10.7475 7.72656 10.8 7.58406 10.8Z'
                fill='#262626'
            />
        </svg>
    );
};
