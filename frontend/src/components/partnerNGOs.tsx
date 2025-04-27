import Image from "next/image"

export function PartnerNGOs() {
  const mockOngs = [
    {
      id: 1,
      image: "01.png",
      name: "Ração Golden Fórmula Mini Bits",
    },
    {
      id: 2,
      image: "02.png",
      name: "Ração Golden Fórmula Mini Bits",
    },
    {
      id: 3,
      image: "03.png",
      name: "Ração Golden Fórmula Mini Bits",
    },
    {
      id: 4,
      image: "04.png",
      name: "Ração Golden Fórmula Mini Bits",
    },
  ]

  return (
    <div className="p-5 m-auto max-w-screen-xl">
      <h1 className="text-amber-900 text-2xl font-bold ">ONGs Parceiras</h1>

      <div className="flex items-center justify-start mt-5 space-x-8">
        {mockOngs.map((ong) => (
          <div key={ong.id}>
            <Image
              src={`/ongs/${ong.image}`}
              alt={ong.name}
              width={100}
              height={100}
              className="rounded-full object-cover"
              title={ong.name}
            />
          </div>
        ))}
      </div>

    </div>
  )
}