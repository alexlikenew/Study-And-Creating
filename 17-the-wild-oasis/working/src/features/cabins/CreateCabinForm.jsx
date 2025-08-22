import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import {useForm} from "react-hook-form";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createCabin} from "../../services/apiCabins.jsx";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow.jsx";


function CreateCabinForm() {
    const {register, handleSubmit, reset, getValues, formState} = useForm()
    const errors = formState.errors;

    const queryClient = useQueryClient()

    const {mutate, isPending: isCreating} = useMutation({
        mutationFn: createCabin,
        onSuccess: () => {
            toast.success('New cabin succesfully created')
            queryClient.invalidateQueries(({queryKey: ['cabins']}))
            reset()
        },
        onError: (err) => toast.error(err.message)
    })


    function onSumbit(data) {

        mutate({...data, image: data.image.at(0)})
    }

    function onError(errors) {
        // console.log(errors)
    }

    return (
        <Form onSubmit={handleSubmit(onSumbit, onError)}>
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
                <FileInput {...register('image', {required: 'This field is required'})} id="image"
                           accept="image/*"/>
            </FormRow>

            <FormRow>
                {/* type is an HTML attribute! */}
                <Button variation="secondary" type="reset">
                    Cancel
                </Button>
                <Button disabled={isCreating}>Add cabin</Button>
            </FormRow>
        </Form>
    );
}

export default CreateCabinForm;
