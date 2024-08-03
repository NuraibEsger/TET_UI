import { useState } from "react";
import classes from "../assets/css/register.module.css";
import SignUp from "../components/Register/SignUp";

export default function RegisterPage() {
  const [page, setPage] = useState(0);

  const FormTitles = [
    "Xoş gəlmisiniz!",
    "Peşəkar Məlumatlar",
    "Təhsil",
    "Haqqımızda necə eşitdiniz?",
  ];

  var paragraph = "Bizə bir az özünüz haqqında məlumat verin.";

  const [formDate, setFormData] = useState({
    name: "",
    surname: "",
    birthday: "",
    gender: "",
    nationality: "",
    number: "",
    email: "",
    experience: "",
    existence: "",
    language: "",
    languageLevel: "",
    languageCertificate: "",
    education: "",
    specialty: "",
    startDate: "",
    endDate: "",
    aboutUs: "",
  });

  return (
    <section className={classes.register}>
      <form className={classes.form}>
        <div className={classes.header}>
          <h1>{FormTitles[0]}</h1>
          <p>{paragraph}</p>
        </div>
        <SignUp />
      </form>
    </section>
  );
}
