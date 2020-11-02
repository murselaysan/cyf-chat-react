import React from "react";
import { useForm } from "react-hook-form";

function onSubmitForm(formData) {
  console.log("The status of formData", formData);
  alert("Hi your phone number is: " + formData.phoneNumber);
}

export default function MyForm() {
  const { register, handleSubmit, errors } = useForm();
  console.log("ERR", errors);

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <label>
        Phone Number:
        <input
          type="text"
          name="phoneNumber"
          ref={register({ required: true, minLength: 12 })}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}