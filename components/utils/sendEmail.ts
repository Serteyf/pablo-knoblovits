import { FormData } from "../Contact/ContactForm";

export function sendEmail(data: FormData) {
  const apiEndpoint = "/api/email";
  const _data = JSON.stringify(data);
  console.log(`testing ${_data}`);

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}
