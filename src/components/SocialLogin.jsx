import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth"
import { useContext } from "react"
import { AiOutlineGithub, AiOutlineGoogle } from "react-icons/ai"
import { AuthContext } from "../provider/AuthProvider"

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const SocialLogin = () => {
  const {signInWithGoogle}= useContext(AuthContext)
  
  return (
    <div className="*:w-full space-y-2 mt-6">
      <button onClick={()=>{signInWithGoogle(googleProvider)}} className="btn btn-outline">
        <AiOutlineGoogle className="text-xl"/>
        Login With Google
      </button>
      <button className="btn btn-outline">
        <AiOutlineGithub className="text-xl"/>
        Login with Github
      </button>
    </div>
  )
}

export default SocialLogin
