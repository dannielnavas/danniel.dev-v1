import type { INumbers } from "@/shared/models/numbers.interface";

export async function getNumbers(): Promise<INumbers[]> {
  const url = "https://backend-danniel-dev.vercel.app/statistic";
  const response = await fetch(url);
  const numbers = await response.json();
  console.log(numbers);
  return numbers;
}
