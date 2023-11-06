import {PatientCardComponent} from "./patientCard.component.tsx";
import {SubTitleComponent} from "./tools/subTitle.component.tsx";
import {TitleComponent} from "./tools/title.component.tsx";
import {patientForm} from "../../domain/types/patientForm.type.tsx";

type Props = {
    patients: Array<patientForm>;
    onDelete: (quoteId: string) => void;
    onEdit: (quoteId: string) => void
}
const PatientComponent = ({patients, onDelete, onEdit}: Props) => {
    return (
        <div className='md:w-1/2 lg:w-3/5'>
            <TitleComponent textValue={patients.length < 1 ? 'Sin pacientes' : 'Listado de Pacientes'}/>
            <SubTitleComponent textvalue='Administra tus' highlightedTextValue={'Pacientes y Citas'}/>
            <div className='h-screen md:overflow-y-scroll mb-10'>
                {patients.map(patient => <PatientCardComponent
                    key={patient.id}
                    dataQuote={patient}
                    onDelete={onDelete}
                    onEdit={onEdit}/>
                )}
            </div>
        </div>
    );
};

export {PatientComponent};