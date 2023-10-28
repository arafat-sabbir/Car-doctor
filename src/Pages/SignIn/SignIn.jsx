import { useContext } from "react";
import image from "../../assets/images/login/login.svg"
import { Context } from "../../Components/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import{FcGoogle} from "react-icons/fc"
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const {signInUser,googleSignIn} = useContext(Context)
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signInUser(email,password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(result => {
            console.log(result.user)
            navigate(location.state? location.state:'/')
        })
        .catch(error => console.log(error))
    }
    return (
        <div className="hero h-[85vh]">
            <div className="flex gap-40 flex-col lg:flex-row justify-center items-center">
                <div className="w-1/2border-2">
                    <img src={image} alt="" />
                </div>
                <div className="w-1/2">
                    <div className="rounded-xl flex-shrink-0  border-2 pt-12">
                        <h1 className="text-5xl font-bold text-center">Sign In now!</h1>
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Sign In" className=" bg-[#ff3811] py-4 text-white rounded-xl" />
                            </div>
                        </form>
                        <div className="flex items-center flex-col">
                        <p className=" font-medium mb-6">Or Sign In with</p>
                        <button onClick={handleGoogleSignIn} className="p-3 bg-gray-400 rounded-full bg-opacity-30 mb-4"><FcGoogle></FcGoogle></button>
                        </div>
                        <p className="text-center font-medium mb-6">New To CarDoctor ? <Link to={'/signUp'} className="link text-red-500">Sign UP</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;