"use client";
import React, { useState, useEffect } from "react";
import { Input } from "@/app/[locale]/components/ui/input";
import { TemplateEmail } from "./email";
import { render } from "@react-email/render";
import Swal from "sweetalert2";
export default function Form({ title,alert }: any) {
  interface FormData {
    name: string;
    mail: string;
    message: string;
  }
  const [data, setData] = React.useState<FormData>({
    name: "",
    mail: "",
    message: "",
  });
  const [inputValue, setInputValue] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "mail") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.(com|net|org|com.ar|ar)$/;
      setIsValidEmail(emailRegex.test(value));
    }
    const nameRegex = /^[A-Za-z\s]*$/;
    if (name === "name" && nameRegex.test(value)) {
      setInputValue(value);
    }
  };
  useEffect(() => {
    const isNameValid = data.name.trim().length > 0;
    const isMailValid = data.mail.trim().length > 0 && isValidEmail;
    const isMessageValid = data.message.trim().length > 0;
    setIsFormValid(isNameValid && isMailValid && isMessageValid);
  }, [data, isValidEmail]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { name, mail, message } = Object.fromEntries(formData);
    const finalHtml = render(
      <TemplateEmail
        username={name as string}
        mail={mail as string}
        text={message as string}
      />,
      { pretty: true }
    );
    const finalText = render(
      <TemplateEmail
        username={name as string}
        mail={mail as string}
        text={message as string}
      />,
      { plainText: true }
    );
   
    if (!isFormValid) {
      Swal.fire({
        title: "Error",
        text: alert[0],
        icon: "error",
        customClass:{
          confirmButton: 'custom-button',
        }
      });
      return;
    }
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          from: "Formulario Web <onboarding@resend.dev>",
          to: ["matiaszuniga93@gmail.com"],
          subject: "Consulta ingresada",
          html: finalHtml,
          text: finalText,
        })
      });
  
      const data = await res.json();
      if(data.message){
        Swal.fire({
          title: "perfecto!",
          text: "Mensaje enviado con éxito",
          icon: "success",
          customClass:{
            confirmButton: 'custom-button',
          }
        }).then((result) => {
          if (result.isConfirmed) {
            location.reload()
          }})
      }
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="flex flex-col items-center ">
      <form
        onSubmit={handleSubmit}
        className="backdrop-filter backdrop-blur-sm bg-opacity-20 lg:w-[55vh] w-[50vh] h-[60vh] flex justify-center items-center flex-col lg:pt-10 pt-32"
      >
        <div className="flex flex-col w-[80%]">
          <div>
            <h1
              className="font-bold lg:text-2xl text-2xl pb-1 cursor-default"
              onMouseDown={(e) => e.preventDefault()}
            >
              {title[0]}
              <br />
              {title[1]}
              💬
            </h1>
          </div>
          <div className="mb-4 border-b border-indigo-500">
            <label className="font-semibold"></label>

            <Input
              autoComplete="off"
              placeholder={`${!isValidEmail ? title[2] : title[3]}`}
              type="text"
              name="name"
              value={inputValue}
              className="pb-2 pt-3 rounded bg-transparent border-none outline-0 w-full"
              onChange={handleInputChange}
              maxLength={50}
            />
          </div>
          <div className="mb-4 border-b border-indigo-500 ">
            <label className="font-semibold"></label>
            <Input
              autoComplete="off"
              placeholder={`${!isValidEmail ? title[4] : title[5]}`}
              type="text"
              name="mail"
              className={`pb-2 pt-3 rounded bg-transparent outline-0 w-full border-none`}
              onChange={handleInputChange}
              maxLength={40}
            />
          </div>
          <div className="mb-4">
            <label className="text-opacity-25">{title[6]}</label>
            <textarea
              name="message"
              className="h-[130px] lg:w-[330px] w-full mt-2 rounded bg-transparent outline-0 border border-indigo-500 resize-none"
              onChange={handleInputChange}
              maxLength={220}
            ></textarea>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button
            type="submit"
            className={`h-10 w-[120px] p-2 m-1 text-neutral-900 dark:text-slate-100 dark:ring-indigo-500 ring-indigo-400 ring-1 rounded-sm ${
              isFormValid ? "" : "opacity-50 cursor-not-allowed ring-neutral-500 dark:ring-neutral-500"
            }`}
          >
            {title[7]}
          </button>
        </div>
      </form>
    </div>
  );
}
