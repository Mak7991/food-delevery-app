import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

const FormPage = () => {
    
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h5 text-center mb-4">Sign Up</p>
            <div className="grey-text">
              <MDBInput
                label="FullName"
                icon="envelope"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Gender"
                icon="envelope"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Age"
                icon="envelope"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Country"
                icon="envelope"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="city"
                icon="envelope"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="password"
                icon="envelope"
                group
                type="password"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Confirm Password"
                icon="lock"
                group
                type="password"
                validate
              />
            </div>
            <div className="text-center">
              <MDBBtn>Signup</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;