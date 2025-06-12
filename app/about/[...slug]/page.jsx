export default async function CatchAllRoutes(props) {
  const slug = (await props.params).slug;
  console.log(slug);

  return (
    <div>
      <h1>Catch All Routes</h1>

      <ul>
        {slug.map((route, index) => {
          <li key={index}>{route}</li>;
        })}
      </ul>
    </div>
  );
}
