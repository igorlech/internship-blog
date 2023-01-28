import { useNavigate} from "react-router-dom";

export const BackButton = () => {
    let navigate = useNavigate();
    return (
        <>
          <button className="backbutton" onClick={() => navigate(-1)}>Back</button> 
        </>
    );
};