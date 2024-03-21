import React from "react";
import facebookIcon from '../../assets/facebook-icon.png'
import twitterIcon from '../../assets/twitter-icon.png'
import instagramIcon from '../../assets/instagram-icon.png'

function Footer(props) {
  return (
    <div>
      <div class="container mb-5">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
          <div class="col-md-4 d-flex align-items-center">
            <a
              href="/"
              class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            >
              <svg class="bi" width="30" height="24">
                <use xlink:href="#bootstrap" />
              </svg>
            </a>
            <span class="mb-3 mb-md-0" style={{color:"white"}}>
              &copy; 2024 All right reserved Hansaja
            </span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3">
              <a class="text-body-secondary" href="#">
                <img src={twitterIcon} alt="" width={34} height={34}/>
              </a>
            </li>
            <li class="ms-3">
              <a class="text-body-secondary" href="#">
              <img src={instagramIcon} alt="" width={34} height={34}/>
              </a>
            </li>
            <li class="ms-3">
              <a class="text-body-secondary" href="#">
              <img src={facebookIcon} alt="" width={34} height={34}/>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default Footer;