import { Page, PageContent, PageHeader } from "@/components/layout/page";
import { BsStars, BsSuitDiamondFill } from "react-icons/bs";
import { AiFillGift } from "react-icons/ai";
import { GiAzulFlake } from "react-icons/gi";
import { BiSolidUpvote } from "react-icons/bi";
import { CiFaceSmile } from "react-icons/ci";
import { PiIdentificationCardFill } from "react-icons/pi";
import { FaDesktop } from "react-icons/fa";

import NitroPackages from "@/components/islets/dm-nitro/packages";

export default function NitroPage() {
  const features_basic = [
    {
      id: 654654,
      icon: <BiSolidUpvote />,
      text: "50MB uploads",
    },
    {
      id: 65434654,
      icon: <CiFaceSmile />,
      text: "Custom emoji anywhere",
    },
    {
      id: 65465984,
      icon: <GiAzulFlake />,
      text: "Special Nitro badge on your profile",
    },
    {
      id: 65444654,
      icon: <CiFaceSmile />,
      text: "2 Super Reactions per week",
    },
  ];

  const features_nitro = [
    {
      id: 234,
      icon: <BiSolidUpvote />,
      text: "500MB uploads",
    },
    {
      id: 45646,
      icon: <CiFaceSmile />,
      text: "Custom emoji anywhere",
    },
    {
      id: 78987,
      icon: <FaDesktop />,
      text: "HD video streaming",
    },
    {
      id: 7978,
      icon: <CiFaceSmile />,
      text: "5 Super Reactions per week",
    },
    {
      id: 456,
      icon: <BsSuitDiamondFill />,
      text: "2 Server Boosts",
    },
    {
      id: 76543,
      icon: <PiIdentificationCardFill />,
      text: "Custom profiles and more!",
    },
  ];

  return (
    <Page>
      <PageHeader>
        <div className="flex gap-4">
          <div className="flex flex-none items-center gap-2 text-sm font-semibold">
            <BsStars className="text-gray-500" fontSize={22} />
            Nitro
          </div>
        </div>
      </PageHeader>
      <PageContent className="flex items-center gap-6">
        <div className="mt-[6%] text-5xl font-extrabold">
          Unleash More Fun with Nitro
        </div>
        <div>Plans start at only $2.99/month. Cancel anytime</div>
        <div className="flex gap-5">
          <button className="text-cover flex items-center gap-1 rounded bg-white px-10 py-3 text-sm text-primary">
            <GiAzulFlake className="text-lg" /> Subscribe
          </button>
          <button className="text-cover flex items-center gap-1 rounded bg-transparent px-10 py-3 text-sm text-white ring-1 ring-white">
            <AiFillGift className="text-lg" /> Gift Nitro
          </button>
        </div>
        <div className="flex gap-2">
          <NitroPackages
            plan="basic"
            price={2.99}
            image="/images/nitro.png"
            features={features_basic}
          />

          <NitroPackages
            plan="normal"
            price={9.99}
            image="/images/nitro.png"
            features={features_nitro}
          />
        </div>
      </PageContent>
    </Page>
  );
}
