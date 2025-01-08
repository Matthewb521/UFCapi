import "./style.css";

async function getData() {
  const response = await fetch(
    "https://ufc-api-theta.vercel.app/mma-api/fighters?"
  );
  const data = await response.json();
  console.clear();
  console.log(data);
}
getData();
