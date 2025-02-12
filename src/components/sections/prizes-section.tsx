import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function PrizesSection() {
  return (
    <section className="flex flex-col items-center gap-4 p-5 text-center">
      <h2 className="text-xl font-bold">Men hva med premiene?</h2>
      <ol className="flex flex-col gap-4 md:grid md:grid-cols-4 md:gap-2">
        <li className="">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-xl">1. Plass</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={"/laptop-prize.png"}
                width={200}
                height={200}
                alt={"Acer Predator Helios Neo 16"}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              Gaming laptop til over{" "}
              <span className="font-bold text-nowrap">20 000 kr</span>
            </CardContent>
          </Card>
        </li>

        <li className="">
          <Card className="flex h-full flex-col">
            <CardHeader>
              <CardTitle className="text-xl">2. Plass</CardTitle>
            </CardHeader>
            <CardContent>
              Premie til{" "}
              <span className="font-bold text-nowrap">10 000 kr</span>
            </CardContent>
          </Card>
        </li>

        <li className="">
          <Card className="flex h-full flex-col">
            <CardHeader>
              <CardTitle className="text-xl">3. Plass</CardTitle>
            </CardHeader>
            <CardContent>
              Premie til <span className="font-bold text-nowrap">5000 kr</span>
            </CardContent>
          </Card>
        </li>

        <li>
          <Card className="flex h-full flex-col">
            <CardHeader>
              <CardTitle className="text-xl">Tilleggspremier</CardTitle>
            </CardHeader>
            <CardContent>
              3 premier til{" "}
              <span className="text-nowrap">
                <span className="font-bold text-nowrap">2000 kr</span> hver
              </span>
            </CardContent>
          </Card>
        </li>
      </ol>
    </section>
  );
}
