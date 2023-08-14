import { InputForm } from "./atoms/InputForm";

// eslint-disable-next-line react/prop-types
export function PageForms({ numPage, inputs = [] }) {

  return (
    <section className={`page${numPage}`}>
      {inputs.map((e, i) => {
        return (
          <InputForm
            key={i}
            name={e.name}
            label={e.label}
            type={e.type} />
        );
      })}

    </section>
  );
}
