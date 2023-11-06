type Props = {
    isCapitalize:boolean;
    textValue:string;
    title:string;
}
const LabelComponent = ({isCapitalize,textValue,title}:Props) => {
    return (
       <>
           <p className='text-teal-600 font-bold mb-2 uppercase'>
               {title} {''} <span className={`text-gray-500 font-normal ${isCapitalize ? 'capitalize' : 'normal-case'}`}>{textValue}</span>
           </p>
       </>
    );
};

export {LabelComponent};