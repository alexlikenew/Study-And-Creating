import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import {useForm} from "react-hook-form";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createEditCabin} from "../../services/apiCabins.jsx";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow.jsx";
import useCreateCabin from "./useCreateCabin.jsx";
import useDeleteCabin from "./useDeleteCabin.jsx";
import useEditCabin from "./useEditCabin.jsx";


function CreateCabinForm({cabinToEdit = {}, onCloseModal}) {

    const {id: editId, ...editValues} = cabinToEdit
    const isEditSession = Boolean(editId)

    const {register, handleSubmit, reset, getValues, formState} = useForm({
        defaultValues: isEditSession ? editValues : {}
    })
    const errors = formState.errors;
    const {isCreating, createCabin} = useCreateCabin()
    const {isEditing, editCabin} = useEditCabin()
    const queryClient = useQueryClient()
    const isWorking = isCreating || isEditing;


    function onSumbit(data) {

        const image = typeof data.image === 'string' ? data.image : data.image[0]

        if (isEditSession) {
            editCabin({newCabinData: {...data, image}, id: editId}, {
                onSuccess: () => {
                    reset();
                    onCloseModal?.()
                }
            })
        } else {
            createCabin({...data, image: image}, {
                onSuccess: () => {
                    reset();
                    onCloseModal?.()
                }
            })
        }


    }

    function onError(errors) {
        // console.log(errors)
    }

    return (
        <Form onSubmit={handleSubmit(onSumbit, onError)} type={onCloseModal ? 'modal' : 'regular'}>
            <FormRow label="Cabin name" error={errors?.name?.message}>
                <Input {...register('name', {required: 'This field is required'})} type="text" id="name"/>
            </FormRow>

            <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
                <Input {...register('maxCapacity', {
                    required: 'This field is required',
                    min: {value: 1, message: 'Capacity should be at least 1'}
                })} type="number"
                       id="maxCapacity"/>
            </FormRow>

            <FormRow label="Regular price" error={errors?.regularPrice?.message}>
                <Input {...register('regularPrice', {
                    required: 'This field is required',
                    min: {value: 1, message: 'Capacity shoulkd be at least 1'}
                })} type="number"
                       id="regularPrice"/>
            </FormRow>

            <FormRow label="Discount" error={errors?.discount?.message}>
                <Input {...register('discount', {
                    required: 'This field is required',
                    validate: (value) => value <= getValues().regularPrice || 'Discount should be less than regular price'
                })}
                       type="number" id="discount"
                       defaultValue={0}/>
            </FormRow>

            <FormRow label="Description for website" error={errors?.description?.message}>
                <Textarea {...register('description', {required: 'This field is required'})} type="number"
                          id="description" defaultValue=""/>
            </FormRow>

            <FormRow label="Cabin photo">
                <FileInput {...register('image', {required: isEditSession ? false : 'This field is required'})}
                           id="image"
                           accept="image/*"/>
            </FormRow>

            <FormRow>
                {/* type is an HTML attribute! */}
                <Button variation="secondary" type="reset" onClick={() => onCloseModal?.()}>
                    Cancel
                </Button>
                <Button disabled={isWorking}>{isEditSession ? 'Edit cabin' : 'Add cabin'}</Button>
            </FormRow>
        </Form>
    );
}

export default CreateCabinForm;
