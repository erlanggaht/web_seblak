import { parseCookies } from "nookies";

export default function Login_csr_true() {
    const msk = parseCookies().msk
    return msk 
}
