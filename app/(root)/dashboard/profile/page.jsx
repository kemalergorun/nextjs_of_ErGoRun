// import ChildOfClientSide from "@/components/ChildOfClientSide";
// import WrappedComponent from "@/components/WrappedComponent";

export default function DashboardProfilePage() {
  return (
    <div>
      <h1>Dashboard Profile Page</h1>
      {/* We cannot use it like that because WrappedComponent is server side and it is not affected from ChildOfClientSide components "use client" */}
      {/* <ChildOfClientSide>
        <WrappedComponent />
      </ChildOfClientSide> */}
    </div>
  );
}
