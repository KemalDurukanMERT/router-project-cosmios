import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import NotFound from "./NotFound";

const PersonDetail = () => {

    const navigate  = useNavigate()


  //! navigate ile gonderilen state'i yakalamak icin useLocation Hook'u kullanilabilir.
  //! Bu durumda veri, state ile geldigi icin yeniden fetch yapilmasina gerek kalmaz

//   const { state: person } = useLocation()

//   console.log(person)

    const { id } = useParams();


    const [person, setPerson] = useState("")
    const [error, setError] = useState(false)


    const getPerson = async () => {

        try {

            const response = await axios.get(`https://reqres.in/api/users/${id}`)
            console.log(response.data.data)
            setPerson(response.data.data)
            
        } catch (error) {
            console.log(error)
            setError(true)
        }

    }

    useEffect(() => {
        getPerson()
    }, [])


    if (error){
        // Hata Sayfasina yonlendir
        return <NotFound />
    }


    return (
        <div className="container text-center">
            <h3>{person?.first_name} {person?.last_name}</h3>
            <img src={person?.avatar} />
            <p>{person?.email}</p>
            <div>
                <button className="btn btn-success me-2" onClick={()=> navigate("/")}>Go Home</button>
                <button className="btn btn-warning" onClick={() => navigate(-1)} >Go Back</button>
            </div>
        </div>
    )
}

export default PersonDetail;