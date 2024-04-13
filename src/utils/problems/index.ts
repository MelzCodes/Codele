import { Problem } from "../types/problem";
import { reverseLinkedList } from "./reverse-linked-list";
import { twoSum } from "./two-sum";

interface problemMap {
  [key: string]: Problem;
}

export const problems: problemMap = {
  "two-sum": twoSum,
  "reverse-linked-list": reverseLinkedList,
};
