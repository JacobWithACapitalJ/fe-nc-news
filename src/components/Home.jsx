import React from "react";
import { Typography } from "antd";
export default function Home(props) {
  return (
    <div>
      <Typography>
        <Typography.Title>Welcome to NC NEWS!</Typography.Title>
        This site was created to demonstrate use of React with an external API.
        It was built using the Ant-design to streamline the look of the site,
        with custom styling where appropriate. The login system calls to the
        API, checking the password against the hash in the database for that
        user. When a successful username and password is supplied, a HTTP
        session cookie is used to keep the user logged in. To test the
        functionality of this site, please log in as jessjelly with password of
        "password". You can view the source code using the following links: If
        you have any questions, please contact me through the following form:
        <br />
        <a href="https://jacobs-nc-news.netlify.com/">Link to this site!</a>
        <br />
        <a href="https://github.com/JacobWithACapitalJ/fe-nc-news">
          Front-end repo
        </a>
        <br />
        <a href="https://github.com/JacobWithACapitalJ/be-nc-news">
          Back-end repo
        </a>
        <br />
        <a href="https://jacobs-nc-news.herokuapp.com/">Back-end API</a>
      </Typography>
    </div>
  );
}
