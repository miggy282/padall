import React from "react";
import { Field, reduxForm } from "redux-form";



const Form = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field name="sex" component="input" type="radio" value="male" />{" "}
            Male
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" />{" "}
            Female
          </label>
        </div>
      </div>
      <div>
        <label>Address1</label>
        <div>
          <Field
            name="Address1"
            component="input"
            type="Address1"
            placeholder="Address1"
          />
        </div>
      </div>
      <div>
        <label>Address2</label>
        <div>
          <Field
            name="Address2"
            component="input"
            type="Address2"
            placeholder="Address2"
          />
        </div>
      </div>
      <div>
        <label>Town</label>
        <div>
          <Field name="Town" component="input" type="Town" placeholder="Town" />
        </div>
      </div>
      <div>
        <label>City</label>
        <div>
          <Field name="City" component="input" type="City" placeholder="City" />
        </div>
      </div>
      <div>
        <label>County</label>
        <div>
          <Field
            name="County"
            component="input"
            type="County"
            placeholder="County"
          />
        </div>
      </div>
      <div>
        <label>Postcode</label>
        <div>
          <Field
            name="Postcode"
            component="input"
            type="Postcode"
            placeholder="Postcode"
          />
        </div>
      </div>
      <div>
        <label>Property Type</label>
        <div>
          <Field name="propertyType" component="select">
            <option />
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Flat">Flat</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Bungalows">Bungalow</option>
            <option value="Cottage">Cottage</option>
            <option value="Cottage">Land</option>
            <option value="Cottage">Commerical</option>

            <option value="Other">Other</option>
          </Field>
        </div>
      </div>
      <div>
        <label>Bedrooms</label>
        <div>
          <Field name="propertyType" component="select">
            <option />
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Flat">Flat</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Bungalows">Bungalow</option>
            <option value="Cottage">Cottage</option>
            <option value="Cottage">Land</option>
            <option value="Cottage">Commerical</option>

            <option value="Other">Other</option>
          </Field>
        </div>
      </div>
      <div>
        <label>Condition</label>
        <div>
          <Field name="condition" component="select">
            <option />
            <option value="verypoor">Very poor</option>
            <option value="poor">Poor</option>
            <option value="decent">Decent</option>
            <option value="excellent">Excellent</option>
            <option value="spectacular">Spectacular</option>
          </Field>
        </div>
      </div>
      <div>
        <label>Sale Urgency</label>
        <div>
          <Field name="saleurgency" component="select">
            <option />
            <option value="Immediately">Immediately</option>
            <option value="1month">1 month</option>
            <option value="3month">3 month</option>
            <option value="6month">6 month</option>
            <option value="1yr">1 year</option>
            <option value="notready">Not ready</option>
            <option value="justchecking">Just checking</option>
          </Field>
        </div>
      </div>
      <div>
        <label>Tenanted or not</label>
        <div>
          <Field
            name="tenant"
            component="input"
            type="tenant"
            placeholder="tenant"
          />
        </div>
      </div>
      <div>
        <label>Sole owner</label>
        <div>
          <Field
            name="askingprice"
            component="input"
            type="askingprice"
            placeholder="e.g £250,000"
          />
        </div>
      </div>
      <div>
        <label>On the market?</label>
        <div>
          <Field name="onTheMarket" component="select">
            <option />
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
        </div>
      </div>
      <div>
        <label>Purchase date</label>
        <div>
          <Field
            name="purchaseDate"
            component="input"
            type="purchaseDate"
            placeholder="19/01/1980"
          />
        </div>
      </div>
      <div>
        <label>Outstanding Mortgage</label>
        <div>
          <Field
            name="mortgageBalance"
            component="input"
            type="mortgageBalance"
            placeholder="e.g £100,000"
          />
        </div>
      </div>
      <div>
        <label>Your Asking Price</label>
        <div>
          <Field
            name="askingprice"
            component="input"
            type="askingprice"
            placeholder="e.g £250,000"
          />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Compare offers
        </button>
      </div>
    </form>
  );
};
export default reduxForm({
  form: "padall" // a unique identifier for this form
})(Form);
