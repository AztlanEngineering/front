export type InputType = Record<string, unknown>

export type SectionType = {
  title                      :string;
  inputs                     :InputType[];
  hideBack?                  :boolean;
  hideNext?                  :boolean;
  overrideProgressPercentage?:number;
  // subtitle?                  :React.ReactNode;
}
