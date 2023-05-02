import Logo from "../../../public/images/inovate-logo.webp";
import LocationIcon from "../../../public/images/location.webp";
import Linkediniconfooter from "../../../public/images/linkediniconfooter.webp";
import Instagramiconfooter from "../../../public/images/instagramiconfooter.webp";
import Whatsappiconfooter from "../../../public/images/whatsappiconfooter.webp";

export const footerData = {
    logo: Logo,
    email: 'contato@inovateambiental.com',
    whatsapp: '(54) 99110-0819',
    adress: `Rua General Osório, 1148 - Sala 109 - Centro, Passo Fundo - RS Cep 99010-140`,
    adressIcon: LocationIcon,
    iconsMidia : [
        {
            id: 1,
            icon: Linkediniconfooter,
            description: 'Link para o Linkedin Inovate Ambiental',
            href: 'https://www.linkedin.com/company/inovateambiental/'
        },
        {
            id: 2,
            icon: Instagramiconfooter,
            description: 'Link para o Instagram Inovate Ambiental',
            href: 'https://www.instagram.com/inovateambiental/'
        },
        {
            id: 3,
            icon: Whatsappiconfooter,
            description: 'Link para o Whatsapp Inovate Ambiental',
            href: 'https://wa.me/5554991100819'
        },
    ],
    menu: [
        {
            id: 1,
            name: 'início',
            href: '#inicio'
        },
        {
            id: 2,
            name: 'serviços',
            href: '#servicos'
        },
        {
            id: 3,
            name: 'depoimentos',
            href: '#depoimentos'
        },
        {
            id: 4,
            name: 'quem somos',
            href: '#quemSomos'
        }
    ]
}