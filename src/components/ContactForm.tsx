import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Button from "./Button";

type FormState = {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
};

type Errors = {
  city?: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const FormContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 700px;
  padding: 24px;
  background: #fff;
  border-radius: 20px;

  @media (min-width: 768px) {
    flex: 1;
    margin-left: 24px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 16px 24px;
  border: 2px solid var(--color-yellow);
  border-radius: 20px;
  outline: none;

  &:focus {
    border-color: var(--color-orange);
  }
`;

const Message = styled.textarea`
  width: 100%;
  height: 180px;
  padding: 18px 22px;
  border: 2px solid var(--color-yellow);
  border-radius: 20px;
  resize: vertical;
  outline: none;

  &:focus {
    border-color: var(--color-orange);
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

const SubmitButton = styled(Button)`
  width: 100%;

  @media (min-width: 992px) {
    width: 220px;
  }
`;

const ContactForm = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState<string>("");

  const { t } = useTranslation("form");

  const validate = () => {
    const newErrors: Errors = {};

    if (!form.name) newErrors.name = t("form:errors.nameRequired");
    if (!form.email) newErrors.email = t("form:errors.emailRequired");
    else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = t("form:errors.emailInvalid");
    }
    if (!form.phone) newErrors.phone = t("form:errors.phoneRequired");
    if (!form.city) newErrors.city = t("form:errors.cityRequired");
    if (!form.message) newErrors.message = t("form:errors.messageRequired");

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
            placeholder={t("form:placeholders.name")}
            value={form.name}
            autoComplete="given name"
            onChange={handleChange}
          />
          <Input
            name="email"
            placeholder={t("form:placeholders.email")}
            value={form.email}
            autoComplete="off"
            onChange={handleChange}
          />
        </Row>

        <Row>
          <Input
            name="phone"
            placeholder={t("form:placeholders.phone")}
            value={form.phone}
            autoComplete="tel"
            onChange={handleChange}
          />
          <Input
            name="city"
            placeholder={t("form:placeholders.city")}
            value={form.city}
            onChange={handleChange}
          />
        </Row>

        <Message
          name="message"
          placeholder={t("form:placeholders.message")}
          value={form.message}
          onChange={handleChange}
        />

        {Object.values(errors).map((err, index) => (
          <Error key={index}>{err}</Error>
        ))}

        {success && <Success>{success}</Success>}

        <SubmitButton type="submit" title={t("form:submit")} />
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
