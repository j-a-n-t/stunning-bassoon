import {ButtonComponent} from "./tools/button.component.tsx";
import {FormikProps,} from "formik/dist/types";
import {InputDateComponent} from "./tools/inputs/InputDate.component.tsx";
import {InputTextComponent} from "./tools/inputs/InputText.component.tsx";
import {SubTitleComponent} from "./tools/subTitle.component.tsx";
import {TextAreaComponent} from "./tools/inputs/textArea.component.tsx";
import {TitleComponent} from "./tools/title.component.tsx";
import {patientForm} from "../../domain/types/patientForm.type.tsx";

type Props = {
    buttonType: 'edit' | 'add';
    patient: FormikProps<patientForm>;
    onReset: () => void;
}
const PatientFormComponent = ({patient, buttonType, onReset}: Props) => {
    return (
        <div className='md:w-1/2 lg:w-2/5'>
            <TitleComponent textValue={'Seguimiento Pacientes'}/>
            <SubTitleComponent
                textvalue={'Añade tus pacientes'}
                highlightedTextValue={'Administralos'}/>

            <div className='bg-white shadow-md rounded py-4 px-5'>
                <ButtonComponent
                    textValue={'Limpiar Datos'}
                    typeButton={'button'}
                    className={'transition-colors uppercase duration-300 bg-teal-600 text-white font-bold hover:bg-teal-700 md:w-1/2 w-full p-1.5 rounded'}
                    onClick={onReset}/>
                <form className='py-10' onSubmit={patient.handleSubmit}>
                    <InputTextComponent
                        labelText={'Nombre mascota'}
                        name={'name'}
                        textPlaceholder={'Nombre de la Mascota'}
                        touched={patient.touched.name}
                        value={patient.values.name}
                        valueError={patient.errors.name}
                        onChange={patient.handleChange}
                        onBlur={patient.handleBlur}/>
                    <InputTextComponent
                        labelText={'Nombre propietario'}
                        name={'owner'}
                        textPlaceholder={'Nombre del Propietario'}
                        touched={patient.touched.owner}
                        value={patient.values.owner}
                        valueError={patient.errors.owner}
                        onBlur={patient.handleBlur}
                        onChange={patient.handleChange}/>
                    <InputTextComponent
                        labelText={'Correo Electronico'}
                        name={'email'}
                        textPlaceholder={'Ingresa Correo Electronico'}
                        touched={patient.touched.email}
                        value={patient.values.email}
                        valueError={patient.errors.email}
                        onBlur={patient.handleBlur}
                        onChange={patient.handleChange}/>
                    <InputDateComponent
                        labelText={'Fecha Alta'}
                        name={'alta'}
                        onBlur={patient.handleBlur}
                        onChange={patient.handleChange}
                        touched={patient.touched.alta}
                        value={patient.values.alta}
                        valueError={patient.errors.alta}/>
                    <TextAreaComponent
                        labelText={'Sintomas'}
                        name={'symptoms'}
                        onBlur={patient.handleBlur}
                        onChange={patient.handleChange}
                        textPlaceholder={'Ingresa los sintomas'}
                        touched={patient.touched.symptoms}
                        value={patient.values.symptoms}
                        valueError={patient.errors.symptoms}/>
                    <ButtonComponent
                        textValue={buttonType === 'add' ? 'Agregar Paciente' : 'Editar paciente'}
                        typeButton={'submit'}
                        className={'transition-colors uppercase duration-300 bg-teal-600 text-white font-bold hover:bg-teal-700 w-full p-3 rounded'}/>
                </form>
            </div>
        </div>
    );
};

export {PatientFormComponent};