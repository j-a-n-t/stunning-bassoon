import {useEffect, useState} from "react";
import * as Yup from 'yup';
import {useFormik} from "formik";
import {patientForm} from "../types/patientForm.type.tsx";

const useVeterinaryPatients = () => {
    const initialValues: patientForm = {
        alta: '',
        email: '',
        name: '',
        owner: '',
        symptoms: '',
        id: '',
    };
    const initialPatients: patientForm[] = Array.from(JSON.parse(localStorage.getItem('patients') || '[]') || '[]');
    const patientForm = useFormik({
        initialValues,
        validationSchema: Yup.object({
            name: Yup.string().required('El nombre es obligatorio'),
            owner: Yup.string().required('El nombre del propietario es obligatorio'),
            email: Yup.string()
                .required('El correo es obligatorio')
                .email('El correo no es valido'),
            alta: Yup.string().required('La fecha de alta es obligatoria'),
            symptoms: Yup.string().required('Los sintomas son obligatorios')

        }),
        onSubmit: values => handleSubmit(values)
    });
    const [buttonType, setButtonType] = useState<'edit' | 'add'>('add');
    const [patients, setPatients] = useState<Array<patientForm>>(initialPatients);
    const handleSubmit = (values: patientForm) => {
        const existPet = patients.find(pet => pet.id === values.id);
        if (existPet) return EditPatient(values);
        const newPet: patientForm = {
            ...values,
            id: Math.random().toString(36).substring(2) + Date.now().toString(36)
        }
        setPatients([newPet, ...patients]);
        patientForm.resetForm();
    }
    const handleResetValues = () => {
        setButtonType('add');
        patientForm.resetForm();
    }
    const handleDelete = (quoteId: string) => {
        const newPatients: patientForm[] = patients.filter(patient => patient.id !== quoteId);
        setPatients(newPatients);
    }
    const handleEdit = (quoteId: string) => {
        const patient = patients.find(patient => patient.id.includes(quoteId));
        if (!patient) return alert('Paciente no localizado');
        setButtonType('edit');
        patientForm.setValues(patient);
    }
    const EditPatient = (dataPatient: patientForm) => {
        const newPatients: patientForm[] = patients.filter(patient => patient.id !== dataPatient.id);
        setPatients([dataPatient, ...newPatients]);
        setButtonType('add');
        patientForm.resetForm();
    }
    const PersistentPatient = () =>  localStorage.setItem('patients',JSON.stringify(patients));

    useEffect(() => {
        PersistentPatient();
    }, [patients])

    return {
        buttonType,
        patientForm,
        patients,
        handleDelete,
        handleEdit,
        handleResetValues
    }
};

export {useVeterinaryPatients};