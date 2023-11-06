import {HeaderComponent} from "./app/components/header.component.tsx";
import {PatientComponent} from "./app/components/Patient.component.tsx";
import {PatientFormComponent} from "./app/components/PatientForm.component.tsx";
import {useVeterinaryPatients} from "./domain/hooks/useVeterinaryPatients.tsx";

const App = () => {
    const {patientForm, patients, buttonType, handleDelete, handleEdit, handleResetValues} = useVeterinaryPatients();
    return (
        <div className='container mx-auto mt-10'>
            <HeaderComponent
                textValue={'Seguimiento pacientes'}
                highlightedTextValue={'Veterinaria'}/>

            <div className='mx-auto md:flex  mt-20'>
                <PatientFormComponent patient={patientForm} buttonType={buttonType} onReset={handleResetValues}/>
                <PatientComponent patients={patients} onDelete={handleDelete} onEdit={handleEdit}/>
            </div>
        </div>
    );
};

export {App};