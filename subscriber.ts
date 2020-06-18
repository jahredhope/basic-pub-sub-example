import { createClient } from "redis";

const cat = process.argv[2] || "all";

const subscriber = createClient();

function onMessage(message: string) {
  try {
    console.log("message", JSON.parse(message));
  } catch (error) {
    console.error("sub", "parse", error, { message });
  }
}

subscriber.on("message", (channel, message) => onMessage(message));

subscriber.on("pmessage", (pattern, channel, message) => {
  onMessage(message);
});

console.log(`Subscribing to catagory ${cat}`);
if (cat === "all") {
  subscriber.psubscribe(`cat:*`);
} else {
  subscriber.subscribe(`cat:${cat}`);
}
