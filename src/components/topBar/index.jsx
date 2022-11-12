import Search from "../../components/search";
import { IoMdNotificationsOutline } from "react-icons/io";
import styles from "../followDoctor/followDoctor.module.css";
import style from "./topBar.module.css";
import defaultImg from "../../assets/images/doctor_profile/default_profile_img.png";
import { Dropdown, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const TopBar = () => {
  const items = [
    { label: "item 1", key: "item-1" },
    { label: "item 2", key: "item-2" },
  ];

  const isAuth = useSelector((state) => state.auth.isAuth);
  const { firstName, profileImg, lastName } = useSelector(
    (state) => state.auth
  );

  return (
    <section
      className={`${style.container} me-5 py-3  ms-auto ${
        isAuth ? "d-block" : "d-none"
      } `}
    >
      <div className="d-flex justify-content-between">
        <Search className={`mt-1 text-start ${style.search} `} />
        <div
          className={` align-items-end justify-content-end w-100 ${style.user} `}
        >
          <p className="me-2 fw-bold text-capitalize">{`${firstName} ${lastName}`}</p>
          <Link to="/profile">
            <img
              src={profileImg ? profileImg : defaultImg}
              className={`${styles.img} img-fluid rounded-circle `}
              alt="your img"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
