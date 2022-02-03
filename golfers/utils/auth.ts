import { hash, compare } from 'bcryptjs'

export const validateEmail = (email: string) => {
  if (email.length < 1) {
    return true
  }
  const EMAIL_REGEX = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}')

  let check = EMAIL_REGEX.test(email)
  console.log(check, email)

  return check ? false : true
}

export const validatePassword = (pw: string) => {
  if (pw.length < 1) {
    return true
  }
  const PW_REGEX = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})')

  let check = PW_REGEX.test(pw)
  return check ? false : true
}

export const hashPassword = async (password: string) => {
  let hashedPassword = await hash(password, 12)
  return hashedPassword
}

export const comparePassword = async (
  password: string,
  hashedPassword: string
) => {
  return compare(password, hashedPassword)
}
