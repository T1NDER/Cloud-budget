import cloudIcon from "@assets/icons/CloudLogo.png";

export const headerData = {
  logo: {
    icon: cloudIcon,
    text: "CLOUDBUDGET",
    alt: "CloudBudget logo",
  },
  navigation: [
    { id: "nav-overview", label: "ОБЗОР", url: "#overview" },
    { id: "nav-features", label: "ОСОБЕННОСТИ", url: "#features" },
    { id: "nav-technology", label: "ТЕХНОЛОГИЯ", url: "#technology" },
    { id: "nav-contacts", label: "КОНТАКТЫ", url: "#contacts" },
    { id: "nav-login", label: "ВОЙТИ", url: "#login" },
  ],
  loginButton: {
    text: "ВХОД",
    url: "#login",
  },
};

export const heroData = {
  title: "CLOUDBUDGET",
  subtitle:
    "Управление бюджетом в для всех. Всего 69,95 € в месяц после 7-дневной пробной версии за 4,99 €",
  tryButton: {
    text: "ПОПРОБОВАТЬ",
    url: "#trial",
  },
};
