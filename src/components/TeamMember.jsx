import React from "react";
import PropTypes from "prop-types";

import Image from "components/Image";

import "./TeamMember.scss";

const TeamMember = ({
  imageFileName,
  imageAlt,
  header,
  subheader,
}) => {


  return (
    <div className="team-member">
      <Image
        className="mx-auto circle rounded-circle"
        fileName={imageFileName}
        alt={imageAlt || header || subheader}
      />
      <h4>{header}</h4>
      <p className="text-muted">{subheader}</p>
    </div>
  );
};

TeamMember.propTypes = {
  imageFileName: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,

};

TeamMember.defaultProps = {
  imageAlt: null,
  header: "",
  subheader: "",

};

export default TeamMember;
