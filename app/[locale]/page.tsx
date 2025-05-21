import { getLocale } from "next-intl/server";
import { getAllServices } from "../features/services/actions/get-all-services";

export const metadata = {
  title: "Test",
};

export default async function Page() {
  const locale = await getLocale();
  const services = await getAllServices(locale);
  return (
    <div>
      <span className="font-sans">test</span>
      <span className="font-oxanium">test</span>
    </div>
  );
}
