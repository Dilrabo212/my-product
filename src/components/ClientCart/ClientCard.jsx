import React from 'react'
import cls from './style.module.scss'

const reitings = {
    5: [
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
            <path d="M18.2961 6.58663C18.2384 6.41682 18.1323 6.26761 17.9908 6.15742C17.8493 6.04723 17.6787 5.98089 17.4999 5.96658L12.2708 5.55107L10.008 0.542056C9.9359 0.380725 9.81869 0.243699 9.67047 0.147514C9.52225 0.0513295 9.34936 9.71158e-05 9.17266 1.37932e-07C8.99597 -9.684e-05 8.82302 0.0509458 8.6747 0.146968C8.52637 0.24299 8.40901 0.379887 8.33677 0.541138L6.07395 5.55107L0.844797 5.96658C0.669105 5.9805 0.501144 6.04474 0.361006 6.15161C0.220868 6.25849 0.114488 6.40348 0.0545932 6.56923C-0.00530196 6.73498 -0.0161763 6.91448 0.0232713 7.08625C0.062719 7.25802 0.150818 7.41479 0.277029 7.5378L4.14134 11.3049L2.77466 17.2229C2.73316 17.402 2.74646 17.5895 2.81283 17.761C2.8792 17.9324 2.99559 18.08 3.14687 18.1845C3.29816 18.2891 3.47737 18.3457 3.66124 18.3471C3.84511 18.3485 4.02516 18.2946 4.17803 18.1924L9.17237 14.8628L14.1667 18.1924C14.3229 18.2961 14.5072 18.3495 14.6947 18.3454C14.8822 18.3413 15.0639 18.2799 15.2155 18.1694C15.367 18.0589 15.4811 17.9047 15.5423 17.7274C15.6036 17.5502 15.6091 17.3584 15.5581 17.1779L13.8805 11.3076L18.0411 7.56348C18.3135 7.31766 18.4135 6.93426 18.2961 6.58663Z" fill="#F3CD03" />
        </svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
            <path d="M18.2961 6.58663C18.2384 6.41682 18.1323 6.26761 17.9908 6.15742C17.8493 6.04723 17.6787 5.98089 17.4999 5.96658L12.2708 5.55107L10.008 0.542056C9.9359 0.380725 9.81869 0.243699 9.67047 0.147514C9.52225 0.0513295 9.34936 9.71158e-05 9.17266 1.37932e-07C8.99597 -9.684e-05 8.82302 0.0509458 8.6747 0.146968C8.52637 0.24299 8.40901 0.379887 8.33677 0.541138L6.07395 5.55107L0.844797 5.96658C0.669105 5.9805 0.501144 6.04474 0.361006 6.15161C0.220868 6.25849 0.114488 6.40348 0.0545932 6.56923C-0.00530196 6.73498 -0.0161763 6.91448 0.0232713 7.08625C0.062719 7.25802 0.150818 7.41479 0.277029 7.5378L4.14134 11.3049L2.77466 17.2229C2.73316 17.402 2.74646 17.5895 2.81283 17.761C2.8792 17.9324 2.99559 18.08 3.14687 18.1845C3.29816 18.2891 3.47737 18.3457 3.66124 18.3471C3.84511 18.3485 4.02516 18.2946 4.17803 18.1924L9.17237 14.8628L14.1667 18.1924C14.3229 18.2961 14.5072 18.3495 14.6947 18.3454C14.8822 18.3413 15.0639 18.2799 15.2155 18.1694C15.367 18.0589 15.4811 17.9047 15.5423 17.7274C15.6036 17.5502 15.6091 17.3584 15.5581 17.1779L13.8805 11.3076L18.0411 7.56348C18.3135 7.31766 18.4135 6.93426 18.2961 6.58663Z" fill="#F3CD03" />
        </svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
            <path d="M18.2961 6.58663C18.2384 6.41682 18.1323 6.26761 17.9908 6.15742C17.8493 6.04723 17.6787 5.98089 17.4999 5.96658L12.2708 5.55107L10.008 0.542056C9.9359 0.380725 9.81869 0.243699 9.67047 0.147514C9.52225 0.0513295 9.34936 9.71158e-05 9.17266 1.37932e-07C8.99597 -9.684e-05 8.82302 0.0509458 8.6747 0.146968C8.52637 0.24299 8.40901 0.379887 8.33677 0.541138L6.07395 5.55107L0.844797 5.96658C0.669105 5.9805 0.501144 6.04474 0.361006 6.15161C0.220868 6.25849 0.114488 6.40348 0.0545932 6.56923C-0.00530196 6.73498 -0.0161763 6.91448 0.0232713 7.08625C0.062719 7.25802 0.150818 7.41479 0.277029 7.5378L4.14134 11.3049L2.77466 17.2229C2.73316 17.402 2.74646 17.5895 2.81283 17.761C2.8792 17.9324 2.99559 18.08 3.14687 18.1845C3.29816 18.2891 3.47737 18.3457 3.66124 18.3471C3.84511 18.3485 4.02516 18.2946 4.17803 18.1924L9.17237 14.8628L14.1667 18.1924C14.3229 18.2961 14.5072 18.3495 14.6947 18.3454C14.8822 18.3413 15.0639 18.2799 15.2155 18.1694C15.367 18.0589 15.4811 17.9047 15.5423 17.7274C15.6036 17.5502 15.6091 17.3584 15.5581 17.1779L13.8805 11.3076L18.0411 7.56348C18.3135 7.31766 18.4135 6.93426 18.2961 6.58663Z" fill="#F3CD03" />
        </svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
            <path d="M18.2961 6.58663C18.2384 6.41682 18.1323 6.26761 17.9908 6.15742C17.8493 6.04723 17.6787 5.98089 17.4999 5.96658L12.2708 5.55107L10.008 0.542056C9.9359 0.380725 9.81869 0.243699 9.67047 0.147514C9.52225 0.0513295 9.34936 9.71158e-05 9.17266 1.37932e-07C8.99597 -9.684e-05 8.82302 0.0509458 8.6747 0.146968C8.52637 0.24299 8.40901 0.379887 8.33677 0.541138L6.07395 5.55107L0.844797 5.96658C0.669105 5.9805 0.501144 6.04474 0.361006 6.15161C0.220868 6.25849 0.114488 6.40348 0.0545932 6.56923C-0.00530196 6.73498 -0.0161763 6.91448 0.0232713 7.08625C0.062719 7.25802 0.150818 7.41479 0.277029 7.5378L4.14134 11.3049L2.77466 17.2229C2.73316 17.402 2.74646 17.5895 2.81283 17.761C2.8792 17.9324 2.99559 18.08 3.14687 18.1845C3.29816 18.2891 3.47737 18.3457 3.66124 18.3471C3.84511 18.3485 4.02516 18.2946 4.17803 18.1924L9.17237 14.8628L14.1667 18.1924C14.3229 18.2961 14.5072 18.3495 14.6947 18.3454C14.8822 18.3413 15.0639 18.2799 15.2155 18.1694C15.367 18.0589 15.4811 17.9047 15.5423 17.7274C15.6036 17.5502 15.6091 17.3584 15.5581 17.1779L13.8805 11.3076L18.0411 7.56348C18.3135 7.31766 18.4135 6.93426 18.2961 6.58663Z" fill="#F3CD03" />
        </svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
            <path d="M18.2961 6.58663C18.2384 6.41682 18.1323 6.26761 17.9908 6.15742C17.8493 6.04723 17.6787 5.98089 17.4999 5.96658L12.2708 5.55107L10.008 0.542056C9.9359 0.380725 9.81869 0.243699 9.67047 0.147514C9.52225 0.0513295 9.34936 9.71158e-05 9.17266 1.37932e-07C8.99597 -9.684e-05 8.82302 0.0509458 8.6747 0.146968C8.52637 0.24299 8.40901 0.379887 8.33677 0.541138L6.07395 5.55107L0.844797 5.96658C0.669105 5.9805 0.501144 6.04474 0.361006 6.15161C0.220868 6.25849 0.114488 6.40348 0.0545932 6.56923C-0.00530196 6.73498 -0.0161763 6.91448 0.0232713 7.08625C0.062719 7.25802 0.150818 7.41479 0.277029 7.5378L4.14134 11.3049L2.77466 17.2229C2.73316 17.402 2.74646 17.5895 2.81283 17.761C2.8792 17.9324 2.99559 18.08 3.14687 18.1845C3.29816 18.2891 3.47737 18.3457 3.66124 18.3471C3.84511 18.3485 4.02516 18.2946 4.17803 18.1924L9.17237 14.8628L14.1667 18.1924C14.3229 18.2961 14.5072 18.3495 14.6947 18.3454C14.8822 18.3413 15.0639 18.2799 15.2155 18.1694C15.367 18.0589 15.4811 17.9047 15.5423 17.7274C15.6036 17.5502 15.6091 17.3584 15.5581 17.1779L13.8805 11.3076L18.0411 7.56348C18.3135 7.31766 18.4135 6.93426 18.2961 6.58663Z" fill="#F3CD03" />
        </svg>
    ],
    4: [
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
            <path d="M18.2961 6.58663C18.2384 6.41682 18.1323 6.26761 17.9908 6.15742C17.8493 6.04723 17.6787 5.98089 17.4999 5.96658L12.2708 5.55107L10.008 0.542056C9.9359 0.380725 9.81869 0.243699 9.67047 0.147514C9.52225 0.0513295 9.34936 9.71158e-05 9.17266 1.37932e-07C8.99597 -9.684e-05 8.82302 0.0509458 8.6747 0.146968C8.52637 0.24299 8.40901 0.379887 8.33677 0.541138L6.07395 5.55107L0.844797 5.96658C0.669105 5.9805 0.501144 6.04474 0.361006 6.15161C0.220868 6.25849 0.114488 6.40348 0.0545932 6.56923C-0.00530196 6.73498 -0.0161763 6.91448 0.0232713 7.08625C0.062719 7.25802 0.150818 7.41479 0.277029 7.5378L4.14134 11.3049L2.77466 17.2229C2.73316 17.402 2.74646 17.5895 2.81283 17.761C2.8792 17.9324 2.99559 18.08 3.14687 18.1845C3.29816 18.2891 3.47737 18.3457 3.66124 18.3471C3.84511 18.3485 4.02516 18.2946 4.17803 18.1924L9.17237 14.8628L14.1667 18.1924C14.3229 18.2961 14.5072 18.3495 14.6947 18.3454C14.8822 18.3413 15.0639 18.2799 15.2155 18.1694C15.367 18.0589 15.4811 17.9047 15.5423 17.7274C15.6036 17.5502 15.6091 17.3584 15.5581 17.1779L13.8805 11.3076L18.0411 7.56348C18.3135 7.31766 18.4135 6.93426 18.2961 6.58663Z" fill="#F3CD03" />
        </svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
            <path d="M18.2961 6.58663C18.2384 6.41682 18.1323 6.26761 17.9908 6.15742C17.8493 6.04723 17.6787 5.98089 17.4999 5.96658L12.2708 5.55107L10.008 0.542056C9.9359 0.380725 9.81869 0.243699 9.67047 0.147514C9.52225 0.0513295 9.34936 9.71158e-05 9.17266 1.37932e-07C8.99597 -9.684e-05 8.82302 0.0509458 8.6747 0.146968C8.52637 0.24299 8.40901 0.379887 8.33677 0.541138L6.07395 5.55107L0.844797 5.96658C0.669105 5.9805 0.501144 6.04474 0.361006 6.15161C0.220868 6.25849 0.114488 6.40348 0.0545932 6.56923C-0.00530196 6.73498 -0.0161763 6.91448 0.0232713 7.08625C0.062719 7.25802 0.150818 7.41479 0.277029 7.5378L4.14134 11.3049L2.77466 17.2229C2.73316 17.402 2.74646 17.5895 2.81283 17.761C2.8792 17.9324 2.99559 18.08 3.14687 18.1845C3.29816 18.2891 3.47737 18.3457 3.66124 18.3471C3.84511 18.3485 4.02516 18.2946 4.17803 18.1924L9.17237 14.8628L14.1667 18.1924C14.3229 18.2961 14.5072 18.3495 14.6947 18.3454C14.8822 18.3413 15.0639 18.2799 15.2155 18.1694C15.367 18.0589 15.4811 17.9047 15.5423 17.7274C15.6036 17.5502 15.6091 17.3584 15.5581 17.1779L13.8805 11.3076L18.0411 7.56348C18.3135 7.31766 18.4135 6.93426 18.2961 6.58663Z" fill="#F3CD03" />
        </svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
            <path d="M18.2961 6.58663C18.2384 6.41682 18.1323 6.26761 17.9908 6.15742C17.8493 6.04723 17.6787 5.98089 17.4999 5.96658L12.2708 5.55107L10.008 0.542056C9.9359 0.380725 9.81869 0.243699 9.67047 0.147514C9.52225 0.0513295 9.34936 9.71158e-05 9.17266 1.37932e-07C8.99597 -9.684e-05 8.82302 0.0509458 8.6747 0.146968C8.52637 0.24299 8.40901 0.379887 8.33677 0.541138L6.07395 5.55107L0.844797 5.96658C0.669105 5.9805 0.501144 6.04474 0.361006 6.15161C0.220868 6.25849 0.114488 6.40348 0.0545932 6.56923C-0.00530196 6.73498 -0.0161763 6.91448 0.0232713 7.08625C0.062719 7.25802 0.150818 7.41479 0.277029 7.5378L4.14134 11.3049L2.77466 17.2229C2.73316 17.402 2.74646 17.5895 2.81283 17.761C2.8792 17.9324 2.99559 18.08 3.14687 18.1845C3.29816 18.2891 3.47737 18.3457 3.66124 18.3471C3.84511 18.3485 4.02516 18.2946 4.17803 18.1924L9.17237 14.8628L14.1667 18.1924C14.3229 18.2961 14.5072 18.3495 14.6947 18.3454C14.8822 18.3413 15.0639 18.2799 15.2155 18.1694C15.367 18.0589 15.4811 17.9047 15.5423 17.7274C15.6036 17.5502 15.6091 17.3584 15.5581 17.1779L13.8805 11.3076L18.0411 7.56348C18.3135 7.31766 18.4135 6.93426 18.2961 6.58663Z" fill="#F3CD03" />
        </svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
            <path d="M18.2961 6.58663C18.2384 6.41682 18.1323 6.26761 17.9908 6.15742C17.8493 6.04723 17.6787 5.98089 17.4999 5.96658L12.2708 5.55107L10.008 0.542056C9.9359 0.380725 9.81869 0.243699 9.67047 0.147514C9.52225 0.0513295 9.34936 9.71158e-05 9.17266 1.37932e-07C8.99597 -9.684e-05 8.82302 0.0509458 8.6747 0.146968C8.52637 0.24299 8.40901 0.379887 8.33677 0.541138L6.07395 5.55107L0.844797 5.96658C0.669105 5.9805 0.501144 6.04474 0.361006 6.15161C0.220868 6.25849 0.114488 6.40348 0.0545932 6.56923C-0.00530196 6.73498 -0.0161763 6.91448 0.0232713 7.08625C0.062719 7.25802 0.150818 7.41479 0.277029 7.5378L4.14134 11.3049L2.77466 17.2229C2.73316 17.402 2.74646 17.5895 2.81283 17.761C2.8792 17.9324 2.99559 18.08 3.14687 18.1845C3.29816 18.2891 3.47737 18.3457 3.66124 18.3471C3.84511 18.3485 4.02516 18.2946 4.17803 18.1924L9.17237 14.8628L14.1667 18.1924C14.3229 18.2961 14.5072 18.3495 14.6947 18.3454C14.8822 18.3413 15.0639 18.2799 15.2155 18.1694C15.367 18.0589 15.4811 17.9047 15.5423 17.7274C15.6036 17.5502 15.6091 17.3584 15.5581 17.1779L13.8805 11.3076L18.0411 7.56348C18.3135 7.31766 18.4135 6.93426 18.2961 6.58663Z" fill="#F3CD03" />
        </svg>,

        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
            <path d="M4.19767 11.3049L2.83099 17.2229C2.78867 17.4021 2.80138 17.5899 2.86745 17.7618C2.93352 17.9336 3.04988 18.0816 3.20135 18.1863C3.35281 18.291 3.53232 18.3476 3.71645 18.3487C3.90057 18.3498 4.08075 18.2953 4.23345 18.1924L9.22779 14.8629L14.2221 18.1924C14.3784 18.2962 14.5626 18.3496 14.7501 18.3454C14.9376 18.3413 15.1193 18.2799 15.2709 18.1694C15.4224 18.0589 15.5365 17.9047 15.5978 17.7274C15.659 17.5502 15.6645 17.3584 15.6136 17.178L13.9359 11.3077L18.0965 7.56351C18.2298 7.44353 18.3249 7.28712 18.3702 7.11362C18.4155 6.94012 18.409 6.75715 18.3514 6.58734C18.2938 6.41752 18.1877 6.26831 18.0463 6.15815C17.9048 6.04799 17.7341 5.98172 17.5554 5.96752L12.3262 5.5511L10.0634 0.542085C9.99123 0.380794 9.87394 0.243833 9.72567 0.147729C9.5774 0.0516259 9.40448 0.000488281 9.22779 0.000488281C9.05109 0.000488281 8.87817 0.0516259 8.7299 0.147729C8.58163 0.243833 8.46434 0.380794 8.39219 0.542085L6.12937 5.5511L0.900217 5.96661C0.724525 5.98053 0.556564 6.04477 0.416426 6.15164C0.276288 6.25852 0.169908 6.40351 0.110013 6.56926C0.050118 6.73501 0.0392436 6.91451 0.0786913 7.08628C0.118139 7.25805 0.206238 7.41482 0.332449 7.53783L4.19767 11.3049ZM6.81454 7.33696C6.97826 7.32406 7.1355 7.26735 7.26977 7.17278C7.40404 7.07821 7.51039 6.94927 7.57768 6.79946L9.22779 3.14795L10.8779 6.79946C10.9452 6.94927 11.0515 7.07821 11.1858 7.17278C11.3201 7.26735 11.4773 7.32406 11.641 7.33696L15.2843 7.62588L12.284 10.3262C12.0235 10.561 11.9199 10.9224 12.0153 11.26L13.1646 15.282L9.73777 12.9972C9.58736 12.8963 9.41031 12.8423 9.22916 12.8423C9.04801 12.8423 8.87097 12.8963 8.72055 12.9972L5.13967 15.3848L6.10277 11.215C6.13808 11.0617 6.13334 10.9018 6.08901 10.7508C6.04467 10.5998 5.96223 10.4627 5.84961 10.3528L3.06305 7.63597L6.81454 7.33696Z" fill="#F3CD03" />
        </svg>
    ],
    3: [<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
        <path d="M18.2961 6.58663C18.2384 6.41682 18.1323 6.26761 17.9908 6.15742C17.8493 6.04723 17.6787 5.98089 17.4999 5.96658L12.2708 5.55107L10.008 0.542056C9.9359 0.380725 9.81869 0.243699 9.67047 0.147514C9.52225 0.0513295 9.34936 9.71158e-05 9.17266 1.37932e-07C8.99597 -9.684e-05 8.82302 0.0509458 8.6747 0.146968C8.52637 0.24299 8.40901 0.379887 8.33677 0.541138L6.07395 5.55107L0.844797 5.96658C0.669105 5.9805 0.501144 6.04474 0.361006 6.15161C0.220868 6.25849 0.114488 6.40348 0.0545932 6.56923C-0.00530196 6.73498 -0.0161763 6.91448 0.0232713 7.08625C0.062719 7.25802 0.150818 7.41479 0.277029 7.5378L4.14134 11.3049L2.77466 17.2229C2.73316 17.402 2.74646 17.5895 2.81283 17.761C2.8792 17.9324 2.99559 18.08 3.14687 18.1845C3.29816 18.2891 3.47737 18.3457 3.66124 18.3471C3.84511 18.3485 4.02516 18.2946 4.17803 18.1924L9.17237 14.8628L14.1667 18.1924C14.3229 18.2961 14.5072 18.3495 14.6947 18.3454C14.8822 18.3413 15.0639 18.2799 15.2155 18.1694C15.367 18.0589 15.4811 17.9047 15.5423 17.7274C15.6036 17.5502 15.6091 17.3584 15.5581 17.1779L13.8805 11.3076L18.0411 7.56348C18.3135 7.31766 18.4135 6.93426 18.2961 6.58663Z" fill="#F3CD03" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
        <path d="M18.2961 6.58663C18.2384 6.41682 18.1323 6.26761 17.9908 6.15742C17.8493 6.04723 17.6787 5.98089 17.4999 5.96658L12.2708 5.55107L10.008 0.542056C9.9359 0.380725 9.81869 0.243699 9.67047 0.147514C9.52225 0.0513295 9.34936 9.71158e-05 9.17266 1.37932e-07C8.99597 -9.684e-05 8.82302 0.0509458 8.6747 0.146968C8.52637 0.24299 8.40901 0.379887 8.33677 0.541138L6.07395 5.55107L0.844797 5.96658C0.669105 5.9805 0.501144 6.04474 0.361006 6.15161C0.220868 6.25849 0.114488 6.40348 0.0545932 6.56923C-0.00530196 6.73498 -0.0161763 6.91448 0.0232713 7.08625C0.062719 7.25802 0.150818 7.41479 0.277029 7.5378L4.14134 11.3049L2.77466 17.2229C2.73316 17.402 2.74646 17.5895 2.81283 17.761C2.8792 17.9324 2.99559 18.08 3.14687 18.1845C3.29816 18.2891 3.47737 18.3457 3.66124 18.3471C3.84511 18.3485 4.02516 18.2946 4.17803 18.1924L9.17237 14.8628L14.1667 18.1924C14.3229 18.2961 14.5072 18.3495 14.6947 18.3454C14.8822 18.3413 15.0639 18.2799 15.2155 18.1694C15.367 18.0589 15.4811 17.9047 15.5423 17.7274C15.6036 17.5502 15.6091 17.3584 15.5581 17.1779L13.8805 11.3076L18.0411 7.56348C18.3135 7.31766 18.4135 6.93426 18.2961 6.58663Z" fill="#F3CD03" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
        <path d="M18.2961 6.58663C18.2384 6.41682 18.1323 6.26761 17.9908 6.15742C17.8493 6.04723 17.6787 5.98089 17.4999 5.96658L12.2708 5.55107L10.008 0.542056C9.9359 0.380725 9.81869 0.243699 9.67047 0.147514C9.52225 0.0513295 9.34936 9.71158e-05 9.17266 1.37932e-07C8.99597 -9.684e-05 8.82302 0.0509458 8.6747 0.146968C8.52637 0.24299 8.40901 0.379887 8.33677 0.541138L6.07395 5.55107L0.844797 5.96658C0.669105 5.9805 0.501144 6.04474 0.361006 6.15161C0.220868 6.25849 0.114488 6.40348 0.0545932 6.56923C-0.00530196 6.73498 -0.0161763 6.91448 0.0232713 7.08625C0.062719 7.25802 0.150818 7.41479 0.277029 7.5378L4.14134 11.3049L2.77466 17.2229C2.73316 17.402 2.74646 17.5895 2.81283 17.761C2.8792 17.9324 2.99559 18.08 3.14687 18.1845C3.29816 18.2891 3.47737 18.3457 3.66124 18.3471C3.84511 18.3485 4.02516 18.2946 4.17803 18.1924L9.17237 14.8628L14.1667 18.1924C14.3229 18.2961 14.5072 18.3495 14.6947 18.3454C14.8822 18.3413 15.0639 18.2799 15.2155 18.1694C15.367 18.0589 15.4811 17.9047 15.5423 17.7274C15.6036 17.5502 15.6091 17.3584 15.5581 17.1779L13.8805 11.3076L18.0411 7.56348C18.3135 7.31766 18.4135 6.93426 18.2961 6.58663Z" fill="#F3CD03" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
        <path d="M4.19767 11.3049L2.83099 17.2229C2.78867 17.4021 2.80138 17.5899 2.86745 17.7618C2.93352 17.9336 3.04988 18.0816 3.20135 18.1863C3.35281 18.291 3.53232 18.3476 3.71645 18.3487C3.90057 18.3498 4.08075 18.2953 4.23345 18.1924L9.22779 14.8629L14.2221 18.1924C14.3784 18.2962 14.5626 18.3496 14.7501 18.3454C14.9376 18.3413 15.1193 18.2799 15.2709 18.1694C15.4224 18.0589 15.5365 17.9047 15.5978 17.7274C15.659 17.5502 15.6645 17.3584 15.6136 17.178L13.9359 11.3077L18.0965 7.56351C18.2298 7.44353 18.3249 7.28712 18.3702 7.11362C18.4155 6.94012 18.409 6.75715 18.3514 6.58734C18.2938 6.41752 18.1877 6.26831 18.0463 6.15815C17.9048 6.04799 17.7341 5.98172 17.5554 5.96752L12.3262 5.5511L10.0634 0.542085C9.99123 0.380794 9.87394 0.243833 9.72567 0.147729C9.5774 0.0516259 9.40448 0.000488281 9.22779 0.000488281C9.05109 0.000488281 8.87817 0.0516259 8.7299 0.147729C8.58163 0.243833 8.46434 0.380794 8.39219 0.542085L6.12937 5.5511L0.900217 5.96661C0.724525 5.98053 0.556564 6.04477 0.416426 6.15164C0.276288 6.25852 0.169908 6.40351 0.110013 6.56926C0.050118 6.73501 0.0392436 6.91451 0.0786913 7.08628C0.118139 7.25805 0.206238 7.41482 0.332449 7.53783L4.19767 11.3049ZM6.81454 7.33696C6.97826 7.32406 7.1355 7.26735 7.26977 7.17278C7.40404 7.07821 7.51039 6.94927 7.57768 6.79946L9.22779 3.14795L10.8779 6.79946C10.9452 6.94927 11.0515 7.07821 11.1858 7.17278C11.3201 7.26735 11.4773 7.32406 11.641 7.33696L15.2843 7.62588L12.284 10.3262C12.0235 10.561 11.9199 10.9224 12.0153 11.26L13.1646 15.282L9.73777 12.9972C9.58736 12.8963 9.41031 12.8423 9.22916 12.8423C9.04801 12.8423 8.87097 12.8963 8.72055 12.9972L5.13967 15.3848L6.10277 11.215C6.13808 11.0617 6.13334 10.9018 6.08901 10.7508C6.04467 10.5998 5.96223 10.4627 5.84961 10.3528L3.06305 7.63597L6.81454 7.33696Z" fill="#F3CD03" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
        <path d="M4.19767 11.3049L2.83099 17.2229C2.78867 17.4021 2.80138 17.5899 2.86745 17.7618C2.93352 17.9336 3.04988 18.0816 3.20135 18.1863C3.35281 18.291 3.53232 18.3476 3.71645 18.3487C3.90057 18.3498 4.08075 18.2953 4.23345 18.1924L9.22779 14.8629L14.2221 18.1924C14.3784 18.2962 14.5626 18.3496 14.7501 18.3454C14.9376 18.3413 15.1193 18.2799 15.2709 18.1694C15.4224 18.0589 15.5365 17.9047 15.5978 17.7274C15.659 17.5502 15.6645 17.3584 15.6136 17.178L13.9359 11.3077L18.0965 7.56351C18.2298 7.44353 18.3249 7.28712 18.3702 7.11362C18.4155 6.94012 18.409 6.75715 18.3514 6.58734C18.2938 6.41752 18.1877 6.26831 18.0463 6.15815C17.9048 6.04799 17.7341 5.98172 17.5554 5.96752L12.3262 5.5511L10.0634 0.542085C9.99123 0.380794 9.87394 0.243833 9.72567 0.147729C9.5774 0.0516259 9.40448 0.000488281 9.22779 0.000488281C9.05109 0.000488281 8.87817 0.0516259 8.7299 0.147729C8.58163 0.243833 8.46434 0.380794 8.39219 0.542085L6.12937 5.5511L0.900217 5.96661C0.724525 5.98053 0.556564 6.04477 0.416426 6.15164C0.276288 6.25852 0.169908 6.40351 0.110013 6.56926C0.050118 6.73501 0.0392436 6.91451 0.0786913 7.08628C0.118139 7.25805 0.206238 7.41482 0.332449 7.53783L4.19767 11.3049ZM6.81454 7.33696C6.97826 7.32406 7.1355 7.26735 7.26977 7.17278C7.40404 7.07821 7.51039 6.94927 7.57768 6.79946L9.22779 3.14795L10.8779 6.79946C10.9452 6.94927 11.0515 7.07821 11.1858 7.17278C11.3201 7.26735 11.4773 7.32406 11.641 7.33696L15.2843 7.62588L12.284 10.3262C12.0235 10.561 11.9199 10.9224 12.0153 11.26L13.1646 15.282L9.73777 12.9972C9.58736 12.8963 9.41031 12.8423 9.22916 12.8423C9.04801 12.8423 8.87097 12.8963 8.72055 12.9972L5.13967 15.3848L6.10277 11.215C6.13808 11.0617 6.13334 10.9018 6.08901 10.7508C6.04467 10.5998 5.96223 10.4627 5.84961 10.3528L3.06305 7.63597L6.81454 7.33696Z" fill="#F3CD03" />
    </svg>
    ],
    2: [<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
        <path d="M18.2961 6.58663C18.2384 6.41682 18.1323 6.26761 17.9908 6.15742C17.8493 6.04723 17.6787 5.98089 17.4999 5.96658L12.2708 5.55107L10.008 0.542056C9.9359 0.380725 9.81869 0.243699 9.67047 0.147514C9.52225 0.0513295 9.34936 9.71158e-05 9.17266 1.37932e-07C8.99597 -9.684e-05 8.82302 0.0509458 8.6747 0.146968C8.52637 0.24299 8.40901 0.379887 8.33677 0.541138L6.07395 5.55107L0.844797 5.96658C0.669105 5.9805 0.501144 6.04474 0.361006 6.15161C0.220868 6.25849 0.114488 6.40348 0.0545932 6.56923C-0.00530196 6.73498 -0.0161763 6.91448 0.0232713 7.08625C0.062719 7.25802 0.150818 7.41479 0.277029 7.5378L4.14134 11.3049L2.77466 17.2229C2.73316 17.402 2.74646 17.5895 2.81283 17.761C2.8792 17.9324 2.99559 18.08 3.14687 18.1845C3.29816 18.2891 3.47737 18.3457 3.66124 18.3471C3.84511 18.3485 4.02516 18.2946 4.17803 18.1924L9.17237 14.8628L14.1667 18.1924C14.3229 18.2961 14.5072 18.3495 14.6947 18.3454C14.8822 18.3413 15.0639 18.2799 15.2155 18.1694C15.367 18.0589 15.4811 17.9047 15.5423 17.7274C15.6036 17.5502 15.6091 17.3584 15.5581 17.1779L13.8805 11.3076L18.0411 7.56348C18.3135 7.31766 18.4135 6.93426 18.2961 6.58663Z" fill="#F3CD03" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
        <path d="M18.2961 6.58663C18.2384 6.41682 18.1323 6.26761 17.9908 6.15742C17.8493 6.04723 17.6787 5.98089 17.4999 5.96658L12.2708 5.55107L10.008 0.542056C9.9359 0.380725 9.81869 0.243699 9.67047 0.147514C9.52225 0.0513295 9.34936 9.71158e-05 9.17266 1.37932e-07C8.99597 -9.684e-05 8.82302 0.0509458 8.6747 0.146968C8.52637 0.24299 8.40901 0.379887 8.33677 0.541138L6.07395 5.55107L0.844797 5.96658C0.669105 5.9805 0.501144 6.04474 0.361006 6.15161C0.220868 6.25849 0.114488 6.40348 0.0545932 6.56923C-0.00530196 6.73498 -0.0161763 6.91448 0.0232713 7.08625C0.062719 7.25802 0.150818 7.41479 0.277029 7.5378L4.14134 11.3049L2.77466 17.2229C2.73316 17.402 2.74646 17.5895 2.81283 17.761C2.8792 17.9324 2.99559 18.08 3.14687 18.1845C3.29816 18.2891 3.47737 18.3457 3.66124 18.3471C3.84511 18.3485 4.02516 18.2946 4.17803 18.1924L9.17237 14.8628L14.1667 18.1924C14.3229 18.2961 14.5072 18.3495 14.6947 18.3454C14.8822 18.3413 15.0639 18.2799 15.2155 18.1694C15.367 18.0589 15.4811 17.9047 15.5423 17.7274C15.6036 17.5502 15.6091 17.3584 15.5581 17.1779L13.8805 11.3076L18.0411 7.56348C18.3135 7.31766 18.4135 6.93426 18.2961 6.58663Z" fill="#F3CD03" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
        <path d="M4.19767 11.3049L2.83099 17.2229C2.78867 17.4021 2.80138 17.5899 2.86745 17.7618C2.93352 17.9336 3.04988 18.0816 3.20135 18.1863C3.35281 18.291 3.53232 18.3476 3.71645 18.3487C3.90057 18.3498 4.08075 18.2953 4.23345 18.1924L9.22779 14.8629L14.2221 18.1924C14.3784 18.2962 14.5626 18.3496 14.7501 18.3454C14.9376 18.3413 15.1193 18.2799 15.2709 18.1694C15.4224 18.0589 15.5365 17.9047 15.5978 17.7274C15.659 17.5502 15.6645 17.3584 15.6136 17.178L13.9359 11.3077L18.0965 7.56351C18.2298 7.44353 18.3249 7.28712 18.3702 7.11362C18.4155 6.94012 18.409 6.75715 18.3514 6.58734C18.2938 6.41752 18.1877 6.26831 18.0463 6.15815C17.9048 6.04799 17.7341 5.98172 17.5554 5.96752L12.3262 5.5511L10.0634 0.542085C9.99123 0.380794 9.87394 0.243833 9.72567 0.147729C9.5774 0.0516259 9.40448 0.000488281 9.22779 0.000488281C9.05109 0.000488281 8.87817 0.0516259 8.7299 0.147729C8.58163 0.243833 8.46434 0.380794 8.39219 0.542085L6.12937 5.5511L0.900217 5.96661C0.724525 5.98053 0.556564 6.04477 0.416426 6.15164C0.276288 6.25852 0.169908 6.40351 0.110013 6.56926C0.050118 6.73501 0.0392436 6.91451 0.0786913 7.08628C0.118139 7.25805 0.206238 7.41482 0.332449 7.53783L4.19767 11.3049ZM6.81454 7.33696C6.97826 7.32406 7.1355 7.26735 7.26977 7.17278C7.40404 7.07821 7.51039 6.94927 7.57768 6.79946L9.22779 3.14795L10.8779 6.79946C10.9452 6.94927 11.0515 7.07821 11.1858 7.17278C11.3201 7.26735 11.4773 7.32406 11.641 7.33696L15.2843 7.62588L12.284 10.3262C12.0235 10.561 11.9199 10.9224 12.0153 11.26L13.1646 15.282L9.73777 12.9972C9.58736 12.8963 9.41031 12.8423 9.22916 12.8423C9.04801 12.8423 8.87097 12.8963 8.72055 12.9972L5.13967 15.3848L6.10277 11.215C6.13808 11.0617 6.13334 10.9018 6.08901 10.7508C6.04467 10.5998 5.96223 10.4627 5.84961 10.3528L3.06305 7.63597L6.81454 7.33696Z" fill="#F3CD03" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
        <path d="M4.19767 11.3049L2.83099 17.2229C2.78867 17.4021 2.80138 17.5899 2.86745 17.7618C2.93352 17.9336 3.04988 18.0816 3.20135 18.1863C3.35281 18.291 3.53232 18.3476 3.71645 18.3487C3.90057 18.3498 4.08075 18.2953 4.23345 18.1924L9.22779 14.8629L14.2221 18.1924C14.3784 18.2962 14.5626 18.3496 14.7501 18.3454C14.9376 18.3413 15.1193 18.2799 15.2709 18.1694C15.4224 18.0589 15.5365 17.9047 15.5978 17.7274C15.659 17.5502 15.6645 17.3584 15.6136 17.178L13.9359 11.3077L18.0965 7.56351C18.2298 7.44353 18.3249 7.28712 18.3702 7.11362C18.4155 6.94012 18.409 6.75715 18.3514 6.58734C18.2938 6.41752 18.1877 6.26831 18.0463 6.15815C17.9048 6.04799 17.7341 5.98172 17.5554 5.96752L12.3262 5.5511L10.0634 0.542085C9.99123 0.380794 9.87394 0.243833 9.72567 0.147729C9.5774 0.0516259 9.40448 0.000488281 9.22779 0.000488281C9.05109 0.000488281 8.87817 0.0516259 8.7299 0.147729C8.58163 0.243833 8.46434 0.380794 8.39219 0.542085L6.12937 5.5511L0.900217 5.96661C0.724525 5.98053 0.556564 6.04477 0.416426 6.15164C0.276288 6.25852 0.169908 6.40351 0.110013 6.56926C0.050118 6.73501 0.0392436 6.91451 0.0786913 7.08628C0.118139 7.25805 0.206238 7.41482 0.332449 7.53783L4.19767 11.3049ZM6.81454 7.33696C6.97826 7.32406 7.1355 7.26735 7.26977 7.17278C7.40404 7.07821 7.51039 6.94927 7.57768 6.79946L9.22779 3.14795L10.8779 6.79946C10.9452 6.94927 11.0515 7.07821 11.1858 7.17278C11.3201 7.26735 11.4773 7.32406 11.641 7.33696L15.2843 7.62588L12.284 10.3262C12.0235 10.561 11.9199 10.9224 12.0153 11.26L13.1646 15.282L9.73777 12.9972C9.58736 12.8963 9.41031 12.8423 9.22916 12.8423C9.04801 12.8423 8.87097 12.8963 8.72055 12.9972L5.13967 15.3848L6.10277 11.215C6.13808 11.0617 6.13334 10.9018 6.08901 10.7508C6.04467 10.5998 5.96223 10.4627 5.84961 10.3528L3.06305 7.63597L6.81454 7.33696Z" fill="#F3CD03" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
        <path d="M4.19767 11.3049L2.83099 17.2229C2.78867 17.4021 2.80138 17.5899 2.86745 17.7618C2.93352 17.9336 3.04988 18.0816 3.20135 18.1863C3.35281 18.291 3.53232 18.3476 3.71645 18.3487C3.90057 18.3498 4.08075 18.2953 4.23345 18.1924L9.22779 14.8629L14.2221 18.1924C14.3784 18.2962 14.5626 18.3496 14.7501 18.3454C14.9376 18.3413 15.1193 18.2799 15.2709 18.1694C15.4224 18.0589 15.5365 17.9047 15.5978 17.7274C15.659 17.5502 15.6645 17.3584 15.6136 17.178L13.9359 11.3077L18.0965 7.56351C18.2298 7.44353 18.3249 7.28712 18.3702 7.11362C18.4155 6.94012 18.409 6.75715 18.3514 6.58734C18.2938 6.41752 18.1877 6.26831 18.0463 6.15815C17.9048 6.04799 17.7341 5.98172 17.5554 5.96752L12.3262 5.5511L10.0634 0.542085C9.99123 0.380794 9.87394 0.243833 9.72567 0.147729C9.5774 0.0516259 9.40448 0.000488281 9.22779 0.000488281C9.05109 0.000488281 8.87817 0.0516259 8.7299 0.147729C8.58163 0.243833 8.46434 0.380794 8.39219 0.542085L6.12937 5.5511L0.900217 5.96661C0.724525 5.98053 0.556564 6.04477 0.416426 6.15164C0.276288 6.25852 0.169908 6.40351 0.110013 6.56926C0.050118 6.73501 0.0392436 6.91451 0.0786913 7.08628C0.118139 7.25805 0.206238 7.41482 0.332449 7.53783L4.19767 11.3049ZM6.81454 7.33696C6.97826 7.32406 7.1355 7.26735 7.26977 7.17278C7.40404 7.07821 7.51039 6.94927 7.57768 6.79946L9.22779 3.14795L10.8779 6.79946C10.9452 6.94927 11.0515 7.07821 11.1858 7.17278C11.3201 7.26735 11.4773 7.32406 11.641 7.33696L15.2843 7.62588L12.284 10.3262C12.0235 10.561 11.9199 10.9224 12.0153 11.26L13.1646 15.282L9.73777 12.9972C9.58736 12.8963 9.41031 12.8423 9.22916 12.8423C9.04801 12.8423 8.87097 12.8963 8.72055 12.9972L5.13967 15.3848L6.10277 11.215C6.13808 11.0617 6.13334 10.9018 6.08901 10.7508C6.04467 10.5998 5.96223 10.4627 5.84961 10.3528L3.06305 7.63597L6.81454 7.33696Z" fill="#F3CD03" />
    </svg>
    ],
    1: [<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
        <path d="M18.2961 6.58663C18.2384 6.41682 18.1323 6.26761 17.9908 6.15742C17.8493 6.04723 17.6787 5.98089 17.4999 5.96658L12.2708 5.55107L10.008 0.542056C9.9359 0.380725 9.81869 0.243699 9.67047 0.147514C9.52225 0.0513295 9.34936 9.71158e-05 9.17266 1.37932e-07C8.99597 -9.684e-05 8.82302 0.0509458 8.6747 0.146968C8.52637 0.24299 8.40901 0.379887 8.33677 0.541138L6.07395 5.55107L0.844797 5.96658C0.669105 5.9805 0.501144 6.04474 0.361006 6.15161C0.220868 6.25849 0.114488 6.40348 0.0545932 6.56923C-0.00530196 6.73498 -0.0161763 6.91448 0.0232713 7.08625C0.062719 7.25802 0.150818 7.41479 0.277029 7.5378L4.14134 11.3049L2.77466 17.2229C2.73316 17.402 2.74646 17.5895 2.81283 17.761C2.8792 17.9324 2.99559 18.08 3.14687 18.1845C3.29816 18.2891 3.47737 18.3457 3.66124 18.3471C3.84511 18.3485 4.02516 18.2946 4.17803 18.1924L9.17237 14.8628L14.1667 18.1924C14.3229 18.2961 14.5072 18.3495 14.6947 18.3454C14.8822 18.3413 15.0639 18.2799 15.2155 18.1694C15.367 18.0589 15.4811 17.9047 15.5423 17.7274C15.6036 17.5502 15.6091 17.3584 15.5581 17.1779L13.8805 11.3076L18.0411 7.56348C18.3135 7.31766 18.4135 6.93426 18.2961 6.58663Z" fill="#F3CD03" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
        <path d="M4.19767 11.3049L2.83099 17.2229C2.78867 17.4021 2.80138 17.5899 2.86745 17.7618C2.93352 17.9336 3.04988 18.0816 3.20135 18.1863C3.35281 18.291 3.53232 18.3476 3.71645 18.3487C3.90057 18.3498 4.08075 18.2953 4.23345 18.1924L9.22779 14.8629L14.2221 18.1924C14.3784 18.2962 14.5626 18.3496 14.7501 18.3454C14.9376 18.3413 15.1193 18.2799 15.2709 18.1694C15.4224 18.0589 15.5365 17.9047 15.5978 17.7274C15.659 17.5502 15.6645 17.3584 15.6136 17.178L13.9359 11.3077L18.0965 7.56351C18.2298 7.44353 18.3249 7.28712 18.3702 7.11362C18.4155 6.94012 18.409 6.75715 18.3514 6.58734C18.2938 6.41752 18.1877 6.26831 18.0463 6.15815C17.9048 6.04799 17.7341 5.98172 17.5554 5.96752L12.3262 5.5511L10.0634 0.542085C9.99123 0.380794 9.87394 0.243833 9.72567 0.147729C9.5774 0.0516259 9.40448 0.000488281 9.22779 0.000488281C9.05109 0.000488281 8.87817 0.0516259 8.7299 0.147729C8.58163 0.243833 8.46434 0.380794 8.39219 0.542085L6.12937 5.5511L0.900217 5.96661C0.724525 5.98053 0.556564 6.04477 0.416426 6.15164C0.276288 6.25852 0.169908 6.40351 0.110013 6.56926C0.050118 6.73501 0.0392436 6.91451 0.0786913 7.08628C0.118139 7.25805 0.206238 7.41482 0.332449 7.53783L4.19767 11.3049ZM6.81454 7.33696C6.97826 7.32406 7.1355 7.26735 7.26977 7.17278C7.40404 7.07821 7.51039 6.94927 7.57768 6.79946L9.22779 3.14795L10.8779 6.79946C10.9452 6.94927 11.0515 7.07821 11.1858 7.17278C11.3201 7.26735 11.4773 7.32406 11.641 7.33696L15.2843 7.62588L12.284 10.3262C12.0235 10.561 11.9199 10.9224 12.0153 11.26L13.1646 15.282L9.73777 12.9972C9.58736 12.8963 9.41031 12.8423 9.22916 12.8423C9.04801 12.8423 8.87097 12.8963 8.72055 12.9972L5.13967 15.3848L6.10277 11.215C6.13808 11.0617 6.13334 10.9018 6.08901 10.7508C6.04467 10.5998 5.96223 10.4627 5.84961 10.3528L3.06305 7.63597L6.81454 7.33696Z" fill="#F3CD03" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
        <path d="M4.19767 11.3049L2.83099 17.2229C2.78867 17.4021 2.80138 17.5899 2.86745 17.7618C2.93352 17.9336 3.04988 18.0816 3.20135 18.1863C3.35281 18.291 3.53232 18.3476 3.71645 18.3487C3.90057 18.3498 4.08075 18.2953 4.23345 18.1924L9.22779 14.8629L14.2221 18.1924C14.3784 18.2962 14.5626 18.3496 14.7501 18.3454C14.9376 18.3413 15.1193 18.2799 15.2709 18.1694C15.4224 18.0589 15.5365 17.9047 15.5978 17.7274C15.659 17.5502 15.6645 17.3584 15.6136 17.178L13.9359 11.3077L18.0965 7.56351C18.2298 7.44353 18.3249 7.28712 18.3702 7.11362C18.4155 6.94012 18.409 6.75715 18.3514 6.58734C18.2938 6.41752 18.1877 6.26831 18.0463 6.15815C17.9048 6.04799 17.7341 5.98172 17.5554 5.96752L12.3262 5.5511L10.0634 0.542085C9.99123 0.380794 9.87394 0.243833 9.72567 0.147729C9.5774 0.0516259 9.40448 0.000488281 9.22779 0.000488281C9.05109 0.000488281 8.87817 0.0516259 8.7299 0.147729C8.58163 0.243833 8.46434 0.380794 8.39219 0.542085L6.12937 5.5511L0.900217 5.96661C0.724525 5.98053 0.556564 6.04477 0.416426 6.15164C0.276288 6.25852 0.169908 6.40351 0.110013 6.56926C0.050118 6.73501 0.0392436 6.91451 0.0786913 7.08628C0.118139 7.25805 0.206238 7.41482 0.332449 7.53783L4.19767 11.3049ZM6.81454 7.33696C6.97826 7.32406 7.1355 7.26735 7.26977 7.17278C7.40404 7.07821 7.51039 6.94927 7.57768 6.79946L9.22779 3.14795L10.8779 6.79946C10.9452 6.94927 11.0515 7.07821 11.1858 7.17278C11.3201 7.26735 11.4773 7.32406 11.641 7.33696L15.2843 7.62588L12.284 10.3262C12.0235 10.561 11.9199 10.9224 12.0153 11.26L13.1646 15.282L9.73777 12.9972C9.58736 12.8963 9.41031 12.8423 9.22916 12.8423C9.04801 12.8423 8.87097 12.8963 8.72055 12.9972L5.13967 15.3848L6.10277 11.215C6.13808 11.0617 6.13334 10.9018 6.08901 10.7508C6.04467 10.5998 5.96223 10.4627 5.84961 10.3528L3.06305 7.63597L6.81454 7.33696Z" fill="#F3CD03" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
        <path d="M4.19767 11.3049L2.83099 17.2229C2.78867 17.4021 2.80138 17.5899 2.86745 17.7618C2.93352 17.9336 3.04988 18.0816 3.20135 18.1863C3.35281 18.291 3.53232 18.3476 3.71645 18.3487C3.90057 18.3498 4.08075 18.2953 4.23345 18.1924L9.22779 14.8629L14.2221 18.1924C14.3784 18.2962 14.5626 18.3496 14.7501 18.3454C14.9376 18.3413 15.1193 18.2799 15.2709 18.1694C15.4224 18.0589 15.5365 17.9047 15.5978 17.7274C15.659 17.5502 15.6645 17.3584 15.6136 17.178L13.9359 11.3077L18.0965 7.56351C18.2298 7.44353 18.3249 7.28712 18.3702 7.11362C18.4155 6.94012 18.409 6.75715 18.3514 6.58734C18.2938 6.41752 18.1877 6.26831 18.0463 6.15815C17.9048 6.04799 17.7341 5.98172 17.5554 5.96752L12.3262 5.5511L10.0634 0.542085C9.99123 0.380794 9.87394 0.243833 9.72567 0.147729C9.5774 0.0516259 9.40448 0.000488281 9.22779 0.000488281C9.05109 0.000488281 8.87817 0.0516259 8.7299 0.147729C8.58163 0.243833 8.46434 0.380794 8.39219 0.542085L6.12937 5.5511L0.900217 5.96661C0.724525 5.98053 0.556564 6.04477 0.416426 6.15164C0.276288 6.25852 0.169908 6.40351 0.110013 6.56926C0.050118 6.73501 0.0392436 6.91451 0.0786913 7.08628C0.118139 7.25805 0.206238 7.41482 0.332449 7.53783L4.19767 11.3049ZM6.81454 7.33696C6.97826 7.32406 7.1355 7.26735 7.26977 7.17278C7.40404 7.07821 7.51039 6.94927 7.57768 6.79946L9.22779 3.14795L10.8779 6.79946C10.9452 6.94927 11.0515 7.07821 11.1858 7.17278C11.3201 7.26735 11.4773 7.32406 11.641 7.33696L15.2843 7.62588L12.284 10.3262C12.0235 10.561 11.9199 10.9224 12.0153 11.26L13.1646 15.282L9.73777 12.9972C9.58736 12.8963 9.41031 12.8423 9.22916 12.8423C9.04801 12.8423 8.87097 12.8963 8.72055 12.9972L5.13967 15.3848L6.10277 11.215C6.13808 11.0617 6.13334 10.9018 6.08901 10.7508C6.04467 10.5998 5.96223 10.4627 5.84961 10.3528L3.06305 7.63597L6.81454 7.33696Z" fill="#F3CD03" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
        <path d="M4.19767 11.3049L2.83099 17.2229C2.78867 17.4021 2.80138 17.5899 2.86745 17.7618C2.93352 17.9336 3.04988 18.0816 3.20135 18.1863C3.35281 18.291 3.53232 18.3476 3.71645 18.3487C3.90057 18.3498 4.08075 18.2953 4.23345 18.1924L9.22779 14.8629L14.2221 18.1924C14.3784 18.2962 14.5626 18.3496 14.7501 18.3454C14.9376 18.3413 15.1193 18.2799 15.2709 18.1694C15.4224 18.0589 15.5365 17.9047 15.5978 17.7274C15.659 17.5502 15.6645 17.3584 15.6136 17.178L13.9359 11.3077L18.0965 7.56351C18.2298 7.44353 18.3249 7.28712 18.3702 7.11362C18.4155 6.94012 18.409 6.75715 18.3514 6.58734C18.2938 6.41752 18.1877 6.26831 18.0463 6.15815C17.9048 6.04799 17.7341 5.98172 17.5554 5.96752L12.3262 5.5511L10.0634 0.542085C9.99123 0.380794 9.87394 0.243833 9.72567 0.147729C9.5774 0.0516259 9.40448 0.000488281 9.22779 0.000488281C9.05109 0.000488281 8.87817 0.0516259 8.7299 0.147729C8.58163 0.243833 8.46434 0.380794 8.39219 0.542085L6.12937 5.5511L0.900217 5.96661C0.724525 5.98053 0.556564 6.04477 0.416426 6.15164C0.276288 6.25852 0.169908 6.40351 0.110013 6.56926C0.050118 6.73501 0.0392436 6.91451 0.0786913 7.08628C0.118139 7.25805 0.206238 7.41482 0.332449 7.53783L4.19767 11.3049ZM6.81454 7.33696C6.97826 7.32406 7.1355 7.26735 7.26977 7.17278C7.40404 7.07821 7.51039 6.94927 7.57768 6.79946L9.22779 3.14795L10.8779 6.79946C10.9452 6.94927 11.0515 7.07821 11.1858 7.17278C11.3201 7.26735 11.4773 7.32406 11.641 7.33696L15.2843 7.62588L12.284 10.3262C12.0235 10.561 11.9199 10.9224 12.0153 11.26L13.1646 15.282L9.73777 12.9972C9.58736 12.8963 9.41031 12.8423 9.22916 12.8423C9.04801 12.8423 8.87097 12.8963 8.72055 12.9972L5.13967 15.3848L6.10277 11.215C6.13808 11.0617 6.13334 10.9018 6.08901 10.7508C6.04467 10.5998 5.96223 10.4627 5.84961 10.3528L3.06305 7.63597L6.81454 7.33696Z" fill="#F3CD03" />
    </svg>
    ]

}
export const ClientCard = ({
    img,
    name,
    profession,
    description,
    reiting,
}) => {
    return <div className={cls.preCart}>
        <div className={cls.star}>
            {
                reitings[reiting]
            }
        </div>
        <p className={cls.description}>{description}</p>
        <span className={cls.flex}>
            <img className={cls.img} src={img} alt="" />
            <span className={cls.dollor}>
                <span className={cls.namePre}>{name}<br /></span>
                <span className={cls.perMonth}>{profession}</span>
            </span>
        </span>
    </div>
}

export default ClientCard
