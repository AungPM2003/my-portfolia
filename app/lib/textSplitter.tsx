type textSplitterProps = {
  text: string;
  startpoint: number;
  endpoint: number;
  replaceItem: string;
};
export default function textSplitter({
  text,
  startpoint,
  endpoint,
  replaceItem,
}: textSplitterProps) {
  if (!text) return "";
  const splittedText =
    text?.split(" ").slice(startpoint, endpoint).join(" ") + replaceItem;
  return splittedText;
}
