import { useNavigate, useRouteError } from "react-router-dom";
import errorImage from "../../assets/images/404.gif";
export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  const goToHomeHandler = () => {
    navigate("/");
  };
  return (
    <div className="error-area">
      <div>
        <img src={errorImage} alt="Error Image" />
        <p className="error-text work-sans">
          {error.statusText || error.message}
        </p>
        <div className="text-center">
          <button className="error-button work-sans" onClick={goToHomeHandler}>
            Go To Home
          </button>
        </div>
      </div>
    </div>
  );
}
