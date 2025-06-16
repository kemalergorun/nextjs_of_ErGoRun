// To make a page static use following code:
export const dynamic = "force-static";
// export const revalidate = false

export default async function CatchAllRoutes(props) {
  const slug = (await props.params).slug;

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
