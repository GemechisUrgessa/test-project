/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const footerStyle = css`
  padding: 2rem;
  background-color: #2c3e50;
  color: #fff;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.5;
  bottom: 0;
  width: 100%;

  a {
    color: #f1c40f;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
    }
  }

  .brand {
    font-weight: bold;
    font-size: 1.25rem;
  }
`;

const Footer = () => {
  return (
    <footer css={footerStyle}>
      <div className="footer-content">
        <div className="brand">Gemechis</div>
        <nav>
          <a href="#">Terms of Service</a> |<a href="#">Privacy Policy</a>
        </nav>
        <div>© {new Date().getFullYear()} Gemechis. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
