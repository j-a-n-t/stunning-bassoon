import {LabelComponent} from "./tools/label.component.tsx";
import {patientForm} from "../../domain/types/patientForm.type.tsx";
import {ButtonComponent} from "./tools/button.component.tsx";

type Props = {
    dataQuote: patientForm;
    onDelete: (quoteId: string) => void;
    onEdit: (quoteId: string) => void;
}
const PatientCardComponent = ({dataQuote, onDelete, onEdit}: Props) => {
    return (
        <div className='w-100l bg-white mx-3 mt-2 py-4 px-5 rounded shadow-lg'>
            <LabelComponent isCapitalize={false} textValue={dataQuote.id} title={'Cita ID: '}/>
            <LabelComponent isCapitalize={true} textValue={dataQuote.name} title={'Nombre: '}/>
            <LabelComponent isCapitalize={true} textValue={dataQuote.owner} title={'Propietario: '}/>
            <LabelComponent isCapitalize={false} textValue={dataQuote.email} title={'Correo: '}/>
            <LabelComponent isCapitalize={false} textValue={dataQuote.alta} title={'Alta: '}/>
            <LabelComponent isCapitalize={false} textValue={dataQuote.symptoms} title={'Sintomas: '}/>
            <div className='flex justify-end gap-2.5 mx-5 mt-3'>
                <ButtonComponent
                    textValue={'Editar cita'}
                    typeButton={'button'}
                    className={'transition-colors duration-300 bg-teal-600 py-1 px-3 text-white cursor-pointer rounded shadow-lg hover:bg-teal-800'}
                    onClick={() => onEdit(dataQuote.id)}/>
                <ButtonComponent
                    textValue={'Eliminar cita'}
                    typeButton={'button'}
                    className={'transition-colors duration-300 bg-red-700 py-1 px-3 text-white cursor-pointer rounded shadow-lg hover:bg-red-800'}
                    onClick={() => onDelete(dataQuote.id)}/>
            </div>
        </div>
    );
};

export {PatientCardComponent};