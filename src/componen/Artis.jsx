import { useParams } from "react-router-dom";

const Artis = () => {
let params = useParams()

    return(
        <>
        Ini adalah {params.name}
        </>
    )
}

export default Artis;