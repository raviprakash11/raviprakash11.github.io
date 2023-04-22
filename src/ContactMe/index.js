import { Box } from "@mui/material";
import React, { useState } from "react";
import "../layout/LayoutPage.scss";
import CustomContact from "../component/CustomContact";

export default function ContactMePage({lightTurnOn}) {
  const [renderForm, setRenderForm] = useState(false);
  const handleRenderForm = () => {
    window.open(
      `https://outlook.office.com/mail/0/deeplink/compose?subject=&body=&to="ravi.p.prakash@hotmail.com`,
      "_blank",
      "noopener,noreferrer"
    );
    // setRenderForm(true);
  };
  const closeRenderForm = () => {
    setRenderForm(false);
  };
  return (
    <section style={{ width: "80%", minHeight: "80vh", height: "80%" }}>
      <div style={{ paddingBottom: "2.8rem" }}>
        <div
          style={{
            fontSize: "6vh",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div>Get In Touch</div>
          <Box
            style={{
              marginLeft: "20px",
              marginTop: "26px",
              height: "2px",
              width: "30%",
            }}
            className={!lightTurnOn ? "light-background" : "night-background"}
          ></Box>
        </div>
      </div>
      <div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {!renderForm && 
          <div
            style={{
              width: "55%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <div style={{ marginTop: "6vh" }}>
              Send me a message! I'm currently taking on new freelancing clients.
              I look forward to working with you. You may receive a email back 
              from me with 12 - 24 hrs.
            </div>
            <div
              style={{
                // border: "1px solid #fff",
                padding: "1rem",
                marginTop: "16vh",
                cursor: "pointer",
              }}
              className={lightTurnOn ? "about-me-border-night" : "about-me-border-day"}
              onClick={handleRenderForm}
            >
              Chat with Me
            </div>
          </div>}
        </div>
        {renderForm && <CustomContact closeRenderForm={closeRenderForm}/> }
      </div>
    </section>
  );
}
// import { Box, Button } from "@mui/material";
// import React from "react";
// // import emailjs from "@emailjs/browser";
// import "./ContactMe.scss";

// const ContactMePage = function () {
// //   const form = useRef();
// //   const sendEmail = (e) => {
// //     e.preventDefault();

// //     emailjs
// //       .sendForm(
// //         process.env.REACT_APP_EMAILJS_SERVICE_ID,
// //         process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
// //         form.current,
// //         process.env.REACT_APP_EMAILJS_USER_ID
// //       )
// //       .then(
// //         (result) => console.log(result.text),
// //         (error) => console.log(error.text)
// //       );

// //     e.target.reset();
// //   };
//   return (
//     <div className="contact-page">
//       <div className="main-container">
//         <div style={{ paddingBottom: "2.8rem" }}>
//         <div
//           style={{
//             fontSize: "6vh",
//             display: "flex",
//             flexDirection: "row",
//             alignItems: "center",
//           }}
//         >
//           <div>Contact Me</div>
//           <Box
//             style={{
//               marginLeft: "20px",
//               marginTop: "26px",
//               height: "2px",
//               width: "30%",
//               backgroundColor: "#fff",
//             }}
//           ></Box>
//           </div>
//           <form
//         //   ref={form} onSubmit={sendEmail}
//           >
//             <div style={{ marginLeft: "4vw" }}>
//               <div className="textfield-de" style={{ paddingTop: "4vh" }}>
//                 <input
//                   placeholder="Enter name"
//                   type="text"
//                   name="user_name"
//                   style={{
//                     padding: ".6rem",
//                     width: "28vw",
//                     borderColor: "black",
//                     color: "black",
//                     border: "1px solid black",
//                     borderRadius: "8px",
//                     backgroundColor: '#D7DDC8'
//                   }}
//                 />
//               </div>
//               <div className="textfield-de" style={{ paddingTop: "2vh" }}>
//                 <input
//                   placeholder="Enter email"
//                   type="text"
//                   name="user_email"
//                   style={{
//                     padding: ".6rem",
//                     width: "28vw",
//                     borderColor: "black",
//                     color: "black",
//                     border: "1px solid black",
//                     borderRadius: "8px",
//                     backgroundColor: '#D7DDC8'
//                   }}
//                 />
//               </div>
//               <div className="textfield-de" style={{ paddingTop: "2vh" }}>
//                 <input
//                   placeholder="Enter message"
//                   name="message"
//                   style={{
//                     padding: ".6rem",
//                     width: "28vw",
//                     borderColor: "black",
//                     color: "black",
//                     border: "1px solid black",
//                     borderRadius: "8px",
//                     backgroundColor: '#D7DDC8'
//                   }}
//                 />
//               </div>
//               <div>
//                 <div className="btn-group">
//                   <div className="btn-send">
//                     <Button className="btn-desend" type="submit">
//                       Send
//                     </Button>
//                     <Button className="btn-desend" type="submit">
//                       Cancel
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </form>
//         </div>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             flexDirection: "column",
//           }}
//         >
//           <div>
//             <div className="cn-dds-app">
//               <div>
//               🏢{/* <LocationOnIcon className="icon-dds-app" /> */}
//               </div>
//               <div>
//                 <div className="heading-app-name">Our Location</div>
//                 <div className="content-name">Bengaluru, India</div>
//               </div>
//             </div>

//             <div style={{ paddingTop: "2vh" }} className="cn-dds-app">
//               <div>
//               📩 {/* <MailIcon className="icon-dds-app" /> */}
//               </div>
//               <div>
//                 <div className="heading-app-name">Email Address</div>
//                 <div className="content-name">mail@wareong.com</div>
//               </div>
//             </div>

//             <div style={{ paddingTop: "2vh" }} className="cn-dds-app">
//               <div>
//               📞{/* <SmartphoneIcon className="icon-dds-app" /> */}
//               </div>
//               <div>
//                 <div className="heading-app-name">Phone Number</div>
//                 <div className="content-name">+91 (952) 524 XXXX</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactMePage;
