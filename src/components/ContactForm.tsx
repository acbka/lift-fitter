import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

interface FormState {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const FormContainer = styled.div`
  width: 100%;
  max-width: 700px;
  padding: 20px;
  background: #fff;
  border-radius: 20px;

  @media (min-width: 576px) {
    flex: 1;
    margin-left: 20px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Row = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 18px 22px;
  font-size: 18px;
  border: 2px solid var(--color-yellow);
  border-radius: 20px;
  outline: none;

  &:focus {
    border-color: #d19a1e;
  }
`;

const Message = styled.textarea`
  width: 100%;
  height: 180px;
  padding: 18px 22px;
  font-size: 18px;
  border: 2px solid var(--color-yellow);
  border-radius: 20px;
  resize: vertical;
  outline: none;

  &:focus {
    border-color: #dca435;
  }
`;

const Error = styled.div`
  color: red;
  font-size: 14px;
`;

const Success = styled.div`
  color: green;
  font-size: 16px;
  font-weight: 600;
`;

const SubmitButton = styled.button`
  width: 220px;
  padding: 18px;
  font-size: 20px;
  background: var(--color-yellow);
  color: var(--color-dark);
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background: #dca435;
  }
`;

const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState<string>("");

  const validate = () => {
    const newErrors: Errors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email format";

    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    if (!form.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess("");

    if (!validate()) return;

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { ...form } as Record<string, unknown>,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess("Your message has been successfully sent!");
          setForm({
            name: "",
            email: "",
            phone: "",
            city: "",
            message: "",
          });
        },
        (error) => {
          console.error(error);
          setSuccess("❌ Error sending message. Try again.");
        }
      );
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
          <Input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
        </Row>

        <Row>
          <Input
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
          />
          <Input
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
          />
        </Row>

        <Message
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
        />

        {Object.values(errors).map((err, index) => (
          <Error key={index}>{err}</Error>
        ))}

        {success && <Success>{success}</Success>}

        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
