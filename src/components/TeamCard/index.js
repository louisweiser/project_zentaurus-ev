import TeamCardForMobile from "./MobileVersion";
import TeamCardForDesktop from "./DesktopVersion";

import { useDevice, MOBIL, DESKTOP } from "@/contexts/DeviceContext.js";

export default function TeamCard({ member }) {
  const { device } = useDevice();

  return (
    <>
      {device === MOBIL && <TeamCardForMobile member={member} />}
      {device === DESKTOP && <TeamCardForDesktop member={member} />}
    </>
  );
}
