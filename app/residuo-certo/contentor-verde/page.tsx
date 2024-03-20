import { Metadata } from "next"
import Green from "../_components/Green"

export const metadata: Metadata = {
        title: 'Contentor Verde - Inovate Ambiental',
        description: 'Resíduo Certo - No contentor verde você pode depositar resíduos de vidro, vidros em geral.',
}

export default function Page(){
    return <Green />
}

