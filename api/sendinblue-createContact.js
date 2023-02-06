import SibApiV3Sdk from 'sib-api-v3-sdk';

const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

const apiInstance = new SibApiV3Sdk.ContactsApi();

const sendinblue_create_contact = async (email, formation) => {
  apiInstance.getContactInfo(email).then(() => {
    apiInstance.updateContact(email, { listIds: [formation ? 42 : 8] })
      .then(
        () => true,
        (error) => {
          console.error(error);
          return false;
        },
      );
  },
  () => {
    apiInstance.createContact({ email, listIds: [formation ? 42 : 8] })
      .then(() => true, (error) => {
        console.error(error);
        return false;
      });
  });
};

module.exports = sendinblue_create_contact;
