import { createClient } from "redis";
import { name, internet } from "faker";

const publisher = createClient();

function send() {
  const id = Math.ceil(Math.random() * 9999999);
  const cat = Math.ceil(Math.random() * 10);
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
