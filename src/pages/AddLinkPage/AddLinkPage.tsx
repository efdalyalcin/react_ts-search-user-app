import { useCallback, useEffect, useState } from "react";
import AddLinkHeader from "./AddLinkHeader/AddLinkHeader";
import AddLinkInput from "./AddLinkInput/AddLinkInput";
import AddLinkPopup from "./AddLinkPopup/AddLinkPopup";
import "./AddLinkPage.scss";

export default function AddLinkPage() {
  const [name, setName] = useState("");
  const [hasNameError, setHasNameError] = useState(false);

  const [country, setCountry] = useState("");
  const [hasCountryError, setHasCountryError] = useState(false);

  const [city, setCity] = useState("");
  const [hasCityError, setHasCityError] = useState(false);

  const [email, setEmail] = useState("");
  const [hasEmailError, setHasEmailError] = useState(false);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // name error reset on change
  useEffect(() => {
    setHasNameError(false);
  }, [name]);

  // country error reset on change
  useEffect(() => {
    setHasCountryError(false);
  }, [country]);

  // city error reset on change
  useEffect(() => {
    setHasCityError(false);
  }, [city]);

  // email error reset on change
  useEffect(() => {
    setHasEmailError(false);
  }, [email]);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (name.trim().split(" ").length < 2) {
        setHasNameError(true);
      }

      if (!country) {
        setHasCountryError(true);
      }

      if (!city) {
        setHasCityError(true);
      }

      if (!email) {
        setHasEmailError(true);
      }

      if (
        !hasNameError &&
        !hasCountryError &&
        !hasCityError &&
        !hasEmailError &&
        name &&
        country &&
        city &&
        email
      ) {
        // there needs to be a database connection instead of this
        // this will change only localstorage
        const localdata: Data = JSON.parse(
          window.localStorage.getItem("data") || ""
        );
        const { cols, data } = localdata;

        // this is the new data created from form
        const newInput: string[] = [
          name,
          "company",
          email,
          "date",
          country,
          city,
        ];
        const newData = [...data, newInput];
        const jsonDataFormat: Data = { cols, data: newData };

        window.localStorage.setItem("data", JSON.stringify(jsonDataFormat));

        setCity("");
        setCountry("");
        setEmail("");
        setName("");
        setIsPopupOpen(false);
      }
    },
    [
      name,
      city,
      country,
      email,
      hasCityError,
      hasCountryError,
      hasEmailError,
      hasNameError,
    ]
  );

  // control popup
  useEffect(() => {
    if (hasNameError || hasCountryError || hasCityError || hasEmailError) {
      setIsPopupOpen(true);
    }
  }, [hasNameError, hasCountryError, hasCityError, hasEmailError]);

  return (
    <main className="AddLinkPage">
      <AddLinkHeader />

      <form className="AddLinkPage__inputs" onSubmit={handleSubmit}>
        <AddLinkInput
          input={name}
          setInput={setName}
          label="Name Surname"
          placeHolder="Enter name and surname"
          type="text"
          hasError={hasNameError}
          errorText="Name and surname should contain at least 2 words"
        />

        <AddLinkInput
          input={country}
          setInput={setCountry}
          label="Country"
          placeHolder="Enter a country"
          type="text"
          hasError={hasCountryError}
          errorText="Country is required"
        />

        <AddLinkInput
          input={city}
          setInput={setCity}
          label="City"
          placeHolder="Enter a city"
          type="text"
          hasError={hasCityError}
          errorText="City is required"
        />

        <AddLinkInput
          input={email}
          setInput={setEmail}
          label="Email"
          placeHolder="Enter a e-mail (abc@xyz.com)"
          type="email"
          hasError={hasEmailError}
          errorText="Email is required"
        />

        <button type="submit" className="AddLinkPage__button">
          Add
        </button>
      </form>

      {isPopupOpen ? (
        <AddLinkPopup
          hasNameError={hasNameError}
          hasCountryError={hasCountryError}
          hasCityError={hasCityError}
          hasEmailError={hasEmailError}
          setIsPopupOpen={setIsPopupOpen}
        />
      ) : null}
    </main>
  );
}
