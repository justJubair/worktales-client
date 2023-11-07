import { AiOutlineGoogle, AiFillGithub } from "react-icons/ai";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
    const {loginWithGoogle} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const handleGoogleLogin = ()=>{
        const toastId = toast.loading("Logging in..");
        loginWithGoogle()
        .then(result=>{
            if (result.user) {
                toast.success("Logged in", {id: toastId});
                if(location.state?.redirectPath){
                  navigate(location.state?.redirectPath)
                }
                else{
      
                  navigate("/");
                }
              }
            
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return(
        
        <div onClick={handleGoogleLogin} className="flex items-center justify-center gap-4 mb-4">
            <div className="flex items-center gap-4 btn ">
             <p className="font-medium"> Login with </p>
            <AiOutlineGoogle size={25}/>
        </div>
            <div className="flex items-center gap-4 btn ">
             <p className="font-medium"> Login with </p>
            <AiFillGithub size={25}/>
        </div>
        </div>
    )}
export default SocialLogin;
