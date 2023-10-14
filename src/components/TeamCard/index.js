import TeamCardForMobile from "./MobileVersion";
import TeamCardForDesktop from "./DesktopVersion";

import { useDevice, MOBILE, DESKTOP } from "@/contexts/DeviceContext.js";

export default function TeamCard({ member }) {
  const { device } = useDevice();

  return (
    <>
      {device === MOBILE && <TeamCardForMobile member={member} />}
      {device === DESKTOP && <TeamCardForDesktop member={member} />}
    </>
  );
}
