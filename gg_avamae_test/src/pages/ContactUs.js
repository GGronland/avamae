import { useState } from "react";
import "./ContactUs.css";
import "../components/forms/ContactUsForm.js";
import ContactUsImage from "../images/ContactUsImage.png";
import ContactUsForm from "../components/forms/ContactUsForm.js";

function ContactUsPage() {
  const [hasError, setHasError] = useState(null);

  async function addContactHandler(contactData) {
    try {
      const response = await fetch(
        "https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit",
        {
          method: "POST",
          body: JSON.stringify(contactData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        console.log(response) /* Check if response is the ideal 200, or a bad request */
        throw new Error("The status code was not '2xx'! Check your code again."); // Personal tests for request status codes that aren't 2xx/OK
      }
    } catch (error) {
      setHasError(error.message); // Handles errors that aren't response-based
      console.log(hasError);
    }
  }

  return (
    <div className="contact-main">
      <div className="contact-column1">
        <h2>Contact us</h2>
        <p>
          Nam dictum, purus eu feugiat laoreet, justo leo egestas turpis,
          sollicitudin imperdiet dolor justo a nisi. Etiam id metus tincidunt.{" "}
        </p>
        <ContactUsForm onAddContact={addContactHandler} />
        {/* {hasError && <p>{hasError}</p>} */} 
        {/* Above is a personal test to see directly on the webpage whether there's an error
        in addition to seeing it in the console - it should be commented out when not actively testing */}
      </div>

      <div className="contact-column2">
        <img
          className="contact-image1"
          src={ContactUsImage}
          alt="Royalty-free download from vecteezy.com"
        />
      </div>
    </div>
  );
}

export default ContactUsPage;
