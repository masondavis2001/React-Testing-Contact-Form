import React from "react";
import { render, mount } from "@testing-library/react";
import App from "../App";
import ContactForm from "../components/ContactForm";


test("renders correctly", () => {
    render(<ContactForm />);
});




test('the form has 4 input entries', () => {

    const { getByLabelText } = render(<ContactForm />);

    const fNameInput = getByLabelText(/first name/i);
    const lNameInput = getByLabelText(/last name/i);
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);
})

test("validating inputs", () => {
    const { getByLabelText } = render(<ContactForm />);
    const firstNameInput = getByLabelText(/first name/i);
    const lastNameInput = getByLabelText(/last name/i);
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);


    expect(firstNameInput).toHaveAttribute("type", "text");
    expect(lastNameInput).toHaveAttribute("type", "text");
    expect(emailInput).toHaveAttribute("type", "email");
    expect(messageInput).toHaveAttribute("type", "text")
});

test("Rendering form placeholders", () => {
    const { getByLabelText } = render(<ContactForm />);
    const firstNameInput = getByLabelText(/first name/i);
    const lastNameInput = getByLabelText(/last name/i);
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);

    expect(firstNameInput).toHaveAttribute("placeholder", "mason");
    expect(lastNameInput).toHaveAttribute("placeholder", "davis");
    expect(emailInput).toHaveAttribute("placeholder", "masondavis2009@gmail.com");
    expect(messageInput).toHaveAttribute("placeholder", "your mesasage here");
});











