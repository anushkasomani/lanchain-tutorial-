import { ChatGroq } from "@langchain/groq";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

const model = new ChatGroq({
  model: "mixtral-8x7b-32768",
  temperature: 0
});

const messages = [
  new SystemMessage("Translate the following from English into Italian"),
  new HumanMessage("my name is anushka!"),
];

const res= await model.invoke(messages);
console.log(res)
