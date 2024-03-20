import { Metadata } from "next"
import Red from "../_components/Red"
import Pink from "../_components/Pink"

export const metadata: Metadata = {
        title: 'Contentor Rosa - Inovate Ambiental',
        description: 'Resíduo Certo - Contentor Rosa:  No contentor rosa você pode depositar resíduos eletronicos, pilhas baterias, celulares etc.',
}

export default function Page(){
    return <Pink />
}

