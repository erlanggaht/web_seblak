import { cookies } from "next/headers";

export default function Login_ssr_true () {
  const coo = cookies()
  const logins = coo.get('msk')
  const login = logins ? logins.value : null

  return login
}
