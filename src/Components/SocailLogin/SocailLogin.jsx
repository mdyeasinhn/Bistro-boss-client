import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocailLogin = () => {
    const {googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(res=>{
            console.log(res.user);
            const userInfo = {
                email : res.user.email,
                name : res.user.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(result => {
                console.log(result.data);
                navigate('/')
            })
        })
    }
    return (
        <div>
            <div className="divider">Or</div>
            <div> 
                <button onClick={handleGoogleSignIn} className="btn w-full">
                    <FaGoogle/>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocailLogin;