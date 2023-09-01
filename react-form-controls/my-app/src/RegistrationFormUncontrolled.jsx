export default function RegistrationFormUncontrolled() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input name="username" type="text"></input>
      </label>
      <label>
        Password
        <input name="password" type="password"></input>
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}
