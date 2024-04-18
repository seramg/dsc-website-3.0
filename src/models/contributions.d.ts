import Contributor from "./contributors";

export default interface Contribution {
  contributor: Contributor;
  time: string;
  changes: string[];
  type: string;
}
