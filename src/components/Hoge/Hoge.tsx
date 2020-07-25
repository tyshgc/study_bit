import * as React from "react";

export default function Hoge({ text }: IProps) {
  return (
    <div>
      <strong>Hoge!!</strong>
      <p data-testid="text">{text}</p>
    </div>
  );
}

interface IProps {
  text?: string;
}
