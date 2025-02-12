import * as jose from "jose";
import {base64url} from "jose";
import toast from "react-hot-toast";

export async function createJWT(payload) {
  const secret = base64url.decode(process.env.NEXT_PUBLIC_SECRET_KEY)
  return await new jose.EncryptJWT(payload)
    .setProtectedHeader({alg: 'dir', enc: 'A128CBC-HS256'})
    .setIssuedAt()
    .setIssuer('/api/auth/login')
    .setAudience('/admin')
    .setExpirationTime('2m')
    .encrypt(secret)
}

export async function decryptJWT(jwtToken) {
  const secret = base64url.decode(process.env.NEXT_PUBLIC_SECRET_KEY)
  try {
    const {payload, protectedHeader} = await jose.jwtDecrypt(jwtToken, secret, {
      issuer: '/api/auth/login',
      audience: '/admin',
    })
    return {payload, protectedHeader};
  } catch (error) {
    toast.error("Session Ended")
    return {}
  }
}