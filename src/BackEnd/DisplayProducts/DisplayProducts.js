import { useState, useEffect } from "react";

function DisplayProducts() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch the data from the Firebase Realtime Database using the REST API
    fetch("https://react-medical-care-default-rtdb.firebaseio.com/product.json")
      .then((response) => response.json())
      .then((data) => {
        // Convert the data from an object to an array
        const messageArray = Object.keys(data).map((key) => {
          return {
            ...data[key],
            id: key,
          };
        });
        setMessages(messageArray);
      })
      .catch((error) => {
        console.error("Error fetching messages:", error);
      });
  }, []);

  return (
    <div>
      <h2>Messages</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr key={message.title}>
              <td>{message.type}</td>
              <td>{message.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default DisplayProducts;
