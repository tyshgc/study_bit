import * as React from "react";
export default function Hoge({ text }) {
    return (React.createElement("div", null,
        React.createElement("strong", null, "Hoge!!"),
        React.createElement("p", { "data-testid": "text" }, text)));
}
