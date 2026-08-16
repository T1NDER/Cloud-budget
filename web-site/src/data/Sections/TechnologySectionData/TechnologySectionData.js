import cloudIcon from "@assets/icons/Cloud.png";
import securityIcon from "@assets/icons/Security.png";
import pdfIcon from "@assets/icons/Pdf.png";
import csvIcon from "@assets/icons/Csv.png";

export const technologiesData = {
  title: "Технологии",
  chapters: [
    {
      number: "01",
      icon: cloudIcon,
      title: "Облачное хранение",
      description: "Доступ из любой точки мира с любого устройства",
    },
    {
      number: "02",
      icon: securityIcon,
      title: "Безопасность",
      description: "Вся информация хранится на защищенных облачных серверах",
    },
    {
      number: "03",
      icon: pdfIcon,
      title: "PDF Отчеты",
      description: "Скачивайте ваши отчёты в удобном формате PDF",
    },
    {
      number: "04",
      icon: csvIcon,
      title: "CSV Отчеты",
      description: "Скачивайте ваши отчёты в удобном формате CSV",
    },
  ],
};
