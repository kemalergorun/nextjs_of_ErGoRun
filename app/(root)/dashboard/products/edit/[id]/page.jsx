export default async function DashboardEditProductWithId({ params }) {
  const id = (await params).id;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "6rem",
      }}
    >
      Dashboard Edit Product With Id <br /> {id}
    </div>
  );
}
