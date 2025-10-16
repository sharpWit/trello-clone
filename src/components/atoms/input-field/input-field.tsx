import styles from "./input-field.module.scss";

interface InputFieldProps {
  type?: "text" | "email" | "password" | "number" | "tel";
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
  className?: string;
}

const InputField = ({
  type = "text",
  placeholder,
  value,
  defaultValue,
  onChange,
  onKeyDown,
  onFocus,
  onBlur,
  disabled = false,
  readOnly = false,
  required = false,
  name,
  id,
  className = "",
}: InputFieldProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      name={name}
      id={id}
      className={`${styles.inputElement} ${className}`}
    />
  );
};

export default InputField;
