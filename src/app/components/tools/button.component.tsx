type Props = {
    textValue: string;
    typeButton: 'submit' | 'button';
    className: string | undefined
    onClick?: (e:any) => void;
}
const ButtonComponent = ({textValue, typeButton, className, onClick}: Props) => {
    return (
        <button className={className}
                onClick={onClick}
                type={typeButton}>
            {textValue}
        </button>
    );
};

export {ButtonComponent};