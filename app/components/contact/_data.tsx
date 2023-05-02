import EmailIcon from "../../../public/images/emailicon.webp";
import NumberIcon from "../../../public/images/numbericon.webp";
import WhatsAppIcon from "../../../public/images/whatsapp.webp";
import LocationIcon from "../../../public/images/location.webp";
import Maps from "../../../public/images/maps.webp";
import Waze from "../../../public/images/waze.webp";

export const contactData = {
  title: "contato",
  maps: Maps,
  waze: Waze,
  content: [
    {
      id: 1,
      itemContact: "contato@inovateambiental.com",
      icon: EmailIcon,
    },
    {
      id: 2,
      itemContact: "(54) 3314-1404",
      icon: NumberIcon,
    },
    {
      id: 3,
      itemContact: "(54) 99110-0819",
      icon: WhatsAppIcon,
    },
    {
      id: 4,
      itemContact:
        'Rua General Osório, 1148 - Sala 109 - Centro, Passo Fundo - RS Cep 99010-140',
      icon: LocationIcon,
    },
  ],
};
