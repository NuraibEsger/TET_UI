import { useFormik } from "formik";
import { loginSchema } from "../validations/loginSchema";

export default function useSignIn() {
    const formik = useFormik({
        initialValues: {
            number: "+994",
            password:"Şifrəniz"
        },
        onSubmit:(values) => {
            return console.log("oldu");
        },
        validationSchema: loginSchema
    })

    return {formik};
}