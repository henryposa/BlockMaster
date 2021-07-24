import React from "react";

export const RegisterScreen = () => {
  return (
    <div>
      <body>
        <div class="container">
          <div class="row">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div class="card card-signin my-5">
                <div class="card-body">
                  <h5 class="card-title text-center">Register</h5>
                  <form class="form-signin">
                    <div class="form-label-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Name"
                        name="name"
                        required
                        autofocus
                      />
                      <label for="inputName">Name</label>
                    </div>
                    <div class="form-label-group">
                      <input
                        type="email"
                         class="form-control"
                        placeholder="Email address"
                        required
                        autofocus
                      />
                      <label for="inputEmail">Email address</label>
                    </div>

                    <div class="form-label-group">
                      <input
                        type="password"
                            class="form-control"
                        placeholder="Password"
                        required
                      />
                      <label for="inputPassword">Password</label>
                    </div>
                    <div class="form-label-group">
                      <input
                        type="password"
                             class="form-control"
                        placeholder="Password"
                        required
                      />
                      <label for="inputPassword2">Password</label>
                    </div>

                    <div class="custom-control custom-checkbox mb-3">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                         />
                      <label class="custom-control-label" for="customCheck1">
                        Remember password
                      </label>
                    </div>
                    <button
                      class="btn btn-lg btn-primary btn-block text-uppercase"
                      type="submit"
                    >
                      Sign in
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};
