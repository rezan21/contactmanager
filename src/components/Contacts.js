import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: "John Doe",
          email: "john@gmail.com",
          phone: "2222-44444-2222"
        },
        {
          id: 2,
          name: "karen williams",
          email: "karen@gmail.com",
          phone: "111-222-333"
        },
        {
          id: 3,
          name: "henry johnson",
          email: "henry@gmail.com",
          phone: "111-111-111"
        }
      ]
    };
  }
  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact />
        ))}
      </div>
    );
  }
}

export default Contacts;
