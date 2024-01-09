import React from "react";

type TPropsButton = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button(props: TPropsButton) {
  return (
    <button
      className={`bg-slate-500 text-white px-4 py-2 rounded-md`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
