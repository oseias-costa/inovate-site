import { Metadata } from "next"
import Yellow from "../_components/Yellow"

export const metadata: Metadata = {
        title: 'Contentor Amarelo - Inovate Ambiental',
        description: 'Resíduo Certo - Contentor Amarelo:  No contentor amarelo você pode colocar alumínio, ferro entre outros metais.',
}

export default function Page(){
    return <Yellow />
}

