/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import firebaseDb from "../firebase";
import "../index.css";

const ContactUs = () => {
  var [currentId, setCurrentId] = useState("");
  var [contactObjects, setContactObjects] = useState({});

  useEffect(() => {
    firebaseDb.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() != null)
        setContactObjects({
          ...snapshot.val(),
        });
      else setContactObjects({});
    });
  }, []);

  const addOrEdit = (obj) => {
    if (currentId === "")
      firebaseDb.child("contacts").push(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    else
      firebaseDb.child(`contacts/${currentId}`).set(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
  };

  return (
    <>
      <div
        className="segment ui"
        style={{
          border: "1px solid black",
          margin: "30px auto",
          width: "50%",
          boxShadow: "3px 3px 2px black",
        }}
      >
        <div
          className="bg-success"
          style={{
            border: "1px solid black",
            margin: "auto",
            width: "50%",
            boxShadow: "3px 3px 2px black",
          }}
        >
          <div className="container ui center aligned">
            <h1 className="display-6 text-white">Contact Us...</h1>
          </div>
        </div>

        <div className="container-md">
          <div
            className="mb-5"
            style={{
              //     border: "1px solid black",
              margin: " 20px auto",
              //     boxShadow: "3px 3px 2px black",
            }}
          >
            <ContactForm {...{ currentId, contactObjects, addOrEdit }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
