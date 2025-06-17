import { createNewProduct } from "@/action/create-new-product";
import { formFields } from "@/data/form-fields";

export default function NewProductPage() {
  return (
    <div>
      <form action={createNewProduct}>
        {formFields.map((field, index) => (
          <div key={index}>
            <label htmlFor={field.name}>{field.label}</label>
            <input type={field.input} name={field.name} />
          </div>
        ))}

        <button type="submit">Create</button>
      </form>
    </div>
  );
}
