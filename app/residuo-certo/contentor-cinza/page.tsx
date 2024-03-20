import { Metadata } from "next"
import Orange from "../_components/Orange"
import Grey from "../_components/Grey"

export const metadata: Metadata = {
        title: 'Contentor Cinza - Inovate Ambiental',
        description: 'Resíduo Certo - Contentor cinza:  No contentor cinza você pode colocar resíduos não recicláveis como papel contaminado, plástico contamindo, bitucas de cigarro, etc .',
}

export default function Page(){
    return <Grey />
}

