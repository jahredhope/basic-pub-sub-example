import { createClient } from "redis";
import { name, internet } from "faker";

const publisher = createClient();

/**
 * Sends a message with a random id, name and email to a random category
 * Categories are an index from 1 - 9
 */
function send() {
  const id = Math.ceil(Math.random() * 9999999);
  const cat = Math.ceil(Math.random() * 9);
  const message = {
    id,
    cat,
    name: name.findName(),
    email: internet.email(),
  };
  console.log("publish", message);
  publisher.publish(`cat:${cat}`, JSON.stringify(message));
}

setInterval(send, 200);
