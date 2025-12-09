import "./Form.css";

export default function Form({ open, setOpen }) {
  const handleSubmit = (e) => {
    // if(e.target.username)
    e.preventDefault();
    const date = new Date();
    const currentDate = date.toISOString().split("T")[0];

    console.log(currentDate);
    console.log(e.target.date.value);
    if (e.target.phonenumber.value.length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    }
    if (e.target.date.value > currentDate) {
      alert("Invalid date of birth. Date of birth cannot be in future.");
    } else {
      setOpen(false);
    }
  };
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Fill Details</h2>
      <h4>Username:</h4>
      <input id="username" type="text" name="username" required />
      <h4>Email Address:</h4>
      <input id="email" type="email" name="email" required />
      <h4>Phone Number:</h4>
      <input id="phone" type="text" name="phonenumber" required />
      <h4>Date of Birth:</h4>
      <input id="dob" type="date" name="date" required />
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
}
