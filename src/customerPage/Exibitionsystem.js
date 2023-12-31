import './Exibitionsystem.css';
import { useNavigate } from 'react-router';
import axios from 'axios';
// axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
function Exibitionsystem() {
    const navigate = useNavigate();
    const navigatetoregister = () =>{
        navigate('/customer/exibition/register/*');
      }
    const navigatetomanagereg = () =>{
        navigate('/customer/exibition/manage/*');
    }
    const navigatetologin = () =>{
        navigate('/*');
    }
    const navigatetohome = () =>{
        navigate('/customer/*');
    }
  return (
    <div className="Exibitionsystem">
        <header className="Exibitionsystemhead">
            <h1>Exhibitionsystem</h1>
        </header>

        <form className = "Menubar1">
            <div>
                
                <button onClick = {navigatetoregister}>register</button>
            </div>
            <div>
                <button onClick = {navigatetomanagereg}>manage</button>
            </div>
            <div>
                <button onClick = {navigatetohome} >home</button>
            </div>
            <div>
                <button onClick = {navigatetologin} >sign out</button>
            </div>
        </form>

    </div>
  );
}
export default Exibitionsystem;