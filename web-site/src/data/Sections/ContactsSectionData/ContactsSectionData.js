export const contactsData = {
  title: "Напишите нам",
  description:
    "Остались вопросы или опасения? Просто заполните форму ниже, и наша служба поддержки свяжется с вами в течение 24 часов.",
  form: {
    fields: [
      {
        name: "name",
        type: "text",
        placeholder: "Имя",
      },
      {
        name: "phone",
        type: "tel",
        placeholder: "Телефон",
        pattern: "^\\+?[0-9\\s\\-\\(\\)]{10,}$",
      },
    ],
    button: {
      label: "ОТПРАВИТЬ",
      type: "submit",
    },
  },
};
