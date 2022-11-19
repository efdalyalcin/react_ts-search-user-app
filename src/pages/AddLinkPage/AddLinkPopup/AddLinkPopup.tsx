import { useCallback, useState } from "react";
import "./AddLinkPopup.scss";

type Props = {
  hasNameError: boolean;
  hasCountryError: boolean;
  hasCityError: boolean;
  hasEmailError: boolean;
  setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AddLinkPopup({
  hasNameError,
  hasCountryError,
  hasCityError,
  hasEmailError,
  setIsPopupOpen,
}: Props) {
  const [errors] = useState({
    nameError: "Name and surname should contain at least 2 words",
    countryError: "Country is required",
    cityError: "City is required",
    emailError: "Email is required",
  });

  const handleErrors = useCallback(() => {
    if (hasNameError) return errors.nameError;

    if (hasCountryError) return errors.countryError;

    if (hasCityError) return errors.cityError;

    if (hasEmailError) return errors.emailError;
  }, [hasCityError, hasCountryError, hasEmailError, hasNameError]);

  return (
    <div className="AddLinkPopup">
      <button
        className="AddLinkPopup__close"
        onClick={() => setIsPopupOpen(false)}
      />
      <div>
        <p className="AddLinkPopup__title">Error while adding link element</p>
        <p className="AddLinkPopup__text">{handleErrors()}</p>
      </div>
      <button
        className="AddLinkPopup__error"
        onClick={() => setIsPopupOpen(false)}
      >
        Error
      </button>
    </div>
  );
}
