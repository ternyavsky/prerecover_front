import { PropsWithClassName, PropsWithSize } from '@/shared/types';
import { FC } from 'react';

export const AllDoctorsIcon: FC<PropsWithClassName<PropsWithSize>> = ({ className, width = 20, height = 20 }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M6.85331 15.2955V13.972M6.85331 12.6484V13.972M6.85331 13.972H8.17684M6.85331 13.972H5.52979'
                stroke='#0064FA'
                strokeWidth='1.25'
                strokeLinecap='round'
            />
            <path
                d='M8.46805 9.64367C11.6144 10.7187 12.0855 14.9384 12.1424 16.7099C12.1566 17.1531 11.7946 17.4998 11.3512 17.4998H6.85515H2.35907C1.91571 17.4998 1.55374 17.1544 1.56791 16.7113C1.62615 14.8894 2.12262 10.4734 5.52137 9.55859'
                stroke='#0064FA'
                strokeWidth='1.25'
            />
            <path
                d='M3.76416 5.36765V3.33333C3.76416 2.8731 4.13726 2.5 4.59749 2.5H9.1073C9.56753 2.5 9.94063 2.8731 9.94063 3.33333V5.36765M3.76416 5.36765V6.91177C3.76416 8.61735 5.14681 10 6.8524 10V10C8.55798 10 9.94063 8.61735 9.94063 6.91177V5.36765M3.76416 5.36765H9.94063'
                stroke='#0064FA'
                strokeWidth='1.25'
            />
            <path
                d='M14.1631 17.4999H18.0539C18.4973 17.4999 18.8592 17.1535 18.8389 16.7106C18.7702 15.2153 18.3337 12.0445 15.9055 11.2148'
                stroke='#0064FA'
                strokeWidth='1.25'
                strokeLinecap='round'
            />
            <path
                d='M12.1421 7.7942V6.33333C12.1421 5.8731 12.5152 5.5 12.9754 5.5H16.2501C16.7103 5.5 17.0834 5.8731 17.0834 6.33333V7.7942M12.1421 7.7942V9.02953C12.1421 10.394 13.2482 11.5002 14.6128 11.5002V11.5002C15.9773 11.5002 17.0834 10.394 17.0834 9.02953V7.7942M12.1421 7.7942H17.0834'
                stroke='#0064FA'
                strokeWidth='1.25'
            />
        </svg>
    );
};
