import { Metadata } from "next"
import Blue from "../_components/Blue"

export const metadata: Metadata = {
        title: 'Contentor Azul - Inovate Ambiental',
        description: 'Resíduo Certo - Contentor Azul:  No contentor Azul você pode colocar resíduos de papel, papelão entre outras embalagens de papel.',
}

export default function Page(){
    return <Blue />
}

