import { PiCaretDownBold } from "react-icons/pi";
import cn from "../../utils/class-names";
import { ForwardedRef, forwardRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import BulletIcon from "./bullet-icon";
import { AiFillCaretRight } from "react-icons/ai";
import NavMenu from "../nav-menu/nav-menu";
import {
  DropdownItemType,
  LithiumMenuItemsKeys,
  lithiumMenuItems,
} from "./lithium-menu-items";
import { useLocation } from "react-router-dom";
