import { library } from "@fortawesome/fontawesome-svg-core";
import {
  IconDefinition,
  IconPrefix,
  IconPack,
} from "@fortawesome/fontawesome-common-types";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import * as icons from "./icon-import";

library.add(...icons);
