import SignIn1 from "@/components/form/FormSignIn1";
import SignIn2 from "@/components/form/FormSignIn2";
import Header from "@/components/navbar/Header";

export default function Signin() {
  return (
    <div className="flex flex-col min-h-screen bg-black font-sans ">
      <Header />
      <main className="flex min-h-screen w-full flex-col items-center justify-center">
        <div className="flex flex-row gap-62.5 items-center justify-center">
          <div className="flex flex-col gap-8 w-132.5">
            {/* Nom du site */}
            <div className="flex flex-row items-start justify-start gap-0.5">
              <h1 className="font-extrabold text-5xl text-white">
                Absolute Stream
              </h1>
              <p className="py-0.5 px-1 text-xs bg-stream/20 text-stream rounded">
                Bêta
              </p>
            </div>
            {/* Description */}
            <p className="font-semibold text-lg text-[#A1A1A1]">
              Enregistrez, notez et partagez vos films et séries préférés.
            </p>
          </div>
          {/* Card d'inscription */}
          <div className="bg-[#0F0F0F]/80 flex flex-col p-8 gap-8 rounded-2xl border border-[#262626] w-132.5">
            <div className="flex flex-col gap-1.5">
              <h4 className="font-semibold text-base text-white">
                Créez votre compte Absolute Stream
              </h4>
              <p className="text-[#A1A1A1] font-regular text-sm">
                N&apos;attendez plus, rejoignez-nous dès aujourd&apos;hui !
              </p>
            </div>
            {/* importation des components d'inscription */}
            <SignIn1 />
            {/* <SignIn2 /> */}
          </div>
        </div>
      </main>
    </div>
  );
}
