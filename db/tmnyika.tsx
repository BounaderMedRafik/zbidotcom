import { HfInference } from "@huggingface/inference";

const inference = new HfInference("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");

export const result = await inference.textClassification({
  model: "haraouikouceil/llama-3-8b-Instruct-bnb-4bit-aiaustin-demo",
  inputs: "what is the minimum score for medical university in algeria 2022",
});

console.log(result);
