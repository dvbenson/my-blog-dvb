import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IconProps {
  className?: string;
  icon: IconProp;
}

export default function Icon({ icon, className }: IconProps) {
  return <FontAwesomeIcon icon={icon} className={className} />;
}
