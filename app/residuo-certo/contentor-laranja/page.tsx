import { Metadata } from "next"
import Orange from "../_components/Orange"

export const metadata: Metadata = {
        title: 'Contentor Laranja - Inovate Ambiental',
        description: 'Resíduo Certo - Contentor Laranja:  No contentor laranja você pode colocar suas baterias usadas, resíduo de solvente e resíduos de laboratório.',
}

export default function Page(){
    return <Orange />
}

