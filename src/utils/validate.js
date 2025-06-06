export const checkValidData=(email, password)=>{
    const isEmailValid=/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email);
    const isPasswordValid=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if(!isEmailValid)
        return "Email Id is not valid.";
    if(!isPasswordValid)
        return "Password is not valid.";
    return null;

}