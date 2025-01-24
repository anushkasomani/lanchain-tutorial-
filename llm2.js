import { ChatGroq } from "@langchain/groq";
import { ChatPromptTemplate } from "@langchain/core/prompts";

const model = new ChatGroq({
    model: "mixtral-8x7b-32768",
    temperature: 0
})

const systemTemplate = "Translate the following sentence in english to {language}"

const promptTemplate = ChatPromptTemplate.fromMessages([
    ["system", systemTemplate],
    ["user", "{text}"],
  ]);

const promptValue = await promptTemplate.invoke({
    language: "italian",
    text: "hi!",
  });

const response = await model.invoke(promptValue);
console.log(`${response.content}`);