import { PageForms } from "./PageForms";

function FormSteps({ numPage }) {
  switch (numPage) {
    case 1:
      return (
        <PageForms numPage={1} inputs={[{ name: "userName", label: "Nombre", type: "text" },
        { name: "userLastName", label: "Apellido", type: "text" }
        ]} />);

    case 2:
      return (
        <PageForms numPage={2} inputs={[
          {
            name: "userPhone",
            label: "Telfono",
            type: "tel"
          },
          {
            name: "userEmail",
            label: "Correo",
            type: "email"
          }
        ]} />);
    case 3:
      return (
        <PageForms numPage={3} inputs={[
          {
            name: "userPassword",
            label: "Contraseña",
            type: "password"
          },
          {
            name: "userConfirmPassword",
            label: "Confirma tu contraseña",
            type: "password"
          }
        ]} />);
    default:

      <PageForms numPage={1} inputs={[{ name: "userName", label: "Nombre", type: "text" },
      { name: "uscalerLastName", label: "Apellido", type: "text" }
      ]} />;
      break;
  }
}
