import { useTranslations } from "next-intl";
import { Button } from "../components/ui";

export default function Home() {
  const t = useTranslations("HomePage");
  return <Button>{t("title")}</Button>;
}
