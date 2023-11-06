import {ChangeEvent} from "react";

type Props = {
    labelText: string;
    name: string;
    touched:boolean | undefined;
    value: string;
    valueError: string | undefined;
    textPlaceholder?: string;
    onBlur?: ({target}: ChangeEvent<HTMLInputElement>) => void;
    onChange: ({target}: ChangeEvent<HTMLInputElement>) => void;
}
const InputTextComponent = ({name, labelText, textPlaceholder, value, onChange, valueError,onBlur,touched}: Props) => {
    return (
        <div className='mb-5'>
            <label
                className='block text-gray-700 uppercase font-bold'
                htmlFor={name}>
                {labelText}
            </label>
            <input
                className='transition-shadow duration-300 normal-case  outline-0 border-2 focus:ring-2 ring-teal-300 w-full p-1 mt-2 rounded placeholder-gray-400'
                id={name}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={textPlaceholder}
                type='text'
                value={value}
            />
            {(valueError && touched) && <label className='animate__animated animate__fadeInDown text-xs font-normal text-red-500'>{valueError}</label>}
        </div>
    );
};

export {InputTextComponent};