import React from "react";
import Select from "react-select";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Input from "@material-ui/core/Input";
import MainLayout from "../../components/Layout/MainLayout";

interface IFormInput {
  firstName: string;
  lastName: string;
  iceCreamType: { label: string; value: string };
}

const NewRoute = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <MainLayout>
      <div className="border-4 border-cyan-900 p-4">
        <h2>New Route Create</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: true }}
            defaultValue=""
            render={({ field }) => (
              <Input {...field} error={errors?.firstName ? true : false} />
            )}
          />
          <Controller
            name="iceCreamType"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={[
                  { value: "chocolate", label: "Chocolate" },
                  { value: "strawberry", label: "Strawberry" },
                  { value: "vanilla", label: "Vanilla" },
                ]}
              />
            )}
          />
          <input type="submit" />
        </form>
      </div>
    </MainLayout>
  );
};

export default NewRoute;
