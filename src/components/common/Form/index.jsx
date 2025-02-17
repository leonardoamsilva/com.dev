import emailjs from "@emailjs/browser";
import { useState } from "react";
import "./style.css"

import Swal from "sweetalert2"

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      Swal.fire({
        title: "ops!",
        text: "preencha os campos vazios!",
        icon: "error",
        confirmButtonText: 'ok',
        confirmButtonColor: '#82aaff'
      });
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    const service_id = process.env.REACT_APP_SERVICE_ID;
    const template_id = process.env.REACT_APP_TEMPLATE_ID;
    const public_key = process.env.REACT_APP_PUBLIC_KEY;

    emailjs.send(service_id, template_id, templateParams, public_key).then((response) => {
      Swal.fire({
        title: 'enviado!',
        text: 'mensagem enviada com sucesso.',
        icon: 'success',
        confirmButtonText: 'ok',
        confirmButtonColor: '#82aaff'

      });
      setEmail('');
      setName('');
      setMessage('');
    }, (err) => console.log(err));
  };


  return (
    <form className="form" onSubmit={sendEmail}>
      <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="nome:" />
      <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="email:" />
      <textarea onChange={(e) => setMessage(e.target.value)} value={message} placeholder="digite sua mensagem:" />
      <input className="btn" type="submit" value="enviar" />
    </form>
  );
};
