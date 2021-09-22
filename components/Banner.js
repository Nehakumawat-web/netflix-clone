import React from 'react'
import logo from "../img/logo1.png";
function Banner() {
    return (
        <div className="bannerBg">
           <nav class="navbar navbar-expand-lg  fixed-top">
              <div class="container">
              <img class="navbar-brand img-fluid" src={logo} alt="logo" height="62px" width="140px"></img>
                  <form class="d-flex justify-content-end ">
                  <select class="form-select " aria-label="Default select example">
                  <option selected> English </option>
                  <option value="1">HIndi</option>
                  </select>
                    <button class="btn btns mx-2 " type="submit">SignOut</button>
                  </form>
              </div>
            </nav>

            <container>
              <h1 className="heading">Unlimited movies, TV shows and more.</h1>
              <h4 className="sub_heading ">Watch anywhere. Cancel anytime.</h4>
              <div class="input-group">
                <input type="text" class="form-control  p-2" placeholder="Email address" aria-label="Email adress" aria-describedby="basic-addon2"></input>
                <span class="input-group-text btns" id="basic-addon2">GET STARTED</span>
              </div>
            </container>

        </div>
    )
}

export default Banner
