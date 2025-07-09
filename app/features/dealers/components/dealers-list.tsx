import { TextAnimate } from "../../../components/ui";
import { Dealer } from "../types";
import { DealerCard } from "./dealer-card";

interface DealersListProps {
  dealers: Dealer[];
  locale: string;
}

export function DealersList({ dealers }: DealersListProps) {
  return (
    <section className="flex flex-col items-start justify-start py-10 px-5 bg-white">
      <TextAnimate
        as={"h2"}
        animation="fadeIn"
        by="text"
        className="xl:text-52/tight md:text-4xl/tight text-3xl font-oxanium font-bold uppercase text-zinc-900 mb-8"
      >
        Dealers
      </TextAnimate>

      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {dealers.map((dealer) => (
            <DealerCard key={dealer.id} dealer={dealer} />
          ))}
        </div>
      </div>
    </section>
  );
}
