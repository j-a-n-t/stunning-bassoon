import {ChangeEvent} from "react";

type Props = {
    labelText: string;
    name: string;
    touched:boolean | undefined;
    value:string
    valueError: string | undefined;
    textPlaceholder?: string;
    onBlur?: ({target}: ChangeEvent<HTMLTextAreaElement>) => void;
    onChange: ({target}:ChangeEvent<HTMLTextAreaElement>)=> void;
}
const TextAreaComponent = ({name, labelText, textPlaceholder,value,onChange,valueError,touched,onBlur}: Props) => {
    return (
        <div className='mb-5'>
            <label
                className='block text-gray-700 uppercase font-bold'
                htmlFor={name}>
                {labelText}
            </label>
            <textarea
                className='resize-none transition-shadow duration-300  outline-0 border-2 focus:ring-2 ring-teal-300 w-full p-1 mt-2 rounded placeholder-gray-400'
                id={name}
                name={name}
                onBlur={onBlur}
                onChange={onChange}
                placeholder={textPlaceholder}
                value={value}
            />
            {(valueError && touched) && <label className='animate__animated animate__fadeInDown text-xs font-normal text-red-500'>{valueError}</label>}
        </div>
    );
};

export {TextAreaComponent};