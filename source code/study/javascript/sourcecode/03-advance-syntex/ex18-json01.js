function submitForm() {
  const form = document.getElementById("userForm");
  const formData = new FormData(form);
  console.log(formData);

  // Create a JSON object from the form data
  const formObject = {};
  formData.forEach((value, key) => {
    if (key === "favo") {
      // If the key is 'favo', handle multiple checkboxes as an array
      if (!formObject[key]) {
        formObject[key] = [];
      }
      formObject[key].push(value);
    } else if (key === "gender") {
      // Handle radio button separately
      formObject[key] = value;
    } else {
      formObject[key] = value;
    }
  });

  // Convert the form object to JSON
  const json = JSON.stringify(formObject, null, 2);

  // Display the JSON in a <pre> tag
  document.getElementById("output").textContent = json;
}