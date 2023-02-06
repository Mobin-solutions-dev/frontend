const sendinblue_create_contact = require('../../api/sendinblue-createContact');

export default function handler(req, res) {
  const { email = '', formation = false } = req.body;
  sendinblue_create_contact(email, formation);
  res.send('success');
}
