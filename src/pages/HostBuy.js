import { render } from "react-dom";
import { useForm } from "react-cool-form";

import "./HostBuy.css";

const Field = ({ label, id, ...rest }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input id={id} {...rest} />
  </div>
);


const Textarea = ({ label, id, ...rest }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <textarea id={id} {...rest} />
  </div>
);

function HostBuy() {
  const { form } = useForm({
    defaultValues: { firstName: "", lastName: "", framework: "", message: "" },
    onSubmit: (values) => alert(JSON.stringify(values, undefined, 2))
  });

  return (
    <form ref={form}>
      <Field label="Store Name" id="first-name" name="firstName" />
      <Field label="Item Name" id="last-name" name="lastName" />
      <Field label="Price per unit" id="last-name" name="lastName" />
      <Field label="Minimum Required Buy Ins" id="last-name" name="lastName" />
      <Textarea label="Description" id="message" name="message" />
      <input type="submit" />
    </form>
  );
}

export default HostBuy;