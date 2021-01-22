import axios from "axios";

export const sendMail = async (variables) => {
    try {
        const { message, emails, senderEmail } = variables
        let request = await axios
            .post("/api/email", {
                message, emails, senderEmail
            })
            .then((res) => {
                return res;
            }); 0
        return request.status === 200 ? true : false;;
    } catch (err) {
        console.error(err);
    }
};