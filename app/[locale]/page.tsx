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
      <ul>
        {services.map((service) => (
          <li key={service.title}>
            <h2>{service.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
