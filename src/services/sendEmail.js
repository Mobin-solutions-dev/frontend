import { axios } from "axios";

export const sendMail = async (variables) => {
  try {
    const { message, emails, senderEmail } = variables;
    const request = await axios
      .post("/api/email", {
        message,
        emails,
        senderEmail,
        template: 21,
      })
      .then((res) => res);
    return request.status === 200;
  } catch (err) {
    console.error(err);
  }
};

export const sendResourceNotif = async (variables) => {
  try {
    const { message, emails } = variables;
    const data = {
      message,
      emails,
      template: 26,
    };
    const request = await axios.post("/api/email", data).then((res) => res);
    return request.status === 200;
  } catch (err) {
    console.error(err);
  }
};

export const createContactEmail = async (variables, formation) => {
  try {
    const { email } = variables;
    const request = await axios
      .post("/api/create-contact", {
        email,
        formation,
      })
      .then((res) => res);
    return request.status === 200;
  } catch (err) {
    console.error(err);
  }
};
