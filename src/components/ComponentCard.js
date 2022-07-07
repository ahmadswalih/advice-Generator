import React from "react";
import { Spinner } from "reactstrap";
import "../assets/css/styles.css";
import Loader from "./Loader";
const ComponentCard = ({ quote, onSubmit, loading }) => {
  return (
    <div>
      <section className="neon bd-container">
        <div className="neon__container">
          <div className="neon__card">
            <svg
              className="neon__icon"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.712 6C40.28 6 43.998 9.68403 43.998 14.2103L44 19.5649C44 19.9573 43.842 20.3378 
                            43.562 20.6152C43.28 20.8946 42.9 21.0512 42.5 21.0512C40.858 21.0512 39.522 22.375 39.522 
                            24.002C39.522 25.629 40.858 26.9528 42.5 26.9528C43.328 26.9528 44 27.6186 44 
                            28.4391V33.7917C44 38.318 40.284 42 35.716 42H12.286C7.718 42 4 38.318 4 
                            33.7917V28.4391C4 27.6186 4.672 26.9528 5.5 26.9528C7.144 26.9528 8.48 25.629 
                            8.48 24.002C8.48 22.4166 7.198 21.2236 5.5 21.2236C5.102 21.2236 4.722 21.067 
                            4.44 20.7876C4.158 20.5082 4 20.1297 4 19.7373L4.004 14.2103C4.004 9.68403 
                            7.72 6 12.288 6H35.712ZM24.004 16.3069C23.436 16.3069 22.928 16.6201 22.674 
                            17.1234L21.216 20.0504L17.964 20.5201C17.402 20.5994 16.942 20.9799 16.764 
                            21.5149C16.588 22.05 16.73 22.6286 17.138 23.021L19.496 25.296L18.94 28.5124C18.844 
                            29.0673 19.07 29.6182 19.53 29.9491C19.79 30.1334 20.092 30.2286 20.398 30.2286C20.632 
                            30.2286 20.868 30.1711 21.084 30.0581L24 28.5401L26.91 30.0542C27.414 30.3217 28.012 
                            30.2801 28.47 29.9472C28.932 29.6182 29.158 29.0673 29.062 28.5124L28.504 25.296L30.862 
                            23.021C31.272 22.6286 31.414 22.05 31.236 21.5149C31.06 20.9799 30.6 20.5994 30.044 
                            20.5221L26.786 20.0504L25.328 17.1254C25.078 16.622 24.57 16.3089 24.004 16.3069Z"
              />
            </svg>
            <h1 className="neon__title">Quote's Generator</h1>
            <br />
            {loading ? (
              <Loader />
            ) : (
              <p className="neon__description">{quote.advice}</p>
            )}

            <p
              style={{ cursor: "pointer" }}
              onClick={onSubmit}
              className="neon__button"
            >
              Generate New one
              <svg
                className="neon__button-icon"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.0099 4C29.3698 4 33.7763 8.21182 34 13.5486H33.9477C33.954 13.7038 33.9242 13.8583 
                                33.8606 14H34.1729C36.6069 14 39.1557 15.687 40.1777 19.7596L40.2887 20.2401L41.8265 32.6295C42.9332 
                                40.5315 38.6099 43.8546 32.7124 43.9953L32.3169 44H15.7371C9.74355 44 5.12509 41.8159 6.14056 
                                33.1671L6.20981 32.6295L7.76528 20.2401C8.53228 15.8544 11.1072 14.1245 13.5882 14.0065L13.8634 
                                14H14.0198C13.9934 13.8507 13.9934 13.698 14.0198 13.5486C14.2434 8.21182 18.65 4 24.0099 
                                4ZM18.194 20.6586C17.2178 20.6586 16.4264 21.4731 16.4264 22.4779C16.4264 23.4826 17.2178 
                                24.2971 18.194 24.2971C19.1702 24.2971 19.9616 23.4826 19.9616 22.4779L19.9478 22.2497C19.8387 
                                21.3526 19.0951 20.6586 18.194 20.6586ZM29.7716 20.6586C28.7954 20.6586 28.0041 21.4731 28.0041 
                                22.4779C28.0041 23.4826 28.7954 24.2971 29.7716 24.2971C30.7478 24.2971 31.5392 23.4826 31.5392 
                                22.4779C31.5392 21.4731 30.7478 20.6586 29.7716 20.6586ZM23.9315 6.60477C20.0833 6.60477 16.9637 
                                9.71365 16.9637 13.5486C16.99 13.698 16.99 13.8507 16.9637 14H30.9864C30.9308 13.8559 30.9013 
                                13.7031 30.8993 13.5486C30.8993 9.71365 27.7797 6.60477 23.9315 6.60477Z"
                />
              </svg>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComponentCard;
