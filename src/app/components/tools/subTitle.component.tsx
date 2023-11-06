type Props = {
    textvalue: string;
    highlightedTextValue?: string;
}

const SubTitleComponent = ({textvalue, highlightedTextValue}: Props) => {
    return (
        <>
            <p className='text-lg mt-5 text-center mb-10'>
                {textvalue} {''}
                <span className='text-teal-600 font-bold'>{highlightedTextValue}</span>
            </p>
        </>
    );
};

export {SubTitleComponent};