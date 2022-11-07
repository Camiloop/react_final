import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-container__img">
        <img src={require("../imgs/about.png")}></img>
      </div>
      <div className="skills-container__content">
        <div className="skills-container__content__text">
          <h1>About me...</h1>
          <h2>
            Since I was a child I've been interested on the tech industry, as a
            kid, I spent countless of hours playing videogames and from that I
            learned a few things about how videogames were made! I learned basic
            knowledge on how to troubleshoot computers so they couyld properly
            run my games. Also, I learned a lot about music theory and started
            playing the guitar when I was 13; I'm very excited to see what's
            next on my developer career and to learn more thing that can be
            applied with my previous knowledge.{" "}
          </h2>
        </div>
        <div className="skills-container__content__icons">
          <h1>Skills</h1>
          <div className="skills-container__content__icons__imgs">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="5em"
              width="5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M145 96l66 746.6L511.8 928l299.6-85.4L878.7 96H145zm610.9 700.6l-244.1 69.6-245.2-69.6-56.7-641.2h603.8l-57.8 641.2zM281 249l1.7 24.3 22.7 253.5h206.5v-.1h112.9l-11.4 118.5L511 672.9v.2h-.8l-102.4-27.7-6.5-73.2h-91l11.3 144.7 188.6 52h1.7v-.4l187.7-51.7 1.7-16.3 21.2-242.2 3.2-24.3H511v.2H389.9l-8.2-94.2h352.1l1.7-19.5 4.8-47.2L742 249H511z"></path>
            </svg>

            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              version="1.1"
              viewBox="0 0 32 32"
              height="5em"
              width="5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.017 21.044v0zM4.743 3.519l2.049 22.981 9.194 2.552 9.22-2.556 2.051-22.977h-22.514zM23 8.775l-0.693 7.767h-0l-0.48 5.359-0.042 0.476-5.781 1.603-5.773-1.603-0.395-4.426h2.829l0.201 2.248 3.142 0.847 0.008-0.002 0.002-0 3.134-0.846 0.329-3.655-6.579 0-0.056-0.633-0.129-1.429-0.067-0.756 7.081-0 0.258-2.886h-10.786l-0.056-0.634-0.129-1.429-0.067-0.756h14.118l-0.068 0.756z"></path>
            </svg>

            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              role="img"
              viewBox="0 0 24 24"
              height="5em"
              width="5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title></title>
              <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path>
            </svg>

            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              version="1.1"
              viewBox="0 0 34 32"
              height="5em"
              width="5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.314 15.987c0 1.321-1.071 2.392-2.392 2.392s-2.392-1.071-2.392-2.392c0-1.321 1.071-2.392 2.392-2.392s2.392 1.071 2.392 2.392z"></path>
              <path d="M16.922 24.783c1.878 1.826 3.729 2.906 5.221 2.906 0.489 0 0.952-0.103 1.337-0.334 1.337-0.772 1.826-2.701 1.363-5.453-0.077-0.489-0.18-0.977-0.309-1.492 0.514-0.154 0.977-0.309 1.44-0.463 2.598-1.003 4.038-2.392 4.038-3.909 0-1.543-1.44-2.932-4.038-3.909-0.463-0.18-0.926-0.334-1.44-0.463 0.129-0.514 0.232-1.003 0.309-1.492 0.437-2.803-0.051-4.758-1.389-5.53-0.386-0.231-0.849-0.334-1.337-0.334-1.466 0-3.344 1.080-5.221 2.906-1.852-1.826-3.704-2.906-5.195-2.906-0.489 0-0.952 0.103-1.337 0.334-1.337 0.772-1.826 2.701-1.363 5.453 0.077 0.489 0.18 0.977 0.309 1.492-0.514 0.154-0.977 0.309-1.44 0.463-2.598 1.003-4.038 2.392-4.038 3.909 0 1.543 1.44 2.932 4.038 3.909 0.463 0.18 0.926 0.334 1.44 0.463-0.129 0.514-0.232 1.003-0.309 1.492-0.437 2.752 0.051 4.707 1.363 5.453 0.386 0.232 0.849 0.334 1.337 0.334 1.492 0.051 3.344-1.029 5.221-2.829v0zM15.481 21.311c0.463 0.026 0.952 0.026 1.44 0.026s0.977 0 1.44-0.026c-0.463 0.617-0.952 1.183-1.44 1.723-0.489-0.54-0.977-1.106-1.44-1.723zM12.292 18.662c0.257 0.437 0.489 0.849 0.772 1.26-0.797-0.103-1.543-0.232-2.263-0.386 0.232-0.694 0.489-1.415 0.797-2.135 0.206 0.411 0.437 0.849 0.694 1.26zM10.8 12.463c0.72-0.154 1.466-0.283 2.263-0.386-0.257 0.412-0.514 0.823-0.772 1.26s-0.489 0.849-0.694 1.286c-0.334-0.746-0.592-1.466-0.797-2.161zM12.215 15.987c0.334-0.694 0.694-1.389 1.106-2.083 0.386-0.669 0.823-1.337 1.26-2.006 0.772-0.051 1.543-0.077 2.341-0.077 0.823 0 1.595 0.026 2.341 0.077 0.463 0.669 0.874 1.337 1.26 2.006 0.412 0.694 0.772 1.389 1.106 2.083-0.334 0.694-0.694 1.389-1.106 2.083-0.386 0.669-0.823 1.337-1.26 2.006-0.772 0.051-1.543 0.077-2.341 0.077-0.823 0-1.595-0.026-2.341-0.077-0.463-0.669-0.874-1.337-1.26-2.006-0.412-0.695-0.772-1.389-1.106-2.083v0zM22.272 14.598l-0.694-1.286c-0.257-0.437-0.489-0.849-0.772-1.26 0.797 0.103 1.543 0.232 2.263 0.386-0.231 0.72-0.489 1.44-0.797 2.161v0zM22.272 17.376c0.309 0.72 0.566 1.44 0.797 2.135-0.72 0.154-1.466 0.283-2.263 0.386 0.257-0.412 0.514-0.823 0.772-1.26 0.232-0.386 0.463-0.823 0.694-1.26v0zM22.863 26.301c-0.206 0.129-0.463 0.18-0.746 0.18-1.26 0-2.829-1.029-4.372-2.572 0.746-0.797 1.466-1.698 2.186-2.701 1.209-0.103 2.366-0.283 3.447-0.54 0.129 0.463 0.206 0.926 0.283 1.389 0.36 2.186 0.077 3.755-0.797 4.244zM24.201 12.746c2.881 0.823 4.604 2.083 4.604 3.241 0 1.003-1.183 2.006-3.266 2.804-0.412 0.154-0.874 0.309-1.337 0.437-0.334-1.055-0.746-2.135-1.26-3.241 0.514-1.106 0.952-2.186 1.26-3.241v0zM22.143 5.493c0.283 0 0.514 0.051 0.746 0.18 0.849 0.489 1.157 2.032 0.797 4.244-0.077 0.437-0.18 0.9-0.283 1.389-1.080-0.232-2.238-0.412-3.447-0.54-0.694-1.003-1.44-1.903-2.186-2.701 1.543-1.518 3.112-2.572 4.372-2.572zM18.362 10.663c-0.463-0.026-0.952-0.026-1.44-0.026s-0.977 0-1.44 0.026c0.463-0.617 0.952-1.183 1.44-1.723 0.489 0.54 0.977 1.132 1.44 1.723v0zM10.98 5.673c0.206-0.129 0.463-0.18 0.746-0.18 1.26 0 2.829 1.029 4.372 2.572-0.746 0.797-1.466 1.697-2.186 2.701-1.209 0.103-2.366 0.283-3.447 0.54-0.129-0.463-0.206-0.926-0.283-1.389-0.36-2.186-0.077-3.729 0.797-4.244v0zM9.643 19.228c-2.881-0.823-4.604-2.083-4.604-3.241 0-1.003 1.183-2.006 3.266-2.803 0.412-0.154 0.874-0.309 1.337-0.437 0.334 1.055 0.746 2.135 1.26 3.241-0.514 1.106-0.952 2.212-1.26 3.241zM10.183 22.057c0.077-0.437 0.18-0.9 0.283-1.389 1.080 0.232 2.238 0.412 3.447 0.54 0.694 1.003 1.44 1.903 2.186 2.701-1.543 1.517-3.112 2.572-4.372 2.572-0.283 0-0.514-0.051-0.746-0.18-0.875-0.489-1.157-2.058-0.797-4.244z"></path>
            </svg>

            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="5em"
              width="5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.8988601,24 C11.5774615,24 11.2582643,23.9156879 10.9764902,23.7534477 L8.04053599,22.0152536 C7.60202502,21.7700221 7.81599724,21.6832885 7.96062661,21.6333176 C8.54530789,21.4285911 8.66396121,21.3823625 9.28804684,21.0279435 C9.35364738,20.9905204 9.43950043,21.0037286 9.50664192,21.043353 L11.7621556,22.3817801 C11.843606,22.4258073 11.9591774,22.4258073 12.034684,22.3817801 L20.8291183,17.3054433 C20.9105686,17.2592148 20.9634012,17.1645563 20.9634012,17.0676964 L20.9634012,6.91942563 C20.9634012,6.81816306 20.9105686,6.72790729 20.8273572,6.677276 L12.0364451,1.60534197 C11.9549948,1.55691204 11.8471281,1.55691204 11.7656778,1.60534197 L2.97652685,6.677276 C2.89133421,6.72570593 2.83718075,6.82036442 2.83718075,6.91722427 L2.83718075,17.0654951 C2.83718075,17.1623549 2.89001339,17.254812 2.97366508,17.3010406 L5.3819532,18.6923003 C6.6895612,19.3461043 7.48865497,18.5756282 7.48865497,17.8007494 L7.48865497,7.78456021 C7.48865497,7.64147179 7.60092434,7.53140378 7.74401276,7.53140378 L8.85790105,7.53140378 C8.99658675,7.53140378 9.11105748,7.64147179 9.11105748,7.78456021 L9.11105748,17.8051521 C9.11105748,19.5486294 8.16006985,20.5502483 6.50684829,20.5502483 C5.99833407,20.5502483 5.59768651,20.5502483 4.4793955,19.9999083 L2.17236995,18.6702867 C1.60221764,18.3400826 1.25,17.7237018 1.25,17.0654951 L1.25,6.91722427 C1.25,6.25681619 1.60221764,5.64043532 2.17236995,5.314634 L10.9756096,0.236095888 C11.5325538,-0.0786986292 12.2722108,-0.0786986292 12.8247522,0.236095888 L21.6169851,5.31683536 C22.184936,5.64483804 22.539355,6.25901755 22.539355,6.91942563 L22.539355,17.0676964 C22.539355,17.7259031 22.184936,18.3400826 21.6169851,18.6702867 L12.8247522,23.7488248 C12.5429781,23.9117255 12.2237809,23.9953771 11.8979796,23.9953771 L11.8988601,24 Z M14.6153387,17.007159 C10.7673609,17.007159 9.9605624,15.2407875 9.9605624,13.7592721 C9.9605624,13.618385 10.0741526,13.5061157 10.2152598,13.5061157 L11.3511617,13.5061157 C11.4766392,13.5061157 11.5823045,13.5974721 11.6021167,13.7214087 C11.7738228,14.8788839 12.2845384,15.4626847 14.6113762,15.4626847 C16.4649216,15.4626847 17.2530085,15.0439859 17.2530085,14.0610786 C17.2530085,13.495329 17.0284698,13.0748692 14.1490906,12.7930951 C11.7408024,12.5553482 10.2526829,12.0248203 10.2526829,10.0986301 C10.2526829,8.32433374 11.7496079,7.26768082 14.2569572,7.26768082 C17.072497,7.26768082 18.4681594,8.24508478 18.6442682,10.3451825 C18.6508723,10.4178273 18.624456,10.4882709 18.576026,10.5411035 C18.5275961,10.5917348 18.4593539,10.6225539 18.3889104,10.6225539 L17.2464044,10.6225539 C17.127531,10.6225539 17.0240671,10.5389022 16.9998521,10.4244314 C16.7246821,9.20707921 16.0598713,8.81743844 14.2525545,8.81743844 C12.2295044,8.81743844 11.9939589,9.52187372 11.9939589,10.0502002 C11.9939589,10.690796 12.2713303,10.8779116 15.001017,11.2389347 C17.7042874,11.5977564 18.9876804,12.1040693 18.9876804,14.0038432 C18.9876804,15.9190266 17.3894929,17.0175054 14.6025708,17.0175054 L14.6153387,17.007159 Z"></path>
            </svg>

            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              version="1.1"
              viewBox="0 0 32 32"
              height="5em"
              width="5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M26.852 15.281l-9.848-9.848c-0.567-0.567-1.487-0.567-2.054 0l-2.045 2.045 2.594 2.594c0.603-0.204 1.294-0.067 1.775 0.413 0.483 0.483 0.619 1.181 0.41 1.786l2.5 2.5c0.605-0.209 1.303-0.074 1.786 0.41 0.675 0.675 0.675 1.769 0 2.444s-1.769 0.675-2.445 0c-0.508-0.508-0.633-1.254-0.376-1.88l-2.332-2.332v6.136c0.164 0.082 0.32 0.19 0.457 0.327 0.675 0.675 0.675 1.769 0 2.445-0.675 0.675-1.77 0.675-2.444 0-0.675-0.676-0.675-1.77 0-2.445 0.167-0.167 0.36-0.293 0.566-0.377v-6.193c-0.206-0.084-0.399-0.209-0.566-0.377-0.511-0.511-0.634-1.262-0.372-1.889l-2.557-2.558-6.753 6.752c-0.567 0.568-0.567 1.488 0 2.055l9.849 9.848c0.567 0.567 1.486 0.567 2.054 0l9.802-9.802c0.567-0.567 0.567-1.488 0-2.055z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
