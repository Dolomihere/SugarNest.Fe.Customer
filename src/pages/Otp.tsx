import { useParams } from "react-router-dom"

import { VerifyEmail } from "./layouts/otp/VerifyEmail"
import { ResetPassword } from "./layouts/otp/ResetPassword"
import { Enable2fa } from "./layouts/otp/Enable2fa"

export function OtpPage() {
  const { mode } = useParams();
  const email = localStorage.getItem('email') ?? '';

  if (mode === "emailverify")
    return(
      <VerifyEmail email={email} />
    )

  if (mode === "resetpassword")
    return(
      <ResetPassword />
    )

  if (mode === "enable2fa")
    return(
      <Enable2fa />
    )
}
