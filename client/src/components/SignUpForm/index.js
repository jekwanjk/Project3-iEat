import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SignUpForm(props) {
  return (
    <form className="signup">
      <center>
        <h1 id="logo">
          <i className="fas fa-utensils"></i> iEat
        </h1>
        <hr></hr>

        <p id="welcome">Welcome! Please sign up below.</p>
        <br></br>
      </center>
      <div className="form-group">
        <label htmlFor="name">Full Name:</label>
        <input
          value={props.name}
          onChange={props.handleInputChange}
          name="name"
          type="text"
          className="form-control"
          placeholder="Type in your name"
          id="name"
        />
        <br></br>
        <label htmlFor="email">Email:</label>
        <input
          value={props.email}
          onChange={props.handleInputChange}
          name="email"
          type="email"
          className="form-control"
          placeholder="Type in your email"
          id="email"
        />
        <br></br>
        <label htmlFor="password">Password:</label>
        <input
          value={props.password}
          onChange={props.handleInputChange}
          name="password"
          type="password"
          className="form-control"
          placeholder="Type in your password"
          id="password"
        />
        <br></br>
        <label htmlFor="calories">Caloric Intake</label>
        <input
          value={props.calories}
          onChange={props.handleInputChange}
          name="calories"
          type="text"
          class="form-control"
          id="calories"
          placeholder="Caloric Intake (Ex: 2500, 2000, etc...)"
        />
        <br></br>

        <label for="restrict-option">
          What kind of dietary restrictions do you have?
        </label>

        <select
          value={props.dietRestrictions}
          onChange={props.handleInputChange}
          class="form-control"
          id="restrict-option"
        >
          <option>Dairy</option>
          <option>Egg</option>
          <option>Gluten</option>
          <option>Grain</option>
          <option>Peanut</option>
          <option>Seafood</option>
          <option>Sesame</option>
          <option>Shellfish</option>
          <option>Soy</option>
          <option>Sulfite</option>
          <option>Tree Nut</option>
          <option>Wheat</option>
        </select>
        <br></br>

        <label for="diet-option">
          What kind of diet are you interested in?
        </label>
        <select
          value={props.dietType}
          onChange={props.handleInputChange}
          class="form-control"
          id="diet-option"
        >
          <option>Gluten Free</option>
          <option>Ketogenic</option>
          <option>Vegetarian</option>
          <option>Lacto-Vegetarian</option>
          <option>Ovo-Vegetarian</option>
          <option>Vegan</option>
          <option>Pescatarian</option>
          <option>Paleo</option>
          <option>Primal</option>
          <option>Whole30</option>
        </select>
        <br></br>

        <label for="city-input">City</label>
        <input
          value={props.city}
          onChange={props.handleInputChange}
          name="city"
          type="text"
          class="form-control"
          id="city-input"
          placeholder="City"
        />
        <br></br>

        <label for="state-input">State</label>
        <input
          value={props.state}
          onChange={props.handleInputChange}
          name="state"
          type="text"
          class="form-control"
          id="state-input"
          placeholder="State"
        />
        <br></br>

        <label for="zipcode-input">Zip Code</label>
        <input
          value={props.zipCode}
          onChange={props.handleInputChange}
          name="zipCode"
          type="text"
          class="form-control"
          id="zipcode-input"
          placeholder="Zip Code"
        />
        <br></br>

        <center>
          <button
            type="submit"
            onClick={props.handleFormSubmit}
            className="btn btn-primary"
          >
            Sign Up
          </button>
        </center>
      </div>
    </form>
  );
}

export default SignUpForm;
