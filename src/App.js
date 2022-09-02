import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import './App.css';

function App() {

  const [name, setName] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleSubmit = () => {
    console.log(name);
  }

  const handleChange = (value) => {
    console.log("Captcha VAlue : ", value);
    setIsVerified(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          What is Your Name?
        </label>
        <input
          id='name'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <ReCAPTCHA
          sitekey="6LfC77chAAAAAOWOGQT7raN3Y2hpGnDQU33yf-s8"
          onChange={handleChange}
        />
        <input
          type="submit"
          value="submit"
          disabled={!isVerified}
        />
      </form>
    </div>
  );
}

export default App;
