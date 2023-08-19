import { clsx } from "@/lib/utils";
import { Basic } from "next/font/google";
import Image from "next/image";

interface NitroPackagesProps {
  plan: string;
  price: number;
  image: string;
  features: {
    id: string;
    icon: React.JSX.Element;
    text: string;
  }[];
}

function NitroPackages({ plan, price, image, features }: NitroPackagesProps) {
  return (
    <div
      className={clsx(
        "flex h-[400px] w-[400px] basis-2/4 flex-col justify-between rounded-xl bg-gradient-to-r p-5",
        plan === "basic" && "from-blue-500 to-cyan-500",
        plan === "normal" && "from-purple-400 to-pink-300",
      )}
    >
      <div>
        <div className="flex justify-between">
          <div>
            <div className="text-4xl font-extrabold uppercase italic">
              Nitro
            </div>
            <div className="text-sm font-bold uppercase italic">
              {plan.toLowerCase() === "basic" ? "basic" : null}
            </div>
            <div className="">${price}/month</div>
          </div>
          <Image src={image} width={100} height={100} alt="" />
        </div>
        <div className="mt-2 flex flex-col gap-2">
          {features.map((feature) => (
            <div key={feature.id} className="flex items-center gap-2">
              <div className="text-xl">{feature.icon}</div>
              <div className="text-sm">{feature.text}</div>
            </div>
          ))}
        </div>
      </div>

      <button className="text-cover bottom-0 w-full rounded bg-white px-10 py-2 text-sm text-primary">
        Subscribe
      </button>
    </div>
  );
}

export default NitroPackages;
