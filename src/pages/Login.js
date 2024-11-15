import { El } from "../utils/create-element";
import { router } from "../routes/router";

export default function login() {
  document.title = "Login";
  const back = El({
    element: "img",
    src: "./src/assets/icons/back.svg",
    className: "cursor-pointer",
    eventListener: [
      {
        event: "click",
        callback: () => router.navigate("/Home"),
      },
    ],
  });
  const header = El({
    element: "div",
    children: back,
    className: "w-full h-[56px] items-center grid",
  });

  const logo = El({
    element: "img",
    src: "./src/assets/icons/big-logo.svg",
    className: "w-[54px] h-[81px] mt-[76px] mb-[118px] mx-auto",
  });
  const title = El({
    element: "h1",
    children: "Login to Your Account",
    className: "font-semibold text-[32px] text-center",
  });
  const inputsEmail = El({
    element: "div",
    children: [
      El({
        element: "img",
        src: "./src/assets/icons/email.svg",
        className: "w-[14px] h-[10.5px]",
      }),
      El({
        element: "input",
        type: "email",
        placeholder: "Email",
        id: "email",
        className:
          "ml-[4px] bg-transparent h-[37px] w-full order-none outline-none",
      }),
    ],
    className:
      "w-full h-[37px] items-center flex bg-[#FAFAFA] px-[13px] rounded-[4px]",
  });
  const inputsPassword = El({
    element: "div",
    children: [
      El({
        element: "img",
        src: "./src/assets/icons/lock.svg",
        className: "w-[14px] h-[14px]",
      }),
      El({
        element: "input",
        type: "password",
        placeholder: "Password",
        id: "pass",
        className:
          "ml-[4px] bg-transparent h-[37px] w-full order-none outline-none ",
      }),
      El({
        element: "img",
        src: "./src/assets/icons/eye.svg",
        className: "cursor-pointer",
        eventListener: [
          {
            event: "click",
            callback: () => {
              const passField = document.getElementById("pass");
              if (passField.type === "password") {
                passField.type = "text";
              } else {
                passField.type = "password";
              }
            },
          },
        ],
      }),
    ],
    className:
      "w-full h-[37px] items-center flex bg-[#FAFAFA] px-[13px] rounded-[4px] ",
  });
  const rememberMe = El({
    element: "p",
    children: "Remember me",
    className: "font-normal text-[16px]",
  });
  const rememberMeBox = El({
    element: "input",
    type: "checkbox",
    id: "remember",
    className: "w-[16px] ",
  });
  const remember = El({
    element: "div",
    children: [rememberMeBox, rememberMe],
    className:
      "mt-[40px] h-[24px] w-[130px] mx-auto flex items-center gap-x-[8px]",
  });
  const checkEmail = document.getElementById("email");
  const checkPass = document.getElementById("pass");
  const submit = El({
    element: "input",
    type: "submit",
    id: "submit",
    value: "Sign In",
    className:
      "w-full bg-[#212529] h-[47px] font-normal text-[14px] text-white rounded-[30px] mt-[200px] opacity-70 cursor-pointer",
    eventListener: [
      {
        event: "click",
        callback: () => {
          if (checkEmail.value.length === 0 || checkPass.value.length === 0) {
          }
        },
      },
    ],
  });
  const form = El({
    element: "form",
    children: [inputsEmail, inputsPassword, remember, submit],
    className: "grid gap-[21px] mt-[48px] w-[380px]",
  });
  const body = El({
    element: "div",
    children: [logo, title, form],
    className: "grid w-full justify-center",
  });
  const loginPage = El({
    element: "section",
    children: [header, body],
    className: "grid px-[24px] py-[12px]",
  });
  return loginPage;
}
