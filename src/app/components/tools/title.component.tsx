type Props = {
    textValue:string;
}
const TitleComponent = ({textValue}:Props) => {
    return (
        <>
            <h2 className='font-black text-3xl text-center'>{textValue}</h2>
        </>
    );
};

export {TitleComponent};