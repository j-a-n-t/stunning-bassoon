type Props = {
    highlightedTextValue?: string;
    textValue: string;
}
const HeaderComponent = ({highlightedTextValue, textValue}: Props) => {
    return (
        <div>
            <h1 className='font-black text-5xl text-center md:w-2/3 mx-auto'>
                {textValue} {''}
                <span className='text-teal-600'>{highlightedTextValue}</span>
            </h1>
        </div>
    );
};

export {HeaderComponent};