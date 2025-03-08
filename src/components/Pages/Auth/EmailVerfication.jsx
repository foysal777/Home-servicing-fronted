import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function VerifyEmail() {
  const { token } = useParams();
  const [message, setMessage] = useState("Verifying...");

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/authentications/verify-email/${token}/`)
      .then((res) => setMessage(res.data.message))
      .catch((err) => setMessage("Verification failed."));
  }, [token]);

  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl font-bold">{message}</h2>
    </div>
  );
}
