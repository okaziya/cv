import { PrimaryButton } from "./Button.styles";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <PrimaryButton className="btn btn-primary btn-lg ml-1">
      {children}
    </PrimaryButton>
  );
}
