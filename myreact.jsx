export const title = "Welcome to my page";
export const layout = "/layout.njk";

export default (data) => (
  <>
  state my _data.yml
  <br/>
  {data.name} - {data.age} - {data.address}

    <h1>MY JSX IS WORK</h1>
    <h1>{data.title}</h1>
    <p>This is my first post using lume. I hope you like it!</p>
  </>
);