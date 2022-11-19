import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ErrorPage.scss";

export default function ErrorPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("react_ts-search-user-app/");
    }, 2000);
  });

  return <div className="ErrorPage">404 the page not found</div>;
}
