import { useAuth } from '@/app/(auth)/auth-wrapper';
import { MenuItem } from './menuItem';

import { ROUTES } from '@/shared/utils/paths';
import { useLogout } from '@/shared/lib/hooks/useLogout';

export const UserMenu = () => {
    const { user } = useAuth();
    const { logout } = useLogout();
    return (
        <>
            <MenuItem
                icon={
                    <svg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M8.26703 2.58802L3.3262 6.43802C2.5012 7.07969 1.83203 8.44552 1.83203 9.48135L1.83203 16.2739C1.83203 18.4005 3.56453 20.1422 5.6912 20.1422H16.3062C18.4329 20.1422 20.1654 18.4005 20.1654 16.283V9.60969C20.1654 8.50052 19.4229 7.07969 18.5154 6.44719L12.8504 2.47802C11.567 1.57969 9.50453 1.62552 8.26703 2.58802Z'
                            stroke='white'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                        <path
                            d='M8.25 11.916H11M13.75 11.916H11M11 11.916V9.16602M11 11.916V14.666'
                            stroke='white'
                            strokeWidth='1.5'
                            strokeMiterlimit='10'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                }
                title={ROUTES.main.label}
                href={ROUTES.main.path}
            />

            <MenuItem
                icon={
                    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z'
                            stroke='#B1B2B4'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                        <path
                            d='M17.5 17.5L13.875 13.875'
                            stroke='#B1B2B4'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                }
                title={ROUTES.search.label}
                href={ROUTES.search.path}
            />

            <MenuItem
                icon={
                    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M14.168 17.0827H5.83464C3.33464 17.0827 1.66797 15.8327 1.66797 12.916V7.08268C1.66797 4.16602 3.33464 2.91602 5.83464 2.91602L14.168 2.91602C16.668 2.91602 18.3346 4.16602 18.3346 7.08268V12.916C18.3346 15.8327 16.668 17.0827 14.168 17.0827Z'
                            stroke='#B1B2B4'
                            strokeWidth='1.25'
                            strokeMiterlimit='10'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                        <path
                            d='M14.1654 7.5L11.557 9.58333C10.6987 10.2667 9.29036 10.2667 8.43203 9.58333L5.83203 7.5'
                            stroke='#B1B2B4'
                            strokeWidth='1.25'
                            strokeMiterlimit='10'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                }
                title={ROUTES.messages.label}
                href={user?._id ? ROUTES.messages.path : ROUTES.login.path}
            />
            <MenuItem
                icon={
                    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M12.6991 18.5581H12.5908C8.89078 18.5581 7.10745 17.0997 6.79912 13.8331C6.76578 13.4914 7.01578 13.1831 7.36578 13.1497C7.69912 13.1164 8.01578 13.3747 8.04912 13.7164C8.29078 16.3331 9.52412 17.3081 12.5991 17.3081H12.7075C16.0991 17.3081 17.2991 16.1081 17.2991 12.7164V7.28307C17.2991 3.89141 16.0991 2.69141 12.7075 2.69141H12.5991C9.50745 2.69141 8.27412 3.68307 8.04912 6.34974C8.00745 6.69141 7.71578 6.94974 7.36578 6.91641C7.01578 6.89141 6.76578 6.58307 6.79078 6.24141C7.07412 2.92474 8.86578 1.44141 12.5908 1.44141H12.6991C16.7908 1.44141 18.5408 3.19141 18.5408 7.28307V12.7164C18.5408 16.8081 16.7908 18.5581 12.6991 18.5581Z'
                            fill='#B1B2B4'
                        />
                        <path
                            d='M12.499 10.625H3.01562C2.67396 10.625 2.39062 10.3417 2.39062 10C2.39062 9.65833 2.67396 9.375 3.01562 9.375H12.499C12.8406 9.375 13.124 9.65833 13.124 10C13.124 10.3417 12.8406 10.625 12.499 10.625Z'
                            fill='#B1B2B4'
                        />
                        <path
                            d='M4.87552 13.4152C4.71719 13.4152 4.55885 13.3569 4.43385 13.2319L1.64219 10.4402C1.40052 10.1986 1.40052 9.79857 1.64219 9.5569L4.43385 6.76523C4.67552 6.52357 5.07552 6.52357 5.31719 6.76523C5.55885 7.0069 5.55885 7.4069 5.31719 7.64857L2.96719 9.99857L5.31719 12.3486C5.55885 12.5902 5.55885 12.9902 5.31719 13.2319C5.20052 13.3569 5.03385 13.4152 4.87552 13.4152Z'
                            fill='#B1B2B4'
                        />
                    </svg>
                }
                title='Выход'
                href={ROUTES.login.path}
                onClick={() => logout()}
            />
        </>
    );
};