import { PropsWithChildren } from "react";
import GuestHeader from "./guest-header";

const GuestLayout = (props: PropsWithChildren) => {
  return (
    <>
      <GuestHeader />
      <main className="pt-[80px]">{props.children}</main>
    </>
  );
};

export default GuestLayout;
