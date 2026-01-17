import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export default function SignIn2() {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="" className="font-medium text-sm text-white">
          Name
        </label>
        <Input type="text" placeholder="Votre nom" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="" className="font-medium text-sm text-white">
          Pseudo
        </label>
        <Input type="text" placeholder="Votre pseudo (ex: Gamer123)" />
        <p className="text-sm text-[#A1A1A1]">
          ce pseudo sera utilisé pour vous identifier sur la plateforme
        </p>
      </div>
      <Button variant="form">Créez votre compte</Button>
    </form>
  );
}
