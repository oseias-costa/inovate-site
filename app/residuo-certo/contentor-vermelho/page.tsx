import { Metadata } from "next"
import Red from "../_components/Red"

export const metadata: Metadata = {
        title: 'Contentor Vermelho - Inovate Ambiental',
        description: 'Resíduo Certo - Contentor Vermelho: você pode colocar isopor, embalagens plásticas, garrafas pets e outros plásticos em geral.',
}

export default function Page(){
    return <Red />
}

