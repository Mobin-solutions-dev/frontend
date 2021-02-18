import axios from "axios";
import Cookie from "js-cookie";

import { API_URL } from '../utils/api/api-url'

export const postDocumentAdherent = (variables) => {
    const { titre = "", thematique = "", file = null } = variables
    //prevent function from being ran on the server
    if (typeof window === "undefined") {
        return;
    }

    const data = {
        titre,
        thematique,
        document: file
    };

    return new Promise((resolve, reject) => {
        let token = Cookie.get("token")
        if (!token) {
            reject()
        }
        console.log("token", token)
        // axios
        //     .post(
        //         `${API_URL}/document-adherents`,
        //         data,
        //         {
        //             headers: {
        //                 Authorization: `Bearer ${token}`
        //             }
        //         }
        //     )
        axios
            .post(`${API_URL}/document-adherents`, {
                data: data,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then((res) => {
                console.log("res", res)
                //resolve
                resolve(res);
            })
            .catch((error) => {
                console.log("error", error)
                //reject the promise
                reject(error);
            });
    });
};
