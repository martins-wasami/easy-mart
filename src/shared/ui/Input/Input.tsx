import { useState, type ChangeEvent, type InputHTMLAttributes, type ReactNode } from "react";
import styles from './Input.module.scss';
import { cn } from "@/shared/lib";
import HideIcon from "@/shared/assets/icons/Hide.svg?react";
import ShowIcon from "@/shared/assets/icons/Show.svg?react";
import { Button } from "../button/Button";


type HTMLInputType = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

interface InputProps extends HTMLInputType {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    rounded?: boolean;
    Icon?: ReactNode;
    disabled?: boolean;
}


export const Input = (props: InputProps) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [focus, setFocus] = useState<boolean>(false);


    const {
        className,
        value,
        onChange,
        rounded = false,
        Icon,
        disabled = false,
        type = 'text',
        ...rest } = props;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    } 
    
   const handleFocus = () => {
        setFocus(true);
    }

   const handleBlur = () => {
        setFocus(false);
    }

    const togglePassword = () => {
        setShowPassword(prev => !prev);
    }

    return (
        <div className={cn(styles.inputContainer, className, {
            [styles.rounded]: rounded,
            [styles.disabled]: disabled,
            [styles.focus]: focus,
        })}>
            {Icon}
            <input 
            {...rest} 
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            type={showPassword && type === 'password' ? 'text' : type} 
            disabled={disabled} 
            className={cn(styles.input, {
                [styles.disabled]: disabled,
            })} />

            {type === 'password' && (
                <Button theme="ghost" type="button" className={styles.toggleVisibility} onClick={togglePassword}>
                    {showPassword ? <HideIcon /> : <ShowIcon />}
                </Button>
            )}
        </div>
    )

}