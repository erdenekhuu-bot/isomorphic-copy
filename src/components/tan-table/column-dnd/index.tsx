import { defaultColumns } from "./column";
import MainTable from "../../table/main-table";
import WidgetCard from "../../cards/widget-card";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { Person, defaultData } from "../../../data/tan-table-data";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";
