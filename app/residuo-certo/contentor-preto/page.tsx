import { Metadata } from "next"
import Black from "../_components/Black"

export const metadata: Metadata = {
        title: 'Contentor Black - Inovate Ambiental',
        description: 'Resíduo Certo - Contentor Black:  No contentor Black você pode colocar resíduos de madeira em geral.',
}

export default function Page(){
    return <Black />
}

