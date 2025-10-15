import { IconProps } from "@/shared/types";

export const BoardIcon = ({
  className,
  title = "icon",
  ...rest
}: IconProps) => {
  return (
    <svg
      focusable="false"
      data-prefix="fas"
      data-icon="columns"
      className={className}
      role="menu"
      aria-hidden={title ? undefined : true}
      aria-label={title ?? undefined}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path
        fill="currentColor"
        d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z"
      ></path>
    </svg>
  );
};
