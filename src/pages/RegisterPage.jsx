import { useState } from "react";
import classes from "../assets/css/register.module.css";
import SignUp from "../components/Register/SignUp";
import Button from "../components/Button";
import Information from "../components/Register/Information";

export default function RegisterPage() {
  const [page, setPage] = useState(0);

  const FormTitles = [
    "Xoş gəlmisiniz!",
    "Peşəkar Məlumatlar",
    "Təhsil",
    "Haqqımızda necə eşitdiniz?",
  ];

  var paragraph = "Bizə bir az özünüz haqqında məlumat verin.";

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUp />;
    } else if (page === 1) {
      return <Information />;
    }
    // Add more conditions here if you have more pages
  };

  const handleFormSubmit = (e) => {
    if (page < FormTitles.length - 1) {
      setPage((currPage) => currPage + 1);      
    } else {
      e.preventDefault();
      // Handle final form submission
      console.log("Final form data:");
    }
  };

  return (
    <section className={classes.register}>
      <form className={classes.form} onSubmit={handleFormSubmit}>
        <div className={classes.header}>
          <h1>{FormTitles[page]}</h1>
          <p>{paragraph}</p>
        </div>
        {PageDisplay()}
        <Button type={page === FormTitles.length - 1 ? "submit" : "button"} onClick={() => page < FormTitles.length - 1 && handleFormSubmit()
        }>
          {page === FormTitles.length - 1 ? "Submit" : "Davam et"}
        </Button>
      </form>
    </section>
  );
}
