/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import firebaseDb from "../firebase";
import "../index.css";

const Contacts = () => {
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

  const onDelete = (id) => {
    if (window.confirm("Are you sure to delete this record?")) {
      firebaseDb.child(`contacts/${id}`).remove((err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    }
  };

  return (
    <>
      <div className="jumbotron jumbotron-fluid bg-primary">
        <div className="container">
          <h1 className="display-4 text-white">BE A DONOR...</h1>
        </div>
      </div>

      <div className="container-md">
        <div className="mb-5">
          <ContactForm {...{ currentId, contactObjects, addOrEdit }} />
        </div>
        <h1>Available Plasma donors</h1>

        <div className="table-responsive availablePersons">
          <table className="table table-borderless table-stripped table-content">
            <thead className="thead-light">
              <tr>
                <th>Full Name</th>
                <th>Age</th>
                <th>Blood Group</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(contactObjects).map((id) => {
                return (
                  <tr key={id}>
                    <td className="td">{contactObjects[id].fullName}</td>
                    <td className="td">{contactObjects[id].age}</td>
                    <td className="td">{contactObjects[id].bloodgrp}</td>
                    <td className="td">{contactObjects[id].mobile}</td>
                    <td className="td">{contactObjects[id].address}</td>
                    <td>
                      <a
                        className="btn text-primary"
                        onClick={() => {
                          setCurrentId(id);
                        }}
                      >
                        <i className="fas fa-pencil-alt"></i>
                      </a>
                      <a
                        className="btn text-danger"
                        onClick={() => {
                          onDelete(id);
                        }}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Contacts;
