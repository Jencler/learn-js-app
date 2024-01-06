import { AuthLayout } from "../../auth/layout/AuthLayout"

export const LearnJSPage = () => {
  return (
    <AuthLayout>
      <div className="learnjs-container">
        <video width={400} id="myVideo" controls >
          <source src="https://player.vimeo.com/external/190959497.sd.mp4?s=4b4596fdfc68dca5f8ae8476a690c9835409ef58&profile_id=164&oauth2_token_id=57447761" type="video/mp4"/>
            </video>
          </div>
        </AuthLayout>
        )
}
