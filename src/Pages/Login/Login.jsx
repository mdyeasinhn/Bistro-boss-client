import { useContext, useEffect,  useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocailLogin from '../../Components/SocailLogin/SocailLogin';

const Login = () => {
    const [desabled, setDesabled] = useState(true);
    const {signIn} = useContext(AuthContext) ;
    const navigate = useNavigate();
    const location = useLocation();

    
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);
    
    const form = location?.state || '/' ;

    const handleLogin = e => {
        e.preventDefault()
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(res => {
            const user = res.user;
            Swal.fire({
                title: "User Login successfull.",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
              navigate(form, {replace: true});
        })
        .catch()
    };


    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDesabled(false)
        }
    };


    return (
        <>
         <Helmet>
                <title>Bistro boss | Login</title>
            </Helmet>
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-1/2 max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered"  />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered"  />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input onBlur={handleValidateCaptcha} type="text"  placeholder="type the captcha above" name="captcha" className="input input-bordered"  />
                           

                        </div>
                        <div className="form-control mt-6">
                            {/* TODO: apply desabled for re captcha */}
                            <input disabled={false} className="btn  bg-[#D1A054]" type="submit" value="Login" />
                        </div>
                    <p className='px-12'><small>New Here? <Link className='text-[#D1A054]' to="/signup">Create an account</Link></small></p>
                    <SocailLogin></SocailLogin>
                    </form>
                </div>
            </div>
        </div></>
    );
};

export default Login;