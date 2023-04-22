// import React, { useState } from "react";
// // import {useSendEmailControlForm} from "./SendEmailControlForm";
// import { Button, IconButton, TextField } from "@mui/material";
// import { SearchOffOutlined } from "@mui/icons-material";

// export default function SendEmailForm () {
//     const PostContactForm = async (
//         // values,
//         // successCallback,
//         // errorCallback
//       ) => {
//         // do stuff
//         // if successful
//         if (true) {
//             console.log("email sent")
//             handleSuccess();
//             setValues(
//                 {email:""});
//         }
//         else {
//             console.log("something went wrong try again");
//             handleError();
//         }
//       };
//     const inputFieldValues = [
//         // {
//         //   name: "fullName",
//         //   label: "Full Name",
//         //   id: "my-name"
//         // },
//         {
//           name: "email",
//           label: "Email",
//           id: "my-email"
//         },
//         // {
//         //   name: "message",
//         //   label: "Message",
//         //   id: "my-message",
//         //   multiline: true,
//         //   rows: 10
//         // }
//       ];
//       const initialFormValues = {
//         //   fullName: "",
//           email: "",
//         //   message: "",
//           formSubmitted: false,
//           success: false
//         };
//     const [values, setValues] = useState(initialFormValues);
//     const [errors, setErrors] = useState({});
//     const [inputV, setInputV] = useState()
  
//     const validate = (fieldValues = values) => {
//       let temp = { ...errors };
  
//     //   if ("fullName" in fieldValues)
//     //     temp.fullName = fieldValues.fullName ? "" : "This field is required.";
  
//       if ("email" in fieldValues) {
//         temp.email = fieldValues.email ? "" : "This field is required.";
//         if (fieldValues.email)
//           temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
//             ? ""
//             : "Email is not valid.";
//       }
  
//     //   if ("message" in fieldValues)
//     //     temp.message =
//     //       fieldValues.message.length !== 0 ? "" : "This field is required.";
  
//       setErrors({
//         ...temp
//       });
//     };
  
//     const handleInputValue = (e) => {
//       const { name, value } = e.target;
//       setValues({
//         ...values,
//         [name]: value
//       });
//       validate({ [name]: value });
//     };
  
//     const handleSuccess = () => {
//     //   setValues({
//     //     ...initialFormValues,
//     //     formSubmitted: true,
//     //     success: true
//     //   });
//     setValues(initialFormValues);
//     };
  
//     const handleError = () => {
//       setValues({
//         ...initialFormValues,
//         formSubmitted: true,
//         success: false
//       });
//     };
  
//     const formIsValid = (fieldValues = values) => {
//       const isValid =
//         // fieldValues.fullName &&
//         fieldValues.email &&
//         // fieldValues.message &&
//         Object.values(errors).every((x) => x === "");
  
//       return isValid;
//     };
  
//     const handleFormSubmit = async (e) => {
//       e.preventDefault();
//       const isValid =
//         Object.values(errors).every((x) => x === "") && formIsValid();
//       if (isValid) {
//         await PostContactForm();
//       }
//     };
  

//   return (
//     <div style={{display:'flex', flexDirection:'row'}}>
//     <form autoComplete="off" onSubmit={handleFormSubmit}>
//       <IconButton>
//         <SearchOffOutlined/>
//       </IconButton>
//       {inputFieldValues.map((inputFieldValue) => {
//         return (
//           <TextField
//             // key={index}
//             onChange={handleInputValue}
//             onBlur={handleInputValue}
//             name={inputFieldValue.name}
//             label={inputFieldValue.label}
//             error={errors[inputFieldValue.name]}
//             multiline={inputFieldValue.multiline ?? false}
//             // fullWidth
//             rows={inputFieldValue.rows ?? 1}
//             autoComplete="none"
//             {...(errors[inputFieldValue.name] && {
//               error: true,
//               helperText: errors[inputFieldValue.name]
//             })}
//           />
//         );
//       })}
//       <Button
//         // variant="contained"
//         type="submit"
//         // color="secondary"
//         disabled={!formIsValid()}
//       >
//         Send Message
//       </Button>
//     </form>
//     </div>
//   );
// };