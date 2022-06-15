import { useRef } from "react";
import { useState } from "react";
import classes from "./ContactUsForm.module.css";
import ResponseCheckMark from "../../images/ResponseCheckMark.png";

function ContactUsForm(props) {
  const [submission, setSubmission] = useState(false);
  const [addNumberClicked, setAddNumberClicked] = useState(false);
  const [addAddressClicked, setAddAddressClicked] = useState(false);

  function PhoneButton(props) {
    return <button className={classes.addPhoneNum} type="button" onClick={handleAddSecondNumber} >{props.children}</button>
  } /* Created as sub-component as if called from another js file it wouldn't be able to read the state - see if there's a way around this to tidy the code*/

  function handleAddSecondNumber() {
    setAddNumberClicked(true);
    console.log("The add phone number button has been clicked"); /* Testing that the onClick even is working as intended */
  }

  function AddressButton(props) {
    return <button className={classes.addAddress} type="button" onClick={handleAddAddress} >{props.children}</button>
  } /* Created as sub-component as if called from another js file it wouldn't be able to read the state - see if there's a way around this to tidy the code */

  function handleAddAddress() {
    setAddAddressClicked(!addAddressClicked);
    console.log("The add address button has been clicked"); /* Testing that the onClick even is working as intended */
  }

  const fullNameInputRef = useRef(); /* Links constant to it's relevant input tag via ref attribute */
  const emailAddressRef = useRef();
  const phoneNum1Ref = useRef();
  const phoneNum2Ref = useRef();
  const messageRef = useRef();
  
  const addressLine1Ref = useRef();
  const addressLine2Ref = useRef();
  const cityTownRef = useRef();
  const stateCountyRef = useRef();
  const postcodeRef = useRef();
  const countryRef = useRef();

  function handleSubmit(event) {
    event.preventDefault(); // Prevents browser default of refreshing page when submitting form

    let addressDetails = {
    } /* Creates empty address details dictionary so we can choose to conditionally fill and include it in the contactData dictionary after that is created. 
    If I was to conditionally create the filled dictionary, it wouldn't be accessible outside of the if statement */
  
    if (addAddressClicked) {
      addressDetails = {...addressDetails, 
        AddressLine1: addressLine1Ref.current.value,
        AddressLine2: addressLine2Ref.current.value,
        CityTown: cityTownRef.current.value,
        StateCounty: stateCountyRef.current.value,
        Postcode: postcodeRef.current.value,
        Country: countryRef.current.value
      }
    } /* The address details dictionary is filled with the user-inputted information if they toggle these additional fields to show */

    let contactData = {
      FullName: fullNameInputRef.current.value, // These are the key-value pairs that will be sent when hitting the form API
      EmailAddress: emailAddressRef.current.value, // The keys must be named identically to those expected (in the API documentation)
      Message: messageRef.current.value,
      bIncludeAddressDetails: (addAddressClicked),
    };

    let phoneNumberArray = [];
    if (phoneNum1Ref.current.value !== null) {
      phoneNumberArray = [...phoneNumberArray, phoneNum1Ref.current.value];
    }
    if (addNumberClicked && phoneNum2Ref.current.value !== null) {
      phoneNumberArray = [...phoneNumberArray, phoneNum2Ref.current.value];
    } /* If the two phone number fields have values, these are add to an array  */
    if (phoneNumberArray[0] !== "") {
      contactData = {...contactData, PhoneNumbers: phoneNumberArray};
    } /* Only includes array in POST request if at least one number is provided. Using array.length > 1 didn't work as the array contained "" if no phone numbers were added */

    if (addAddressClicked) {
      contactData = {...contactData, AddressDetails: addressDetails};
    } /* Only includes dictionary in POST request if address details are shown - because some of those fields are required, this won't insert empty address details into contactData */

    props.onAddContact(contactData);
    setSubmission(true);
    console.log({contactData}); /* Testing that the dictionary for the POST request contains the desired key-value pairs in the correct format*/
  }

  if (submission) {
    return (
      <div className={classes.response}>
          <img src={ResponseCheckMark} alt="check-mark"></img>
          <p>
            Your message has been sent <br />
            We will be in contact with you within 24 hours.
          </p>
      </div>
    )
  } else {
    return (
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.fineField}>
          <div className={classes.field}>
            <label htmlFor="FullName">Full name</label>
            <input type="text" required id="FullName" ref={fullNameInputRef} />
          </div>

          <div className={classes.field}>
            <label htmlFor="EmailAddress">Email address</label>
            <input type="email" required id="EmailAddress" ref={emailAddressRef} />
          </div>
        </div>

        <div className={classes.field}>
          <label htmlFor="PhoneNum1">Phone number 01 - optional</label>
          <input type="text" id="PhoneNum1" ref={phoneNum1Ref} />
        </div>

        {addNumberClicked &&
         <div className={classes.field}>
            <label htmlFor="PhoneNum2">Phone number 02 - optional</label>
            <input type="text" id="PhoneNum2" ref={phoneNum2Ref} />
          </div>
        }

        <PhoneButton>
            Add new phone number
        </PhoneButton> 
      
        <div className={classes.field}>
          <label htmlFor="Message">Message</label>
          <textarea required id="Message" rows="5" ref={messageRef} />
        </div>

        <div className={classes.addressButton}>
          <AddressButton/> Add address details
        </div>
        
        {addAddressClicked &&
         <div>
            <div className={classes.fineField}>
              <div className={classes.field}>
                <label htmlFor="AddressLine1">Address line 1</label>
                <input type="text" required id="AddressLine1" ref={addressLine1Ref} />
                {/* Although most address fields declared as required, this is only enforced when they are conditionally rendered - i.e. optional as long as the user does not toggle these details to show */}
              </div>

              <div className={classes.field}>
                <label htmlFor="AddressLine2">Address line 2 - optional</label>
                <input type="text" id="AddressLine2" ref={addressLine2Ref} />
              </div>
            </div>

            <div className={classes.fineField2}>
              <div className={classes.field}>
                <label htmlFor="CityTown">City/Town</label>
                <input type="text" required id="CityTown" ref={cityTownRef} />
              </div>

              <div className={classes.field}>
                <label htmlFor="StateCounty">State/County</label>
                <input type="text" required id="StateCounty" ref={stateCountyRef} />
              </div>

              <div className={classes.field}>
                <label htmlFor="Postcode">Postcode</label>
                <input type="text" required id="Postcode" ref={postcodeRef} />
              </div>

              <div className={classes.field}>
                <label htmlFor="Country">Country</label>
                <input type="text" required id="Country" ref={countryRef} />
              </div>
            </div>

          </div>
        }

        <div className={classes.action}>
          <button type="submit">Submit</button>
        </div>

      </form>
    );
  }
}

export default ContactUsForm;
