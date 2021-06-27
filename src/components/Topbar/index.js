import { TopbarContainer, TopbarTitle, BackButtonTopbar } from "./styles";
import { FaAngleLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/user/userActions";
import { useHistory } from "react-router-dom";
export const Topbar = ({ isBackVisible = false, title, onPress }) => {

  const dispatch = useDispatch();
  let history = useHistory();

  const handleLogout = () => {
    dispatch(startLogout());
    history.push("/");
  }
  return (
    <TopbarContainer>
      {isBackVisible && (
        <BackButtonTopbar onClick={onPress}>
          <FaAngleLeft />
        </BackButtonTopbar>
      )}

      <TopbarTitle>
        <h4>{title}</h4>
       
      </TopbarTitle>
      <button 
      onClick={handleLogout}
      >
                <i className="fas fa-sign-out-alt"></i>
                <span> Logout</span>
      </button>

    </TopbarContainer>
  );
};
