import cardOne from "@assets/images/CardOne.jpg";
import cardTwo from "@assets/images/CardTwo.jpg";
import cardThree from "@assets/images/CardThree.jpg";

export const opportunityData = {
  title: "Возможности",
  cardContent: [
    {
      icon: cardOne,
      iconAlt: "Иконка валют и карт",
      title: "Поддерживает все валюты и карты",
      description:
        "Мы поддерживаем все популярные валюты и полностью настраиваем, чтобы добавить",
      link: {
        label: "Подробнее",
        url: "#currencies",
      },
    },
    {
      icon: cardTwo,
      iconAlt: "Иконка мобильного управления",
      title: "Управляйте своими расходами на ходу",
      description:
        "Вы можете получить доступ к своей учетной записи из любой точки мира на любом устройстве",
      link: {
        label: "Подробнее",
        url: "#mobile",
      },
    },
    {
      icon: cardThree,
      iconAlt: "Иконка облачного хранения",
      title: "Управление бюджетом осуществляется в облаке",
      description:
        "Наше приложение создано для того, чтобы вы могли управлять управлять своим бюджетом",
      link: {
        label: "Подробнее",
        url: "#cloud",
      },
    },
  ],
};
